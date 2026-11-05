'use client';
import { useRef, useCallback, useState, useEffect } from 'react';
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/react';
import ImageToolbar from '../ImageToolbar';
import type { ImageAlign } from './ResizableImage';
import { nodeWrapper, imgWrap, nodeImg, nodeImgSelected, resizeHandle, resizeHandleActive } from '../editorStyles';

const MIN_WIDTH = 60;

export function ResizableImageView(props: NodeViewProps) {
  const { node, updateAttributes, deleteNode, selected, editor, getPos } = props;
  const { src, alt, width, href } = node.attrs as {
    src: string;
    alt: string | null;
    width: string | null;
    href: string | null;
    align: ImageAlign;
  };
  const align: ImageAlign = (node.attrs.align as ImageAlign) || 'left';

  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [resizing, setResizing] = useState(false);

  const alignStyle =
    align === 'center'
      ? { marginLeft: 'auto', marginRight: 'auto' }
      : align === 'right'
      ? { marginLeft: 'auto', marginRight: 0 }
      : { marginLeft: 0, marginRight: 'auto' };

  const startResize = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const img = imgRef.current;
      const container = wrapperRef.current?.parentElement;
      if (!img || !container) return;

      const startX = e.clientX;
      const startWidth = img.offsetWidth;
      const maxWidth = container.clientWidth;
      setResizing(true);

      const onMove = (ev: MouseEvent) => {
        const next = Math.round(
          Math.min(maxWidth, Math.max(MIN_WIDTH, startWidth + (ev.clientX - startX)))
        );
        updateAttributes({ width: `${next}px` });
      };
      const onUp = () => {
        setResizing(false);
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    },
    [updateAttributes]
  );

  const [, force] = useState(0);
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const handler = () => force((n) => n + 1);
    img.addEventListener('load', handler);
    return () => img.removeEventListener('load', handler);
  }, []);

  return (
    <NodeViewWrapper ref={wrapperRef} className={nodeWrapper} data-align={align}>
      <span className={imgWrap} style={alignStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt ?? ''}
          style={{ width: width ?? undefined }}
          className={`${nodeImg} ${selected ? nodeImgSelected : ''}`}
          draggable={false}
        />

        {selected && (
          <>
            <span
              onMouseDown={startResize}
              role="presentation"
              className={`${resizeHandle} ${resizing ? resizeHandleActive : ''}`}
            />
            {imgRef.current && (
              <ImageToolbar
                editor={editor}
                getPos={getPos}
                image={imgRef.current}
                wrapperRef={wrapperRef}
                attrs={{ alt: alt ?? '', href: href ?? '', align }}
                onUpdate={updateAttributes}
                onDelete={deleteNode}
              />
            )}
          </>
        )}
      </span>
    </NodeViewWrapper>
  );
}
