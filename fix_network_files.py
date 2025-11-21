#!/usr/bin/env python3
import os
import re
from pathlib import Path

def convert_nwdiag_to_component(filepath):
    """Convert nwdiag diagram to standard component diagram"""
    print(f"Processing: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already converted
    if 'nwdiag' not in content:
        print(f"  Already converted, skipping")
        return

    # Extract title
    title_match = re.search(r'title\s+(.+)', content)
    title = title_match.group(1) if title_match else "Network Architecture"

    # Extract diagram name from @startuml
    name_match = re.search(r'@startuml\s+(\w+)', content)
    diagram_name = name_match.group(1) if name_match else "Network_Diagram"

    # Build new component diagram
    new_content = f"""@startuml {diagram_name}

title {title}

!define AZURE_CLOUD #E8F5E8
!define SAAS_CLOUD #E3F2FD
!define ONPREM #FFF3E0
!define EXTERNAL #F3E5F5

' Architecture Layers
package "Internet" <<Cloud>> #FFFFFF {{
  component [Client Web\\n(Portail)] as client
  component [App Mobile\\nTechnicien] as mobile
}}

package "SaaS Services" <<Cloud>> SAAS_CLOUD {{
  component [HubSpot CRM\\n+ Ticketing\\n+ Workflows] as hubspot
  component [HubSpot\\nAnalytics] as analytics
  component [Chatbot IA] as chatbot
}}

package "Azure Cloud" <<Cloud>> AZURE_CLOUD {{
  component [Backend API\\nNode.js] as api
  component [ML Models\\n(Python)] as ml
  component [Data Warehouse\\nAzure SQL] as dwh
  component [Power BI\\nService] as powerbi
}}

package "On-Premise Duret" <<Infrastructure>> ONPREM {{
  database "SAGE\\nBase clients" as sage
  component [MDE ERP\\nChantiers] as erp
  component [Standard\\nTéléphonique] as tel
}}

package "External APIs" <<External>> EXTERNAL {{
  component [CTI\\nRingCentral] as cti
  component [SMS Gateway\\nTwilio] as sms
  component [SMTP\\nSendGrid] as email
}}

' Connections
client -down-> hubspot : HTTPS\\nREST API
mobile -down-> api : HTTPS\\nGraphQL
api -left-> hubspot : REST API

hubspot -down-> analytics : Data flow
hubspot -down-> chatbot : AI requests

hubspot -down-> dwh : ETL\\nQuotidien
dwh -right-> ml : Training\\ndata
ml -up-> hubspot : Prédictions
dwh -right-> powerbi : DirectQuery

cti -down-> tel : SIP Trunk
cti -up-> hubspot : Webhooks\\nremontée fiche

hubspot -down-> sage : ETL Sync\\nBidirectionnelle
hubspot -down-> erp : Sync\\nchantiers

hubspot -right-> sms : Notifications\\nclients
hubspot -right-> email : Confirmations\\nautomatiques

note right of hubspot
  **Flux Principaux:**
  1. Client portail → HubSpot (RDV en ligne)
  2. Appel entrant → CTI → HubSpot (remontée fiche)
  3. Technicien app → API → HubSpot (bon intervention)
  4. HubSpot → DWH → ML (prédictions)
  5. HubSpot ↔ SAGE (sync clients bidirectionnelle)
end note

note bottom of sage
  **Sécurité:**
  - TLS 1.3 (transit)
  - AES-256 (repos)
  - OAuth 2.0 + MFA
  - RGPD compliant
  - Backup quotidien
end note

@enduml
"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  Converted to component diagram!")

# Find and fix all network files
services_dir = Path('Audit_Duret_$/Services')
network_files = list(services_dir.glob('**/puml/*network*.puml'))

print(f"Found {len(network_files)} network files to process\n")

for network_file in network_files:
    try:
        convert_nwdiag_to_component(network_file)
    except Exception as e:
        print(f"Error processing {network_file}: {e}")

print("\nDone!")
