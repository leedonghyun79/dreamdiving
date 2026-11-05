// 에디터 UI 스타일 (PandaCSS). 기존 Tailwind 클래스를 그대로 옮긴 것.
import { css } from '@styled-system/css';

// ── 상단 툴바 ──────────────────────────────────────────────
export const toolbarRoot = css({
  position: 'sticky',
  top: '-24px',
  zIndex: 10,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2px',
  borderLeft: '1px solid #D1D5DB',
  borderRight: '1px solid #D1D5DB',
  backgroundColor: '#fcfcfd',
  px: '12px',
  py: '10px',
});

export const toolbarGroup = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2px',
  transition: 'opacity 0.2s',
});

export const toolbarGroupDisabled = css({
  pointerEvents: 'none',
  opacity: 0.4,
});

export const spacerAuto = css({ marginLeft: 'auto' });

export const sep = css({
  display: 'inline-block',
  mx: '6px',
  height: '20px',
  width: '1px',
  backgroundColor: '#e5e7eb',
});

export const selectBox = css({
  height: '30px',
  borderRadius: '8px',
  border: '1px solid #D1D5DB',
  backgroundColor: '#fff',
  px: '8px',
  fontSize: '13px',
  color: '#1f2937',
});

export const btnBase = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '8px',
  border: '1px solid transparent',
  backgroundColor: 'transparent',
  color: '#1f2937',
  cursor: 'pointer',
  transition: 'all 0.15s',
  _hover: { backgroundColor: '#f3f4f6' },
  _disabled: { opacity: 0.5, cursor: 'not-allowed' },
});

export const btnActive = css({
  borderColor: 'rgba(45,45,201,0.25)',
  backgroundColor: 'rgba(45,45,201,0.1)',
  color: '#2d2dc9',
});

export const colorLabel = css({
  position: 'relative',
  display: 'inline-flex',
  height: '30px',
  width: '30px',
  cursor: 'pointer',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1px',
  overflow: 'hidden',
  borderRadius: '8px',
  _hover: { backgroundColor: '#f3f4f6' },
});

export const colorLabelSimple = css({
  position: 'relative',
  display: 'inline-flex',
  height: '30px',
  width: '30px',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  _hover: { backgroundColor: '#f3f4f6' },
});

export const colorBar = css({ height: '3px', width: '16px', borderRadius: '3px' });

export const colorBox = css({
  height: '16px',
  width: '16px',
  borderRadius: '4px',
  border: '1px solid #D1D5DB',
});

export const colorInput = css({
  position: 'absolute',
  inset: 0,
  cursor: 'pointer',
  opacity: 0,
});

// ── 이미지 하단 툴바 (이미지 선택 시) ────────────────────
export const imgBar = css({
  position: 'absolute',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  whiteSpace: 'nowrap',
  transform: 'translateX(-50%)',
  borderRadius: '8px',
  backgroundColor: '#1a1a2e',
  px: '8px',
  py: '6px',
  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
});

export const imgBtn = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: 'transparent',
  px: '10px',
  py: '6px',
  fontSize: '12px',
  fontWeight: '500',
  color: '#e5e7eb',
  cursor: 'pointer',
  transition: 'all 0.15s',
  _hover: { backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' },
});

export const imgBtnActive = css({
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: '#fff',
});

export const imgDivider = css({
  mx: '2px',
  height: '18px',
  width: '1px',
  backgroundColor: 'rgba(255,255,255,0.15)',
});

export const relativeBox = css({ position: 'relative' });

export const popMenu = css({
  position: 'absolute',
  left: '50%',
  top: 'calc(100% + 10px)',
  zIndex: 1001,
  minWidth: '120px',
  transform: 'translateX(-50%)',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#fff',
  p: '6px',
  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
});

export const popPanel = css({
  position: 'absolute',
  left: '50%',
  top: 'calc(100% + 10px)',
  zIndex: 1001,
  minWidth: '260px',
  transform: 'translateX(-50%)',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#fff',
  p: '14px',
  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
});

export const menuItem = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: 'transparent',
  px: '12px',
  py: '8px',
  fontSize: '13px',
  fontWeight: '500',
  color: '#060606',
  cursor: 'pointer',
  _hover: { backgroundColor: '#f3f4f6' },
});

export const popLabel = css({
  mb: '8px',
  fontSize: '11px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#6b7280',
});

export const popInput = css({
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  px: '12px',
  py: '8px',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box',
  _focus: { borderColor: '#060606' },
});

export const popRow = css({
  mt: '10px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
});

export const popCancel = css({
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#fff',
  px: '14px',
  py: '6px',
  fontSize: '12px',
  fontWeight: '600',
  color: '#6b7280',
  cursor: 'pointer',
});

export const popSave = css({
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#2d2dc9',
  px: '14px',
  py: '6px',
  fontSize: '12px',
  fontWeight: '600',
  color: '#fff',
  cursor: 'pointer',
});

export const linkRemove = css({
  mt: '6px',
  border: 'none',
  backgroundColor: 'transparent',
  p: 0,
  fontSize: '12px',
  fontWeight: '500',
  color: '#060606',
  cursor: 'pointer',
});

// ── 이미지 노드 ───────────────────────────────────────────
export const nodeWrapper = css({ position: 'relative', my: '20px' });

export const imgWrap = css({
  position: 'relative',
  display: 'block',
  width: 'fit-content',
  maxWidth: '100%',
});

export const nodeImg = css({
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '4px',
  _hover: { outline: '2px solid rgba(45,45,201,0.4)' },
});

export const nodeImgSelected = css({
  outline: '2px solid #2d2dc9',
});

export const resizeHandle = css({
  position: 'absolute',
  bottom: '-7px',
  right: '-7px',
  zIndex: 20,
  height: '14px',
  width: '14px',
  cursor: 'nwse-resize',
  borderRadius: '9999px',
  border: '2px solid #fff',
  backgroundColor: '#2d2dc9',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'transform 0.15s',
});

export const resizeHandleActive = css({ transform: 'scale(1.1)' });

// ── 코드 블록 ─────────────────────────────────────────────
export const langSelect = css({
  position: 'absolute',
  right: '8px',
  top: '8px',
  zIndex: 10,
  height: '24px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.2)',
  backgroundColor: 'rgba(255,255,255,0.1)',
  px: '6px',
  fontSize: '11px',
  color: '#d1d5db',
  outline: 'none',
});

export const codePre = css({
  m: 0,
  overflowX: 'auto',
  borderRadius: '8px',
  backgroundColor: '#1a1a2e',
  px: '18px',
  pb: '16px',
  pt: '40px',
  fontSize: '13px',
  color: '#f2f2f7',
});

export const codeInner = css({
  backgroundColor: 'transparent',
  p: 0,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: '13px',
  color: 'inherit',
});

export const langOption = css({ color: '#060606' });

// ── 소스 보기 / 에디터 본문 래퍼 ─────────────────────────
export const sourceWrap = css({
  overflow: 'hidden',
  borderRadius: '0 0 8px 8px',
  border: '1px solid #D1D5DB',
  borderTop: 'none',
  backgroundColor: '#fff',
});

export const editorRoot = css({ mt: '8px' });

export const editorContentWrap = css({
  borderRadius: '0 0 8px 8px',
  border: '1px solid #D1D5DB',
  borderTop: 'none',
  backgroundColor: '#fff',
});
