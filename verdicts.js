/* L'ARÈNE — LE VERDICT. Pour chaque débat marqué ⚖️ : ce que les faits TRANCHENT
   (empirie établie) vs ce qui reste un CHOIX DE VALEURS. Clés = id dans DEBATS.
   But : révision active de l'hygiène épistémique — sépare le descriptif du normatif. */
const VERDICTS = {
  "retraites":{
    faits:"L'arithmétique est incontournable : avec le vieillissement, il faut jouer sur au moins un des trois leviers (cotiser plus, baisser les pensions, travailler plus longtemps). « Ne rien faire sans coût » est faux. Une retraite, même par capitalisation, reste une créance sur la production future — pas de cagnotte magique.",
    valeurs:"QUI porte l'effort. Un recul d'âge uniforme est régressif (les pauvres vivent moins longtemps) — mais choisir de le compenser (pénibilité, assiette élargie), ou pas, reste un arbitrage politique."
  },
  "nucleaire":{
    faits:"Parmi les sources les plus SÛRES (morts/TWh, accidents de Tchernobyl et Fukushima compris) et les moins CARBONÉES (cycle de vie). L'objection « dangereux/sale » ne survit pas aux données. Fermer des réacteurs sûrs (Allemagne) a augmenté émissions ET morts par pollution.",
    valeurs:"Construire du NEUF : arbitrage coût/délai (économique), tolérance au risque de catastrophe rare, gestion des déchets sur des générations. Là, pas de réponse dictée par les faits."
  },
  "decroissance":{
    faits:"Le découplage absolu PIB/CO₂ est réel dans plusieurs pays riches → la décroissance n'est pas une nécessité physique. MAIS le rythme mondial est insuffisant et le découplage matières est faible → « green growth » ne suffit pas seule.",
    valeurs:"La sobriété du superflu, le poids donné au PIB vs à d'autres indicateurs, ce qu'on impose aux plus riches — choix de valeurs (le Sud, lui, a besoin de croître)."
  },
  "ia-emploi":{
    faits:"Historiquement, l'automatisation détruit des tâches ET en crée d'autres : le « chômage technologique » permanent ne s'est jamais matérialisé (le « volume de travail fixe » est un sophisme). La douleur de transition, elle, est réelle et concentrée.",
    valeurs:"Qui capte les gains de l'IA (redistribution), et à quel point parier que « cette fois c'est différent ». La distribution est un choix, pas une fatalité."
  },
  "ecriture-inclusive":{
    faits:"Le masculin dit « générique » biaise réellement les représentations vers les hommes (mesuré) → le problème n'est pas imaginaire. Et le point médian a un coût d'accessibilité réel (dyslexie, lecteurs d'écran, oralisation).",
    valeurs:"Quel MOYEN privilégier (doublets, épicènes, féminisation, point médian) et combien de poids donner au symbolique — choix de valeurs."
  },
  "religion-science":{
    faits:"Les affirmations religieuses empiriques et testables (jeune Terre, création spéciale, déluge global) sont réfutées : sur ce terrain, la science tranche. Et la « guerre perpétuelle science/religion » est un mythe historiographique du XIXᵉ.",
    valeurs:"L'existence de Dieu (non testable) et le sens qu'on donne au monde : hors de portée de la science, choix personnel — l'athéisme est une conclusion probable, pas un théorème."
  },
  "prison":{
    faits:"C'est la CERTITUDE de la sanction qui dissuade, pas sa DURÉE ; et les longues peines dures n'améliorent pas la récidive, souvent l'aggravent (effet criminogène). Norvège réhabilitative vs incarcération de masse US.",
    valeurs:"La part de rétribution/vengeance qu'on accepte, l'équilibre entre protection immédiate et récidive future — choix de valeurs (moi : je refuse la rétribution, pas de libre arbitre)."
  },
  "meritocratie":{
    faits:"Talents ET tempérament qui pousse à l'effort sont largement hérités de la loterie génétique/sociale ; la mobilité réelle est faible → personne ne « mérite » sa place au sens fort.",
    valeurs:"Récompenser quand même la performance (incitation) et à quel degré : ça, c'est un arbitrage. Mais « ils l'ont mérité » comme FONDEMENT moral ne tient pas."
  },
  "fiscalite":{
    faits:"L'utilité marginale du revenu décroît (un euro pèse plus pour un pauvre) et le patrimoine est bien plus concentré et « rente » que le revenu. Ces deux faits appuient la progressivité et l'imposition du capital.",
    valeurs:"Le NIVEAU des taux, l'arbitrage incitation/redistribution, ce qu'on tolère d'inégalité — choix de valeurs. Mais la flat tax ne peut pas se réclamer d'une justice supérieure."
  },
  "surveillance":{
    faits:"La collecte massive de métadonnées n'a pas démontré d'efficacité claire contre le terrorisme, alors que son coût sur les libertés (chilling effect) est mesuré, et l'effet cliquet (pouvoirs qui restent) documenté.",
    valeurs:"Combien de vie privée on accepte d'échanger contre une sécurité marginale, et quelle confiance on fait au pouvoir futur — choix de valeurs (moi : présomption pour la vie privée)."
  },
  "libre-echange":{
    faits:"L'échange augmente la production totale (avantage comparatif) et a accompagné la plus forte baisse de pauvreté mondiale. MAIS il fait des perdants concentrés et durables (« China shock », mesuré).",
    valeurs:"Compenser ou non les perdants, à quel point protéger certains secteurs stratégiques — choix politique. Mais « l'échange appauvrit globalement » est faux."
  },
  "revenu-universel":{
    faits:"Donner de l'argent inconditionnel ne rend pas les gens oisifs (le mythe du fainéant est infirmé par les expériences). MAIS un RU universel ET suffisant coûte plusieurs points de PIB.",
    valeurs:"Le montant, l'universalité vs le ciblage (impôt négatif), le remplacement ou non des services publics — choix de valeurs."
  },
  "euthanasie":{
    faits:"Là où c'est légalisé (Oregon, Benelux), les données ne montrent pas le « massacre des vulnérables » annoncé : pas de sur-ciblage disproportionné des âgés/handicapés/pauvres.",
    valeurs:"Le poids qu'on donne à l'autonomie du mourant vs le risque de pression sociale, et où placer les garde-fous — choix de valeurs (moi : pour, encadré ; « vie sacrée » = non-argument)."
  },
  "prostitution":{
    faits:"La criminalisation (même du seul client) tend à précariser les travailleuses (plus de risque, moins de recours) ; la décriminalisation (Nouvelle-Zélande) améliore leur sécurité. La traite est un phénomène distinct.",
    valeurs:"Le curseur entre autonomie et protection, et le poids qu'on donne au dégoût/à la « dignité » — choix de valeurs (moi : décriminaliser, cibler la contrainte)."
  },
  "dissuasion":{
    faits:"Depuis 1945, aucune guerre directe entre grandes puissances nucléaires (« paix nucléaire ») — indice d'un effet dissuasif réel ; mais le risque d'accident/escalade est non nul et s'accumule dans le temps.",
    valeurs:"Le pari qu'on fait (garder la dissuasion vs désarmer), la tolérance au risque de queue — choix de valeurs (moi : dissuasion minimale + désarmement multilatéral, pas unilatéral)."
  },
  "ia-risque":{
    faits:"Les risques ACTUELS de l'IA (biais, désinformation, armes autonomes, concentration de pouvoir) sont déjà là et documentés → une régulation est justifiée, et on peut réguler sans interdire (AI Act).",
    valeurs:"Le poids à donner au risque existentiel (incertain, contesté), l'équilibre innovation/prudence — choix de valeurs (moi : réguler le présent + s'assurer contre le futur)."
  },
  "vaccination":{
    faits:"Les vaccins majeurs sont sûrs et efficaces (le lien autisme est une fraude démontrée), et l'immunité de groupe exige une couverture élevée pour protéger ceux qui ne peuvent pas se vacciner : la contagion crée un tort à autrui.",
    valeurs:"Jusqu'où contraindre vs inciter, et pour quels vaccins — choix de valeurs. Mais « mon corps, mon choix » ne s'applique pas quand ta non-vaccination met un tiers en danger (limite de Mill)."
  },
  "homoparentalite":{
    faits:"Les études ne trouvent pas de désavantage de développement pour les enfants élevés par des couples de même sexe : ce qui compte, c'est l'amour et la stabilité, pas le sexe des parents.",
    valeurs:"Presque aucun désaccord de valeurs ne tient une fois les faits posés : l'opposition repose sur le dégoût ou la tradition — qui ne sont pas des arguments moraux. Un cas où les faits ferment le débat."
  },
  "salaire-minimum":{
    faits:"« Salaire minimum = chômage » ne tient pas aux niveaux observés (Card-Krueger et la littérature qui a suivi) : le monopsone explique pourquoi. Trop haut ou trop vite, l'effet négatif réapparaît.",
    valeurs:"Le NIVEAU du minimum (l'arbitrage protection/emploi) — pas le principe. La vraie question est « à quel niveau ? », pas « pour ou contre ? »."
  },
  "taxe-carbone":{
    faits:"Tarifer le carbone est le moyen le plus efficace de réduire les émissions (quasi-consensus des économistes) ; brute, la taxe est régressive, mais le « dividende carbone » (recette redistribuée) la rend progressive nette.",
    valeurs:"Que faire de la recette, le rythme, l'articulation avec d'autres outils — choix politique. Mais renoncer au prix du carbone n'est pas soutenu par l'efficacité."
  },
  "justice-climat":{
    faits:"Les pays riches ont émis l'essentiel du CO₂ CUMULÉ et en subissent le moins les effets ; les pays pauvres émettent peu (surtout par habitant) et souffrent le plus.",
    valeurs:"Combien les riches doivent financer, et sous quelle forme — choix de valeurs. Mais « chacun pour soi » ignore que le climat est un bien public mondial (passager clandestin)."
  }
};
