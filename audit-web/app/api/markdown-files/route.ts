import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

function buildFileTree(dirPath: string, basePath: string = ''): FileNode[] {
  const nodes: FileNode[] = [];

  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    items.forEach(item => {
      const itemPath = path.join(dirPath, item.name);
      const relativePath = basePath ? `${basePath}/${item.name}` : item.name;

      if (item.isDirectory()) {
        const children = buildFileTree(itemPath, relativePath);
        if (children.length > 0) {
          nodes.push({
            name: item.name,
            path: relativePath,
            type: 'folder',
            children: children.sort((a, b) => {
              if (a.type === b.type) return a.name.localeCompare(b.name);
              return a.type === 'folder' ? -1 : 1;
            })
          });
        }
      } else if (item.name.endsWith('.md')) {
        nodes.push({
          name: item.name,
          path: `/markdown/${relativePath}`,
          type: 'file'
        });
      }
    });
  } catch (error) {
    console.error('Error reading directory:', dirPath, error);
  }

  return nodes.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'folder' ? -1 : 1;
  });
}

export async function GET() {
  try {
    const markdownDir = path.join(process.cwd(), 'public', 'markdown');

    if (!fs.existsSync(markdownDir)) {
      return NextResponse.json({ files: [], error: 'Directory not found' });
    }

    const fileTree = buildFileTree(markdownDir);

    return NextResponse.json({ files: fileTree });
  } catch (error) {
    console.error('Error building file tree:', error);
    return NextResponse.json(
      { files: [], error: 'Failed to build file tree' },
      { status: 500 }
    );
  }
}
