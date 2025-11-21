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
        <div className="bg-gray-50">
          <div className="grid md:grid-cols-3 divide-x-2 divide-gray-200">
            {/* File List */}
            <div className="bg-gradient-to-b from-white to-gray-50 p-6 max-h-[600px] overflow-y-auto">
              <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 px-2">Documents</h4>
              <div className="space-y-2">
                {files.map((file) => (
                  <div key={file.path} className="flex gap-2">
                    <button
                      onClick={() => loadFile(file.path)}
                      className={`flex-1 text-left px-4 py-3 rounded-xl transition-all shadow-sm ${
                        selectedFile === file.path
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105'
                          : 'bg-white text-gray-800 hover:bg-blue-50 hover:shadow-md border-2 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Eye className={`w-5 h-5 flex-shrink-0 ${selectedFile === file.path ? 'text-white' : 'text-blue-600'}`} />
                        <span className="text-sm font-semibold truncate">{file.title}</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleDownload(file.path, file.name)}
                      className="px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all shadow-sm hover:shadow-md hover:scale-105"
                      title="Télécharger"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Viewer */}
            <div className="md:col-span-2 bg-white p-8 max-h-[600px] overflow-y-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                  <p className="mt-4 text-gray-600 font-medium">Chargement...</p>
                </div>
              ) : selectedFile ? (
                <div className="prose prose-base max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-strong:font-bold prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:my-1">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg font-medium">Sélectionnez un document</p>
                  <p className="text-gray-400 text-sm mt-2">Cliquez sur un document dans la liste pour le consulter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
