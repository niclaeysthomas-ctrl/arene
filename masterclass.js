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
}

];

const MC_THEMES = ["Genre","Europe","Société"];
