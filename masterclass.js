/* L'ARÈNE — MASTERCLASS. Dossiers de fond NEUTRES pour se former avant d'avoir une position.
   Distingue toujours faits (chiffres, études) et valeurs (ce qui reste à trancher). v1 2026-08-22.
   Champs : titre, sub, sections[{t,c}], camps[{nom,pos}], chiffres[], pieges[], trancher[], sources[] */

const MASTERCLASS = [

{
  id:"salaire-hf", theme:"Genre", titre:"L'écart salarial hommes-femmes",
  sub:"Le sujet le plus piégé par les chiffres. Apprends à distinguer les trois écarts avant d'avoir un avis.",
  sections:[
    {t:"Le piège de base : il y a TROIS écarts, pas un",c:"On mélange en permanence trois chiffres très différents.<br><br><b>1. L'écart brut</b> (« les femmes gagnent 24 % de moins ») : compare TOUS les revenus salariaux, sans rien contrôler. Il inclut le temps partiel, les métiers, les heures. Ce n'est PAS « à travail égal ».<br><br><b>2. L'écart ajusté</b> (à temps plein, poste, secteur, expérience comparables) : bien plus petit, ~4-8 %. C'est le « résidu inexpliqué ».<br><br><b>3. « À travail égal, salaire égal »</b> (même poste, même employeur) : écart faible, quelques %. Le gros de l'inégalité se joue <i>avant</i> (dans les métiers choisis/subis, les heures, les interruptions), pas à poste identique.<br><br>⚠️ Les deux camps trichent : l'un brandit le brut (24 %) comme si c'était de la discrimination pure ; l'autre brandit l'ajusté (~4 %) comme s'il n'y avait aucun problème. Les deux se trompent."},
    {t:"D'où vient l'écart, vraiment ?",c:"Les données récentes convergent sur quatre causes, par ordre d'importance :<br><br>• <b>La parentalité (« child penalty »)</b> — LE facteur dominant. Les revenus des femmes chutent durablement après le 1er enfant ; ceux des hommes, non. Au Danemark, ça explique ~80 % de l'écart restant (Kleven et al.).<br>• <b>La ségrégation professionnelle</b> : femmes surreprésentées dans des secteurs/métiers moins payés (soin, éducation) — en partie choix, en partie normes/contraintes.<br>• <b>Les heures et la « disponibilité »</b> : les emplois les mieux payés surpaient les longues heures et la dispo permanente (Goldin, « greedy jobs ») ; la charge parentale retombe plus sur les femmes.<br>• <b>Le résidu inexpliqué</b> (négociation, réseaux, discrimination directe) : réel mais minoritaire, et « inexpliqué » ≠ « discrimination prouvée » (peut cacher des variables non mesurées)."},
    {t:"Ce que ça change pour l'action",c:"Si l'écart vient surtout de la parentalité et de la structure des emplois, alors les leviers efficaces ne sont pas les mêmes que si c'était de la discrimination pure :<br><br>• <b>Congé parental égalitaire</b> et non transférable (forcer les pères à en prendre) → réduit la child penalty.<br>• <b>Modes de garde</b> (crèches) → permet le retour à l'emploi.<br>• <b>Transparence salariale</b> → attaque le résidu de discrimination.<br>• <b>Repenser les « greedy jobs »</b> (flexibilité) → Goldin.<br><br>La « discrimination à l'embauche/au salaire » existe (des études par CV/testing la mesurent) mais n'est pas le gros du chiffre brut."}
  ],
  camps:[
    {nom:"« C'est une injustice systémique à corriger »",pos:"Même l'écart ajusté a un résidu inexpliqué compatible avec la discrimination ; et l'écart brut reflète des structures (qui fait les enfants, quels métiers sont dévalorisés) qui ne sont pas de purs « choix libres » mais des normes de genre. Une société juste doit corriger ces structures (congés, garde, revalorisation des métiers féminins)."},
    {nom:"« C'est surtout des choix et des contraintes biologiques/familiales »",pos:"Une fois qu'on contrôle heures, métier et interruptions, l'écart fond. Le reste reflète des préférences moyennes différentes et la réalité de la maternité, pas un complot. Forcer l'égalité de résultat (quotas) nie ces choix et peut être contre-productif."}
  ],
  chiffres:[
    "France : écart de revenu salarial ~24 % (tous temps de travail), ~14-15 % en équivalent temps plein, ~4 % « toutes choses égales ». — INSEE",
    "USA : les femmes gagnent ~82-84 % du salaire médian des hommes à temps plein (brut) ; l'écart ajusté est bien plus faible. — US Census / BLS",
    "La « child penalty » explique ~80 % de l'écart de genre restant au Danemark ; les revenus des mères chutent durablement, pas ceux des pères. — Kleven, Landais & Søgaard (2019, AEJ: Applied)",
    "Claudia Goldin (Prix Nobel d'économie 2023) : l'écart vient surtout de la parentalité et des « greedy jobs » qui surpaient les longues heures — pas d'une discrimination à poste identique."
  ],
  pieges:[
    "« Les femmes gagnent 24 % de moins pour le même travail » → FAUX : le 24 % est brut (inclut temps partiel et métiers). À poste/employeur identiques, l'écart est de quelques %.",
    "« L'écart ajusté est de 4 %, donc pas de problème » → trop rapide : le résidu peut être de la discrimination, et l'écart brut reflète des structures (parentalité) qui posent une vraie question de justice.",
    "« Inexpliqué » = « discriminatoire » → non : ça peut inclure des variables non mesurées. À manier avec prudence dans les deux sens."
  ],
  trancher:[
    "Les « choix » de métier/d'heures/de garde des enfants sont-ils des choix libres à respecter, ou des normes de genre à corriger ? (C'est une question de valeurs, pas de chiffres.)",
    "Faut-il viser l'égalité des chances (mêmes options) ou l'égalité des résultats (mêmes salaires moyens) ? Quotas : oui/non ?",
    "Revaloriser les « métiers féminins » (soin) : justice ou distorsion du marché ?"
  ],
  sources:["INSEE — écarts de salaires femmes-hommes","Kleven, Landais & Søgaard (2019)","Claudia Goldin, «Career and Family» (2021)"]
},

{
  id:"genre-2sens", theme:"Genre", titre:"Les inégalités de genre vont dans les deux sens",
  sub:"Conscription, suicide, prison, éducation… Une vue honnête regarde TOUS les désavantages, pas seulement ceux d'un camp.",
  sections:[
    {t:"L'angle mort : le genre désavantage aussi les hommes",c:"Le débat public se concentre sur les désavantages des femmes (réels), mais une analyse honnête voit que les rôles de genre traditionnels créent des désavantages <b>des deux côtés</b> — souvent les deux faces d'une même pièce :<br><br>• l'homme « pourvoyeur/protecteur jetable » → surmortalité, conscription, prison, suicide, sans-abrisme ;<br>• la femme « care/domestique » → écart salarial, charge mentale, plafond de verre, violences.<br><br>Ce ne sont pas des « camps » à opposer : ce sont deux produits du même système de rôles."},
    {t:"La conscription : l'inégalité que personne ne mentionne",c:"Historiquement et légalement, la mobilisation forcée pour la guerre a visé les <b>hommes</b>. Aux USA, seuls les hommes (18-25 ans) doivent s'enregistrer au Selective Service ; une commission fédérale a recommandé en 2021 d'y inclure les femmes (non adopté). Les rôles de combat y sont ouverts aux femmes depuis 2015-2016. En France, la conscription est suspendue depuis 1997.<br><br>C'est un cas net d'inégalité au détriment des hommes, rarement traité comme telle — utile pour tester la cohérence de qui parle d'« égalité »."},
    {t:"Les grands écarts, chiffrés (dans les deux sens)",c:"<b>Au détriment des hommes :</b> ~96 % des détenus, ~90 %+ des morts au travail, ~3× plus de suicides, ~5-6 ans d'espérance de vie en moins, majorité des sans-abri et des morts violentes, décrochage scolaire et minorité parmi les diplômés du supérieur aujourd'hui.<br><br><b>Au détriment des femmes :</b> écart salarial, ~1,5-2× plus de travail domestique non rémunéré, très grande majorité des victimes de violences sexuelles et conjugales, minorité aux postes de pouvoir (PDG, parlements).<br><br>Aucune de ces listes n'annule l'autre. Les deux sont vraies."},
    {t:"Comment un esprit rigoureux traite ça",c:"Deux pièges symétriques :<br>• le « oppression Olympics » (« mon camp souffre plus ») — stérile ;<br>• le « whataboutism » (sortir les hommes uniquement pour clore le sujet des femmes) — malhonnête.<br><br>La position solide : reconnaître chaque désavantage <i>là où il est</i>, mesuré, sans hiérarchie a priori, et se demander pour chacun : est-ce dû à la discrimination, aux normes, à la biologie, aux choix ? La réponse diffère selon le cas."}
  ],
  camps:[
    {nom:"« Le féminisme couvre déjà les hommes »",pos:"Les désavantages masculins (suicide, prison, conscription) viennent aussi des rôles de genre rigides ; les combattre, c'est le projet féministe bien compris (déconstruire la masculinité toxique et le rôle de pourvoyeur). Pas besoin d'un mouvement séparé."},
    {nom:"« Les hommes ont leurs propres enjeux, ignorés »",pos:"Dans les faits, les politiques et le discours se concentrent quasi exclusivement sur les femmes ; les désavantages masculins (santé mentale, éducation des garçons, suicide) sont sous-traités. Les nommer n'est pas « anti-femmes », c'est compléter le tableau."}
  ],
  chiffres:[
    "Suicide : les hommes se suicident ~3 fois plus que les femmes (France ~3:1 ; USA ~3,5-4:1). — Santé publique France / CDC",
    "Prison : ~96 % des personnes détenues en France sont des hommes (~93 % aux USA). — Ministère de la Justice / BJS",
    "Accidents mortels du travail : ~90 % et plus sont des hommes. — INRS / BLS",
    "Espérance de vie : les femmes vivent ~5-6 ans de plus (France : ~85,5 vs ~79,5). — INSEE",
    "Éducation : dans l'OCDE, les femmes sont désormais majoritaires parmi les diplômés du supérieur ; les garçons décrochent plus. — OCDE",
    "Conscription US : seuls les hommes s'enregistrent au Selective Service ; extension aux femmes recommandée en 2021, non adoptée."
  ],
  pieges:[
    "Croire qu'il faut « choisir un camp » : les désavantages coexistent, ils ne s'annulent pas.",
    "Confondre « moyenne » et « individu » : ces écarts sont statistiques, ils ne disent rien d'une personne donnée.",
    "Attribuer tout à la discrimination OU tout à la biologie/aux choix : la cause varie selon l'écart (salaire ≠ suicide ≠ prison)."
  ],
  trancher:[
    "Faut-il un traitement symétrique (mêmes efforts pour les désavantages des deux sexes) ou prioriser selon la gravité/le nombre ?",
    "La conscription masculine : injustice à abolir, à étendre aux femmes, ou à maintenir ?",
    "Les écarts issus de préférences moyennes (métiers, risque) doivent-ils être corrigés, ou respectés comme des choix ?"
  ],
  sources:["INSEE ; Santé publique France ; OCDE ; BJS/BLS (données)","Roy Baumeister, «Is There Anything Good About Men?» (2010)","Débat sur la « male disposability » / rôles de genre"]
},

{
  id:"ue-efficace", theme:"Europe", titre:"L'Union européenne est-elle inefficace / antidémocratique ?",
  sub:"Ce qu'est vraiment l'UE, ce qu'on lui reproche à raison, et ce qui relève du mythe.",
  sections:[
    {t:"Ce qu'est l'UE (pour ne pas dire de bêtises)",c:"27 États, ~448 M d'habitants. Emboîtement de plusieurs cercles : marché unique + union douanière (les 27), zone euro (20), Schengen (libre circulation).<br><br><b>Institutions :</b><br>• <b>Commission</b> : propose les lois et exécute (le « gouvernement » technique). ~32 000 fonctionnaires — moins qu'une grande ville.<br>• <b>Parlement</b> : 720 députés <i>élus</i> au suffrage direct ; colégislateur.<br>• <b>Conseil de l'UE</b> (ministres) + <b>Conseil européen</b> (chefs d'État élus) : l'autre colégislateur.<br>• <b>CJUE</b> (justice), <b>BCE</b> (monnaie).<br><br>Budget : ~1 % du PIB de l'UE (~170 Md€/an) — très petit vs budgets nationaux. Mythe du « monstre budgétaire » : faux."},
    {t:"Le « déficit démocratique » : le vrai débat",c:"La critique : la <b>Commission n'est pas élue directement</b> ; elle est nommée par les États et investie par le Parlement. Les citoyens ne « votent pas pour un gouvernement européen ».<br><br>La défense : le Parlement (élu) et le Conseil (gouvernements élus) contrôlent tout ; les pouvoirs du Parlement n'ont cessé de croître. Le système « spitzenkandidat » (2014) liait la présidence de la Commission au résultat des européennes — mais il a été <i>contourné</i> en 2019 (nomination de von der Leyen), ce qui a relancé la critique.<br><br>C'est un vrai point, pas un mythe — mais « déficit démocratique » ≠ « dictature de Bruxelles »."},
    {t:"Efficace ou pas ? Ça dépend du domaine",c:"<b>Très efficace :</b> le commerce (l'UE négocie en bloc, poids énorme), la concurrence (amendes aux géants), et surtout la <b>norme</b> : l'« effet Bruxelles » (Bradford) — RGPD, normes chimiques, sécurité — s'imposent mondialement parce que personne ne veut perdre le marché européen.<br><br><b>Lente / bloquée :</b> la politique étrangère et fiscale (règle de l'<b>unanimité</b> → un seul État bloque), la défense, l'harmonisation sociale. La crise de la zone euro (2010-2012) a montré une gouvernance mal outillée + une austérité imposée douloureuse (Grèce).<br><br>Donc « inefficace » est trop grossier : elle est puissante là où elle est intégrée, faible là où les États gardent un veto."},
    {t:"Le vrai clivage",c:"Le débat honnête n'est pas « UE bien / mal » mais : <b>plus ou moins d'intégration ?</b><br>• <b>Fédéralistes</b> : les défis (climat, géopolitique, tech) dépassent les États → plus d'Europe, moins d'unanimité.<br>• <b>Souverainistes</b> : la légitimité démocratique est nationale → renationaliser des compétences.<br>• <b>Statu quo pragmatique</b> : garder l'équilibre actuel.<br><br>Le Brexit est le test grandeur nature : le RU a repris sa souveraineté, au prix de frictions commerciales — chaque camp y lit ce qu'il veut."}
  ],
  camps:[
    {nom:"« L'UE est un carcan technocratique inefficace »",pos:"Décisions lentes, illisibles, prises par des non-élus ; PAC coûteuse ; régulation tatillonne ; austérité imposée aux peuples (Grèce) ; référendums contournés. La légitimité démocratique réelle reste nationale ; l'UE dilue la responsabilité et la souveraineté."},
    {nom:"« L'UE est notre seul moyen de peser »",pos:"Aucun État européen seul ne pèse face aux USA/Chine. Le marché unique, la monnaie, la puissance normative (RGPD) et 70 ans de paix sont des acquis massifs. Les blocages viennent justement du manque d'intégration (unanimité), pas de son excès. La réponse est plus d'Europe, mieux faite."}
  ],
  chiffres:[
    "Budget de l'UE : ~1 % du RNB de l'Union (~170 Md€/an) + plan de relance NextGenerationEU (~800 Md€, post-COVID). — Commission européenne",
    "La Commission emploie ~32 000 personnes — comparable à une grande mairie, loin du « monstre bureaucratique ». — Commission européenne",
    "« Effet Bruxelles » : via le RGPD, les normes chimiques (REACH) et la concurrence, l'UE fixe des standards adoptés mondialement. — Anu Bradford, «The Brussels Effect» (2020)",
    "Prix Nobel de la paix 2012 décerné à l'UE pour sa contribution à la paix et la réconciliation en Europe.",
    "PAC : ~1/3 du budget de l'UE — la cible n°1 des critiques d'inefficacité."
  ],
  pieges:[
    "« Bruxelles impose tout » → la plupart des lois UE sont co-décidées par le Parlement élu ET les gouvernements élus ; la Commission propose, elle ne décide pas seule.",
    "« L'UE coûte une fortune » → ~1 % du PIB ; l'essentiel de la dépense publique reste national.",
    "Confondre l'UE (27, marché unique) et la zone euro (20) et Schengen : ce sont des cercles différents."
  ],
  trancher:[
    "Où placer le curseur souveraineté nationale ↔ coordination supranationale ? (Ton cadre : l'UE est justifiée dans l'exacte mesure où elle produit du bien-être/de la coordination que les États seuls ne peuvent pas — ni sacrée, ni diabolique.)",
    "Faut-il supprimer l'unanimité (efficacité) au prix d'imposer des décisions à des États minoritaires (légitimité) ?",
    "Le « déficit démocratique » est-il rédhibitoire, ou acceptable pour le gain de puissance collective ?"
  ],
  sources:["Anu Bradford, «The Brussels Effect» (2020)","Commission européenne — budget & institutions","Débat fédéralisme / souverainisme ; cas du Brexit"]
},

{
  id:"culture", theme:"Société", titre:"Qu'est-ce que la culture ?",
  sub:"Un mot qui cache trois concepts très différents — et une arme politique. Démêle-les avant de t'en servir.",
  sections:[
    {t:"Trois sens qu'on confond en permanence",c:"On dit « culture » pour trois choses distinctes :<br><br><b>1. La culture anthropologique</b> — le mode de vie d'un groupe : langue, croyances, normes, techniques, rites (Tylor, 1871). En ce sens, <i>tout le monde</i> a une culture, aucune n'est « sans culture ».<br><br><b>2. La culture savante/esthétique</b> — les œuvres, la « haute culture », « un homme cultivé ». Là on hiérarchise (chef-d'œuvre vs navet).<br><br><b>3. La culture identitaire/patrimoniale</b> — l'héritage d'un peuple, brandi comme « notre culture ». C'est ce sens-là qui devient explosif en politique."},
    {t:"Culture vs nature",c:"La culture, c'est ce qui est <b>appris et transmis</b>, par opposition à l'inné. Presque tout comportement humain mêle les deux (le débat inné/acquis). Le piège : la culture est une « seconde nature », si profondément intériorisée qu'elle <i>paraît</i> naturelle — d'où l'illusion que « nos » manières sont les manières normales, et celles des autres, bizarres."},
    {t:"Une culture, ça bouge et ça s'emprunte",c:"Aucune culture n'est un bloc pur et figé : elles se transforment sans cesse et s'empruntent tout (le couscous, la pizza, les chiffres dits « arabes » venus d'Inde…). Ce qu'on croit éternel est souvent récent et métissé. D'où la fragilité de l'idée d'une culture « authentique » à protéger telle quelle. (Débat actuel : l'<b>appropriation culturelle</b> — emprunter, est-ce hommage, échange, ou pillage ?)"},
    {t:"L'usage politique du mot",c:"« Défendre notre culture », « choc des civilisations » (Huntington, 1996) : le mot sert à tracer un « nous » et un « eux ». Il peut <b>rassembler</b> (une culture commune qui fait société) ou <b>exclure</b> (ceux qui « ne sont pas de chez nous »). La vraie question à se poser à chaque fois : parle-t-on d'un <i>fait</i> (des pratiques réellement partagées) ou d'une <i>frontière</i> qu'on érige pour inclure ou rejeter ?"}
  ],
  camps:[
    {nom:"Universalisme : on peut classer les pratiques",pos:"Toutes les pratiques ne se valent pas : celle qui réduit la souffrance ou étend les libertés est meilleure que celle qui les nie (excision, esclavage). Refuser tout jugement au nom du « respect des cultures », c'est abandonner les victimes — souvent au sein même de ces cultures."},
    {nom:"Relativisme culturel : chaque culture se juge de l'intérieur",pos:"Nos critères (bien-être, droits) sont eux-mêmes culturels ; les imposer, c'est de l'ethnocentrisme, souvent l'habit de la domination coloniale. Une pratique n'a de sens que dans son contexte, et personne n'a de point de vue « de nulle part » pour hiérarchiser les cultures."}
  ],
  chiffres:[
    "E. B. Tylor (1871) : première définition anthropologique — la culture comme « tout complexe » des savoirs, croyances et coutumes appris en société.",
    "Franz Boas (début XXᵉ) : fonde le relativisme culturel — juger une culture avec ses propres critères, pas ceux de l'observateur.",
    "Claude Lévi-Strauss, « Race et histoire » (1952) : critique de l'idée de « progrès » unique et de la hiérarchie des cultures.",
    "Samuel Huntington, « Le Choc des civilisations » (1996) : thèse (très contestée) d'un monde structuré par des blocs culturels rivaux."
  ],
  pieges:[
    "Glisser du sens anthropologique (tout le monde a une culture) au sens patrimonial (« notre » culture menacée) sans s'en apercevoir.",
    "Traiter une culture comme un bloc homogène et figé, alors qu'elle est plurielle, mouvante et métissée.",
    "Confondre « juger une pratique » (possible selon un critère assumé) et « juger une culture entière » (grossier : chaque culture mêle le meilleur et le pire)."
  ],
  trancher:[
    "Peut-on hiérarchiser — et selon quel critère ? (Ta position déjà posée : on classe les <i>pratiques</i> selon le bien-être, pas les cultures-blocs ; et le test coupe aussi contre chez toi.)",
    "« Défendre une culture » : bien commun légitime, ou masque d'exclusion ?",
    "L'appropriation culturelle : hommage, échange, ou domination ?"
  ],
  sources:["E. B. Tylor (1871) ; Franz Boas — relativisme","Claude Lévi-Strauss, « Race et histoire » (1952)","Samuel Huntington (1996) — à critiquer"]
},

{
  id:"etre-francais", theme:"Société", titre:"Qu'est-ce qu'être français ? (nation, nationalité, test)",
  sub:"Nation du sang ou du contrat ? Du sol ou des ancêtres ? Et faut-il un test pour le devenir ?",
  sections:[
    {t:"Deux façons de définir une nation",c:"<b>La nation civique</b> (Renan, 1882, « Qu'est-ce qu'une nation ? ») : une nation est un « plébiscite de tous les jours » — le vouloir-vivre-ensemble et l'adhésion à un projet commun, pas le sang. On <i>devient</i> français.<br><br><b>La nation ethno-culturelle</b> (tradition allemande — Herder, Fichte) : la nation est un héritage — langue, ancêtres, culture, continuité. On <i>naît</i> d'un peuple.<br><br>La France se réclame de la tradition <b>civique</b> et républicaine — mais la tension entre les deux traverse tous ses débats identitaires."},
    {t:"Comment on devient français : le sol ou le sang ?",c:"<b>Droit du sol</b> (jus soli) : on est du pays où l'on naît. <b>Droit du sang</b> (jus sanguinis) : on hérite la nationalité de ses parents. La France <b>mêle les deux</b> : nationalité par filiation + droit du sol (un enfant né en France de parents étrangers devient français à sa majorité, sous condition de résidence) + <b>naturalisation</b> (après résidence, maîtrise du français et « assimilation »)."},
    {t:"Assimilation, intégration, multiculturalisme",c:"Trois modèles pour gérer la diversité :<br>• <b>Assimilation</b> (modèle républicain français) : adopter la norme commune, laisser ses particularités dans le privé (laïcité).<br>• <b>Intégration</b> : participer pleinement tout en gardant certaines particularités.<br>• <b>Multiculturalisme</b> (anglo-saxon, canadien) : l'État reconnaît et accommode les communautés.<br>Chacun a une force (cohésion / reconnaissance) et un risque (uniformisation / séparatisme)."},
    {t:"Faut-il un « test » pour devenir français ?",c:"La France en a déjà un, informel : niveau de langue exigé, entretien d'« assimilation », connaissance des valeurs (« livret du citoyen »). D'autres pays ont des tests <i>formels</i> : le <i>Life in the UK Test</i>, le test civique américain, le test allemand. Le débat : un socle commun exigé <b>garantit-il</b> l'intégration, ou n'est-il qu'une <b>barrière arbitraire</b> et un vernis (on peut réciter des valeurs sans y adhérer) ?"}
  ],
  camps:[
    {nom:"Nation civique : est français qui adhère au projet",pos:"La nationalité n'est ni le sang ni l'origine mais l'adhésion à un projet politique commun (liberté, égalité, laïcité). C'est inclusif — n'importe qui peut le devenir — et fidèle à l'universalisme républicain. Un test de valeurs a du sens : c'est le contrat qu'on rejoint librement."},
    {nom:"Nation d'héritage : être français, ça se transmet",pos:"Une nation n'est pas qu'un contrat abstrait : c'est une langue, une histoire, une culture, une continuité qu'on reçoit et transmet. Réduire ça à des « valeurs » que tout le monde peut réciter vide la nation de sa substance et fragilise la cohésion. L'appartenance se construit dans le temps long, pas par un formulaire."}
  ],
  chiffres:[
    "Ernest Renan, « Qu'est-ce qu'une nation ? » (1882) : la nation comme « plébiscite de tous les jours », fondée sur le consentement et non la race.",
    "Opposition classique : conception française civique (Renan) vs conception allemande ethno-culturelle (Herder, Fichte).",
    "La France combine droit du sol et droit du sang ; la naturalisation exige langue + « assimilation » (livret du citoyen).",
    "Tests de citoyenneté formels comparables : Royaume-Uni (« Life in the UK »), États-Unis (civics test), Allemagne."
  ],
  pieges:[
    "Croire que « civique » et « ethnique » sont étanches : en pratique, tous les pays mélangent les deux.",
    "Confondre nationalité (statut juridique), citoyenneté (droits politiques) et identité (sentiment d'appartenance) — trois choses distinctes.",
    "Prendre le modèle français pour une évidence universelle : d'autres démocraties assument le multiculturalisme sans s'effondrer."
  ],
  trancher:[
    "Être français = adhérer à des valeurs, ou hériter d'une culture ? (Ton cadre : la nation est un outil de coordination justifié par ce qu'il produit, pas une essence → penche civique/fonctionnel.)",
    "Un test de nationalité : garantie utile d'un socle commun, ou barrière arbitraire et symbolique ?",
    "Assimilation, intégration ou multiculturalisme : lequel produit le plus de bien-être et de cohésion réelle ?"
  ],
  sources:["Ernest Renan, « Qu'est-ce qu'une nation ? » (1882)","Dominique Schnapper, « La Communauté des citoyens » (1994)","Débats jus soli / jus sanguinis ; tests de citoyenneté comparés"]
},

{
  id:"israel-palestine", theme:"Monde", titre:"Le conflit israélo-palestinien",
  sub:"Le récit des faits, de la fin du XIXᵉ à aujourd'hui — et les deux narratifs, chacun sous son meilleur jour.",
  sections:[
    {t:"Comment lire ce dossier (méthode)",c:"C'est le conflit le plus polarisé du monde ; presque chaque mot est disputé (jusqu'aux noms de lieux). On sépare ici trois niveaux : les <b>faits établis</b> (dates, événements), les <b>faits contestés</b> (les historiens débattent), et les <b>lectures</b> (ce que chaque camp en conclut — affaire de valeurs). Principe de départ : <b>deux peuples</b> ont un attachement réel à cette terre et ont vécu des souffrances réelles. Nier l'un ou l'autre, c'est déjà avoir quitté les faits."},
    {t:"Origines : deux nationalismes (fin XIXᵉ – 1917)",c:"Fin XIXᵉ, face aux persécutions et pogroms en Europe (et à l'affaire Dreyfus), naît le <b>sionisme</b> (Herzl) : l'idée que les Juifs, peuple persécuté, ont besoin d'un État — sur la terre de leur histoire ancienne. Au même moment, la <b>Palestine ottomane</b> est peuplée en grande majorité d'Arabes (musulmans et chrétiens), qui développent aussi une conscience nationale. Deux mouvements nationaux, une seule terre."},
    {t:"Le Mandat britannique (1917 – 1947)",c:"En 1917, la <b>déclaration Balfour</b> : le Royaume-Uni soutient « un foyer national juif » en Palestine « sans porter atteinte aux droits des communautés non juives » — promesse ambiguë. Les Britanniques administrent la Palestine. L'immigration juive s'intensifie, surtout avec la <b>montée du nazisme</b> (années 1930) ; les tensions explosent (<b>révolte arabe de 1936-39</b>). Puis la <b>Shoah</b> rend l'urgence d'un refuge juif tragiquement évidente."},
    {t:"1947-48 : partition, création d'Israël, Nakba",c:"En <b>1947</b>, l'ONU vote un <b>plan de partage</b> (deux États + Jérusalem internationale). Les dirigeants juifs l'acceptent ; les dirigeants arabes et les États voisins le <b>rejettent</b> (refus de partager une terre à majorité arabe). En <b>1948</b>, Israël déclare son indépendance ; les États arabes l'attaquent. Israël l'emporte. ~<b>700 000 Palestiniens</b> fuient ou sont expulsés : la <b>Nakba</b> (« catastrophe »). Côté israélien : la « guerre d'indépendance ». <i>Fait longtemps nié des deux côtés, aujourd'hui documenté par les « Nouveaux Historiens » israéliens (Morris) : 1948 mêle fuites ET expulsions et massacres.</i>"},
    {t:"1967 : l'occupation et les colonies",c:"La <b>Guerre des Six Jours (1967)</b> : Israël, se sentant encerclé, l'emporte et occupe la <b>Cisjordanie, Gaza, Jérusalem-Est</b> (plus le Golan et le Sinaï). Début de l'<b>occupation militaire</b> des Palestiniens, qui dure encore. La résolution <b>242</b> de l'ONU pose « la paix contre les territoires ». Israël commence à installer des <b>colonies</b> dans les territoires occupés — jugées <b>illégales</b> par l'essentiel de la communauté internationale (4ᵉ Convention de Genève) ; Israël conteste cette lecture."},
    {t:"Des guerres aux espoirs de paix (1973 – 2000)",c:"Guerre de 1973 ; puis <b>paix avec l'Égypte (1979)</b>, qui récupère le Sinaï — preuve qu'un accord est possible. <b>Première Intifada</b> (soulèvement palestinien, 1987). <b>Accords d'Oslo (1993)</b> : reconnaissance mutuelle Israël-OLP, création de l'<b>Autorité palestinienne</b>, autonomie partielle — le pic des espoirs. En <b>1995</b>, le Premier ministre israélien <b>Rabin est assassiné</b> par un extrémiste juif. En <b>2000</b>, les négociations de Camp David échouent — chaque camp en rejette la faute sur l'autre."},
    {t:"Gaza, Hamas, blocus (2000 – 2023)",c:"<b>Deuxième Intifada</b> (2000-2005) : attentats-suicides côté palestinien, répressions et réoccupations côté israélien. En <b>2005</b>, Israël <b>se retire de Gaza</b> (colons et armée partis). En <b>2006</b>, le <b>Hamas</b> (islamiste, qui refuse de reconnaître Israël) gagne les élections ; en <b>2007</b> il prend Gaza par la force (rupture avec le Fatah, resté en Cisjordanie). Israël et l'Égypte imposent un <b>blocus</b> de Gaza. Guerres à répétition : 2008-09, 2012, 2014, 2021. Les colonies continuent de s'étendre en Cisjordanie."},
    {t:"7 octobre 2023 et la guerre de Gaza",c:"Le <b>7 octobre 2023</b>, le Hamas mène une attaque de masse en Israël : ~<b>1 200 morts</b> (surtout des civils) et ~<b>250 otages</b> — l'attaque la plus meurtrière contre des Juifs depuis la Shoah. Israël lance une <b>guerre à Gaza</b> d'une ampleur inédite : <b>dizaines de milliers de morts palestiniens</b>, déplacements massifs, catastrophe humanitaire. Le conflit fracture l'opinion mondiale. <i>Les bilans et les qualifications juridiques (proportionnalité, crimes de guerre, accusation de « génocide ») font l'objet de procédures et de débats intenses.</i>"},
    {t:"Les nœuds à dénouer",c:"Tout accord bute sur les mêmes points : les <b>frontières</b> (retour aux lignes de 1967 ?), <b>Jérusalem</b> (les deux la revendiquent comme capitale), les <b>réfugiés</b> palestiniens et leur « droit au retour », les <b>colonies</b>, la <b>sécurité</b> d'Israël, la <b>reconnaissance</b> mutuelle, et jusqu'à l'<b>eau</b>."},
    {t:"Les solutions sur la table",c:"<b>Deux États</b> (un État palestinien à côté d'Israël — longtemps le consensus international, aujourd'hui au point mort). <b>Un seul État</b> binational (mais pose la question : égalité des droits pour tous — au risque, pour Israël, de n'être plus « juif et démocratique » — ou domination d'un groupe sur l'autre). <b>Le statu quo</b> (occupation prolongée, cycles de violence). Aucune n'est indolore."}
  ],
  camps:[
    {nom:"Le récit israélien / sioniste",pos:"Les Juifs sont un peuple avec un lien millénaire à cette terre, persécuté partout jusqu'à la Shoah ; ils ont un besoin existentiel d'un État-refuge. Ils ont accepté le partage de 1947 ; ce sont les Arabes qui l'ont refusé et ont attaqué en 1948. Israël est une démocratie entourée d'ennemis dont certains (Hamas) appellent à sa destruction ; il s'est retiré de Gaza en 2005 et a reçu des roquettes, puis le 7-Octobre. Colonies et sécurité répondent à une menace réelle. Israël cherche la paix mais n'a jamais eu de partenaire fiable."},
    {nom:"Le récit palestinien",pos:"Un peuple arabe présent là depuis des siècles a été dépossédé par un mouvement de colonisation soutenu par une puissance européenne (Balfour). La Nakba de 1948 — ~700 000 expulsés, des centaines de villages détruits — est le trauma fondateur. Depuis 1967, les Palestiniens vivent sous <b>occupation militaire</b>, colonies grignotant leur terre, blocus de Gaza, déni de leur État et du retour. Face à une écrasante <b>asymétrie de puissance</b>, ils résistent à une domination qu'aucun peuple n'accepterait."}
  ],
  chiffres:[
    "Plan de partage de l'ONU (résolution 181, 1947) : accepté par les dirigeants juifs, rejeté par les dirigeants arabes et les États voisins.",
    "1948 : ~700 000 Palestiniens fuient ou sont expulsés (Nakba) ; dans les années suivantes, ~700 000 à 850 000 Juifs des pays arabes sont aussi déplacés, la plupart vers Israël.",
    "Depuis 1967 : occupation de la Cisjordanie (et de Gaza jusqu'en 2005) ; les colons israéliens en Cisjordanie/Jérusalem-Est sont aujourd'hui ~700 000 — colonies illégales pour l'essentiel de la communauté internationale (Israël conteste).",
    "Les « Nouveaux Historiens » israéliens (Benny Morris), archives à l'appui, ont établi que 1948 mêle fuites ET expulsions/massacres — au-delà des deux versions officielles.",
    "7 octobre 2023 : ~1 200 morts et ~250 otages côté israélien ; la guerre de Gaza qui suit fait des dizaines de milliers de morts palestiniens (bilans et qualifications juridiques débattus)."
  ],
  pieges:[
    "Confondre le <b>Hamas</b> et <b>les Palestiniens</b> (un mouvement ≠ un peuple), ou <b>le gouvernement israélien</b> et <b>les Israéliens</b> : aucun n'est un bloc.",
    "Confondre <b>antisionisme</b> (critique de l'État ou du projet) et <b>antisémitisme</b> (haine des Juifs) : distincts — mais ils peuvent se recouvrir, et chaque camp accuse l'autre d'en jouer.",
    "Le jeu du « qui a commencé ? » : on peut toujours remonter d'un cran, ça n'éclaire rien ; mieux vaut regarder ce qui bloque une sortie aujourd'hui.",
    "Croire qu'une souffrance annule l'autre : reconnaître le 7-Octobre n'efface pas Gaza, et l'inverse."
  ],
  trancher:[
    "Deux peuples revendiquent l'autodétermination sur la même terre : une nation ou deux ? Et si deux, sur quelles frontières ?",
    "Comment peser l'attachement historique (ancien mais lointain) contre la présence (récente mais bien réelle) — des deux côtés ?",
    "Sécurité d'un côté, fin de l'occupation de l'autre : lequel doit venir en premier, et qui fait le premier pas ?",
    "Face à une asymétrie de puissance, quelles formes de résistance et quelles ripostes sont légitimes ? (Renvoie à ton dossier « violence politique ».)"
  ],
  sources:["Benny Morris — « Righteous Victims » ; « 1948 » (Nouveaux Historiens)","Avi Shlaim — « The Iron Wall » (regard critique israélien)","Rashid Khalidi — « The Hundred Years' War on Palestine » (regard palestinien)","Résolutions de l'ONU (181, 242, 338) ; rapports d'organisations internationales (sources multiples)"]
}

];

const MC_THEMES = ["Genre","Europe","Société","Monde"];
