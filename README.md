# Projecte Col·laboratiu: Mastermind Numèric

Repositori: 0376-Ra4Pr2-XiangTianRuirong-MonteroSolisGabriel

# Index

 * Descripció del Projecte
 * Caracteristiques principals del joc
 * Estructura del Repositori
 * Com jugar a Mastermind Numeric
 * Significat de les pistes
 * Interficie
 * Exemple de joc
 * URL del Repositori Public
 * URL del Site

# Descripció del Projecte

Aquest projecte consisteix en la desenvolupació d'un lloc anomenat Mastermind Numèric amb un estil de terminal. El joc permet a l'usuari per endevinar un codi secret de 4 xifres en 5 intents amb pistes en cada intent.

# Caracteristiques principals del joc

* Interficie d'usuari amb estil de terminal
* Sistema de pistes amb simbologia intuitiva ( 1, Ø, × )
* Maxim de 5 intents

# Estructura del Repositori

<p>0376-Ra4Pr2-XiangTianRuirong-MonteroSolisGabriel</p>
<p>|</p>
<p>|-------------------- main</p>
<p>|---------- index.html</p>
<p>|---------- styles.css</p>
<p>|---------- feature-ui-logic.js</p>
<p>|---------- feature-game-engine.js</p>
<p>|---------- script.js</p>
<p>|---------- README.md</p>

# Com jugar a Mastermind Numeric

1. Objectiu:  Endevinar el codi secret de 4 xifrfes
2. Intents:  Màxim de 5 intents
3. Pistes:  1, Ø, ×

# Significar de les pistes

- Símbol: Significat
- 1: Numero correcte en la posició correcta
- Ø: Número correcte en posició incorrecta
- ×: Número incorrecte (no existeix al codi)

# Interficie

- Panell de selecció: 4 desplegables amb números del 0 al 9
- Terminal: Mostra l'historial d'intents i les pistes amb timestamp
- Comptador: Indica les rondes restants
- Botó "EXECUTAR CODI": Envia l'intent

# Exemple de joc

<p>[12:34:56] SYSTEM: Terminal inicialitzada. Tens 5 intents.</p>
<p>[12:35:10] → Intent 1: [1 5 3 6] → [1 × 1 ×]</p>
<p>[12:35:45] → Intent 2: [1 2 3 4] → [1 1 1 1]</p>
<p>[12:35:46] ✓ VICTORIA! Codi desactivat!</p>

# URL del Repositori Públic

