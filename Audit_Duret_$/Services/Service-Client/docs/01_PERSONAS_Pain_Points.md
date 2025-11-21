# 👥 PERSONAS & PAIN POINTS - Service Client

> Analyse détaillée des utilisateurs et de leurs difficultés quotidiennes

---

## 🎯 PERSONA PRINCIPAL

### Claire - Assistante Relation Client (35 ans)

**Profil**
- **Poste** : Assistante Relation Client
- **Ancienneté** : 5 ans chez Duret
- **Formation** : BTS Assistant de Gestion
- **Équipe** : Seule sur la fonction + interface avec techniciens

**Journée type**
- 08h00-09h30 : Réception appels clients + mails
- 09h30-11h00 : Prise de RDV petits travaux (planning Outlook)
- 11h00-12h00 : Création chantiers dans ERP + SAGE
- 14h00-15h30 : Traitement demandes clients (devis, modifications)
- 15h30-17h00 : Relances clients, classement documents
- 17h00-17h30 : Coordination techniciens (appels/mails)

**Volume quotidien**
- ~50 appels entrants
- ~50 mails
- ~10-15 RDV à planifier
- ~5 nouveaux chantiers à créer
- ~20 relances à faire

**Outils utilisés**
- MDE ERP (création chantiers)
- SAGE (devis, clients)
- Outlook (agenda, mails)
- Excel (classement, relances)
- Téléphone (techniciens)
- Post-it (!!)

---

## 🔴 PAIN POINTS PAR SÉVÉRITÉ

### 🔥 CRITIQUES (Impact business immédiat)

#### 1. Pas de système de ticketing / CRM
**Sévérité** : 🔥🔥🔥🔥🔥 (5/5)
**Fréquence** : Quotidienne (100 fois/jour)

**Situation actuelle** :
> "Quand un client appelle, je note sur un post-it. Le problème c'est que je les perds, j'en ai partout. Il m'est déjà arrivé d'oublier de rappeler un client parce que j'avais jeté le post-it par erreur."

**Conséquences** :
- Aucune traçabilité des appels
- Risque d'oubli client : **5-10 fois/an**
- Impossible de mesurer volume réel
- Pas d'historique client centralisé
- Stress permanent ("ai-je oublié quelqu'un ?")
- Image dégradée quand client rappelle

**Impact quantifié** :
- **10 clients perdus/an** × 10K€ CA moyen = **100K€/an**
- **Temps recherche info** : 30min/jour × 220j = 110h/an × 50€ = **5.5K€/an**
- **Stress** : 8/10

**Citation** :
> "Je rêve d'un système où quand le téléphone sonne, j'ai automatiquement la fiche client qui s'affiche, avec tout l'historique. Et où je peux créer un ticket en 2 clics."

---

#### 2. Planning prise de RDV archaïque
**Sévérité** : 🔥🔥🔥🔥 (4/5)
**Fréquence** : Quotidienne (10-15 fois/jour)

**Situation actuelle** :
> "Pour le planning de Gaëtan (technicien entretien), c'est l'enfer. Le client m'appelle, je dois ouvrir le fichier Excel, regarder les disponibilités, mais je ne suis pas sûre à 100%. Donc je dis au client 'Je vous envoie un mail pour confirmer', j'envoie un mail à Gaëtan, j'attends qu'il réponde, puis je rappelle le client pour confirmer. Ça peut prendre 2 jours pour un simple RDV !"

**Workflow actuel** :
1. Client appelle
2. Ouverture Excel planning Gaëtan
3. Recherche créneau (incertitude)
4. Mail client : "Je vous confirme d'ici 48h"
5. Mail Gaëtan : "Es-tu dispo le..."
6. Attente réponse Gaëtan (parfois 1-2 jours)
7. Mise à jour Excel
8. Rappel client pour confirmer
9. Mail confirmation client
10. Re-saisie dans Outlook

**Temps total** : 15-20 minutes par RDV

**Conséquences** :
- **Temps perdu** : 15min × 15 RDV/jour = 3h45/jour = **825h/an**
- Client frustré (attente confirmation)
- Image "pas organisés"
- Gaëtan dérangé constamment
- Risque double-booking

**Impact quantifié** :
- **825h/an** × 50€ = **41.25K€/an**
- **5 clients perdus/an** (impatience) × 5K€ = **25K€/an**
- **TOTAL** : **66.25K€/an**

**Besoin exprimé** :
> "Un truc simple : Gaëtan met ses dispos dans un calendrier partagé, je vois en temps réel, je clique, c'est pris. Et encore mieux, le client peut prendre RDV lui-même en ligne, comme chez le médecin."

---

