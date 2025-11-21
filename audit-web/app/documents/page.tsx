'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Download, FolderOpen, ChevronRight, ChevronDown, Search, File } from 'lucide-react';
import Link from 'next/link';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

export default function DocumentsPage() {
  const [fileTree, setFileTree] = useState<FileNode[]>([]);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFiles, setFilteredFiles] = useState<FileNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFileTree();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = searchFiles(fileTree, searchTerm.toLowerCase());
      setFilteredFiles(filtered);
    } else {
      setFilteredFiles(fileTree);
    }
  }, [searchTerm, fileTree]);

  const fetchFileTree = async () => {
    try {
      const response = await fetch('/api/markdown-files');
      const data = await response.json();
      setFileTree(data.files || []);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des fichiers:', error);
      setLoading(false);
    }
  };

  const searchFiles = (nodes: FileNode[], term: string): FileNode[] => {
    const results: FileNode[] = [];

    nodes.forEach(node => {
      if (node.type === 'file' && node.name.toLowerCase().includes(term)) {
        results.push(node);
      }
      if (node.type === 'folder' && node.children) {
        results.push(...searchFiles(node.children, term));
      }
    });

    return results;
  };

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const handleDownload = (path: string, name: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (path: string) => {
    window.open(`/viewer/markdown?file=${encodeURIComponent(path)}`, '_blank');
  };

  const renderFileNode = (node: FileNode, level: number = 0) => {
    const isExpanded = expandedFolders.has(node.path);
    const paddingLeft = level * 24;

    if (node.type === 'folder') {
      return (
        <div key={node.path} className="mb-1">
          <div
            onClick={() => toggleFolder(node.path)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors"
            style={{ paddingLeft: `${paddingLeft + 16}px` }}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
            )}
            <FolderOpen className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <span className="font-medium text-gray-700">{node.name}</span>
            {node.children && (
              <span className="text-sm text-gray-400 ml-2">
                ({node.children.length})
              </span>
            )}
          </div>
          {isExpanded && node.children && (
            <div className="mt-1">
              {node.children.map(child => renderFileNode(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={node.path}
        className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors group"
        style={{ paddingLeft: `${paddingLeft + 40}px` }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600 truncate">{node.name}</span>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleView(node.path)}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
          >
            <File className="w-4 h-4" />
            Consulter
          </button>
          <button
            onClick={() => handleDownload(node.path, node.name)}
            className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            Télécharger
          </button>
        </div>
      </div>
    );
  };

  const renderSearchResults = () => {
    if (filteredFiles.length === 0) {
      return (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Aucun document trouvé</p>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {filteredFiles.map(file => (
          <div
            key={file.path}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-700 truncate">{file.name}</div>
                <div className="text-sm text-gray-400 truncate">{file.path}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleView(file.path)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1"
              >
                <File className="w-4 h-4" />
                Consulter
              </button>
              <button
                onClick={() => handleDownload(file.path, file.name)}
                className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Télécharger
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des documents...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Retour
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Documents Markdown</h1>
              <p className="text-gray-600 mt-1">
                Consultez ou téléchargez tous les documents de l'audit
              </p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un document..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {searchTerm ? (
            <>
              <div className="mb-4 text-sm text-gray-600">
                {filteredFiles.length} résultat(s) trouvé(s)
              </div>
              {renderSearchResults()}
            </>
          ) : (
            <div className="space-y-1">
              {fileTree.map(node => renderFileNode(node, 0))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
