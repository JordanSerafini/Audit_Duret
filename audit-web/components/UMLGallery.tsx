'use client';

import { useState, useEffect } from 'react';
import { Download, Eye, X, FileImage, Loader2 } from 'lucide-react';
import { serviceToUMLMapping, serviceLabelMapping } from '@/lib/serviceNameMapping';

interface UMLGalleryProps {
  serviceKey: string;
}

interface UMLFile {
  name: string;
  path: string;
  category: string;
}

export default function UMLGallery({ serviceKey }: UMLGalleryProps) {
  const [files, setFiles] = useState<UMLFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<UMLFile | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const umlFolderName = serviceToUMLMapping[serviceKey];
  const serviceLabel = serviceLabelMapping[serviceKey];

  useEffect(() => {
    if (!umlFolderName) return;

    const fetchFiles = async () => {
      try {
        const response = await fetch(`/api/uml/${umlFolderName}`);
        const data = await response.json();

        // Organize files by category
        const organizedFiles: UMLFile[] = data.files.map((file: string) => {
          const parts = file.split('/');
          const category = parts.length > 1 ? parts[0] : 'root';

          return {
            name: parts[parts.length - 1],
            path: `/uml/${umlFolderName}/${file}`,
            category,
          };
        });

        setFiles(organizedFiles);
      } catch (error) {
        console.error('Erreur lors du chargement des fichiers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [umlFolderName]);

  const categories = ['all', ...Array.from(new Set(files.map(f => f.category)))];
  const filteredFiles = filter === 'all' ? files : files.filter(f => f.category === filter);

  const downloadFile = async (file: UMLFile) => {
    try {
      const response = await fetch(file.path);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Erreur lors du téléchargement du fichier.');
    }
  };

  if (!umlFolderName) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        <span className="ml-3 text-slate-600">Chargement des diagrammes UML...</span>
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="bg-slate-50 rounded-lg p-8 text-center">
        <FileImage className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <p className="text-slate-600">Aucun diagramme UML disponible pour ce service.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === category
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category === 'all' ? 'Tous' : category}
            <span className="ml-2 text-xs opacity-75">
              ({category === 'all' ? files.length : files.filter(f => f.category === category).length})
            </span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFiles.map((file, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-all overflow-hidden shadow-sm hover:shadow-lg"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-slate-50 relative overflow-hidden">
              {file.name.endsWith('.svg') ? (
                <object
                  data={file.path}
                  type="image/svg+xml"
                  className="w-full h-full object-contain p-2"
                  aria-label={file.name}
                >
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <FileImage className="w-12 h-12" />
                  </div>
                </object>
              ) : (
                <img
                  src={file.path}
                  alt={file.name}
                  className="w-full h-full object-contain p-2"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedImage(file)}
                  className="bg-white text-slate-900 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Visualiser"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => downloadFile(file)}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  title="Télécharger"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* File Info */}
            <div className="p-3 border-t border-slate-200">
              <p className="text-sm font-medium text-slate-900 truncate" title={file.name}>
                {file.name}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {file.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              downloadFile(selectedImage);
            }}
            className="absolute top-4 right-16 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger</span>
          </button>

          <div
            className="max-w-7xl max-h-[90vh] w-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.name.endsWith('.svg') ? (
              <object
                data={selectedImage.path}
                type="image/svg+xml"
                className="w-full h-full"
                aria-label={selectedImage.name}
              >
                <div className="flex items-center justify-center h-96 text-white">
                  <FileImage className="w-24 h-24" />
                </div>
              </object>
            ) : (
              <img
                src={selectedImage.path}
                alt={selectedImage.name}
                className="w-full h-auto"
              />
            )}
            <div className="bg-white/10 backdrop-blur-sm text-white p-4 mt-4 rounded-lg">
              <p className="font-semibold">{selectedImage.name}</p>
              <p className="text-sm text-slate-300 mt-1">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