#### 3. Double saisie ERP / SAGE
**Sévérité** : 🔥🔥🔥🔥 (4/5)
**Fréquence** : Quotidienne (5 fois/jour)

**Situation actuelle** :
> "Quand on crée un nouveau client, je dois le saisir dans le MDE ERP ET dans SAGE. Deux bases différentes. C'est débile. Et en plus, quand je fais un devis sur SAGE, je dois ensuite l'enlever du logiciel pour le mettre dans le dossier partagé réseau, et ajouter les fichiers complémentaires à la main. Pourquoi je ne peux pas tout faire au même endroit ?"

**Workflow aberrant** :
1. Nouveau client appelle
2. Saisie client dans MDE ERP (10min)
3. Saisie MÊME client dans SAGE (10min)
4. Devis fait sur SAGE
5. Export PDF devis
6. Enlever devis de SAGE (!)
7. Copier dans dossier partagé réseau
8. Ajouter fichiers complémentaires (plans, photos) manuellement
9. Envoyer mail client avec pièces jointes

**Temps total** : 30 minutes pour nouveau client + 10 minutes pour chaque devis

**Conséquences** :
- **Temps perdu** : 50 clients/an × 30min = 25h/an (clients) + 200 devis/an × 10min = 33h/an → **58h/an**
- Risque incohérence données (adresse différente ERP vs SAGE)
- Frustration intense
- Erreurs de saisie

**Impact quantifié** :
- **58h/an** × 50€ = **2.9K€/an**
- **5 erreurs/an** × 1K€ (correction + perte temps) = **5K€/an**
- **TOTAL** : **7.9K€/an**

**Citation** :
> "Un seul outil, c'est pas possible ? Ou au moins qu'ils se parlent automatiquement ?"

---

### 🟠 IMPORTANTS (Impact qualité & productivité)

#### 4. Volume mails important non géré
**Sévérité** : 🔥🔥🔥 (3/5)
**Fréquence** : Quotidienne (50 mails/jour)

**Situation actuelle** :
> "Je reçois 50 mails par jour minimum. Demandes clients, modifications de chantier, questions des techniciens, demandes inter-services... Je passe mon temps à répondre. Et souvent je me répète, c'est toujours les mêmes questions."

**Problèmes** :
- Aucun template
- Aucune automatisation
- Aucun tri automatique
- Aucune priorisation
- Répétition constante (mêmes réponses)

**Temps estimé** :
- 50 mails/jour × 3 minutes/mail = 150 minutes/jour = **550h/an**
- Dont 30% répétitif (mêmes questions/réponses)

**Impact quantifié** :
- **165h/an** économisables (30%) × 50€ = **8.25K€/an**

**Besoin** :
> "Des templates pour les questions fréquentes. Et un système qui trie automatiquement les mails urgents."

---

#### 5. Pas de suivi demandes techniciens
**Sévérité** : 🔥🔥🔥 (3/5)
**Fréquence** : Hebdomadaire (10 fois/semaine)

**Situation actuelle** :
> "Les techniciens m'appellent en disant 'La cliente demande un devis pour changer ses radiateurs électriques'. Je note ça où ? Sur un post-it encore. Résultat, j'oublie, le technicien me redemande 2 semaines après, la cliente est mécontente. On perd des opportunités commerciales bêtement."

**Conséquences** :
- **10 demandes/semaine** = 520/an
- **Taux oubli estimé** : 20% = 104 demandes perdues/an
- **Taux transformation** : 30%
- **Panier moyen** : 3K€

**Impact quantifié** :
- **104 demandes perdues** × 30% × 3K€ = **93.6K€/an**

**Besoin** :
> "Un formulaire simple dans l'app mobile du technicien : 'Demande de devis client'. Il clique, décrit en 2 phrases, ça m'arrive automatiquement comme un ticket à traiter."

---

#### 6. Délai de rappel SAV insuffisant
**Sévérité** : 🔥🔥🔥 (3/5)
**Fréquence** : Hebdomadaire

**Situation actuelle** :
> "Les clients qui appellent tous les jours, ça va, je gère. Mais les clients SAV qui attendent un devis, une intervention, je devrais les relancer mais j'oublie. Ils finissent par rappeler eux-mêmes, parfois énervés. C'est pas top pour l'image."

**Problème** :
- Aucune relance automatique
- Dépend de la mémoire
- Excel relances manuel (pas toujours à jour)

**Impact quantifié** :
- **Satisfaction SAV** : 6/10 actuellement
- **20 clients SAV perdus/an** par manque de relance × 5K€ = **100K€/an**

**Besoin** :
> "Des alertes automatiques : 'Client X attend devis depuis 7 jours, relancer'. Comme ça j'oublie pas."

---

