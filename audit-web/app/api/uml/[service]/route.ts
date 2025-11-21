import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { service: string } }
) {
  try {
    const serviceName = params.service;
    const umlPath = path.join(process.cwd(), 'public', 'uml', serviceName);

    if (!fs.existsSync(umlPath)) {
      return NextResponse.json({ files: [] });
    }

    // Recursively get all image files
    const files: string[] = [];

    function walkDir(dir: string, baseDir: string = '') {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(baseDir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath, relativePath);
        } else if (stat.isFile()) {
          // Only include image files
          const ext = path.extname(item).toLowerCase();
          if (['.png', '.svg', '.jpg', '.jpeg', '.gif'].includes(ext)) {
            files.push(relativePath.replace(/\\/g, '/'));
          }
        }
      }
    }

    walkDir(umlPath);

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error listing UML files:', error);
    return NextResponse.json({ error: 'Error listing files' }, { status: 500 });
  }
}
