'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Download, Eye, ChevronDown, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownFile {
  name: string;
  path: string;
  title: string;
}

interface MarkdownViewerProps {
  files: MarkdownFile[];
  title?: string;
  defaultExpanded?: boolean;
}

export default function MarkdownViewer({ files, title = "Documents Markdown", defaultExpanded = false }: MarkdownViewerProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const loadFile = async (path: string) => {
    setLoading(true);
    setSelectedFile(path);
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error('Erreur lors du chargement');
      const text = await response.text();
      setContent(text);
    } catch (error) {
      setContent('❌ Erreur lors du chargement du fichier');
      console.error('Error loading file:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (path: string, name: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (files.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-blue-100 overflow-hidden">
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 cursor-pointer hover:from-blue-100 hover:via-indigo-100 hover:to-blue-100 transition-all border-b-2 border-blue-100"
      >
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-2 rounded-lg shadow-sm">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-white" />
            ) : (
              <ChevronRight className="w-5 h-5 text-white" />
            )}
          </div>
          <FileText className="w-7 h-7 text-blue-600" />
          <div>
            <h3 className="font-bold text-xl text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 font-medium">{files.length} document(s) disponible(s)</p>
          </div>
        </div>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="grid md:grid-cols-3 divide-x divide-gray-200">
            {/* File List */}
            <div className="bg-gray-50 p-4 max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {files.map((file) => (
                  <div key={file.path} className="flex gap-2">
                    <button
                      onClick={() => loadFile(file.path)}
                      className={`flex-1 text-left px-3 py-2 rounded-lg transition-all ${
                        selectedFile === file.path
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{file.title}</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleDownload(file.path, file.name)}
                      className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      title="Télécharger"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Viewer */}
            <div className="md:col-span-2 p-6 max-h-96 overflow-y-auto">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : selectedFile ? (
                <article className="prose prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </article>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Sélectionnez un document pour le consulter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
