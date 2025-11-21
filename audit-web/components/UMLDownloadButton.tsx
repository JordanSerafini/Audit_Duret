'use client';

import { Download, FileImage } from 'lucide-react';
import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { serviceToUMLMapping, serviceLabelMapping } from '@/lib/serviceNameMapping';

interface UMLDownloadButtonProps {
  serviceKey: string; // kebab-case service key (e.g., 'service-client')
}

export default function UMLDownloadButton({ serviceName, serviceLabel }: UMLDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadAllUML = async () => {
    setIsDownloading(true);
    try {
      // Fetch the list of available UML files from the API
      const response = await fetch(`/api/uml/${serviceName}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des fichiers');
      }

      const data = await response.json();
      const files: string[] = data.files;

      if (files.length === 0) {
        alert('Aucun fichier UML trouvé pour ce service.');
        setIsDownloading(false);
        return;
      }

      // Create a zip file with all UML images
      const zip = new JSZip();

      for (const file of files) {
        try {
          const fileUrl = `/uml/${serviceName}/${file}`;
          const fileResponse = await fetch(fileUrl);
          if (fileResponse.ok) {
            const blob = await fileResponse.blob();
            zip.file(file, blob);
          }
        } catch (error) {
          console.error(`Erreur lors du téléchargement de ${file}:`, error);
        }
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