[Enllaç al repositori GitHub](https://github.com/XiangTian-Ruirog/XiangTian-Ruirog-0376-Ra4Pr2-XiangTianRuirong-MonteroSolisGabriel.git)

# URL del Site

[Enllaç al site](https://xiangtian-ruirog.github.io/XiangTian-Ruirog-0376-Ra4Pr2-XiangTianRuirong-MonteroSolisGabriel/)

# GitHub i el treball col·laboratiu


## 1. Reconeix la utilitat de les aplicacions d'ofimàtica web

**1. Per què GitHub es pot considerar una aplicació web de treball col·laboratiu?**

GitHub és una plataforma accessible des del navegador que permet que diverses persones treballin sobre el mateix projecte al mateix temps. Cadascú pot fer canvis des del seu ordinador i després pujar-los al repositori compartit, sense necessitat d'enviar fitxers per correu ni usar unitats compartides.

**2. Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d'un projecte només en un ordinador local?**

Si guardes els fitxers només al teu ordinador, si el disc duro falla o perds l'equip, perds tot el treball. Amb GitHub, el codi està emmagatzemat al núvol, és accessible des de qualsevol lloc i diverses persones hi poden treballar alhora. A més, sempre tens un historial de tots els canvis que s'han fet.

**3. Com pot ajudar GitHub a gestionar versions d'un projecte web o d'una aplicació?**

Cada vegada que puges canvis, Git guarda una "foto" de l'estat del projecte en aquell moment. Això permet tornar a una versió anterior si algo surt malament, comparar canvis entre versions i saber exactament qui va modificar cada cosa i quan.

**4. En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**

És útil en qualsevol projecte on hi hagi codi: aplicacions web, apps mòbils, scripts, etc. Però també en projectes de documentació, dissenys o qualsevol cosa que evolucioni amb el temps i on hi treballi més d'una persona.

**5. Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d'emmagatzematge de fitxers?**

Un sistema tradicional (com una carpeta al teu ordinador o un Google Drive) guarda l'estat actual dels fitxers, però no recorda com eren abans. Git, en canvi, guarda l'historial complet de canvis, qui els va fer i per què. A més, permet treballar en paral·lel sense que els canvis d'una persona sobreescriguin els d'una altra.

## 2. Classifica segons la funcionalitat i prestacions específiques

**1. Quina és la diferència entre Git i GitHub?**

Git és una eina que s'instal·la al teu ordinador i serveix per fer el seguiment dels canvis del codi en local. GitHub és una plataforma web que utilitza Git per emmagatzemar repositoris al núvol i facilitar la col·laboració entre persones.

**2. Quines funcionalitats ofereix GitHub a més del control de versions del codi?**

GitHub ofereix eines per gestionar tasques i errors (*issues*), revisar i discutir canvis de codi (*pull requests*), publicar pàgines web (*GitHub Pages*), automatitzar processos (*GitHub Actions*), i gestionar equips i permisos dins d'un projecte.

**3. Definició de funcionalitats de GitHub:**

- **Repositoris**: Carpeta del projecte allotjada a GitHub on es guarda tot el codi i l'historial de canvis.
- **Issues**: Sistema per reportar errors, proposar millores o fer un seguiment de tasques pendents dins d'un projecte.
- **Pull requests**: Sol·licituds per fusionar canvis d'una branca a una altra. Permeten revisar i discutir el codi abans d'acceptar-lo.
- **GitHub Pages**: Funcionalitat que permet publicar una pàgina web estàtica directament des d'un repositori de GitHub, de manera gratuïta.

**4. Quina funció tenen les branques (branches) en Git?**

Les branques permeten treballar en una funcionalitat nova o en una correcció sense afectar el codi principal. Cada branca és una còpia independent on pots fer canvis lliurement, i quan el treball està llest, es fusiona amb la branca principal.

**5. Per a què serveixen les pull requests en un projecte col·laboratiu?**

Serveixen perquè un company pugui revisar els canvis que has fet abans de fusionar-los amb la branca principal. Permet comentar línies de codi, suggerir millores i assegurar-se que el codi és correcte abans d'acceptar-lo.


## 3. Gestiona els comptes d'usuari

**1. Què és un compte d'usuari a GitHub i per què és necessari?**

És el perfil personal que t'identifica a la plataforma. Sense compte no pots crear repositoris propis, col·laborar en projectes aliens ni pujar canvis a cap repositori remot.

**2. Quina diferència hi ha entre un repositori públic i un privat?**

Un repositori públic el pot veure qualsevol persona d'internet, però només els col·laboradors autoritzats hi poden fer canvis. Un repositori privat només el poden veure i modificar les persones que el propietari hagi convidat.

**3. Com es pot afegir un col·laborador a un repositori de GitHub?**

Des de la configuració del repositori (*Settings → Collaborators*), es pot buscar l'usuari pel seu nom o correu electrònic i enviar-li una invitació. Un cop l'accepti, tindrà accés al repositori.

**4. Quins rols o permisos pot tenir un usuari dins d'un repositori?**

GitHub permet assignar diferents nivells d'accés: *Read* (només llegir), *Triage* (gestionar issues), *Write* (pujar canvis), *Maintain* (gestionar el repositori sense canviar la configuració crítica) i *Admin* (accés total).

**5. Per què és important gestionar correctament els permisos dels usuaris?**

Perquè si tothom té permisos d'administrador, qualsevol pot esborrar branques, modificar la configuració o fins i tot eliminar el repositori per error. Cal donar a cada persona el nivell d'accés mínim necessari per fer la seva feina.


## 4. Aplica criteris de seguretat en l'accés dels usuaris

**1. Quins riscos pot tenir compartir un repositori amb massa permisos?**

Si un usuari té més permisos dels necessaris, podria modificar o eliminar codi important per error, sobreescriure la branca principal o accedir a informació confidencial del projecte.

**2. Per què és recomanable utilitzar tokens o SSH per accedir a GitHub?**

Les contrasenyes convencionals són menys segures perquè si les intercepten, l'atacant té accés complet al compte. Els tokens i les claus SSH permeten limitar l'accés (per exemple, només per a un repositori concret) i es poden revocar fàcilment sense canviar la contrasenya.

**3. Què passaria si es publiquen contrasenyes o claus privades dins d'un repositori?**

Qualsevol persona que tingui accés al repositori (i si és públic, tothom) podria veure aquelles credencials i accedir als serveis que protegeixin. Això pot causar des de robatori de dades fins a costos econòmics si es tracta de claus d'APIs de pagament.

**4. Quines bones pràctiques de seguretat s'han de seguir a GitHub?**

- No pujar mai contrasenyes, tokens ni claus al repositori.
- Usar un fitxer `.gitignore` per excloure fitxers sensibles.
- Activar l'autenticació en dos passos al compte.
- Revisar regularment qui té accés als repositoris.
- Usar variables d'entorn per gestionar dades sensibles.

**5. Per què és important controlar qui pot fer push a la branca principal?**

La branca principal (*main*) sol ser la versió estable del projecte. Si tothom hi pot pujar canvis directament, és fàcil introduir errors sense revisió prèvia. El millor és obligar a fer-ho mitjançant pull requests, de manera que sempre hi hagi una revisió abans d'acceptar els canvis.


## 5. Utilitza les aplicacions de forma cooperativa

**1. Com poden treballar diverses persones al mateix projecte amb GitHub?**

Cadascú clona el repositori al seu ordinador, crea una branca pròpia per treballar en la seva tasca i, quan acaba, obre una pull request perquè els companys revisin els canvis. Un cop aprovats, es fusionen amb la branca principal. Així tothom treballa en paral·lel sense interferir-se.

**2. Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**

Perquè si algo surt malament, la branca principal no es veu afectada. Les branques permeten experimentar, corregir errors o afegir funcionalitats de forma aïllada, i només s'incorporen al codi principal quan estan acabades i revisades.


## 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions

**1. Per què és important incloure un fitxer README.md en un repositori?**

El README és la primera cosa que veu qualsevol persona que visita el repositori. Explica de què tracta el projecte, com instal·lar-lo, com usar-lo i com contribuir-hi. Sense README, el projecte és difícil d'entendre per a qualsevol persona aliena.

**2. Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**

Markdown és un format de text senzill que es converteix automàticament en HTML a GitHub. Permet afegir títols, llistes, negreta, codi i enllaços de manera ràpida i sense necessitat de saber HTML. A més, és llegible fins i tot en text pla.

**3. Com pot ajudar la documentació a altres desenvolupadors?**

Una bona documentació estalvia temps i preguntes. Si el projecte explica clarament com funciona, com configurar-lo i quines decisions s'han pres, qualsevol desenvolupador pot entendre'l i contribuir-hi sense haver de demanar ajuda constantment ni llegir tot el codi des de zero.