#### 7. Questionnaire satisfaction non systématisé
**Sévérité** : 🔥🔥 (2/5)
**Fréquence** : Mensuelle

**Situation actuelle** :
> "On a mis en place un questionnaire satisfaction, mais c'est moi qui dois l'envoyer manuellement après chaque intervention. Résultat, j'envoie quand j'ai le temps, c'est-à-dire rarement. On a un taux de réponse très faible."

**Problèmes** :
- Envoi manuel (oublis)
- Pas de relances
- Pas d'analyse automatique
- Impossible de piloter

**Impact quantifié** :
- **Taux de réponse actuel** : 10%
- **Taux possible avec automatisation** : 40%
- **Détection insatisfaction** : +30 clients/an
- **Rétention améliorée** : 20 clients × 10K€ = **200K€/an**

---

### 🟡 MODÉRÉS (Confort & optimisation)

#### 8. Bon d'intervention papier/téléphone
**Sévérité** : 🔥🔥 (2/5)
**Fréquence** : Quotidienne

**Situation actuelle** :
> "Les bons d'intervention, c'est via téléphone. Le technicien m'appelle, me dicte ce qu'il a fait, je note. Pas de photos, pas de signature client digitale. Tout est archaïque."

**Besoin** :
> "App mobile pour le technicien : il remplit le bon, prend des photos, fait signer le client sur la tablette. Tout synchronisé automatiquement."

**Impact quantifié** :
- **Temps gagné** : 30min/jour × 220j = 110h/an × 50€ = **5.5K€/an**

---

#### 9. Centralisation information défaillante
**Sévérité** : 🔥🔥 (2/5)
**Fréquence** : Quotidienne

**Situation actuelle** :
> "Les infos sont partout : ERP, SAGE, Outlook, Excel, post-it, téléphone. Quand un client appelle, je dois chercher dans 4-5 endroits pour avoir toutes les infos. Ça prend du temps."

**Temps recherche** :
- 30 minutes/jour × 220j = 110h/an

**Impact quantifié** :
- **110h/an** × 50€ = **5.5K€/an**

**Besoin** :
> "Un seul écran avec TOUT : historique appels, mails, devis, chantiers, factures, interventions. Une vue 360° du client."

---

## 📊 SYNTHÈSE QUANTITATIVE

### Temps perdu total : **1888h/an**

| Pain Point | Temps perdu/an | Coût/an | CA perdu/an | **TOTAL/an** |
|------------|----------------|---------|-------------|--------------|
| 1. Pas de CRM/ticketing | 110h | 5.5K€ | 100K€ | **105.5K€** |
| 2. Planning RDV archaïque | 825h | 41.25K€ | 25K€ | **66.25K€** |
| 3. Double saisie ERP/SAGE | 58h | 2.9K€ | 5K€ | **7.9K€** |
| 4. Volume mails non géré | 165h | 8.25K€ | - | **8.25K€** |
| 5. Demandes techniciens perdues | - | - | 93.6K€ | **93.6K€** |
| 6. Rappel SAV insuffisant | - | - | 100K€ | **100K€** |
| 7. Satisfaction non systématisée | - | - | 200K€ | **200K€** |
| 8. Bon intervention papier | 110h | 5.5K€ | - | **5.5K€** |
| 9. Centralisation défaillante | 110h | 5.5K€ | - | **5.5K€** |
| **TOTAL** | **1378h** | **68.9K€** | **523.6K€** | **592.5K€/an** |

### Niveau de stress : 8/10

**Citations Claire** :
> "Je passe mes journées à éteindre des feux. J'aimerais anticiper au lieu de subir."

> "J'ai l'impression de perdre mon temps sur des tâches répétitives au lieu de vraiment aider les clients."

> "Donnez-moi les bons outils et je double mon efficacité."

---

## 🎯 BESOINS PRIORITAIRES PAR IMPACT

### 1. CRM / Système de ticketing
**Impact** : 105.5K€/an
**Urgence** : 🔥🔥🔥🔥🔥

### 2. Questionnaire satisfaction automatisé
**Impact** : 200K€/an (rétention)
**Urgence** : 🔥🔥🔥🔥

### 3. Traçabilité demandes techniciens
**Impact** : 93.6K€/an (opportunités)
**Urgence** : 🔥🔥🔥🔥

### 4. Rappel SAV automatisé
**Impact** : 100K€/an
**Urgence** : 🔥🔥🔥

### 5. Planning partagé intelligent
**Impact** : 66.25K€/an
**Urgence** : 🔥🔥🔥🔥

---

**💰 ENJEU TOTAL : 592.5K€/an**
**🎯 OBJECTIF : Passer de réactif à proactif**
**⏰ GAIN TEMPS : 1378h/an → réallouer sur relation client**
