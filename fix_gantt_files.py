#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_gantt_file(filepath):
    """Fix PlantUML Gantt file syntax"""
    print(f"Processing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already fixed
    if 'Project starts' in content:
        print(f"  Already fixed, skipping")
        return

    # Remove incorrect alias syntax and fix structure
    lines = content.split('\n')
    fixed_lines = []
    in_gantt = False

    for line in lines:
        # Fix @startgantt placement
        if line.strip() == '@startuml':
            continue  # Will be re-added
        elif line.strip().startswith('@startgantt'):
            # Extract name if present
            match = re.match(r'@startgantt\s+(\w+)', line)
            name = match.group(1) if match else "Gantt"
            fixed_lines.append(f'@startuml {name}')
            fixed_lines.append('')
            if len(fixed_lines) > 2 and 'title' in fixed_lines[-3]:
                pass  # title already there
            fixed_lines.append('@startgantt')
            in_gantt = True
            continue
        elif line.strip() == '@endgantt':
            fixed_lines.append('@endgantt')
            fixed_lines.append('@enduml')
            continue
        elif line.strip() == '@enduml':
            continue  # Already handled with @endgantt

        # Fix task syntax: remove "as [alias]" patterns
        if in_gantt and '[' in line and '] as [' in line:
            # Pattern: [Task name] as [Alias] lasts X
            line = re.sub(r'\[([^\]]+)\]\s+as\s+\[[^\]]+\]', r'[\1]', line)
            # Also remove dependency references  like [Alias]'s start/end
            line = re.sub(r'\[(\w+)\]\'s (start|end)', r'', line)
            # If line now has "starts at" with nothing after, remove it
            line = re.sub(r'starts at\s*$', '', line)

        # Fix "project starts" to "Project starts"
        if 'project starts' in line.lower():
            line = re.sub(r'project\s+starts', 'Project starts', line, flags=re.IGNORECASE)

        fixed_lines.append(line)

    fixed_content = '\n'.join(fixed_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

    print(f"  Fixed!")

# Find and fix all gantt files
services_dir = Path('Audit_Duret_$/Services')
gantt_files = list(services_dir.glob('**/puml/*gantt*.puml'))

print(f"Found {len(gantt_files)} gantt files to process\n")

for gantt_file in gantt_files:
    try:
        fix_gantt_file(gantt_file)
    except Exception as e:
        print(f"Error processing {gantt_file}: {e}")

print("\nDone!")
