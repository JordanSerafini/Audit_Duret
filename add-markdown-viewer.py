#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re

services = [
    'chantiers',
    'direction-affaires',
    'finance-comptabilite',
    'gestion-operationnelle',
    'maintenance-technique',
    'ressources-humaines',
    'service-client'
]

for service in services:
    page_path = f'audit-web/app/services/{service}/page.tsx'

    if not os.path.exists(page_path):
        print(f'WARN: Fichier non trouve: {page_path}')
        continue

    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Vérifier si MarkdownViewer est déjà importé
    if 'MarkdownViewer' in content:
        print(f'OK {service}: MarkdownViewer deja present')
        continue

    # Ajouter l'import de MarkdownViewer
    if "import CollapsibleUMLSection from '@/components/CollapsibleUMLSection';" in content:
        content = content.replace(
            "import CollapsibleUMLSection from '@/components/CollapsibleUMLSection';",
            "import CollapsibleUMLSection from '@/components/CollapsibleUMLSection';\nimport MarkdownViewer from '@/components/MarkdownViewer';"
        )

    # Ajouter l'import du helper
    if "from '@/data/" in content and "import { getServiceMarkdownFiles }" not in content:
        # Trouver la dernière ligne d'import depuis @/data/
        lines = content.split('\n')
        insert_index = -1
        for i, line in enumerate(lines):
            if "from '@/data/" in line:
                insert_index = i + 1

        if insert_index > 0:
            lines.insert(insert_index, "import { getServiceMarkdownFiles } from '@/config/markdownFiles';")
            content = '\n'.join(lines)

    # Ajouter la définition des markdownFiles dans la fonction
    function_pattern = r'(export default function \w+\(\) \{)'
    replacement = r'\1\n  const markdownFiles = getServiceMarkdownFiles(\'' + service + '\');\n'
    content = re.sub(function_pattern, replacement, content)

    # Ajouter le composant MarkdownViewer avant le footer navigation
    if '{/* Footer navigation */}' in content or '/* Footer navigation */' in content:
        footer_pattern = r'(\s*)(\/\* Footer navigation \*\/|{\s*\/\* Footer navigation \*\/\s*})'

        markdown_component = '''
      {/* Documents Markdown */}
      <div className="mt-8">
        <MarkdownViewer
          files={markdownFiles}
          title="Documents Sources - ''' + service.replace('-', ' ').title() + '''"
          defaultExpanded={false}
        />
      </div>

'''
        content = re.sub(footer_pattern, markdown_component + r'\1\2', content)

    # Écrire le fichier modifié
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'OK {service}: MarkdownViewer ajoute')

print('\nOK Termine!')
