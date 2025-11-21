'use client';

import { Download, FileImage } from 'lucide-react';
import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface UMLDownloadButtonProps {
  serviceName: string;
  serviceLabel: string;
}

export default function UMLDownloadButton({ serviceName, serviceLabel }: UMLDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadAllUML = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      const umlFolder = `/uml/${serviceName}/uml`;

      // Fetch the list of files from the public folder
      // We need to make requests to known file patterns
      const filePatterns = [
        // SVG files
        { folder: 'svg', extensions: ['svg'] },
        { folder: 'png', extensions: ['png'] },
        { folder: 'img', extensions: ['png', 'svg'] },
        { folder: 'img/annexe', extensions: ['png', 'svg'] },
        { folder: 'img/process', extensions: ['png', 'svg'] },
      ];

      // Common UML file prefixes
      const commonPrefixes = [
        'Activity_', 'Class_', 'Component_', 'Deployment_', 'Gantt_',
        'Mindmap_', 'Network_', 'Sequence_', 'State_', 'Timing_',
        'UseCase_', 'WBS_', 'Pain_Points_', 'Architecture_',
        'Processus_', 'Creation_', 'Generation_', 'Solutions_',
        'Appel_', 'Prise_', 'Onboarding_', 'Timeline_'
      ];

      let filesAdded = 0;

      for (const pattern of filePatterns) {
        for (const ext of pattern.extensions) {
          for (const prefix of commonPrefixes) {
            try {
              const url = `${umlFolder}/${pattern.folder}/${prefix}*.${ext}`;
              // Try common file name patterns
              const possibleFiles = await tryFetchFile(`${umlFolder}/${pattern.folder}`, prefix, ext);

              if (possibleFiles) {
                for (const file of possibleFiles) {
                  const response = await fetch(file.url);
                  if (response.ok) {
                    const blob = await response.blob();
                    zip.file(`${pattern.folder}/${file.name}`, blob);
                    filesAdded++;
                  }
                }
              }
            } catch (error) {
              // File doesn't exist, continue
              continue;
            }
          }
        }
      }

      // Also try to fetch files directly from known locations
      const directFiles = await fetchDirectFiles(umlFolder);
      for (const file of directFiles) {
        try {
          const response = await fetch(file.url);
          if (response.ok) {
            const blob = await response.blob();
            zip.file(file.name, blob);
            filesAdded++;
          }
        } catch (error) {
          continue;
        }
      }

      if (filesAdded === 0) {
        alert('Aucun fichier UML trouvé pour ce service.');
        setIsDownloading(false);
        return;
      }

      // Generate and download the zip file
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `UML_${serviceLabel.replace(/\s+/g, '_')}.zip`);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Erreur lors du téléchargement des fichiers UML.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Helper function to try fetching files
  const tryFetchFile = async (basePath: string, prefix: string, ext: string) => {
    // This is a simplified version - in a real implementation,
    // you might want to use an API endpoint that lists available files
    const possibleFiles = [];

    // Try some common suffixes
    const suffixes = ['', 'Actuel', 'CIBLE', 'Actuelle', 'IMPROVED', '1', '2'];

    for (const suffix of suffixes) {
      const fileName = `${prefix}${suffix}.${ext}`;
      possibleFiles.push({
        url: `${basePath}/${fileName}`,
        name: fileName
      });
    }

    return possibleFiles;
  };

  // Helper to fetch known files based on service
  const fetchDirectFiles = async (basePath: string) => {
    // This would ideally be generated from the actual file system
    // For now, we'll return an empty array and rely on the pattern matching
    return [];
  };

  return (
    <button
      onClick={downloadAllUML}
      disabled={isDownloading}
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
    >
      {isDownloading ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span>Téléchargement...</span>
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          <FileImage className="w-5 h-5" />
          <span>Télécharger tous les UML</span>
        </>
      )}
    </button>
  );
}
