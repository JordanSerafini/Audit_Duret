@echo off
echo Génération des diagrammes PlantUML améliorés...
cd /d "C:\Users\j.serafini\Desktop\Audit_Duret\Services\Achats-Logistique\uml"

echo Génération séquence commande IMPROVED...
java -jar plantuml.jar -tsvg "puml\01_sequence_commande_actuelle_IMPROVED.puml" -o "svg\"

echo Génération activité processus IMPROVED...
java -jar plantuml.jar -tsvg "puml\02_activity_processus_commande_IMPROVED.puml" -o "svg\"

echo Génération déploiement infrastructure IMPROVED...
java -jar plantuml.jar -tsvg "puml\07_deployment_infrastructure_IMPROVED.puml" -o "svg\"

echo Génération WBS pain points hiérarchie...
java -jar plantuml.jar -tsvg "puml\17_wbs_pain_points_HIERARCHY.puml" -o "svg\"

echo Génération séquence CIBLE IMPROVED...
java -jar plantuml.jar -tsvg "puml\18_sequence_commande_CIBLE_IMPROVED.puml" -o "svg\"

echo Génération architecture CIBLE IMPROVED...
java -jar plantuml.jar -tsvg "puml\19_deployment_architecture_CIBLE_IMPROVED.puml" -o "svg\"

echo Génération PNG pour présentations...
java -jar plantuml.jar -tpng "puml\01_sequence_commande_actuelle_IMPROVED.puml" -o "png\"
java -jar plantuml.jar -tpng "puml\02_activity_processus_commande_IMPROVED.puml" -o "png\"
java -jar plantuml.jar -tpng "puml\07_deployment_infrastructure_IMPROVED.puml" -o "png\"
java -jar plantuml.jar -tpng "puml\17_wbs_pain_points_HIERARCHY.puml" -o "png\"
java -jar plantuml.jar -tpng "puml\18_sequence_commande_CIBLE_IMPROVED.puml" -o "png\"
java -jar plantuml.jar -tpng "puml\19_deployment_architecture_CIBLE_IMPROVED.puml" -o "png\"

echo Terminé! Vérifiez les dossiers svg/ et png/
pause