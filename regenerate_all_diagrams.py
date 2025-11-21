#!/usr/bin/env python3
import subprocess
import os
from pathlib import Path

def regenerate_service_diagrams(service_path):
    """Regenerate all diagrams for a service"""
    service_name = service_path.name
    print(f"\n{'='*60}")
    print(f"Processing service: {service_name}")
    print(f"{'='*60}")

    puml_dir = service_path / "uml" / "puml"
    svg_dir = service_path / "uml" / "svg"
    png_dir = service_path / "uml" / "png"

    if not puml_dir.exists():
        print(f"  No puml directory found, skipping")
        return

    # Find plantuml.jar
    plantuml_jar = Path("Audit_Duret_$/Services/Finance-Comptabilite/uml/plantuml.jar")
    if not plantuml_jar.exists():
        print(f"  ERROR: PlantUML jar not found at {plantuml_jar}")
        return

    # Create output directories
    svg_dir.mkdir(parents=True, exist_ok=True)
    png_dir.mkdir(parents=True, exist_ok=True)

    puml_files = list(puml_dir.glob("*.puml"))
    if not puml_files:
        print(f"  No .puml files found")
        return

    print(f"  Found {len(puml_files)} PlantUML files")

    # Generate SVG
    print(f"  Generating SVG diagrams...")
    try:
        result = subprocess.run(
            [
                "java",
                "-Dfile.encoding=UTF-8",
                "-jar",
                str(plantuml_jar),
                "-tsvg",
                "-o",
                str(svg_dir.absolute()),
                str(puml_dir / "*.puml")
            ],
            capture_output=True,
            text=True,
            timeout=180,
            cwd=str(puml_dir)
        )

        if result.returncode == 0:
            print(f"    [OK] SVG generation successful")
        else:
            print(f"    [WARN] SVG generation completed with warnings")
            if "Error" in result.stderr or "error" in result.stdout.lower():
                print(f"    Errors:")
                for line in result.stderr.split('\n'):
                    if 'Error' in line:
                        print(f"      {line}")

    except subprocess.TimeoutExpired:
        print(f"    ✗ SVG generation timed out")
    except Exception as e:
        print(f"    ✗ SVG generation failed: {e}")

    # Generate PNG
    print(f"  Generating PNG diagrams...")
    try:
        result = subprocess.run(
            [
                "java",
                "-Dfile.encoding=UTF-8",
                "-jar",
                str(plantuml_jar),
                "-tpng",
                "-o",
                str(png_dir.absolute()),
                str(puml_dir / "*.puml")
            ],
            capture_output=True,
            text=True,
            timeout=180,
            cwd=str(puml_dir)
        )

        if result.returncode == 0:
            print(f"    ✓ PNG generation successful")
        else:
            print(f"    ⚠ PNG generation completed with warnings")

    except subprocess.TimeoutExpired:
        print(f"    ✗ PNG generation timed out")
    except Exception as e:
        print(f"    ✗ PNG generation failed: {e}")

    # Copy to public folder
    print(f"  Copying to public folder...")
    public_svg_dir = Path(f"audit-web/public/uml/{service_name}/uml/svg")
    public_png_dir = Path(f"audit-web/public/uml/{service_name}/uml/png")
    public_svg_dir.mkdir(parents=True, exist_ok=True)
    public_png_dir.mkdir(parents=True, exist_ok=True)

    svg_count = 0
    png_count = 0

    for svg_file in svg_dir.glob("*.svg"):
        try:
            dest = public_svg_dir / svg_file.name
            import shutil
            shutil.copy2(svg_file, dest)
            svg_count += 1
        except Exception as e:
            print(f"    Error copying {svg_file.name}: {e}")

    for png_file in png_dir.glob("*.png"):
        try:
            dest = public_png_dir / png_file.name
            import shutil
            shutil.copy2(png_file, dest)
            png_count += 1
        except Exception as e:
            print(f"    Error copying {png_file.name}: {e}")

    print(f"    ✓ Copied {svg_count} SVG and {png_count} PNG files to public folder")

# Main execution
services_dir = Path("Audit_Duret_$/Services")
services = [d for d in services_dir.iterdir() if d.is_dir() and not d.name.startswith('.')]

print(f"Found {len(services)} services to process")

for service in sorted(services):
    try:
        regenerate_service_diagrams(service)
    except Exception as e:
        print(f"ERROR processing {service.name}: {e}")

print(f"\n{'='*60}")
print(f"All services processed!")
print(f"{'='*60}")
