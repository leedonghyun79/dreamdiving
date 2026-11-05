'use client';
import { useState, useRef, useEffect } from 'react';
import type { Editor } from '@tiptap/react';
import {
  RefreshCw, AlignLeft, AlignCenter, AlignRight, Trash2,
  Link as LinkIcon, FileText, AlignJustify, X,
} from 'lucide-react';
import { toast } from 'sonner';
import type { ImageAlign } from './image/ResizableImage';
import { uploadImage } from './uploadImage';
import animStyles from './editorAnim.module.css';
import {
  imgBar, imgBtn, imgBtnActive, imgDivider, relativeBox, popMenu, popPanel, menuItem,
  popLabel, popInput, popRow, popCancel, popSave, linkRemove,
} from './editorStyles';

interface Props {
  editor: Editor;
  getPos: () => number | undefined;
  image: HTMLImageElement;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  attrs: { alt: string; href: string; align: ImageAlign };
  onUpdate: (attrs: Record<string, unknown>) => void;
  onDelete: () => void;
}

export default function ImageToolbar({ image, wrapperRef, attrs, onUpdate, onDelete }: Props) {
  const [activeMenu, setActiveMenu] = useState<'align' | 'alt' | 'link' | null>(null);
  const [altText, setAltText] = useState(attrs.alt);
  const [linkUrl, setLinkUrl] = useState(attrs.href);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [busy, setBusy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!image || !wrapperRef.current) return;
    const imgRect = image.getBoundingClientRect();
    const wrapRect = wrapperRef.current.getBoundingClientRect();
    setPos({
      top: imgRect.top - wrapRect.top - 52,
      left: imgRect.left - wrapRect.left + imgRect.width / 2,
    });
  }, [image, wrapperRef, attrs.align]);

  const handleReplace = () => fileInputRef.current?.click();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setBusy(true);
    try {
      const url = await uploadImage(file);
      onUpdate({ src: url });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : '이미지 교체 실패');
    } finally {
      setBusy(false);
    }
  };

  const handleAlign = (align: ImageAlign) => {
    onUpdate({ align });
    setActiveMenu(null);
  };
  const handleAltSave = () => {
    onUpdate({ alt: altText });
    setActiveMenu(null);
  };
  const handleLinkSave = () => {
    onUpdate({ href: linkUrl || null });
    setActiveMenu(null);
  };
  const toggle = (menu: 'align' | 'alt' | 'link') =>
    setActiveMenu((prev) => (prev === menu ? null : menu));

  const divider = <span className={imgDivider} />;

  return (
    <div
      ref={toolbarRef}
      style={{ top: pos.top, left: pos.left }}
      onMouseDown={(e) => e.preventDefault()}
      className={imgBar}
    >
      <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleFileChange} />

      <button className={imgBtn} onClick={handleReplace} disabled={busy} title="이미지 교체">
        <RefreshCw size={14} className={busy ? animStyles.spin : ''} />
        <span>교체</span>
      </button>

      {divider}

      <div className={relativeBox}>
        <button
          className={`${imgBtn} ${activeMenu === 'align' ? imgBtnActive : ''}`}
          onClick={() => toggle('align')}
          title="정렬"
        >
          <AlignJustify size={14} />
          <span>정렬</span>
        </button>
        {activeMenu === 'align' && (
          <div className={popMenu}>
            {([['left', AlignLeft, '왼쪽'], ['center', AlignCenter, '가운데'], ['right', AlignRight, '오른쪽']] as const).map(
              ([val, Icon, label]) => (
                <button key={val} className={menuItem} onClick={() => handleAlign(val)}>
                  <Icon size={13} /> {label}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {divider}

      <button className={imgBtn} onClick={() => onDelete()} title="삭제">
        <Trash2 size={14} />
        <span>삭제</span>
      </button>

      {divider}

      <div className={relativeBox}>
        <button
          className={`${imgBtn} ${activeMenu === 'alt' ? imgBtnActive : ''}`}
          onClick={() => toggle('alt')}
          title="대체 텍스트"
        >
          <FileText size={14} />
          <span>Alt</span>
        </button>
        {activeMenu === 'alt' && (
          <div className={popPanel}>
            <p className={popLabel}>대체 텍스트 (Alt)</p>
            <input
              className={popInput}
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="이미지 설명"
              onKeyDown={(e) => e.key === 'Enter' && handleAltSave()}
              autoFocus
            />
            <div className={popRow}>
              <button className={popCancel} onClick={() => setActiveMenu(null)}>취소</button>
              <button className={popSave} onClick={handleAltSave}>저장</button>
            </div>
          </div>
        )}
      </div>

      <div className={relativeBox}>
        <button
          className={`${imgBtn} ${activeMenu === 'link' ? imgBtnActive : ''}`}
          onClick={() => toggle('link')}
          title="링크 추가"
        >
          <LinkIcon size={14} />
          <span>링크</span>
        </button>
        {activeMenu === 'link' && (
          <div className={popPanel}>
            <p className={popLabel}>이미지 링크</p>
            <input
              className={popInput}
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://..."
              onKeyDown={(e) => e.key === 'Enter' && handleLinkSave()}
              autoFocus
            />
            {linkUrl && (
              <button className={linkRemove} onClick={() => setLinkUrl('')}>링크 제거</button>
            )}
            <div className={popRow}>
              <button className={popCancel} onClick={() => setActiveMenu(null)}>취소</button>
              <button className={popSave} onClick={handleLinkSave}>저장</button>
            </div>
          </div>
        )}
      </div>

      {divider}

      <button
        className={imgBtn}
        onClick={() => {
          (document.activeElement as HTMLElement | null)?.blur();
          setActiveMenu(null);
        }}
        title="닫기"
      >
        <X size={14} />
      </button>
    </div>
  );
}
