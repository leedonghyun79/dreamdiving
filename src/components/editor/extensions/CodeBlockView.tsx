'use client';
import { NodeViewWrapper, NodeViewContent, type NodeViewProps } from '@tiptap/react';
import { nodeWrapper, langSelect, codePre, codeInner, langOption } from '../editorStyles';

const LANGUAGES = [
  { value: 'plaintext', label: 'Plain' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'xml', label: 'HTML/XML' },
  { value: 'css', label: 'CSS' },
  { value: 'json', label: 'JSON' },
  { value: 'bash', label: 'Bash' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'sql', label: 'SQL' },
  { value: 'php', label: 'PHP' },
  { value: 'markdown', label: 'Markdown' },
];

export function CodeBlockView({ node, updateAttributes, extension }: NodeViewProps) {
  const current: string =
    node.attrs.language || extension.options.defaultLanguage || 'plaintext';

  return (
    <NodeViewWrapper className={nodeWrapper}>
      <select
        contentEditable={false}
        value={current}
        onChange={(e) => updateAttributes({ language: e.target.value })}
        className={langSelect}
      >
        {LANGUAGES.map((l) => (
          <option key={l.value} value={l.value} className={langOption}>
            {l.label}
          </option>
        ))}
      </select>
      <pre className={codePre}>
        <NodeViewContent<'code'>
          as="code"
          className={`hljs ${codeInner} language-${current}`}
        />
      </pre>
    </NodeViewWrapper>
  );
}
