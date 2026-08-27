/* L'ARÈNE — LES FICHES (dossiers de révision « vrac »).
   But : réviser en rappel actif les CHIFFRES et ÉVÉNEMENTS d'un sujet — la mémoire
   factuelle qui manque quand on débat. Chaque carte = question (recto) → réponse (verso).
   Moteur SM-2 dédié (S.memo), séparé des munitions de débat.
   Pour ajouter un dossier : pousser un objet {id, emoji, titre, sub, groupes:[{nom,cartes:[{q,r}]}]}.
   Les réponses acceptent un peu de HTML (<b>, <i>). */
const DOSSIERS = [
{
  id:"israel-palestine",
  emoji:"🕊️",
  titre:"Israël – Palestine",
  sub:"Dates, chiffres et l'état réel de la qualification de génocide. À jour (août 2026).",
  groupes:[
    {
      nom:"Chronologie — les dates clés",
      cartes:[
        {q:"1897",r:"<b>1ᵉʳ Congrès sioniste</b> à Bâle (Herzl) : le sionisme se structure en mouvement politique."},
        {q:"1917",r:"<b>Déclaration Balfour</b> : le R.-U. soutient « un foyer national juif » en Palestine, « sans porter atteinte aux droits des communautés non juives ». Début du <b>Mandat britannique</b>."},
        {q:"1936–1939",r:"<b>Grande révolte arabe</b> contre le Mandat et l'immigration juive."},
        {q:"Novembre 1947",r:"<b>Plan de partage de l'ONU</b> (résolution <b>181</b>) : deux États + Jérusalem internationale. Accepté par les dirigeants juifs, rejeté par les dirigeants arabes."},
        {q:"1948",r:"Israël déclare son <b>indépendance</b> ; les États arabes attaquent. Israël l'emporte. <b>Nakba</b> : ~700 000 Palestiniens fuient ou sont expulsés."},
        {q:"1948 et après",r:"~<b>700 000 à 850 000 Juifs des pays arabes</b> sont déplacés dans les années suivantes, la plupart vers Israël."},
        {q:"1967",r:"<b>Guerre des Six Jours</b> : Israël occupe <b>Cisjordanie, Gaza, Jérusalem-Est</b> (+ Golan, Sinaï). Début de l'occupation. Résolution <b>242</b> (« la paix contre les territoires »)."},
        {q:"1973",r:"<b>Guerre du Kippour</b> (Yom Kippour) : attaque égypto-syrienne, Israël repousse."},
        {q:"1979",r:"<b>Paix Israël–Égypte</b> (Camp David) : l'Égypte récupère le Sinaï. Preuve qu'un accord est possible."},
        {q:"1987",r:"<b>Première Intifada</b> : soulèvement populaire palestinien dans les territoires occupés."},
        {q:"1993",r:"<b>Accords d'Oslo</b> : reconnaissance mutuelle Israël–OLP, création de l'<b>Autorité palestinienne</b>. Le pic des espoirs."},
        {q:"1995",r:"Le Premier ministre israélien <b>Yitzhak Rabin est assassiné</b> par un extrémiste juif opposé à Oslo."},
        {q:"2000",r:"Échec des négociations de <b>Camp David II</b> ; déclenchement de la <b>Deuxième Intifada</b> (2000–2005), bien plus violente (attentats-suicides / réoccupations)."},
        {q:"2005",r:"Israël <b>se retire de Gaza</b> (colons et armée partis)."},
        {q:"2006 – 2007",r:"Le <b>Hamas</b> gagne les élections (2006) puis prend Gaza par la force (2007). Israël et l'Égypte imposent un <b>blocus</b>. Guerres à répétition : 2008-09, 2012, 2014, 2021."},
        {q:"7 octobre 2023",r:"Attaque de masse du <b>Hamas</b> en Israël : ~<b>1 200 morts</b> (surtout des civils) et ~<b>250 otages</b>. L'attaque la plus meurtrière contre des Juifs depuis la Shoah."},
        {q:"Octobre 2023 – 2025",r:"<b>Guerre de Gaza</b> d'une ampleur inédite : dizaines de milliers de morts, déplacement de ~90 % de la population, famine, effondrement sanitaire."},
        {q:"Juillet 2024",r:"La <b>CIJ</b> rend un <b>avis consultatif</b> : la présence israélienne dans les territoires occupés est <b>illicite</b> et doit cesser ; les colonies violent le droit international."},
        {q:"10 octobre 2025",r:"<b>Cessez-le-feu</b> (plan Trump en 20 points) : le 13 oct., le Hamas libère les <b>20 derniers otages vivants</b> ; Israël libère 250 prisonniers + ~1 700 détenus. La trêve tient."}
      ]
    },
    {
      nom:"Les chiffres à connaître",
      cartes:[
        {q:"Nakba (1948) — combien de Palestiniens déplacés ?",r:"~<b>700 000</b> (fuites + expulsions), des centaines de villages détruits."},
        {q:"Juifs des pays arabes déplacés après 1948 ?",r:"~<b>700 000 à 850 000</b>, la plupart vers Israël."},
        {q:"Colons israéliens en Cisjordanie / Jérusalem-Est aujourd'hui ?",r:"~<b>700 000</b>. Colonies <b>illégales</b> pour l'essentiel de la communauté internationale (4ᵉ Conv. de Genève ; avis CIJ 2024). Israël conteste."},
        {q:"7 octobre 2023 — bilan côté israélien ?",r:"~<b>1 200 morts</b> et ~<b>250 otages</b>."},
        {q:"Morts à Gaza — bilan recensé (août 2026) ?",r:"~<b>73 400</b> tués selon le ministère de la Santé de Gaza. <b>Sous-estimé</b> selon l'ONU (corps sous les décombres, disparus non comptés) : les estimations indépendantes dépassent 75 000, hors morts indirectes (famine, effondrement sanitaire)."},
        {q:"Blessés à Gaza (août 2026) ?",r:"~<b>174 000</b>."},
        {q:"Déplacés à Gaza pendant la guerre ?",r:"~<b>90 %</b> de la population (près de <b>1,9 million</b> de personnes) déplacée à un moment, souvent plusieurs fois."},
        {q:"Cessez-le-feu d'octobre 2025 — les chiffres ?",r:"Trêve le <b>10 oct. 2025</b> ; <b>20 otages vivants</b> libérés le 13 oct. contre <b>250 prisonniers</b> + ~<b>1 700 détenus</b>."}
      ]
    },
    {
      nom:"La qualification de génocide — l'état réel",
      cartes:[
        {q:"La qualification de génocide est-elle contestée seulement par Israël ?",r:"<b>Non — mais l'inverse non plus.</b> Parmi les <b>corps indépendants</b> (ONU, grandes ONG, savants, ONG israéliennes), il y a <b>convergence</b> vers le génocide. Ceux qui la refusent sont surtout des <b>parties intéressées</b> (Israël, États-Unis + alliés) et des juristes sur un point technique. Ce n'est <b>pas</b> un 50/50 moral."},
        {q:"Qui a conclu au génocide ? (les corps indépendants)",r:"• <b>Commission d'enquête de l'ONU</b> (Navi Pillay), 16 sept. 2025<br>• <b>Amnesty International</b>, déc. 2024<br>• <b>Human Rights Watch</b>, déc. 2024<br>• <b>B'Tselem</b> + <b>Physicians for Human Rights–Israel</b> (ONG israéliennes), juil. 2025<br>• <b>Assoc. internationale des chercheurs sur le génocide (IAGS)</b>, sept. 2025"},
        {q:"Que dit la Commission d'enquête de l'ONU (Pillay, sept. 2025) ?",r:"Israël a <b>commis un génocide</b> à Gaza : <b>4 des 5 actes</b> de la Convention de 1948 sont établis, et l'<b>intention</b> se déduit des déclarations de responsables + du schéma de conduite. Des dirigeants ont <b>incité</b> au génocide. Israël rejette (« Hamas propaganda »)."},
        {q:"Le vote de l'IAGS (chercheurs sur le génocide) ?",r:"Résolution : les actes d'Israël « <b>répondent à la définition juridique du génocide</b> ». Adoptée à <b>86 %</b> des votants (<b>108 pour, 18 contre, 3 abst.</b>). Une minorité de spécialistes conteste."},
        {q:"Où en est la CIJ (Cour internationale de Justice) ?",r:"<b>Pas de jugement au fond.</b> Depuis janv. 2024, des <b>mesures conservatoires</b> (risque « plausible » d'atteinte aux droits protégés). Israël a soulevé des <b>objections de compétence</b> (mars 2026) ; réplique sud-africaine due <b>nov. 2027</b> → verdict à des <b>années</b>."},
        {q:"Qui conteste la qualification — et sur quoi ?",r:"• <b>Israël</b> (partie) : rejette en bloc.<br>• <b>États-Unis</b> + quelques alliés (géopolitique).<br>• Une <b>partie des juristes</b> : sur l'<b>intention spécifique</b> et la procédure — pas sur la matérialité des faits."},
        {q:"C'est quoi le dolus specialis (le vrai nœud juridique) ?",r:"L'<b>intention spécifique de détruire un groupe « comme tel »</b> — le seuil le <b>plus difficile</b> à prouver en droit. C'est <b>là</b> qu'est le débat juridique réel, pas sur l'ampleur des destructions (établie)."},
        {q:"⚖️ Le partage faits / valeurs, proprement",r:"<b>FAITS (établis)</b> : l'ampleur des morts et destructions ; les conclusions <b>convergentes</b> des corps indépendants ; les mesures conservatoires de la CIJ.<br><b>OUVERT / VALEURS</b> : le <b>verdict judiciaire final</b> (des années) ; le débat sur l'<b>intention</b> ; ce qu'on en conclut politiquement."},
        {q:"Le piège à éviter sur « génocide »",r:"Confondre « <b>la CIJ n'a pas encore tranché au fond</b> » (vrai, procédural) avec « <b>donc c'est une controverse morale ouverte</b> » (faux). L'incertitude est <b>judiciaire</b>, pas un partage 50/50 entre autorités indépendantes."}
      ]
    },
    {
      nom:"Acteurs & notions",
      cartes:[
        {q:"Sionisme",r:"Mouvement national né fin XIXᵉ (Herzl) : les Juifs, peuple persécuté, ont besoin d'un <b>État-refuge</b>, sur la terre de leur histoire ancienne. ≠ judaïsme (religion)."},
        {q:"Nakba",r:"« Catastrophe » (arabe) : l'exode/expulsion de ~700 000 Palestiniens en 1948, <b>trauma fondateur</b> palestinien."},
        {q:"OLP / Autorité palestinienne / Fatah",r:"<b>OLP</b> : Organisation de libération de la Palestine (représentation). <b>Fatah</b> : sa faction dominante (laïque, Cisjordanie). <b>Autorité palestinienne</b> : gouvernement autonome créé par Oslo (1993-94)."},
        {q:"Hamas",r:"Mouvement <b>islamiste</b> né en 1987, qui refuse (dans sa charte) de reconnaître Israël. Gagne Gaza en 2006-07. Classé terroriste par plusieurs États. ≠ « les Palestiniens »."},
        {q:"Résolutions 181 / 242 / 338",r:"<b>181</b> (1947) : plan de partage. <b>242</b> (1967) : retrait des territoires occupés contre paix. <b>338</b> (1973) : cessez-le-feu + négociations."},
        {q:"Cisjordanie vs Gaza",r:"<b>Cisjordanie</b> : occupée depuis 1967, colonies + Autorité palestinienne (Fatah). <b>Gaza</b> : évacuée par Israël en 2005, sous blocus, gouvernée par le Hamas depuis 2007."},
        {q:"Statut des colonies",r:"<b>Illégales</b> au regard du droit international pour l'essentiel de la communauté internationale (4ᵉ Convention de Genève ; avis consultatif CIJ, juil. 2024). Israël conteste cette lecture."},
        {q:"Nouveaux Historiens",r:"Historiens israéliens (Benny Morris…) qui, archives à l'appui, ont établi que <b>1948 mêle fuites ET expulsions/massacres</b> — au-delà des deux versions officielles."},
        {q:"Solutions sur la table",r:"<b>Deux États</b> (longtemps le consensus, au point mort) ; <b>un seul État</b> binational (pose l'égalité des droits vs domination) ; <b>statu quo</b> (occupation + cycles de violence)."}
      ]
    }
  ]
}
];
