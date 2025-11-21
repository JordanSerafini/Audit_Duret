import React from 'react';

/**
 * Transforme le contenu Markdown en composants React/JSX purs
 * Supporte: titres, paragraphes, listes, tableaux, blockquotes, code, gras, italique
 */
export function markdownToReact(markdown: string): React.ReactElement[] {
  const lines = markdown.split('\n');
  const elements: React.ReactElement[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let currentTable: { headers: string[]; rows: string[][] } | null = null;
  let currentCodeBlock: string[] | null = null;
  let currentBlockquote: string[] | null = null;
  let key = 0;

  const processInlineFormatting = (text: string): React.ReactNode => {
    // Gras **text** ou __text__
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // Italique *text* ou _text_
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/_(.*?)_/g, '<em>$1</em>');

    // Code inline `code`
    text = text.replace(/`(.*?)`/g, '<code class="inline-code">$1</code>');

    // Liens [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const flushList = () => {
    if (currentList) {
      const ListTag = currentList.type === 'ul' ? 'ul' : 'ol';
      elements.push(
        <ListTag key={key++} className={currentList.type === 'ul' ? 'list-disc list-inside space-y-2 mb-4 ml-4 text-slate-700' : 'list-decimal list-inside space-y-2 mb-4 ml-4 text-slate-700'}>
          {currentList.items.map((item, i) => (
            <li key={i} className="leading-7">
              {processInlineFormatting(item)}
            </li>
          ))}
        </ListTag>
      );
      currentList = null;
    }
  };

  const flushTable = () => {
    if (currentTable) {
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                {currentTable.headers.map((header, i) => (
                  <th key={i} className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">
                    {processInlineFormatting(header.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTable.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-slate-300 px-4 py-3 text-slate-700">
                      {processInlineFormatting(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = null;
    }
  };

  const flushCodeBlock = () => {
    if (currentCodeBlock) {
      elements.push(
        <pre key={key++} className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4">
          <code className="text-sm font-mono">{currentCodeBlock.join('\n')}</code>
        </pre>
      );
      currentCodeBlock = null;
    }
  };

  const flushBlockquote = () => {
    if (currentBlockquote) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 my-6 italic text-slate-700">
          {currentBlockquote.map((line, i) => (
            <p key={i}>{processInlineFormatting(line)}</p>
          ))}
        </blockquote>
      );
      currentBlockquote = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block
    if (line.trim().startsWith('```')) {
      flushList();
      flushTable();
      flushBlockquote();
      if (currentCodeBlock) {
        flushCodeBlock();
      } else {
        currentCodeBlock = [];
      }
      continue;
    }

    if (currentCodeBlock) {
      currentCodeBlock.push(line);
      continue;
    }

    // Blockquote
    if (line.trim().startsWith('>')) {
      flushList();
      flushTable();
      if (!currentBlockquote) {
        currentBlockquote = [];
      }
      currentBlockquote.push(line.trim().substring(1).trim());
      continue;
    } else if (currentBlockquote && line.trim() === '') {
      flushBlockquote();
      continue;
    } else if (currentBlockquote) {
      flushBlockquote();
    }

    // Headers
    if (line.startsWith('# ')) {
      flushList();
      flushTable();
      elements.push(
        <h1 key={key++} className="text-4xl font-bold text-slate-900 mb-6 pb-4 border-b-4 border-blue-600 mt-8">
          {processInlineFormatting(line.substring(2))}
        </h1>
      );
      continue;
    }

    if (line.startsWith('## ')) {
      flushList();
      flushTable();
      elements.push(
        <h2 key={key++} className="text-3xl font-bold text-slate-900 mt-12 mb-4 pb-3 border-b-2 border-slate-300">
          {processInlineFormatting(line.substring(3))}
        </h2>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      flushTable();
      elements.push(
        <h3 key={key++} className="text-2xl font-semibold text-slate-800 mt-8 mb-3">
          {processInlineFormatting(line.substring(4))}
        </h3>
      );
      continue;
    }

    if (line.startsWith('#### ')) {
      flushList();
      flushTable();
      elements.push(
        <h4 key={key++} className="text-xl font-semibold text-slate-700 mt-6 mb-2">
          {processInlineFormatting(line.substring(5))}
        </h4>
      );
      continue;
    }

    // HR
    if (line.trim() === '---' || line.trim() === '***') {
      flushList();
      flushTable();
      elements.push(<hr key={key++} className="my-8 border-t-2 border-slate-300" />);
      continue;
    }

    // Lists
    if (line.trim().match(/^[-*+]\s/)) {
      flushTable();
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(line.trim().substring(2));
      continue;
    }

    if (line.trim().match(/^\d+\.\s/)) {
      flushTable();
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(line.trim().replace(/^\d+\.\s/, ''));
      continue;
    }

    // Tables
    if (line.includes('|')) {
      flushList();
      const cells = line.split('|').map(c => c.trim()).filter(c => c);

      // Skip separator line
      if (cells.every(c => c.match(/^-+$/))) {
        continue;
      }

      if (!currentTable) {
        currentTable = { headers: cells, rows: [] };
      } else {
        currentTable.rows.push(cells);
      }
      continue;
    } else if (currentTable) {
      flushTable();
    }

    // Paragraphs
    if (line.trim() !== '') {
      flushList();
      elements.push(
        <p key={key++} className="text-slate-700 leading-7 mb-4">
          {processInlineFormatting(line)}
        </p>
      );
    }
  }

  // Flush remaining
  flushList();
  flushTable();
  flushCodeBlock();
  flushBlockquote();

  return elements;
}
