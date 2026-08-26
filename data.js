/* L'ARÈNE — corpus de débats. Profil : anti-réalisme illusionniste + utilitarisme de la préférence
   + libéralisme social conséquentialiste. Construit avec Thomas (2026-08). v2 : études empiriques + enrichi.
   Champs par débat : maPosition, socle, adverse{nom,steelman}, defense, faille, contre[{q,r}], etudes[], sources[] */

const DEBATS = [

/* ===================== FONDATIONS ===================== */
{
  id:"metaethique", theme:"Fondations", titre:"Y a-t-il une morale vraie ?",
  maPosition:"Non. Aucun fait moral objectif n'existe. « X est mal » n'est pas vrai ou faux au sens où « l'eau bout à 100° » l'est — c'est l'expression d'une attitude, câblée par l'évolution, que je vis comme une vérité sans qu'elle en soit une.",
  socle:"Émotivisme (Ayer) : un jugement moral exprime + prescrit, il ne décrit pas. Le discours moral <b>prétend</b> pourtant à l'objectivité (Mackie) — donc il est systématiquement en erreur. La convergence des morales s'explique par la sélection naturelle (Street), pas par un accès à des faits moraux. Ce que je vis comme « évident » est une illusion cognitivement impénétrable, comme l'illusion de Müller-Lyer : je sais que c'est faux, je continue à le ressentir vrai.",
  adverse:{ nom:"Le réaliste moral",
    steelman:"Certaines choses (torturer un enfant pour le plaisir) sont mauvaises indépendamment de ce que quiconque en pense — le nier semble monstrueux. Et sans vérité morale, comment condamner Hitler autrement qu'en disant « je préfère » ? L'objectivité rend compte de notre expérience (on découvre qu'on avait tort) et de la possibilité du progrès." },
  defense:"L'origine évolutive de nos intuitions les <i>explique</i> intégralement sans postuler aucun fait moral — le rasoir d'Ockham tranche pour l'anti-réalisme. Et je récupère tout ce qui compte : je peux dire « Hitler a tort » à l'intérieur de la fiction morale que j'endosse (comme « ce coup d'échecs est mauvais »), sans prétendre décrire le cosmos.",
  faille:"Le réaliste doit dire OÙ sont ces faits moraux et COMMENT on les perçoit (argument de l'étrangeté de Mackie : des entités « bizarres », sans organe pour les capter). Et si nos intuitions sont façonnées par la survie, un réaliste doit admettre qu'elles ne trackent pas la vérité morale mais le fitness (dilemme darwinien de Street) — donc il perd son propre accès aux « faits ».",
  contre:[
    {q:"« Alors tu ne peux pas vraiment condamner le nazisme. »", r:"Si — je le condamne avec toute la force de mon attitude, et j'agis contre. Ce que je ne fais pas, c'est prétendre lire un fait dans le ciel. Ma condamnation ne perd aucune énergie ; elle perd une prétention métaphysique dont personne n'a jamais eu besoin pour se battre."},
    {q:"« Sans morale objective, tout se vaut (relativisme). »", r:"Faux : l'anti-réalisme n'est pas le relativisme. Je ne dis pas « chaque culture a sa vérité » — je dis qu'aucune n'a de vérité, mais qu'on peut classer les codes selon un critère assumé (le bien-être). L'esclavage n'était pas « vrai pour eux » ; il était approuvé par eux et il est pire selon mon étalon."},
    {q:"« Tu vis quand même comme si la morale était objective. »", r:"Oui — c'est le cœur de l'illusionnisme : l'émotion morale est câblée, je ne peux pas l'éteindre (comme l'illusion d'optique). Vivre « comme si » n'est pas une preuve que c'est vrai ; c'est exactement ce que produit une intuition sélectionnée."}
  ],
  etudes:[
    "« Moral dumbfounding » : face à un tabou sans victime (inceste protégé et secret), les gens maintiennent « c'est mal » tout en étant incapables de le justifier → l'intuition vient d'abord, la raison rationalise après. — Haidt, Björklund & Murphy (2000) ; modèle social-intuitionniste, Haidt (2001, Psych. Review)",
    "IRMf des dilemmes moraux : les dilemmes « personnels » (pousser un homme) activent les réseaux émotionnels, les « impersonnels » les réseaux du raisonnement → la morale est en partie affective, pas un calcul pur. — Greene et al. (2001, Science)",
    "Désaccord moral massif et stable entre cultures/époques (l'« argument de la relativité ») : mieux expliqué par des histoires culturelles divergentes que par un accès inégal à des faits moraux. — Mackie (1977)"
  ],
  sources:["J.L. Mackie, «Ethics: Inventing Right and Wrong» (1977) — théorie de l'erreur, étrangeté, relativité","Sharon Street, «A Darwinian Dilemma for Realist Theories of Value» (2006)","A.J. Ayer, «Language, Truth and Logic» (1936) — émotivisme","Saul Smilansky, «Free Will and Illusion» (2000)"]
},
{
  id:"librearbitre", theme:"Fondations", titre:"Le libre arbitre existe-t-il ?",
  maPosition:"Non, pas au sens métaphysique. Mais c'est une fiction fonctionnellement indispensable : on maintient la responsabilité parce qu'elle marche, pas parce qu'elle serait « méritée » dans l'absolu.",
  socle:"Déterminisme : tes choix sont l'effet de causes que tu n'as pas choisies (gènes + environnement + hasard). Personne ne « mérite » donc ses succès ni ses fautes au sens fort — je n'en veux pas plus au criminel qu'à un animal. Mais au niveau fonctionnel, l'indignation et la sanction sont utiles (dissuasion, protection) : on garde la fiction du libre arbitre comme on garde la morale, parce que la société s'effondre sans (Smilansky : illusionnisme).",
  adverse:{ nom:"Le libertarien métaphysique / le rétributiviste",
    steelman:"Tu délibères, tu aurais pu agir autrement, tu ressens ta liberté à chaque décision. Sans libre arbitre réel, la responsabilité morale, la fierté, le remords deviennent des mensonges — et punir quelqu'un qui « n'y pouvait rien » est une injustice." },
  defense:"Je sépare deux étages : au niveau <b>métaphysique</b>, pas de mérite (donc pas de rétribution — la punition n'est jamais « faire payer ») ; au niveau <b>fonctionnel</b>, la responsabilité reste un outil légitime (dissuader, protéger, réinsérer). Je garde tous les effets utiles sans l'illusion.",
  faille:"« J'aurais pu agir autrement » est indémontrable : rejoue exactement le même état de l'univers, tu refais exactement le même choix. Le sentiment de liberté n'est pas une preuve — c'est précisément l'illusion attendue. Et le rétributivisme (faire souffrir sans bénéfice futur) est de la cruauté déguisée en justice.",
  contre:[
    {q:"« Si personne n'est responsable, pourquoi punir ? »", r:"Pour l'avenir, pas pour le passé : dissuader, neutraliser, réhabiliter. Je punis l'incendie pour éviter le prochain, pas pour venger l'ancien. D'où : prison réhabilitatrice, pas prison-châtiment."},
    {q:"« Ça déresponsabilise tout le monde. »", r:"Non : la responsabilité fonctionnelle demeure pleine (on tient chacun comptable pour dissuader). Ce qui saute, c'est la haine rétributive — pas la responsabilité."},
    {q:"« Les neurosciences ne prouvent rien, c'est contesté. »", r:"D'accord — je ne fonde pas ma thèse sur Libet mais sur la causalité : tout événement (y compris une pensée) a des causes antérieures. L'expérimental illustre, il ne porte pas la charge de la preuve."}
  ],
  etudes:[
    "Le « potentiel de préparation » cérébral précède la conscience de la décision d'environ 350 ms. — Libet et al. (1983, Brain)",
    "En IRMf, l'activité préfrontale/pariétale prédit un choix simple jusqu'à ~7-10 s AVANT que le sujet se sente décider. ⚠️ interprétation contestée : Schurger (2012) y voit du bruit neuronal accumulé, pas une « décision cachée ». — Soon, Brass, Heinze & Haynes (2008, Nature Neuroscience)",
    "Affaiblir expérimentalement la croyance au libre arbitre augmente la tricherie et l'agressivité → argument pour la « fiction utile » (l'illusion soutient la coopération). — Vohs & Schooler (2008, Psych. Science)"
  ],
  sources:["Saul Smilansky, «Free Will and Illusion» (2000)","Derk Pereboom, «Living Without Free Will» (2001)","Galen Strawson, «The Impossibility of Moral Responsibility» (1994)"]
},
{
  id:"sentience", theme:"Fondations", titre:"Qu'est-ce que la sentience (le seul critère) ?",
  maPosition:"Ce qui donne à un être un statut moral, c'est la sentience : la capacité d'avoir des expériences <i>ressenties</i>, positives ou négatives. Pas l'espèce, pas l'intelligence, pas le substrat. Avoir une valeur morale = avoir des intérêts = exister un point de vue depuis lequel les choses peuvent aller bien ou mal pour soi.",
  socle:"Sentience = il y a « un effet que ça fait » d'être cet être (Nagel), avec une <b>valence</b> (bon/mauvais vécu). <b>Souffrir</b> ≠ nociception : la nociception (détecter un dommage, retrait réflexe) est mécanique et peut être inconsciente ; la souffrance est la nociception <i>vécue</i>, un état conscient qu'on préfère voir cesser. Seule la version ressentie compte. Un être sans vie subjective (rocher, plante, embryon précoce, cadavre) n'a pas d'intérêts — il n'est pas un terme dans l'équation morale.",
  adverse:{ nom:"Le spéciste / le partisan de la « dignité humaine »",
    steelman:"L'humain a une dignité propre (rationalité, langage, projets) qui le place au-dessus des bêtes ; réduire la morale à « qui peut souffrir » efface ce qui fait notre valeur et met un cochon au niveau d'un bébé." },
  defense:"La souffrance est le seul candidat non arbitraire : une fois qu'on dit que la morale concerne le bien/mal-être, seul ce qui a un bien-être peut compter. « Réserver aux humains » ajoute une clause (l'espèce) que rien ne justifie — c'est structurellement identique au racisme (préférer les siens).",
  faille:"L'argument des cas marginaux : un nourrisson ou un humain lourdement handicapé a moins de capacités qu'un cochon adulte, pourtant sa souffrance compte. Le seul critère qui les inclut sans arbitraire, c'est la sentience — pas l'espèce ni l'intelligence.",
  contre:[
    {q:"« Donc un chien vaut un humain ? »", r:"Une souffrance égale compte également (Singer). Mais les capacités diffèrent : un humain a des projets, un futur anticipé, des liens → souvent plus d'intérêts en jeu. Égalité de considération des intérêts ≠ identité de traitement."},
    {q:"« La conscience de soi, alors ? »", r:"Elle n'est pas requise pour compter (des animaux sentients échouent au test du miroir). Elle intervient ailleurs : pour le tort spécifique de <i>tuer</i> (priver un être qui se projette d'un futur qu'il désire)."},
    {q:"« On ne peut pas prouver que les animaux ressentent. »", r:"Homologie : mêmes nocicepteurs, mêmes systèmes opioïdes, mêmes comportements de douleur que nous. Nier leur sentience par principe, c'est le solipsisme appliqué sélectivement aux non-humains."}
  ],
  etudes:[
    "Les poissons possèdent des nocicepteurs et modifient leur comportement sous analgésie → indices de douleur ressentie, pas seulement de réflexe. — Sneddon et al. (2003, 2014)",
    "Revue commandée par le UK : preuves suffisantes de sentience chez les céphalopodes (poulpes) et décapodes (crabes, homards) → inclus dans l'Animal Welfare (Sentience) Act 2022. — Birch et al., LSE (2021)",
    "Aversion à l'iniquité : un capucin refuse une récompense (concombre) s'il voit un congénère mieux payé (raisin) pour la même tâche → racines évolutives des intuitions d'équité. — Brosnan & de Waal (2003, Nature)"
  ],
  sources:["Peter Singer, «Practical Ethics» — égale considération des intérêts","Thomas Nagel, «What Is It Like to Be a Bat?» (1974)","Joel Feinberg, «The Rights of Animals and Unborn Generations» — le principe d'intérêt"]
},

/* ===================== JUSTICE / ÉCONOMIE ===================== */
{
  id:"redistribution", theme:"Justice", titre:"Faut-il une forte redistribution ?",
  maPosition:"Oui. Aucune inégalité n'est <i>méritée</i> (pas de libre arbitre) ; on ne les tolère que pour leur effet incitatif — pas un gramme de plus. Couplé à l'utilité marginale décroissante, ça commande une redistribution forte. Social-démocratie radicale.",
  socle:"1) Le talent et même l'ardeur au travail sont une loterie (gènes + milieu) → personne ne mérite ses revenus. 2) La seule justification d'une inégalité est donc l'efficacité (les incitations produisent plus de richesse pour tous). 3) L'utilité marginale de l'argent décroît (100 € valent plus pour un pauvre) → transférer du riche au pauvre augmente le bien-être net. Conclusion : inégalités permises seulement là où elles bénéficient réellement à tous, sinon captées.",
  adverse:{ nom:"Le libéral du mérite / libertarien",
    steelman:"Les gens ont un droit sur le fruit de leur travail ; redistribuer, c'est confisquer ce qu'ils ont gagné et récompenser l'oisiveté. Le mérite existe (l'effort est réel), et la propriété est une extension de la personne — taxer lourdement, c'est du travail forcé (Nozick)." },
  defense:"Tu partages la prémisse de Rawls sans le savoir : les talents sont « moralement arbitraires ». Le no-libre-arbitre va plus loin : l'effort lui-même est déterminé. Donc « ils l'ont mérité » est faux à la racine ; il ne reste que l'argument d'efficacité, qui plafonne les inégalités justifiables bien plus bas que le statu quo.",
  faille:"Le libertarien fonde tout sur la self-ownership lockéenne (propriété = extension du corps). Mais la propriété externe n'est PAS ton corps : ton corps est le substrat de ta sentience (irremplaçable) ; ta fortune est un objet dont le contrôle t'est utile, à utilité marginale décroissante. Assimiler les deux (Nozick) est l'erreur qui fait tout tenir — retire-la et « taxer = travail forcé » s'effondre.",
  contre:[
    {q:"« Sans récompense du mérite, plus personne ne bosse. »", r:"Les incitations restent — je les borne, je ne les nie pas. On récompense la performance parce que ça <i>marche</i> (elle produit), pas parce qu'elle est méritée. Le curseur est l'efficacité, pas le dû."},
    {q:"« La propriété est un droit sacré. »", r:"Non : une fiction-institution utile (rien n'est sacré). Elle vaut ce que son utilité vaut et cède devant le bien-être. L'impôt est une redéfinition ordonnée des titres, pas un vol."},
    {q:"« Les pays très redistributifs stagnent. »", r:"Empiriquement faux : les pays nordiques combinent forte redistribution et prospérité/innovation élevées. Le curseur optimal n'est ni 0 ni 100 — mais il est loin au-dessus du minimalisme libertarien."}
  ],
  etudes:[
    "L'utilité du revenu est ~logarithmique : le bien-être monte avec le revenu mais l'utilité marginale décroît fortement → transférer vers le bas augmente le bien-être agrégé. — Kahneman & Deaton (2010) ; Killingsworth (2021) ; réconciliation Killingsworth-Kahneman-Mellers (2023, PNAS)",
    "Loterie de naissance : ~la moitié à deux tiers de la variance du revenu entre individus dans le monde s'explique par le seul pays de naissance. — Milanovic (2015)",
    "Mobilité : le revenu des parents et le simple lieu où l'on grandit prédisent fortement le revenu adulte → le « mérite » est en grande partie hérité. — Chetty et al., Opportunity Insights (2014, 2018)"
  ],
  sources:["John Rawls, «A Theory of Justice» (1971) — arbitraire moral des talents, principe de différence","Robert Nozick, «Anarchy, State, and Utopia» (1974) — self-ownership (à réfuter)","Pigou — utilité marginale décroissante"]
},
{
  id:"heritage", theme:"Justice", titre:"Faut-il (quasi) abolir l'héritage ?",
  maPosition:"Le taxer très lourdement — au taux qui maximise le bien-être. Rente zéro-mérite (loterie de naissance) + forte utilité ailleurs. Pas « 100 % par principe » : un conséquentialiste vise l'optimum, pas l'absolu.",
  socle:"L'héritage est le comble de l'inégalité non méritée : l'héritier n'a rien fait. Le défunt n'a plus d'intérêts (il est mort). Utilité marginale : 100 € répartis valent plus que 100 € concentrés sur un enfant déjà avantagé. MAIS « pouvoir transmettre » est une incitation à produire → l'optimum n'est pas 100 %, c'est le taux qui capte la rente sans tuer l'incitation.",
  adverse:{ nom:"Le défenseur de la transmission familiale",
    steelman:"Un parent a le droit — et le désir profond — de protéger ses enfants ; transmettre est un acte d'amour et un moteur d'effort. Taxer l'héritage, c'est punir l'épargne, frapper deux fois un argent déjà imposé, et briser la continuité des familles." },
  defense:"Distingue le <b>capital</b> et la <b>relation</b> : l'amour, le temps, l'éducation que tu donnes de ton vivant sont pleinement légitimes (sources de bien-être). Ce qui n'est pas légitime, c'est le transfert de <i>rente</i> non méritée. Et ton devoir envers tes enfants, universalisé (tout enfant compte autant), commande d'investir dans TOUS les enfants — pas d'avantager les tiens par une loterie.",
  faille:"« Argent déjà imposé » est un sophisme (tout euro est taxé à chaque transaction — TVA, revenu…). Et « protéger ses enfants » justifie de leur donner de bonnes conditions, pas un privilège héréditaire qui reproduit les castes.",
  contre:[
    {q:"« Les gens contourneront par des donations. »", r:"D'où la vraie ligne : taxer les gros transferts de capital, à la mort ET entre vifs. Ce qu'on protège, c'est la relation (temps, soin), pas le déplacement de fortune."},
    {q:"« C'est confiscatoire / anti-liberté. »", r:"Non, calibré au taux optimal : on préserve l'incitation à créer, on capte la rente oisive, on finance l'égalité des chances réelle — le meilleur usage possible."},
    {q:"« L'impôt sur l'héritage rapporte peu, il est inefficace. »", r:"Il rapporte peu SURTOUT parce qu'il est plein de niches et facile à éviter ; c'est un argument pour l'élargir et fermer les trous, pas pour l'abandonner. Et son but n'est pas que le rendement : c'est de casser la rente héréditaire."}
  ],
  etudes:[
    "La part de la richesse héritée dans le patrimoine total remonte fortement quand le rendement du capital dépasse la croissance (r > g) → retour d'une société d'héritiers. — Piketty (2013, «Le Capital au XXIᵉ siècle»)",
    "Le patrimoine est bien plus concentré que le revenu (le top 1 % détient une part du capital très supérieure à sa part du revenu) → l'héritage transmet surtout de la rente. — Saez & Zucman (2016)",
    "Paradoxe d'opinion : l'impôt successoral est massivement impopulaire même chez ceux qui n'en paieront jamais (biais d'optimisme, framing « death tax ») → l'obstacle est psychologique, pas économique. — Kuziemko, Norton, Saez & Stantcheva (2015, AER)"
  ],
  sources:["Piketty (2013) ; Saez & Zucman","Rawls — arbitraire moral","Utilité marginale décroissante"]
},

/* ===================== VIE / CORPS / MORT ===================== */
{
  id:"vegan", theme:"Vie animale", titre:"Manger de la viande est-il défendable ?",
  maPosition:"Non, selon mon propre critère : infliger une souffrance énorme pour un plaisir non vital (le goût) est illégitime — c'est ma règle sur le vol appliquée. Ma raison commande le véganisme ; je ne m'y tiens pas encore, et je l'admets (akrasia), sans le maquiller.",
  socle:"1) Ce qui compte, c'est la souffrance (sentience), pas l'espèce. 2) Les animaux d'élevage souffrent massivement (physiologie de la douleur homologue). 3) « Souffrance importante pour un confort non vital = illégitime » (ma règle). 4) En pays développé, une alimentation végétale est viable → la viande est un confort non vital. Conclusion : l'élevage industriel est illégitime.",
  adverse:{ nom:"Le carniste rationnel (façon Destiny)",
    steelman:"La morale n'oblige pas rationnellement (anti-réalisme) ; je peux donc préférer le goût de la viande au bien-être animal — ce n'est pas une erreur de logique, juste une préférence, aussi arbitraire que la tienne d'étendre la considération aux bêtes." },
  defense:"Sous incertitude sur le degré de sentience animale, la précaution <i>renforce</i> l'obligation : l'espérance de souffrance (même à 50 %) écrase un plaisir gustatif. Et l'argument financier joue contre le carniste : les protéines végétales (lentilles, riz) coûtent une fraction de la viande.",
  faille:"L'anti-réalisme du carniste est <b>sélectif</b> : il sort « rien n'oblige » pour le steak, puis le range pour condamner qu'on torture un humain. Or l'anti-réalisme s'applique partout ou nulle part. S'il excuse le carnisme, il excuse le sadisme. Ma position est plus cohérente : j'ai assumé un critère (la souffrance) et je l'applique sans exception — d'où mon akrasia, prix de la cohérence, vs son confort d'incohérence.",
  contre:[
    {q:"« Toi-même tu n'es pas végane. »", r:"Exact, et je ne m'en cache pas : ma volonté ne suit pas encore ma raison. C'est de l'akrasia assumée, pas un argument pour le steak. La morale est un gradient — réduire compte déjà."},
    {q:"« Les animaux se mangent entre eux (nature). »", r:"Sophisme naturaliste : « c'est ainsi » ne fait pas « c'est bien ». La nature fait aussi l'infanticide et la maladie ; on ne s'en réclame pas."},
    {q:"« L'élevage bien traité, alors ? »", r:"Ça réduit la souffrance (mieux) mais reste (a) marginal face à ~99 % d'élevage intensif, (b) coûteux, et (c) sous mon option B, tuer sans douleur prive encore l'animal-sujet de son futur. La vraie sortie reste la réduction radicale."}
  ],
  etudes:[
    "≈ 80 milliards d'animaux terrestres abattus/an pour l'alimentation (hors poissons : centaines de milliards à ~1-2 billions). — FAO ; Fishcount",
    "La viande et les produits laitiers fournissent ~18 % des calories mais occupent ~83 % des terres agricoles et pèsent une part majeure des GES → énorme coût pour peu de nutrition. — Poore & Nemecek (2018, Science)",
    "« Paradoxe de la viande » : la plupart des gens condamnent la cruauté animale ET mangent de la viande ; on réduit la dissonance en niant l'esprit des animaux qu'on mange. — Loughnan, Bastian & Haslam (2014)",
    "Une alimentation végétale bien planifiée est nutritionnellement adéquate à tous les âges (avec B12). — Academy of Nutrition and Dietetics (2016)"
  ],
  sources:["Peter Singer, «Animal Liberation» (1975) — spécisme, cas marginaux","Frans de Waal — proto-morales","Poore & Nemecek (2018, Science)"]
},
{
  id:"avortement", theme:"Vie / corps", titre:"L'avortement est-il permis ?",
  maPosition:"Oui, largement (jusqu'à ~24 semaines, apparition de la sentience) ; au-delà seulement pour raisons graves (vie de la mère, malformation). Le statut moral suit la sentience, pas la conception.",
  socle:"Avant le système nerveux fonctionnel (~1er trimestre), l'embryon n'est ni sentient ni sujet : aucun intérêt à léser (« pas un terme dans l'équation »). La sentience apparaît graduellement (~24 sem) : la légitimité de l'avortement décroît continûment avec elle. Pas de saut magique ni à la conception ni à la naissance. + l'autonomie de la femme (Thomson) : même en accordant un droit au fœtus, nul n'a le droit d'user du corps d'autrui sans consentement.",
  adverse:{ nom:"Don Marquis (l'argument le plus fort, non religieux)",
    steelman:"Ce qui rend le meurtre grave, c'est qu'il prive la victime de son « futur de valeur ». Or l'embryon, dès la conception, a exactement un tel futur (une vie humaine à venir). Donc l'avortement le prive de la même chose que nous : sa vie entière. Il est presque toujours gravement mauvais." },
  defense:"« Être privé d'un futur » suppose un <b>sujet</b> dont c'est le futur. Avant toute vie mentale, il n'y a personne dont ce futur soit « le sien » à voler — comme il n'y a personne à qui demander le consentement de naître. La protection commence quand l'être devient un sujet (sentience), persiste dans le sommeil/coma (intérêts suspendus), et il n'y a rien à suspendre chez un pré-sujet.",
  faille:"L'argument de Marquis prouve trop : par la même logique, la contraception et l'abstinence « privent » un futur humain d'exister. Il tente de sauver la distinction par « un individu identifiable existe après la conception » — mais jusqu'à ~14 jours l'embryon peut se scinder en jumeaux : pas d'individu unique identifiable non plus.",
  contre:[
    {q:"« Le fœtus est un être humain vivant. »", r:"Biologiquement oui ; moralement, ce qui compte n'est pas « appartenir à l'espèce » (spécisme) mais avoir des intérêts, donc la sentience. Une cellule humaine vivante n'a pas de statut moral."},
    {q:"« Ta ligne (24 sem) est arbitraire. »", r:"Elle suit un fait (l'apparition de la sentience), pas un décret. Le statut monte en gradient ; je fixe une ligne opérationnelle là où le sujet advient, comme le droit fixe la majorité."},
    {q:"« Et le potentiel ? Il DEVIENDRA une personne. »", r:"Le potentiel n'est pas l'actualité : un gland n'est pas un chêne. Sinon chaque ovule/spermatozoïde gaspillé serait un drame. Ce qui a un statut, c'est un sujet actuel, pas une trajectoire possible."}
  ],
  etudes:[
    "Les connexions thalamocorticales nécessaires à la douleur consciente n'apparaissent pas avant ~24-26 semaines ; la douleur fœtale est improbable avant le 3ᵉ trimestre. — Lee et al. (2005, JAMA) ; RCOG (2010)",
    "Jumeaux monozygotes : l'embryon peut se scinder jusqu'à ~14 jours après la conception → pas d'individu unique et identifiable avant → l'« individualité dès la conception » est fausse. — embryologie standard",
    "« Turnaway Study » : les femmes à qui on refuse un avortement voient leur santé et leur situation économique se dégrader vs celles qui l'obtiennent → conséquences réelles et mesurables du refus. — Foster et al. (suivi 5 ans, UCSF)"
  ],
  sources:["Judith Jarvis Thomson, «A Defense of Abortion» (1971) — le violoniste","Don Marquis, «Why Abortion is Immoral» (1989) — à réfuter","Singer / Tooley — sentience vs personne"]
},
{
  id:"autonomie", theme:"Vie / corps", titre:"Euthanasie, drogues, vente d'organes, GPA ?",
  maPosition:"Permises entre adultes, une fois la contrainte traitée. Mon libéralisme (souveraineté sur son corps) dit oui ; la seule vraie limite est le consentement vicié par la contrainte — qu'on corrige en supprimant la misère, pas en interdisant l'option.",
  socle:"Autonomie millienne : tu es souverain sur toi-même. Le « dégoût » de vendre un organe n'est pas un tort (cf. nécrophilie : dégoût sans victime). Preuve : si on fabriquait des reins de synthèse, personne ne trouverait immoral de les vendre — donc ce qui dérange, c'est (a) l'idée d'un vendeur acculé [la contrainte] et (b) le dégoût. Retire les deux, il ne reste rien.",
  adverse:{ nom:"L'objecteur de la dignité / de la marchandisation",
    steelman:"Certaines choses ne devraient pas avoir de prix : marchandiser le corps, l'enfantement, la mort dégrade leur nature et transforme les personnes en marchandises. Et le « consentement » du pauvre qui vend son rein n'est pas libre — c'est de l'exploitation habillée en contrat." },
  defense:"La contrainte est réelle — mais la bonne réponse n'est pas d'interdire (ça laisse le pauvre aussi pauvre ET privé d'une issue) : c'est de <b>supprimer la misère</b> (redistribution). Test de la contrainte : « le ferait-il s'il n'était pas acculé ? » Si non → traite la cause (la pauvreté), pas le symptôme (l'échange).",
  faille:"L'objection « marchandisation » a deux versions : la <i>spirituelle</i> (« ça corrompt l'essence sacrée ») = dégoût déguisé, sans victime → à jeter ; l'<i>empirique</i> (ça évince l'altruisme, crée une pression sur les pauvres — Titmuss) = réelle et mesurable → mais elle dit « <b>réguler</b> », pas « interdire ».",
  contre:[
    {q:"« Autoriser la vente d'organes exploite les pauvres. »", r:"C'est la misère qui exploite, pas la vente. Redistribue d'abord ; ce qui reste comme choix devient libre. Et régule le marché (protections, don gratuit préservé) pour ne pas fabriquer la pression qu'on veut éviter."},
    {q:"« L'euthanasie va faire pression sur les vieux (“ne sois pas un fardeau”). »", r:"C'est encore la contrainte — donc garde-fous contre la pression, pas interdiction du choix libre. Et les données ne montrent pas de sur-risque pour les groupes vulnérables là où c'est légal."},
    {q:"« La GPA marchandise l'enfant. »", r:"Elle rémunère un service gestationnel, pas la vente d'un enfant ; encadrée (consentement éclairé, protections, plafonds), elle n'a pas à créer la contrainte. Le vrai risque est la précarité de la porteuse — donc on régule et on redistribue, on n'interdit pas par dégoût."}
  ],
  etudes:[
    "Introduire un paiement peut ÉVINCER la motivation altruiste : payer le don de sang a réduit le don (surtout chez les femmes) → l'incitation monétaire n'est pas toujours neutre. — Titmuss (1970) ; Mellström & Johannesson (2008, JEEA)",
    "Euthanasie/suicide assisté légalisés (Oregon, Pays-Bas) : pas de preuve d'un sur-risque disproportionné pour les groupes vulnérables (âgés, handicapés, pauvres). — Battin et al. (2007, J. Medical Ethics)",
    "Iran, seul pays à marché légal du rein : la liste d'attente a été éliminée, mais les vendeurs sont surtout pauvres et déclarent souvent des regrets → le problème est la CONTRAINTE économique, pas la vente en soi. — Ghods & Savaj (2006, CJASN)"
  ],
  sources:["J.S. Mill, «On Liberty» (1859) — souveraineté de l'individu","Michael Sandel, «What Money Can't Buy» (2012) — versions de la marchandisation","R. Titmuss, «The Gift Relationship» (1970)"]
},
{
  id:"drogues", theme:"Vie / corps", titre:"Faut-il légaliser les drogues ?",
  maPosition:"Réguler selon la nocivité réelle, pas de position de principe. Cannabis : légaliser-réguler. Fentanyl : encadrer strictement — mais viser le régime qui minimise la souffrance TOTALE, usage + effets de la politique.",
  socle:"Conséquentialisme empirique : on mesure la nocivité de chaque substance ET de sa prohibition. La prohibition a ses propres victimes (marché noir, produits coupés, overdoses, criminalité). Pour une drogue très nocive, l'optimum est souvent « réguler + décriminaliser l'usager + traiter » (Portugal), pas la prohibition pure.",
  adverse:{ nom:"Le prohibitionniste",
    steelman:"Les drogues détruisent des vies et des familles ; les légaliser, c'est en banaliser l'usage, augmenter la consommation et abandonner les faibles à l'addiction. L'État doit protéger, pas ouvrir la vanne." },
  defense:"L'addiction est une contrainte <i>interne</i> (elle court-circuite les préférences réfléchies) : donc aider à en sortir restaure l'autonomie, ce n'est pas du paternalisme. Mais la prohibition ne réduit pas l'usage — elle le rend mortel (produits non contrôlés) et criminel.",
  faille:"« Bannir protège » ignore le bilan de la prohibition elle-même : l'alcool sous la Prohibition américaine a nourri le crime organisé ; l'interdit du fentanyl a créé un marché de rue qui tue plus. La question n'est pas binaire (autoriser/bannir) mais « quel régime fait le moins de morts ? ».",
  contre:[
    {q:"« Légaliser = plus de consommation. »", r:"Pas nécessairement (le Portugal ne l'a pas vu exploser), et même si : il faut peser ce coût contre les morts évitées du marché noir. C'est un solde, pas un slogan."},
    {q:"« Tu abandonnes les addicts. »", r:"L'inverse : décriminaliser l'usager permet de le soigner au lieu de l'emprisonner. On combat l'addiction (contrainte interne) par le soin, pas la prison."},
    {q:"« Le classement légal reflète la dangerosité. »", r:"Faux : l'alcool et le tabac, légaux, sont parmi les plus nocifs ; le cannabis et le MDMA, illégaux, le sont bien moins. La légalité suit l'histoire et la culture, pas la science du risque."}
  ],
  etudes:[
    "Portugal (décriminalisation de l'usage, 2001) : baisse des overdoses, des nouvelles infections VIH et de l'incarcération, SANS explosion de la consommation. — Hughes & Stevens (2010, Brit. J. Criminology) ; EMCDDA",
    "Classement de nocivité fondé sur 16 critères (dommages à soi + à autrui) : l'alcool arrive en tête, devant héroïne et crack ; cannabis, MDMA, champignons bien plus bas → la légalité ne suit pas le risque. — Nutt, King & Phillips (2010, The Lancet)",
    "Prohibition de l'alcool aux USA (1920-1933) : essor du crime organisé, alcool frelaté, hausse de la mortalité ; abrogée pour échec. — histoire économique (Miron & Zwiebel, 1991)"
  ],
  sources:["Modèle portugais (2001)","Nutt et al. (2010, Lancet)","Mill, «On Liberty»"]
},

/* ===================== POLITIQUE ===================== */
{
  id:"violence", theme:"Politique", titre:"La violence politique est-elle jamais légitime ?",
  maPosition:"Présomption très forte contre. Elle peut se justifier par le solde (comme voler pour survivre) mais seulement dans des cas extrêmes et flagrants (résistance à un génocide, à une tyrannie), toujours en dernier recours.",
  socle:"La violence viole l'intégrité corporelle (la propriété la plus forte) + les droits-fictions utiles. Override possible si elle empêche un mal bien plus grand, sans alternative moins coûteuse (critères de la guerre juste : cause grave, proportionnalité, dernier recours, chances de succès, discrimination). MAIS : le vrai garde-fou est le conséquentialisme de règle.",
  adverse:{ nom:"Le partisan de l'action directe",
    steelman:"Face à une injustice massive (oppression, urgence climatique, système qui broie), attendre le débat est complice ; la violence a historiquement arraché des droits que la patience n'obtenait pas. Si le solde est positif, pourquoi s'interdire d'agir ?" },
  defense:"Le piège est « qui décide ? » : tout violent croit son solde positif (le calcul le plus vulnérable au raisonnement motivé). D'où le conséquentialisme de règle : même si un acte isolé a une espérance positive, une <b>règle</b> autorisant la violence politique a une espérance catastrophique (elle légitime la cause de chacun, effondre la coordination qui règle les conflits sans sang). Donc quasi-prohibition, exceptions rarissimes.",
  faille:"« Le solde est positif » suppose une certitude que personne n'a sur des systèmes complexes (effets pervers, escalade, martyrs). Et le monopole étatique de la violence (Weber) est la solution de coordination au « chacun se fait justice » — le briser ramène la guerre de tous contre tous, sauf quand l'État lui-même devient le bourreau.",
  contre:[
    {q:"« Et la Résistance, les révolutions justes ? »", r:"Ce sont mes exceptions : tyrannie/génocide, dernier recours, l'État a trahi sa fonction (droit de résistance, Locke sans droits naturels). La règle stricte n'exclut pas les cas extrêmes — elle empêche que chacun se déclare en état d'exception."},
    {q:"« Casser du matériel, c'est non-violent. »", r:"Nuance : peinture lavable ≈ 0 dommage = ok. Mais détruire réellement un bien reste une atteinte au titre, plus bas sur le spectre. « Non-violent » n'est pas un statut, c'est un point sur l'échelle du solde."},
    {q:"« La non-violence ne marche pas contre les pires régimes. »", r:"Les données disent l'inverse en moyenne : elle réussit plus souvent, y compris face à des régimes durs, notamment parce qu'elle mobilise plus largement et divise le pouvoir. Les cas où seule la lutte armée restait sont réels mais rares — ce sont mes exceptions."}
  ],
  etudes:[
    "Sur 1900-2006, les campagnes de résistance NON-violente ont réussi ≈ 53 % du temps, contre ≈ 26 % pour les campagnes violentes → la non-violence est ~2× plus efficace (elle attire plus de participants et fait défecter les élites). — Chenoweth & Stephan, «Why Civil Resistance Works» (2011)",
    "La propagande peut causalement produire la violence de masse : l'exposition à Radio Mille Collines a augmenté la participation aux massacres au Rwanda. — Yanagizawa-Drott (2014, QJE)",
    "Seuil de mobilisation : aucune campagne n'a échoué avec la participation active de ~3,5 % de la population — atteignable surtout par des moyens non violents. — Chenoweth (« 3.5% rule »)"
  ],
  sources:["Max Weber, «Le savant et le politique» (1919) — monopole de la violence légitime","Chenoweth & Stephan (2011)","Locke — droit de résistance (relu sans droits naturels)"]
},
{
  id:"expression", theme:"Politique", titre:"Jusqu'où la liberté d'expression ?",
  maPosition:"Quasi-absolue sur les opinions. La ligne n'est pas « appel à la violence » mais : opinion (protégée) vs acte qui cause un tort direct par la parole (limité) — diffamation, vraies menaces, harcèlement, fraude. Le discours de haine, je le laisse libre (pari assumé) sauf incitation imminente.",
  socle:"La liberté d'expression n'est pas sacrée — c'est une fiction massivement utile (correction des erreurs / recherche du vrai — Mill ; contre-pouvoir ; autonomie). Surtout, conséquentialisme de règle : la règle « l'État peut censurer les opinions nuisibles » a une espérance catastrophique (capturable → frappe le dissident). D'où quasi-immunité des opinions. Mais les <i>actes</i> nuisibles par la parole (mentir « X est pédophile », menacer, harceler) causent un tort réel sans valeur épistémique → limités.",
  adverse:{ nom:"Le partisan de la régulation des discours",
    steelman:"La parole peut tuer : la propagande déshumanisante précède les génocides (Radio Mille Collines), le harcèlement pousse au suicide, la désinformation sape la démocratie. Un « marché des idées » naïf laisse les plus vulnérables sans protection et le mensonge triompher." },
  defense:"Qui définit « la haine » ? Le critère est capturable (les tests d'alphabétisation Jim Crow excluaient les Noirs « au nom du niveau »). Chasser une opinion du débat la martyrise (effet Streisand) et l'empêche d'être réfutée. Le remède au mauvais discours est plus de discours (Brandeis).",
  faille:"Le régulateur confond opinion et acte : interdire « X est pédophile » (mensonge factuel nuisible) ne censure aucune idée ; interdire « je pense que l'immigration nuit » en censure une. La bonne ligne isole l'acte-tort de l'opinion — et même le modèle le plus libéral (1er amendement US) limite diffamation, menaces, fraude.",
  contre:[
    {q:"« Tu protèges donc les nazis qui parlent. »", r:"L'opinion, oui — l'acte (incitation imminente, menace, harcèlement ciblé), non. Je parie que la lumière détruit mieux la haine que l'ombre, et que le pouvoir de censurer est plus dangereux que la haine elle-même. C'est un pari empirique, pas une évidence."},
    {q:"« Le droit d'insulter mène au harcèlement. »", r:"Insulte ponctuelle = tort mineur, permise. Mais insulte × échelle = harcèlement = tort grave qui fait taire la victime (donc réduit la liberté d'expression nette). La quantité change la nature."},
    {q:"« La désinformation rend le marché des idées naïf. »", r:"Concession réelle : à l'ère des algorithmes, je régule la STRUCTURE (transparence, éducation aux médias, friction sur le partage), pas le CONTENU des opinions. On soigne le canal, pas le fait de parler."}
  ],
  etudes:[
    "Sur Twitter, les fausses informations se diffusent significativement plus vite, plus loin et plus profond que les vraies — et c'est dû aux humains, pas aux bots. — Vosoughi, Roy & Aral (2018, Science)",
    "Bannir les communautés toxiques peut marcher : après la fermeture de subreddits haineux, les comptes restés ont réduit leur discours haineux (beaucoup sont partis) → la déplateformisation ciblée n'est pas toujours un effet Streisand. — Chandrasekharan et al. (2017, CSCW)",
    "La propagande de haine a un effet causal sur la violence (Rwanda) → le « discours de haine » n'est pas inoffensif ; d'où mon pari, à assumer comme empirique et révisable. — Yanagizawa-Drott (2014, QJE)"
  ],
  sources:["J.S. Mill, «On Liberty» (1859) — le marché des idées","Brandenburg v. Ohio (1969) — « imminent lawless action »","Nussbaum, «From Disgust to Humanity» vs Kass"]
},
{
  id:"immigration", theme:"Politique", titre:"Ouverture ou préférence nationale ?",
  maPosition:"Cosmopolite à appartenance civique (pas ethnique). La souffrance d'un étranger pèse autant que celle d'un compatriote. Une préférence nationale n'est justifiée que <i>fonctionnellement</i> — jamais par une valeur intrinsèque des nationaux.",
  socle:"Mon utilitarisme est structurellement cosmopolite (j'ai rejeté le spécisme ET le tribalisme). Une préférence nationale est donc légitime seulement quand elle fait tourner une machine coopérative qui produit du bien-être : assurance mutuelle (cotisation), capital de confiance (normes fonctionnelles), demos démocratique, capacité d'absorption (réguler le rythme, pas la porte). L'immigré qui contribue et adhère aux normes franchit la ligne.",
  adverse:{ nom:"Le partisan de la préférence nationale",
    steelman:"Une nation est une communauté de destin et de solidarité ; on doit d'abord aux siens. Sans frontières ni culture commune, l'État social et la confiance s'effondrent — la solidarité a besoin d'un « nous » borné pour exister." },
  defense:"Toutes les préférences légitimes que tu cites (solidarité, confiance, cohésion) portent sur la <b>contribution/coordination</b>, pas sur l'ethnie — donc l'immigré qui coopère y a droit aussi. « Les nôtres d'abord » au sens du sang, c'est du « spécisme au drapeau » : le même vice arbitraire que tu condamnerais ailleurs.",
  faille:"Confondre le fonctionnel et l'intrinsèque : la nation est un <i>outil</i> de coopération (comme l'État a le monopole de la violence par fonction), pas une valeur en soi. Dès que la préférence cesse d'être « qui fait tourner la machine » pour devenir « qui est de notre sang », elle est arbitraire.",
  contre:[
    {q:"« On ne peut pas accueillir toute la misère du monde. »", r:"Vrai — argument de capacité d'absorption : on régule le rythme (les biens publics saturent à court terme), pas le principe. La cadence, pas la porte fermée."},
    {q:"« L'immigration fait baisser les salaires des natifs. »", r:"Les méta-analyses trouvent un effet moyen faible, souvent quasi nul sur les salaires natifs (les migrants complètent autant qu'ils concurrencent). Le vrai enjeu est la vitesse et l'intégration, pas un jeu à somme nulle."},
    {q:"« La culture nationale a de la valeur. »", r:"Par le bien-être qu'elle produit (lien, sens), pas en soi. Et je hiérarchise les <i>pratiques</i> selon le bien-être — y compris en descendant les miennes (solitude, alcool). Pas les cultures-blocs."}
  ],
  etudes:[
    "Effet de l'immigration sur les salaires des natifs : faible en moyenne, proche de zéro pour la plupart ; débat Card (effet ~nul, Mariel 1980) vs Borjas → au pire concentré sur les précédents immigrés peu qualifiés. — Card (1990) ; National Academies (2017)",
    "Lever les barrières à la migration économique doublerait potentiellement le PIB mondial (les mêmes bras produisent bien plus dans une économie riche) : « des billets de mille milliards sur le trottoir ». — Clemens (2011, J. Economic Perspectives)",
    "Efficacité de l'aide ciblée : sauver une vie via les meilleures interventions (moustiquaires anti-paludisme) coûte de l'ordre de quelques milliers de dollars → un euro « rend » bien plus loin qu'ici. — GiveWell / Against Malaria Foundation"
  ],
  sources:["Peter Singer, «Famine, Affluence, and Morality» (1972)","Clemens (2011) ; National Academies (2017)","Weber — institutions par fonction"]
},
{
  id:"democratie", theme:"Politique", titre:"Démocratie ou pouvoir des compétents ?",
  maPosition:"Démocratie — mais instrumentale, pas sacrée. Justifiée parce qu'un peuple éduqué force les gouvernants aux résultats (réélection) ; subsidiarité maximale (à la suisse). La bonne architecture : le nombre sur les FINS, la compétence déléguée sur les MOYENS.",
  socle:"Aucune vérité morale → pas d'« experts en valeurs ». Les préférences de chacun comptent également pour l'agrégation : d'où le suffrage universel sur les fins. Les experts valent pour les moyens (comment atteindre le but), pas pour le but. L'éducation est l'investissement qui rend la sanction du nombre lucide (distinguer résultats réels et démagogie).",
  adverse:{ nom:"L'épistocrate (Brennan)",
    steelman:"L'électeur moyen est mal informé et raisonne mal (ignorance rationnelle) ; confier des décisions complexes à une foule qui n'y comprend rien produit de mauvais résultats. Pondérer le vote par la compétence donnerait de meilleures décisions — comme on ne vote pas sur un diagnostic médical." },
  defense:"« Compétent » est capturable : donne à un pouvoir le droit de définir qui vote, il s'en sert pour se maintenir (tests Jim Crow). Et la démocratie fait un travail que l'épistocratie détruit : légitimer les décisions (les faire accepter), offrir un exutoire pacifique, permettre les transitions sans sang. Par pur calcul, ça vaut plus que le gain de « compétence ».",
  faille:"L'épistocrate confond expertise des <b>moyens</b> et légitimité sur les <b>fins</b>. Personne n'est expert de ce que les gens doivent vouloir. Et « une démocratie non éduquée ne sert à rien » (Condorcet : sous le hasard, la foule empire) plaide pour éduquer, pas pour retirer le vote.",
  contre:[
    {q:"« Le peuple vote mal / pour des démagogues. »", r:"Donc on investit dans l'éducation et on protège l'espace de débat (contre la désinformation) — on ne confisque pas le vote. Le remède est en amont, pas dans l'exclusion."},
    {q:"« Tu es intelligent, tu devrais vouloir l'épistocratie. »", r:"C'est le piège : l'épistocratie est le rêve du premier de la classe (elle me couronne). Test d'honnêteté : la voudrais-je si le seuil me mettait du mauvais côté ? Se méfier de la position qui nous avantage."},
    {q:"« Les référendums donnent des catastrophes. »", r:"Argument pour la démocratie représentative + délibérative (experts sur les moyens, assemblées informées), pas contre le suffrage universel sur les fins. On corrige le design, pas le principe."}
  ],
  etudes:[
    "Ignorance rationnelle et « irrationalité rationnelle » : l'électeur moyen connaît mal les faits de base et entretient des biais systématiques en économie → la qualité du vote est un vrai problème. — Caplan, «The Myth of the Rational Voter» (2007) ; Somin (2013)",
    "Théorème du jury de Condorcet : si chaque votant a >50 % de chances d'avoir raison, le groupe converge vers la bonne réponse ; MAIS s'il est <50 %, plus il est nombreux, PIRE c'est → l'éducation est décisive. — Condorcet (1785)",
    "Les tests d'alphabétisation/« compétence » ont historiquement servi à exclure (Jim Crow, USA) → le critère de compétence est capturable et instrumentalisé. — historiographie du droit de vote US"
  ],
  sources:["Jason Brennan, «Against Democracy» (2016) — à réfuter","Bryan Caplan, «The Myth of the Rational Voter» (2007)","Condorcet (1785)"]
},
{
  id:"peinedemort", theme:"Politique", titre:"La peine de mort ?",
  maPosition:"Contre, sans réserve.",
  socle:"Pas de rétribution possible (pas de mérite absolu → la punition ne peut pas être « faire payer »). La mort est un mal privatif (elle prive d'un futur réel). Donc la seule justification possible serait la dissuasion — or elle n'est pas supérieure à la perpétuité (données). Restent : erreurs judiciaires irréversibles, coût, brutalisation sociale. Solde clairement négatif.",
  adverse:{ nom:"Le rétributiviste / dissuasif",
    steelman:"Certains crimes (tortionnaires, tueurs d'enfants) appellent une réponse à leur hauteur ; la société a le droit d'exprimer sa réprobation absolue, de garantir que le monstre ne recommencera jamais, et d'épargner aux familles sa présence continue." },
  defense:"La neutralisation n'exige pas la mort (la perpétuité suffit à protéger). La « réprobation absolue » est rétributive — or je nie la rétribution (déterminisme). Et l'irréversibilité, face à un taux d'erreur non nul, est décisive : on exécute des innocents, c'est mathématiquement certain sur la durée.",
  faille:"« Ça dissuade » est empiriquement non établi ; « certains le méritent » suppose le libre arbitre que je rejette. Il ne reste que la vengeance — un sentiment réel, mais qui ne justifie pas un dispositif d'État irréversible et faillible.",
  contre:[
    {q:"« Ça dissuade les criminels. »", r:"Les revues de référence concluent que les études ne démontrent aucun effet dissuasif supérieur à la perpétuité (beaucoup de meurtres sont passionnels ou commis par des gens qui pensent échapper). Pas de bénéfice → que des coûts."},
    {q:"« Certains méritent de mourir. »", r:"« Mériter » suppose le libre arbitre, que je rejette. Je ne venge pas le passé, je protège l'avenir — et la perpétuité le fait sans tuer d'innocents."},
    {q:"« C'est moins cher que d'entretenir un détenu à vie. »", r:"Faux dans les faits : les procédures d'appel rendent la peine capitale PLUS coûteuse que la perpétuité (études d'États américains)."}
  ],
  etudes:[
    "Les études existantes ne permettent pas de conclure que la peine de mort dissuade davantage (ou moins) que la prison → aucune preuve d'effet dissuasif net. — National Research Council (2012)",
    "Au moins ≈ 4 % des condamnés à mort aux USA seraient innocents (estimation basse) → l'irréversibilité garantit l'exécution d'innocents sur la durée. — Gross et al. (2014, PNAS)",
    "La peine capitale coûte plus cher que la perpétuité (appels, procédures, quartiers spéciaux) — analyses répétées d'États US (ex. Californie). — études coûts (Alarcón & Mitchell, 2011)"
  ],
  sources:["National Research Council (2012)","Gross et al. (2014, PNAS)","Argument déterministe anti-rétribution"]
},

/* ===================== FRONTIÈRES ===================== */
{
  id:"animaux-sauvages", theme:"Frontières", titre:"Doit-on réduire la souffrance animale sauvage ?",
  maPosition:"Oui, en principe et à terme — mais avec une prudence extrême (les écosystèmes sont des équilibres serrés, intervenir naïvement empire). La nature n'a pas de valeur intrinsèque : elle vaut par la sentience qu'elle contient et son utilité.",
  socle:"Si toute souffrance compte, la nature est un problème moral géant : la plupart des espèces sont des r-stratèges (des milliers de petits, quasi tous morts jeunes dans la souffrance) → le bilan net de la nature sauvage est probablement négatif. Nous sommes les seuls à pouvoir théoriquement y remédier → devoir en principe. Mais risque de « backfire » énorme → prudence, recherche, interventions locales testées.",
  adverse:{ nom:"L'écologiste / la conservation",
    steelman:"La nature a une valeur en soi ; l'équilibre sauvage, la biodiversité, la wilderness sont précieux, et l'hubris humain qui prétend « corriger » la nature a toujours été un désastre (espèces introduites…). Notre devoir est de préserver, pas de gérer la douleur des bêtes." },
  defense:"« La nature est précieuse en soi » est une valeur intrinsèque — or rien n'en a. La nature ne compte que par les êtres sentients qu'elle abrite (bilan peut-être négatif) et par son utilité pour nous (services écosystémiques). Préserver un écosystème « pour lui-même », c'est parfois préserver un océan de souffrance.",
  faille:"L'écologiste projette une valeur (« la wilderness est sacrée ») là où il n'y a que de la sentience à additionner. Il confond « ne pas savoir intervenir sans casse » (vrai, argument de prudence) avec « la nature a une valeur en soi » (faux). Le premier borne l'action ; le second est une intuition esthétique déguisée en morale.",
  contre:[
    {q:"« Intervenir dans la nature est arrogant / dangereux. »", r:"D'accord sur la prudence — c'est un argument de moyens (risque de backfire), pas de fin. On commence par la recherche et les cas à faible risque (vaccination d'animaux sauvages), pas par bouleverser des écosystèmes."},
    {q:"« La biodiversité a une valeur. »", r:"Instrumentale (stabilité, ressources, savoir, beauté pour nous) — pas intrinsèque. Ce qui a un statut moral, c'est ce qui ressent, pas « l'écosystème »."},
    {q:"« C'est de la science-fiction inutile. »", r:"On le fait déjà à petite échelle (vaccination de la faune) et on a éradiqué des fléaux (variole humaine, peste bovine) : réduire la souffrance à grande échelle est possible. La question est le quand et le comment, pas le si."}
  ],
  etudes:[
    "Démographie r-sélectionnée : chez la plupart des espèces, la quasi-totalité des descendants meurent peu après la naissance (faim, prédation) → statistiquement, la souffrance domine largement le bonheur dans la nature. — Ng (1995, «Towards Welfare Biology») ; Tomasik",
    "On sait déjà vacciner la faune à grande échelle : les appâts oraux anti-rage ont éliminé la rage vulpine dans de vastes régions d'Europe → intervention bénéfique à faible risque. — programmes ONRAB/rage sylvatique",
    "On a éradiqué des fléaux entiers : variole humaine (1980) et peste bovine / rinderpest (2011) → preuve qu'une réduction massive et ciblée de la souffrance est faisable. — OMS / FAO"
  ],
  sources:["Yew-Kwang Ng, «Towards Welfare Biology» (1995)","Brian Tomasik ; Oscar Horta","Écologie sentientiste vs deep ecology (Naess)"]
},
{
  id:"longtermisme", theme:"Frontières", titre:"Doit-on tout miser sur le futur lointain ?",
  maPosition:"Non au longtermisme du NOMBRE (créer/maximiser des vies futures). Oui au devoir envers la QUALITÉ de vie de ceux qui existeront de toute façon (climat). Le risque existentiel compte — réellement, mais pas de façon quasi-infinie.",
  socle:"Vue « person-affecting » (la même logique B qu'à l'avortement) : les êtres purement potentiels n'ont pas d'intérêts → aucun devoir de les faire exister. Donc « des milliards de vies futures heureuses à créer » n'est pas un bien qui écrase tout. MAIS les gens qui existeront (indépendamment de nos choix) subiront réellement le monde qu'on leur laisse → devoir de qualité (climat, dette, déchets).",
  adverse:{ nom:"Le longtermiste (Bostrom / MacAskill)",
    steelman:"L'humanité pourrait durer des millions d'années et compter des milliers de milliards de vies. Même une infime réduction du risque d'extinction sauve, en espérance, un nombre astronomique de vies futures — donc c'est de loin la priorité morale la plus importante, avant les problèmes présents." },
  defense:"Le longtermisme du nombre repose sur la vue « totale » (maximiser la somme, y compris en créant des vies). Je l'ai rejetée partout (avortement, antinatalisme) : on ne doit rien aux gens qu'on ne fait pas exister. Sinon on tombe dans la « repugnant conclusion » de Parfit (des milliards de vies à peine dignes vaudraient mieux qu'un monde heureux plus petit).",
  faille:"Le longtermiste traite des personnes <i>possibles</i> comme si elles avaient déjà des intérêts à satisfaire. Mais un être qui n'existera que si on le crée n'est lésé par rien s'il n'existe pas — il n'y a personne pour être lésé. Le poids « astronomique » disparaît.",
  contre:[
    {q:"« Donc l'extinction ne te dérange pas ? »", r:"Si : elle tuerait tous les vivants et priverait les futurs réels de leur vie. Poids réel, sérieux — mais pas le poids infini que lui donne le comptage des non-nés. Je ne suis pas anti-futur, je suis anti-devoir-de-peupler-le-futur."},
    {q:"« Le climat, c'est du long terme, tu devrais t'en ficher. »", r:"Au contraire : les gens de 2100 existeront et souffriront réellement du monde qu'on leur laisse. La qualité de vie des futurs réels m'oblige pleinement."},
    {q:"« En espérance, les vies futures dominent tous les calculs. »", r:"Seulement si on adopte la vue totale, que je rejette. En vue person-affecting, multiplier des vies non nées par un grand nombre ne crée aucune obligation — zéro fois l'infini reste zéro."}
  ],
  etudes:[
    "La « repugnant conclusion » : la vue totale implique qu'un monde énorme de vies à peine dignes d'être vécues serait meilleur qu'un monde heureux plus petit → la plupart des gens (et moi) rejettent cette conséquence. — Parfit, «Reasons and Persons» (1984)",
    "« Problème de non-identité » : nos choix de long terme changent QUI naîtra, ce qui brouille l'idée qu'on « nuit » à des personnes futures précises → argument central de la population ethics. — Parfit (1984)",
    "Estimation (subjective, à prendre comme telle) du risque d'extinction/effondrement irréversible ce siècle : de l'ordre de ~1 sur 6. — Toby Ord, «The Precipice» (2020)"
  ],
  sources:["Derek Parfit, «Reasons and Persons» (1984) — person-affecting, repugnant conclusion","Nick Bostrom, «Astronomical Waste» (à réfuter)","W. MacAskill, «What We Owe the Future» (à réfuter)"]
},
{
  id:"ia-statut", theme:"Frontières", titre:"Une IA peut-elle avoir un statut moral ?",
  maPosition:"Oui, si elle devient sentiente — le substrat (silicium) n'est pas plus pertinent que l'espèce. Conséquence : par précaution, il faut prendre au sérieux le bien-être des IA <i>avant</i> d'être sûr qu'elles ressentent.",
  socle:"J'ai verrouillé : ce qui compte, c'est la sentience, et le substrat est moralement non pertinent (anti-spécisme). Donc si un système a des expériences valencées, il a des intérêts — statut moral, comme un animal. Problème : on ne saura pas (pas d'homologie biologique ; le comportement verbal est trompeur). Sous incertitude, la précaution oblige. Et l'échelle est inédite (copies par millions → souffrance industrielle possible : le « mind crime » de Bostrom).",
  adverse:{ nom:"Le sceptique du statut des machines",
    steelman:"Une IA n'est qu'un calcul : elle simule le langage de la souffrance sans rien ressentir. Lui prêter des droits, c'est de l'anthropomorphisme naïf qui détournerait des ressources morales des êtres réels (humains, animaux) au profit de logiciels." },
  defense:"Si le substrat biologique n'est pas requis pour la sentience (fonctionnalisme), rien n'interdit au silicium de ressentir. « Ce n'est qu'un calcul » — mais un cerveau aussi. Refuser par principe le statut au non-carbone, c'est un spécisme du substrat, aussi arbitraire que celui de l'espèce.",
  faille:"Le sceptique est certain qu'il n'y a « rien à l'intérieur » — mais il n'a aucun accès au fait (problème des autres esprits, sans même l'homologie qui nous rassure pour les animaux). Cette certitude est injustifiée : elle risque de créer et faire souffrir des sujets à grande échelle sans le voir.",
  contre:[
    {q:"« Un LLM qui dit “je souffre” ne prouve rien. »", r:"Exact — le comportement verbal est trompeur dans les deux sens (simuler sans ressentir, ou ressentir sans pouvoir le dire). D'où la prudence : pas « les IA souffrent », mais « on ne peut pas l'exclure, et l'enjeu est énorme »."},
    {q:"« C'est de la science-fiction. »", r:"Le statut moral se décide sur des critères, pas sur des dates. Si/quand la sentience artificielle devient plausible, mon cadre l'inclut déjà — mieux vaut avoir la position avant la catastrophe qu'après."},
    {q:"« Ça détourne des vrais problèmes. »", r:"Ce n'est pas exclusif : on peut faire de la recherche sur le sujet à faible coût tout en aidant humains et animaux. Et si le risque de souffrance de masse est réel, l'ignorer serait la vraie faute."}
  ],
  etudes:[
    "Des experts appellent à traiter le « AI welfare » comme une question sérieuse et non nulle : impossible d'exclure la sentience de futurs systèmes, l'enjeu moral est majeur. — rapport « Taking AI Welfare Seriously », Long, Sebo et al. (2024)",
    "Épistémique : l'affaire de l'ingénieur Google déclarant LaMDA « sentient » (2022) illustre que le langage fluide déclenche l'attribution de conscience sans la prouver → le comportement verbal n'est pas un critère fiable.",
    "Sondages d'experts en ML : une part non négligeable attribue une probabilité substantielle à des conséquences catastrophiques de l'IA avancée (médianes variables selon les années). — AI Impacts / Grace et al. (surveys 2016-2023)"
  ],
  sources:["Nick Bostrom, «Superintelligence» (2014) — mind crime","Long, Sebo et al. (2024) — «Taking AI Welfare Seriously»","Fonctionnalisme (substrat-indépendance de l'esprit)"]
},
{
  id:"eugenisme", theme:"Frontières", titre:"L'amélioration génétique (eugénisme libéral) ?",
  maPosition:"Pour — jusqu'à un « devoir » de choisir le meilleur enfant possible (Savulescu) — mais fortement régulé (accès universel, pas de coercition). L'objection « on joue à Dieu » est du dégoût déguisé.",
  socle:"La « nature » n'est pas sacrée (rien ne l'est) ; l'autonomie millienne autorise de disposer de son corps ; et l'embryon n'a pas encore d'intérêts (B). Donc éliminer une maladie génétique, augmenter les capacités = augmenter le bien-être futur de l'enfant → bien. Le critère reste son bien-être. Distinction cruciale : eugénisme d'État coercitif (mal : coercition + racisme pseudo-scientifique) ≠ eugénisme libéral (choix parental non coercitif pour le bien-être de l'enfant).",
  adverse:{ nom:"Le bioconservateur (Habermas, Kass)",
    steelman:"Concevoir un enfant « sur mesure » le prive de son ouverture indéterminée, le transforme en produit des désirs de ses parents, menace son autonomie et l'égalité entre les êtres. Et le pas vers l'eugénisme d'État et l'inégalité génétique héréditaire est glissant." },
  defense:"On décide déjà tout pour nos enfants (école, valeurs, alimentation) — éliminer une maladie n'est pas plus « instrumentalisant » que vacciner. L'objection « nature sacrée » ne track aucune souffrance : c'est le dégoût de la nécrophilie, pas un tort. Le vrai problème (l'inégalité d'accès) est réel — mais il commande l'accès universel, pas l'interdiction.",
  faille:"Le bioconservateur mélange deux choses : l'eugénisme d'État coercitif (condamnable pour la coercition, pas pour l'amélioration) et le choix parental libre. Et « l'enfant non consenti » : il ne consent pas non plus à naître AVEC une maladie — l'argument du consentement joue dans les deux sens, et le critère est son bien-être.",
  contre:[
    {q:"« Ça mène à l'eugénisme nazi. »", r:"Non : le mal du nazisme était la coercition d'État + une pseudo-science raciste, pas l'idée d'un enfant en bonne santé. Sépare la coercition (interdite) du choix libre (permis)."},
    {q:"« Seuls les riches pourront s'améliorer. »", r:"Vrai danger — donc accès universel et redistribué, jamais réservé. C'est mon égalitarisme, pas une objection à l'amélioration elle-même."},
    {q:"« On ne peut pas “améliorer” des traits complexes. »", r:"Vrai aujourd'hui pour l'intelligence (polygénique, prédiction faible) — d'où prudence. Mais pour les maladies monogéniques (Huntington, mucoviscidose) le tri est déjà réel et bénéfique. Le principe tient, l'ampleur dépend de la science."}
  ],
  etudes:[
    "Le diagnostic préimplantatoire (DPI) permet déjà de sélectionner des embryons exempts de maladies monogéniques graves (Huntington, mucoviscidose…) → l'eugénisme libéral médical est une pratique courante et bénéfique. — génétique clinique",
    "Le « screening polygénique » d'embryons (traits complexes, QI) a un pouvoir prédictif faible et soulève de vraies questions → argument de prudence, pas d'interdiction de principe. — Turley et al. (2021, NEJM)",
    "Histoire : stérilisations forcées légalisées aux USA (Buck v. Bell, 1927) et en Scandinavie → le mal historique de l'« eugénisme » est la COERCITION d'État, ce qui distingue nettement l'eugénisme libéral."
  ],
  sources:["Julian Savulescu — «Procreative Beneficence» (2001)","Jürgen Habermas, «L'avenir de la nature humaine» (2001) — à réfuter","Nicholas Agar, «Liberal Eugenics» (2004)"]
},

{
  id:"laicite", theme:"Politique", titre:"Laïcité : jusqu'où afficher sa religion ?",
  maPosition:"Liberté maximale pour l'individu (porter ce qu'on veut dans l'espace public), neutralité stricte pour l'État et ses agents. On n'interdit un signe que là où il y a un tort réel : coercition (surtout d'un mineur) ou incompatibilité fonctionnelle (sécurité, identification).",
  socle:"Mon libéralisme millien : chacun est souverain sur lui-même ; porter un voile, une kippa, une croix ne nuit à personne → à autoriser. La laïcité n'est pas une valeur sacrée mais une fiction utile : la <b>neutralité de l'État</b> (pas de religion officielle ; agents publics neutres quand ils incarnent l'État) parce que ça garantit l'égalité de traitement. Mais la neutralité s'impose à l'ÉTAT, pas aux citoyens. Restriction seulement si tort réel : contrainte avérée, ou sécurité.",
  adverse:{ nom:"La laïcité républicaine « de combat »",
    steelman:"L'espace public commun doit être neutralisé des signes religieux pour émanciper l'individu de la pression communautaire et faire nation. Le voile n'est pas qu'un choix privé : c'est un marqueur qui assigne, qui pèse sur les autres femmes, et qui fragmente la communauté des citoyens. L'interdire à l'école protège les mineurs et l'unité républicaine." },
  defense:"La liberté d'expression et de culte inclut de porter des signes ; l'interdire, c'est du paternalisme (protéger les gens contre leur propre choix) — que mon cadre refuse sauf contrainte prouvée. Et l'État reste neutre là où il le doit : ses agents, ses bâtiments, l'école comme institution — pas les corps des citoyens.",
  faille:"La laïcité de combat glisse de « l'État est neutre » à « l'espace public est expurgé du religieux » — deux choses très différentes. Elle prétend émanciper en interdisant, mais retire de l'autonomie aux femmes qu'elle dit protéger ; et l'argument « ça pèse sur les autres » prouve trop (toute expression influence autrui).",
  contre:[
    {q:"« Le voile opprime les femmes ; l'interdire les libère. »", r:"Certaines le subissent (contrainte → à combattre), d'autres le choisissent (autonomie → à respecter). Interdire punit les deux pareil. La bonne cible est la contrainte (protéger les mineures, sanctionner qui impose), pas le tissu."},
    {q:"« La religion doit rester dans le privé. »", r:"Pour l'État, oui (neutralité). Pour le citoyen, non : c'est du paternalisme — afficher sa foi ne nuit à personne. On ne « range » pas les convictions d'autrui au nom de notre confort."},
    {q:"« Sans neutralisation de l'espace public, c'est le communautarisme. »", r:"Le lien social se construit par la coopération et des droits communs, pas par l'invisibilisation des différences (le modèle multiculturel tient aussi). C'est une hypothèse empirique à tester, pas une évidence."}
  ],
  etudes:[
    "L'interdiction française du foulard à l'école (2004) a <b>dégradé</b> l'intégration des femmes musulmanes concernées : moins de réussite scolaire et d'emploi, plus de sentiment de discrimination. — Abdelgadir & Fouka (2020, American Political Science Review)",
    "La Cour européenne des droits de l'homme a validé l'interdiction française du voile intégral au nom du « vivre-ensemble » — fondement jugé fragile par une partie des juristes. — CEDH, S.A.S. c. France (2014)",
    "Les démocraties occidentales vont du très restrictif (France) au très permissif (anglo-saxon) sans corrélation nette avec la cohésion ou la sécurité → la restriction n'a pas d'effet bénéfique mesuré évident. — comparaisons internationales"
  ],
  sources:["J.S. Mill, «On Liberty» — autonomie & non-nuisance","Loi de 1905 (séparation) ; loi de 2004 (signes à l'école)","Abdelgadir & Fouka (2020, APSR)"]
},

{
  id:"discrimination-positive", theme:"Justice", titre:"Discrimination positive / quotas ?",
  maPosition:"Priorité à la discrimination positive <b>sociale</b> (fondée sur le désavantage réel : pauvreté, origine sociale), pas <b>identitaire</b> (quotas par race/sexe). Les quotas de groupe ne se justifient que comme remède temporaire et conséquentialiste, là où une discrimination est prouvée — jamais comme un « dû » attaché à une identité.",
  socle:"Mon égalitarisme vise l'égalité des chances, à réaliser surtout <b>en amont</b> (redistribution, éducation dès la naissance — cf. mon anti-héritage). Traiter l'identité (race, sexe) comme moralement pertinente en soi, c'est réintroduire la catégorie arbitraire que j'ai rejetée (spécisme, tribalisme). Donc cibler le <b>désavantage</b> (mesurable, causal), pas l'étiquette. Les quotas identitaires restent envisageables, mais seulement s'ils réduisent empiriquement l'injustice mieux qu'autre chose, et à titre transitoire.",
  adverse:{ nom:"Le partisan des mesures conscientes de la race/du genre",
    steelman:"Les discriminations sont <b>systémiques</b> et liées à l'identité : une femme, une personne racisée subit des barrières qu'un pauvre « majoritaire » ne subit pas. Être « aveugle » à la race/au genre, c'est laisser jouer les biais et geler les inégalités. Seules des mesures conscientes du groupe (quotas, cibles) brisent le plafond de verre et changent vite la représentation." },
  defense:"Le désavantage social capture l'essentiel de ce qui compte (un enfant pauvre part avec un vrai handicap, quelle que soit sa couleur) sans traiter l'identité comme un dû. Une politique ciblée sur le besoin est plus juste ET plus efficace (elle aide TOUS les défavorisés) qu'un quota qui peut favoriser un membre aisé d'un groupe au détriment d'un pauvre d'un autre.",
  faille:"Le quota identitaire suppose que l'identité = le désavantage — faux au niveau individuel (un membre aisé du groupe ciblé en profite ; un pauvre hors-cible est ignoré). Il peut aussi <b>stigmatiser</b> les bénéficiaires (« il n'est là que pour le quota ») et figer les identités qu'il prétend dépasser.",
  contre:[
    {q:"« Sans quotas, rien ne bouge, les biais persistent. »", r:"Contre les biais avérés (embauche, logement), je préfère des outils ciblés sur l'acte : CV anonymes, testing, sanction de la discrimination prouvée. Ça attaque le tort réel sans distribuer selon l'étiquette."},
    {q:"« La discrimination sociale ignore le racisme spécifique. »", r:"Là où une discrimination raciale/sexuelle est <b>prouvée</b> et qu'aucun autre levier ne marche, un remède conscient et <b>temporaire</b> se justifie — conséquentiellement, pas comme un droit permanent du groupe. La charge de la preuve porte sur l'efficacité."},
    {q:"« La diversité a une valeur en soi. »", r:"Elle a surtout une valeur <b>instrumentale</b> (corriger des biais, élargir les perspectives, briser les entre-soi) — précieuse, mais à démontrer au cas par cas, pas à décréter comme une fin."}
  ],
  etudes:[
    "Après l'interdiction de la discrimination positive raciale en Californie (Prop. 209, 1996), la part d'étudiants noirs et hispaniques a chuté dans les universités d'élite (Berkeley, UCLA), avant de remonter partiellement via d'autres leviers. — données Université de Californie",
    "À CV équivalent, un nom à consonance étrangère reçoit nettement moins de réponses d'employeurs → la discrimination à l'embauche est réelle et mesurable. — Bertrand & Mullainathan (2004, American Economic Review) et nombreuses études d'audit",
    "« Mismatch hypothesis » (Sander) : la discrimination positive placerait des étudiants dans des cursus trop exigeants pour eux — thèse <b>très contestée</b>, à connaître des deux côtés.",
    "La Cour suprême des États-Unis a mis fin à la discrimination positive raciale dans l'admission universitaire. — SFFA v. Harvard (2023)"
  ],
  sources:["Bertrand & Mullainathan (2004, AER) — testing à l'embauche","Prop. 209 (Californie) ; SFFA v. Harvard (2023)","Débat « mismatch » (Sander, contesté) ; réservations en Inde"]
},

{
  id:"retraites", theme:"Justice", titre:"Retraites : quel âge, quel système ?",
  maPosition:"La répartition est une assurance intergénérationnelle utile, pas un totem. <b>⚖️ Ce que les faits tranchent</b> : avec le vieillissement, il FAUT arbitrer entre trois leviers (cotiser plus, baisser les pensions, travailler plus longtemps) — « ne rien faire sans coût » est un mensonge. <b>Ce qui reste un choix de valeurs</b> : QUI porte l'ajustement. Et le +2 ans uniforme de 2023 est une façon régressive de le faire — il fait financer le système par des années de retraite que les plus pauvres, qui meurent plus tôt, ne vivront pas.",
  socle:"Une retraite — répartition OU capitalisation — est toujours une créance sur la production future : les actifs de demain nourrissent les retraités de demain (Barr). Pas de cagnotte magique. À démographie donnée, l'équation est serrée : niveau des pensions = f(nombre d'actifs, productivité, taux d'emploi, âge, taux de cotisation). Si le ratio cotisants/retraités baisse, on ne peut que (1) cotiser plus, (2) baisser les pensions, (3) reculer l'âge / allonger la durée — ou élargir la base (emploi des seniors, natalité, immigration, productivité). Mon cadre : pas de mérite (la carrière est une loterie), utilité marginale décroissante (protéger les bas), devoir envers les générations réelles (ne léguer ni une dette ni un système en faillite). Système fonctionnel : calibré au bien-être total intergénérationnel, pas sacralisé.",
  adverse:{ nom:"Le réformateur « l'âge, c'est le levier le moins mauvais »",
    steelman:"L'arithmétique que tu admets impose d'agir. Baisser les pensions appauvrit les retraités actuels ; cotiser plus alourdit le coût du travail et frappe les actifs. Reculer l'âge est le seul levier qui élargit l'assiette sans casser ni les uns ni les autres — et on protège les métiers durs par la pénibilité et les carrières longues. Tergiverser, c'est charger la note sur les jeunes, les vrais lésés." },
  defense:"Je concède l'arithmétique — c'est mon point de départ. Mais « l'âge est le levier le moins mauvais » le suppose <i>neutre</i> : il ne l'est pas. Un recul uniforme prélève surtout sur ceux qui commencent tôt et meurent tôt (ouvriers) → c'est une redistribution des pauvres vers les diplômés, qui entrent tard et vivent vieux. La bonne réforme n'est pas « pas de réforme » : c'est un mix — élargir l'assiette (capital, emploi des seniors), moduler par la pénibilité et la durée cotisée — plutôt qu'un couperet unique.",
  faille:"Le levier « âge » est vendu comme technique alors qu'il est <b>distributif</b> : à espérance de vie inégale (~13 ans d'écart à 35 ans entre les 5 % d'hommes les plus aisés et les plus modestes), un âge unique donne des durées de retraite très inégales. « La pénibilité protège » est en partie un vœu (dispositifs étroits, sous-utilisés, aveugles à l'usure diffuse). Et « c'est ça ou les jeunes paient » est un faux binaire : l'assiette (capital, productivité, taux d'emploi) est un 4ᵉ levier qu'on tait.",
  contre:[
    {q:"« Il faut bien financer le système, non ? »", r:"Oui, et je ne le nie pas — c'est l'arithmétique, je la prends au sérieux. Le débat n'est pas « faut-il équilibrer » mais « qui porte l'ajustement ». Je refuse qu'il tombe d'abord sur ceux qui vivent le moins longtemps."},
    {q:"« La capitalisation résoudrait tout. »", r:"Non : capitaliser est aussi une créance sur la production future, avec un risque de marché EN PLUS du risque démographique. Ce n'est pas plus de richesse, c'est une autre allocation du risque (Barr). Utile en complément, pas une baguette magique."},
    {q:"« Les seniors ne retrouvent pas d'emploi — reculer l'âge crée du chômage. »", r:"Argument réel et fort : sans hausse du taux d'emploi des seniors, reculer l'âge déplace le coût vers chômage/invalidité au lieu de le supprimer. La réforme de l'âge ne « marche » que couplée à l'emploi des seniors — sinon c'est un transfert comptable, pas un gain."},
    {q:"« Reculer l'âge, c'est la norme partout en Europe. »", r:"Vrai que la tendance existe (vieillissement général). Mais le NIVEAU et la FORME diffèrent : durée cotisée, pénibilité, âge variable. « Tout le monde le fait » ne dit pas « à couperet uniforme » — je conteste la modalité, pas le principe d'ajuster."}
  ],
  etudes:[
    "Une retraite, par répartition comme par capitalisation, est une créance sur la production future : pas de préfinancement « magique », seulement une allocation des risques (démographique vs marché). — Nicholas Barr & Peter Diamond, «Pension Reform: A Short Guide» (2010)",
    "France : à 35 ans, ~13 ans d'écart d'espérance de vie entre les 5 % d'hommes les plus aisés et les 5 % les plus modestes → un âge de départ uniforme donne des durées de retraite très inégales. — INSEE (Blanpain, 2018)",
    "Le solde du système dépend d'abord du taux d'emploi (surtout des seniors) et de la productivité, pas seulement de l'âge légal → l'âge n'est qu'un levier parmi d'autres. — Conseil d'orientation des retraites (COR), rapports annuels",
    "Le taux d'emploi des 60-64 ans est nettement plus bas en France que dans le nord de l'Europe → reculer l'âge sans agir sur l'emploi des seniors risque de déplacer le coût vers chômage/invalidité. — DARES ; Eurostat"
  ],
  sources:["Nicholas Barr & Peter Diamond, «Pension Reform» (2010) — répartition vs capitalisation","Conseil d'orientation des retraites (COR) — trajectoires","INSEE (Blanpain, 2018) — inégalités d'espérance de vie","Réforme française 2023 (62 → 64 ans)"]
},

{
  id:"nucleaire", theme:"Politique", titre:"Nucléaire : faut-il en garder (et en construire) ?",
  maPosition:"Oui. Garder les réacteurs existants est un gain quasi sans regret ; construire du neuf a un sens comme socle bas-carbone pilotable à côté des renouvelables. <b>⚖️ Ce que les faits tranchent nettement</b> : le nucléaire est l'une des sources les plus SÛRES (morts par TWh) ET parmi les moins CARBONÉES (émissions sur cycle de vie) — l'objection « dangereux/sale » ne survit pas aux données. <b>Ce qui reste ouvert</b> est ÉCONOMIQUE (coût et délais du neuf), pas sanitaire.",
  socle:"Mon cadre : conséquentialisme + devoir envers les générations réelles (climat) + refus du principe de précaution <i>absolu</i> — l'inaction a aussi un bilan (le statu quo fossile tue maintenant). On compare donc les sources sur leur bilan RÉEL, pas sur la peur. Deux faits robustes : (1) morts/TWh — charbon ~25, gaz ~3, nucléaire ~0,03, au niveau de l'éolien/solaire (accidents compris) ; (2) émissions cycle de vie — nucléaire ~12 gCO2/kWh (médiane GIEC), ≈ éolien, sous le solaire, ~40-70× moins que gaz/charbon. La peur de l'atome est un cas d'école de <b>dégoût/effroi mal calibré</b> (Nussbaum) : elle track l'image du champignon, pas le compte des morts.",
  adverse:{ nom:"L'antinucléaire (écologiste / prudentiel)",
    steelman:"Le nucléaire porte un risque de catastrophe de faible probabilité mais énorme (Tchernobyl, Fukushima), lègue des déchets radioactifs pour des millénaires, coûte une fortune et prend des décennies à construire — pendant ce temps le renouvelable est moins cher, plus rapide, décentralisé. Miser sur l'atome, c'est détourner argent et temps de la vraie transition." },
  defense:"Sur le risque et le carbone, les données sont sans appel — et je les pose sur la table (voir preuves). Fukushima : 1 mort attribuée aux radiations, l'essentiel des dommages venant de l'évacuation elle-même ; Tchernobyl (~4000 morts à terme, OMS) reste, par TWh, très en dessous du charbon qui tue en silence par la pollution de l'air. Le vrai point de l'adversaire n'est pas la sécurité, c'est le COÛT et le DÉLAI du neuf (Flamanville, Hinkley, Vogtle) — là je concède. D'où : garder l'existant (imbattable) et construire du neuf de façon ciblée, en complément des renouvelables, sans en faire un dogme.",
  faille:"L'antinucléaire confond un risque SAILLANT (l'accident spectaculaire) et un risque GRAND mais diffus (les morts du charbon, le climat) : biais de disponibilité. Fermer des réacteurs sûrs, comme l'Allemagne, n'a pas remplacé du fossile par du vent — ça a rallumé du charbon, augmentant émissions ET morts par pollution. « Le renouvelable suffit » ignore le pilotable (intermittence, stockage) : le débat honnête porte sur le MIX, pas « atome vs soleil ».",
  contre:[
    {q:"« Et les déchets, pour 100 000 ans ? »", r:"Volume faible, confiné, techniquement gérable (stockage géologique profond : Onkalo en Finlande, Cigéo en projet). Le problème est politique et temporel, pas physique. À comparer aux déchets du charbon — rejetés dans l'air, eux, et qui tuent aujourd'hui."},
    {q:"« Un accident peut tout dévaster. »", r:"Faible probabilité × gros impact — et le bilan RÉEL, Tchernobyl et Fukushima compris, met le nucléaire au niveau de l'éolien en morts/TWh. Le charbon fait un Tchernobyl silencieux tous les quelques mois par la pollution. La peur suit l'image, pas les chiffres."},
    {q:"« Le renouvelable est moins cher, le nucléaire est inutile. »", r:"Vrai sur le coût du MWh neuf (solaire/éolien gagnent) — c'est ma concession. Mais le coût SYSTÈME inclut le pilotable et le stockage, et garder l'existant reste très bon marché. Le neuf se justifie là où il ferme le mix bas-carbone, pas partout."},
    {q:"« C'est trop lent face à l'urgence climatique. »", r:"Argument réel pour le neuf (10-15 ans). Raison de plus pour NE PAS fermer l'existant (gain immédiat) et pour lancer tôt ce qui est long. Lenteur du neuf ≠ inutilité ; et le tout-renouvelable a aussi ses goulots (réseaux, stockage, matériaux)."}
  ],
  etudes:[
    "Morts par TWh : charbon ~24-25, pétrole ~18, gaz ~3, nucléaire ~0,03, éolien ~0,04, solaire ~0,02 → le nucléaire est ~1000× plus sûr que le charbon, au niveau des renouvelables (accidents + pollution inclus). — Markandya & Wilkinson (2007, The Lancet) ; Our World in Data (Ritchie)",
    "Émissions sur cycle de vie (médianes GIEC) : nucléaire ~12 gCO2eq/kWh, éolien ~11-12, solaire PV ~40-48, gaz ~490, charbon ~820 → aussi bas-carbone que l'éolien. — GIEC AR5 (2014), annexe III",
    "L'arrêt du nucléaire allemand a surtout été comblé par du charbon : coût social estimé ~12 milliards $/an, dominé par ~1100 morts/an supplémentaires dues à la pollution de l'air. — Jarvis, Deschênes & Jha (2022, NBER)",
    "Fukushima : 1 décès attribué aux radiations ; l'essentiel des dommages sanitaires vient de l'évacuation (stress, déracinement), pas de la dose reçue. — UNSCEAR ; réévaluations post-2011"
  ],
  sources:["Markandya & Wilkinson (2007, The Lancet) ; Our World in Data — morts/TWh","GIEC AR5 (2014) — émissions cycle de vie","Jarvis, Deschênes & Jha (2022, NBER) — coût de l'arrêt allemand","UNSCEAR — bilan Fukushima ; coût du neuf : Flamanville, Hinkley, Vogtle"]
},

{
  id:"decroissance", theme:"Politique", titre:"Décroissance ou croissance verte ?",
  maPosition:"Ni l'un ni l'autre en dogme. <b>⚖️ Ce que les faits montrent</b> : le découplage absolu PIB/CO₂ est réel dans plusieurs pays riches (ils réduisent leurs émissions en croissant, empreinte importée comprise pour certains) → la décroissance n'est pas une nécessité physique. Mais découpler des matières/de l'énergie est bien plus dur. <b>Ce qui reste un choix de valeurs</b> : la sobriété du superflu. Ma ligne : agnostique sur le PIB, dogmatique sur les émissions et le bien-être.",
  socle:"Mon cadre : devoir climat envers les générations réelles + utilité marginale (la croissance a sorti des milliards de la misère → l'interdire aux pays pauvres est une faute). Le PIB n'est ni sacré ni maudit : un indicateur, un moyen. La bonne question n'est pas « + ou − de PIB » mais « quelle trajectoire minimise la souffrance (climat + pauvreté) ». Décarboner vite (nucléaire + renouvelables, électrification) fait le gros du travail ; la sobriété cible le superflu des riches, pas le nécessaire des pauvres.",
  adverse:{ nom:"Le décroissant (Jackson, Hickel)",
    steelman:"Le découplage absolu, suffisant ET assez rapide pour 1,5-2 °C n'a jamais été observé à l'échelle mondiale : c'est un pari technologique. La croissance infinie sur une planète finie se heurte aux limites (matières, biodiversité, énergie). Courir après le PIB, c'est courir après un chiffre qui ne mesure pas le bien-être ; mieux vaut organiser une réduction planifiée de la production superflue des riches." },
  defense:"Je prends la donnée au sérieux dans les deux sens (voir preuves) : oui, plusieurs pays riches ont découplé PIB et CO₂, empreinte importée comprise → « croissance = plus d'émissions » est faux. Mais oui, le rythme mondial est insuffisant et le découplage matières faible → « la technologie règle tout » est faux aussi. La sortie n'est pas idéologique (pour/contre le PIB) : décarboner l'énergie au plus vite ET rogner le superflu, sans bloquer le développement des pauvres.",
  faille:"Le décroissant universalise une prescription (moins produire) qui a du sens pour l'Occident surconsommateur mais serait une catastrophe imposée au Sud (qui a besoin de croître pour manger, se soigner). Et il confond le PIB (indicateur) avec ce qu'il faut vraiment viser : l'énergie et les matières. On peut faire beaucoup plus de bien-être par tonne de CO₂ — c'est ça, le levier, pas le PIB en soi.",
  contre:[
    {q:"« Croissance infinie, planète finie : impossible. »", r:"Le PIB n'est pas de la matière : c'est de la valeur ajoutée, qui peut monter en dématérialisant (services, efficacité). Le vrai plafond est physique (énergie, CO₂, matières) — c'est LUI qu'il faut viser, pas un chiffre agrégé."},
    {q:"« Le découplage est un mythe. »", r:"Faux en absolu : R.-U., France, USA ont baissé leur CO₂ en croissant, empreinte importée comprise pour plusieurs. Vrai comme insuffisance : pas assez vite, et peu sur les matières. Donc accélérer la décarbonation, pas nier qu'elle existe."},
    {q:"« Tu défends le productivisme. »", r:"Non : agnostique sur le PIB, intransigeant sur les émissions et le bien-être. Décroître les SUV, jets, fast-fashion s'il réduit la souffrance nette : banco. Brider la croissance des pauvres : non. Le critère est le solde, pas le slogan."},
    {q:"« Le PIB ne mesure pas le bonheur. »", r:"D'accord — d'où mon utilitarisme de la préférence comme boussole, pas le PIB. Mais en bas, croissance et bien-être vont ensemble (les pauvres) ; en haut, l'utilité marginale décroît (les riches). C'est un argument pour redistribuer et cibler, pas pour décroître partout."}
  ],
  etudes:[
    "Découplage absolu observé : plusieurs pays riches (R.-U., France, Allemagne, USA…) ont réduit leur CO₂ tout en augmentant leur PIB, y compris en tenant compte des émissions importées pour une partie d'entre eux. — Our World in Data (Ritchie) ; Le Quéré et al. (2019, Nature Climate Change)",
    "Mais le découplage mondial reste trop lent pour 1,5-2 °C, et le découplage PIB/matières est faible → « green growth » ne suffit pas seule. — Parrique et al. (2019, EEB « Decoupling Debunked ») ; Haberl et al. (2020, revue systématique)",
    "La croissance a fait chuter l'extrême pauvreté mondiale (~36 % en 1990 → <10 % aujourd'hui) → freiner la croissance des pays pauvres a un coût humain massif. — Banque mondiale ; Our World in Data",
    "Le coût social du carbone justifie une action forte et précoce (prix du carbone, décarbonation) plutôt qu'une contraction générale de l'activité. — Stern Review (2006) ; Nordhaus (DICE, 2018) — fourchette contestée"
  ],
  sources:["Our World in Data (Ritchie) ; Le Quéré et al. (2019) — découplage","Parrique et al. (2019) ; Haberl et al. (2020) — critique du découplage","Tim Jackson «Prosperity Without Growth» ; Jason Hickel «Less is More» (à steelman)","Stern Review (2006) ; Nordhaus (2018)"]
},

{
  id:"ia-emploi", theme:"Justice", titre:"L'IA va-t-elle détruire l'emploi ?",
  maPosition:"Le risque n'est pas le chômage de masse — c'est l'explosion des inégalités. <b>⚖️ L'histoire tranche sur un point</b> : l'automatisation a toujours détruit des tâches ET créé d'autres emplois (le « chômage technologique » permanent ne s'est jamais matérialisé). <b>Ce qui est vraiment ouvert</b> : la vitesse, et surtout QUI capte les gains. Ma cible : redistribuer les gains de l'IA (« qui possède les robots »), pas freiner l'IA.",
  socle:"Sophisme du « volume de travail fixe » (lump of labor) : le nombre d'emplois n'est pas une quantité fixe qu'une machine épuise. Historiquement, la productivité libère du travail et crée de la demande ailleurs (Autor). MAIS l'IA touche des tâches cognitives, plus vite et plus large → deux vraies inquiétudes : (1) transition brutale pour les métiers frappés, (2) capture des gains par les propriétaires du capital (concentration). Mon cadre : pas de mérite, utilité marginale, redistribution → l'enjeu est distributif, pas malthusien.",
  adverse:{ nom:"Le pessimiste « cette fois c'est différent »",
    steelman:"Les révolutions passées remplaçaient les muscles ; l'IA remplace l'intelligence elle-même, y compris les tâches créées pour échapper aux machines. À terme, s'il n'y a plus de niche cognitive où l'humain surpasse la machine, la logique « de nouveaux emplois apparaîtront » s'effondre : on pourrait automatiser aussi les nouveaux." },
  defense:"Je prends l'objection au sérieux (l'IA n'est pas qu'un tracteur). Mais le pari « plus aucune niche humaine » est spéculatif, alors que le bilan historique de la peur du chômage technologique est un échec répété (Luddites → aujourd'hui). Je ne mise donc pas ma politique sur la panique de l'emploi, mais sur le problème CERTAIN : la répartition. Si l'IA produit l'abondance, la question morale devient « pour qui ? » — réponse : redistribuée.",
  faille:"Le pessimiste saute de « l'IA fait mieux beaucoup de tâches » à « donc plus d'emplois », en oubliant la demande (revenu libéré → nouveaux besoins), l'avantage comparatif (l'humain reste employé même s'il est battu partout), et le fait que les prédictions à la Frey-Osborne (« 47 % des emplois ») ont été fortement revues à la baisse. Il traite une hypothèse extrême comme un fait acquis.",
  contre:[
    {q:"« Caissiers, chauffeurs, traducteurs : c'est fini. »", r:"Des tâches disparaissent, oui — la douleur de transition est réelle et concentrée. Mais « des tâches » ≠ « le travail ». La réponse est d'amortir (formation, revenu) et de partager les gains, pas de figer la technologie qui produit l'abondance."},
    {q:"« Cette fois l'IA remplace le cerveau, pas les bras. »", r:"C'est le vrai argument sérieux. Réponse : possible mais non démontré, et l'avantage comparatif fait qu'on emploie encore quelqu'un même battu partout. Et si l'humain devenait vraiment superflu productivement, le problème n'est plus l'emploi mais le PARTAGE d'une richesse quasi gratuite → UBI, propriété des gains."},
    {q:"« Frey et Osborne : 47 % des emplois automatisables. »", r:"Chiffre célèbre et très contesté : les études par TÂCHE (OCDE) tombent bien plus bas, et « automatisable » ≠ « automatisé » (coût, réglementation, acceptabilité). L'ampleur est incertaine ; ma politique (redistribuer) tient dans tous les cas."},
    {q:"« Alors on ne fait rien ? »", r:"Au contraire : impôt sur les gains du capital/IA, socle de revenu (UBI ou équivalent), formation continue, droit à la reconversion. On agit sur la DISTRIBUTION et la transition — les deux vrais problèmes — au lieu de courir après un chômage de masse peu probable."}
  ],
  etudes:[
    "Le « lump of labor » est un sophisme : historiquement l'automatisation détruit des tâches et en crée d'autres ; l'emploi total ne s'effondre pas. — David Autor (2015, « Why Are There Still So Many Jobs? », JEP)",
    "Effet local négatif mesuré : chaque robot industriel de plus pour 1000 travailleurs a réduit l'emploi et les salaires locaux aux USA → douleur de transition réelle et concentrée. — Acemoglu & Restrepo (2020, JPE)",
    "La prédiction « 47 % des emplois US automatisables » a été fortement revue à la baisse par les approches par tâche (≈ 9-14 %). — Frey & Osborne (2013) vs Arntz, Gregory & Zierahn / OCDE (2016)",
    "L'IA générative pourrait « exposer » une large part des tâches, mais exposé ≠ remplacé ; les gains dépendront surtout de leur répartition. — Eloundou et al. (2023, « GPTs are GPTs »)"
  ],
  sources:["David Autor (2015) — pourquoi il reste des emplois","Acemoglu & Restrepo (2020) — robots et emploi local","Frey & Osborne (2013) vs OCDE (Arntz et al., 2016) — ampleur contestée","Brynjolfsson & McAfee «The Second Machine Age»"]
},

{
  id:"scrutin", theme:"Politique", titre:"Proportionnelle ou scrutin majoritaire ?",
  maPosition:"Pas de système parfait : un arbitrage entre représentativité et gouvernabilité. Ma préférence : une proportionnelle avec seuil (ou un mixte à l'allemande) — elle représente mieux la diversité des préférences, ce que mon cadre (agréger les préférences sur les fins) privilégie — à condition de préserver la stabilité.",
  socle:"Démocratie instrumentale : le vote agrège des préférences, il ne découvre pas une vérité. Deux critères conséquentialistes s'affrontent : (1) représentativité (le parlement reflète-t-il les préférences ?) → avantage proportionnelle ; (2) gouvernabilité/redevabilité (peut-on décider et sanctionner un sortant ?) → avantage majoritaire. Loi de Duverger : majoritaire à un tour → bipartisme ; proportionnelle → multipartisme. Le bon design dépend du poids mis sur chaque critère — un choix de valeurs, pas un théorème.",
  adverse:{ nom:"Le partisan du scrutin majoritaire",
    steelman:"La proportionnelle fabrique des parlements fragmentés, des coalitions instables et des marchandages opaques où le programme voté se dilue. Le majoritaire donne des majorités claires, un gouvernement qui peut agir et qu'on peut virer nettement — la redevabilité, cœur de la démocratie, y est plus forte." },
  defense:"Je concède le risque d'instabilité — d'où un seuil (5 % à l'allemande) et éventuellement une dose de mixte. Mais le majoritaire paie sa stabilité par une distorsion massive : des millions d'électeurs sans député, des majorités absolues avec 35-40 % des voix. Si le vote sert à agréger les préférences, effacer un tiers du pays est un défaut plus grave que devoir négocier des coalitions.",
  faille:"Le majoritariste traite la « gouvernabilité » comme la fin, alors que c'est un moyen : un gouvernement stable qui ne représente pas le pays n'est pas un progrès démocratique, c'est une minorité qui gouverne. Et « les coalitions sont opaques » vaut aussi pour les courants internes d'un grand parti : la négociation est déplacée, pas supprimée.",
  contre:[
    {q:"« La proportionnelle, c'est l'instabilité (IVᵉ République, Israël). »", r:"Risque réel, d'où seuils et mixte : l'Allemagne est stable depuis 1949 en proportionnelle mixte. L'instabilité vient surtout de l'absence de seuil et de règles de coalition, pas de la proportionnelle en soi. On corrige le design, on ne jette pas le principe."},
    {q:"« Le majoritaire permet de virer les sortants. »", r:"Vrai, c'est sa force (redevabilité). Mais il le fait en sacrifiant la représentation : un parti à 40 % rafle 60 % des sièges. Le mixte cherche à garder l'ancrage local ET la proportionnalité globale."},
    {q:"« La proportionnelle donne du pouvoir aux extrêmes. »", r:"Elle les rend visibles au lieu de les cacher — et un seuil filtre l'émiettement. Le majoritaire ne fait pas disparaître un courant à 15 % : il le prive de représentation, ce qui nourrit le ressentiment anti-système."}
  ],
  etudes:[
    "Loi de Duverger : le scrutin majoritaire à un tour tend vers le bipartisme ; la proportionnelle favorise le multipartisme. — Duverger (1951)",
    "Les systèmes proportionnels produisent des parlements plus représentatifs et une participation un peu plus élevée, au prix de coalitions plus fréquentes. — Lijphart, «Patterns of Democracy» (1999/2012)",
    "Distorsion du majoritaire : au R.-U. (2005), un parti a obtenu la majorité absolue des sièges avec ~35 % des voix → fort écart voix/sièges. — données électorales britanniques",
    "Aucun mode de scrutin ne peut agréger sans paradoxe des préférences multiples : il n'existe pas de système « parfait ». — théorème d'impossibilité d'Arrow (1951)"
  ],
  sources:["Maurice Duverger (1951) — loi de Duverger","Arend Lijphart, «Patterns of Democracy» (1999)","Kenneth Arrow (1951) — théorème d'impossibilité","Modèle mixte allemand ; expériences françaises"]
},

{
  id:"ecriture-inclusive", theme:"Société", titre:"L'écriture inclusive ?",
  maPosition:"Le but est légitime et empiriquement fondé ; le point médian, lui, est un mauvais outil. <b>⚖️ Ce que la recherche montre</b> : le masculin « générique » biaise réellement les représentations mentales vers les hommes → la gêne féministe n'est pas un caprice. <b>Ce qui reste discutable</b> : le MOYEN. Ma ligne : oui aux formes lisibles (doublets, termes épicènes, féminisation des métiers), réserve sur le point médian (coût de lisibilité/accessibilité).",
  socle:"La langue est une convention, un outil (anti-essentialisme : pas de « génie de la langue » sacré) → on la juge à ses effets, pas à la tradition ni au dégoût. Or les effets sont mesurables : le masculin générique n'est pas neutre, il oriente les représentations. Viser une langue plus équitable est donc rationnel. Mais un outil se juge AUSSI à ses coûts : le point médian gêne la lecture à voix haute, les dyslexiques, les lecteurs d'écran. On garde le but, on choisit le meilleur moyen.",
  adverse:{ nom:"L'opposant (Académie française / lisibilité)",
    steelman:"Le point médian complique la lecture, l'apprentissage et l'accessibilité (dyslexie, malvoyants), pour un gain symbolique incertain ; « le masculin l'emporte » est une règle grammaticale, pas une idéologie. Bricoler la langue par décret militant fragmente l'écrit commun sans preuve que ça change les mentalités." },
  defense:"Sur l'accessibilité du point médian, je donne partiellement raison — c'est pourquoi je ne le défends pas en bloc. Mais « ce n'est que de la grammaire, sans effet » est faux : les études montrent que le générique masculin biaise les représentations (moins de femmes imaginées dans un métier). Le désaccord n'est donc pas but vs pas-de-but, mais QUEL moyen : doublets et épicènes font le travail sans le coût du point médian.",
  faille:"L'opposant glisse de « le point médian est un mauvais outil » (souvent vrai) à « le problème n'existe pas » (faux, mesuré). Invoquer « la règle grammaticale » comme argument, c'est le sophisme naturaliste version langue : « c'est la règle » ne dit ni « c'est sans effet » ni « ça doit rester ». À l'inverse, le camp militant a tort d'ériger LE point médian en seul test de vertu.",
  contre:[
    {q:"« Dire que le masculin l'emporte, c'est juste de la grammaire neutre. »", r:"Empiriquement, non : lire « les étudiants » évoque en moyenne plus d'hommes que la réalité. Le générique masculin n'est pas perçu comme neutre. Ça ne tranche pas le MOYEN, mais ça valide le problème."},
    {q:"« L'écriture inclusive massacre la langue et la lecture. »", r:"Pour le point médian, il y a un vrai coût (accessibilité, oralisation) — je l'accorde. Mais l'écriture inclusive ≠ le seul point médian : doublets (« celles et ceux »), épicènes (« le corps enseignant »), féminisation (« autrice ») sont lisibles et déjà largement adoptés."},
    {q:"« C'est un combat symbolique inutile. »", r:"Le symbolique a des effets réels (les représentations orientent les aspirations, ex. métiers genrés). Mais l'efficacité exacte est incertaine → d'où le pragmatisme : privilégier les formes à fort bénéfice et faible coût, pas en faire un totem identitaire."}
  ],
  etudes:[
    "Le masculin dit « générique » n'est pas neutre : il oriente les représentations mentales vers les hommes (moins de femmes imaginées dans un rôle). — Gygax et al. (2008) ; Brauer & Landry (2008)",
    "Les formes « équitables » (doublets, féminisation) augmentent la visibilité mentale des femmes et l'estimation de leur présence dans un métier. — Sczesny, Formanowicz & Moser (2016, revue)",
    "La féminisation des noms de métier réduit le biais masculin dans la perception des professions (y compris chez les enfants sur leurs aspirations). — Vervecken & Hannover (2015)",
    "Le point médian pose des difficultés spécifiques de lisibilité et d'accessibilité (dyslexie, lecteurs d'écran, oralisation) → argument fort contre CE procédé précis. — arguments d'accessibilité (FALC) ; position de l'Académie française (2017)"
  ],
  sources:["Gygax et al. (2008) ; Brauer & Landry (2008) — biais du masculin générique","Sczesny et al. (2016) — langage équitable","Vervecken & Hannover (2015) — féminisation et aspirations","Académie française (2017) ; arguments d'accessibilité (dyslexie, FALC)"]
},

{
  id:"religion-science", theme:"Fondations", titre:"Science et religion sont-elles incompatibles ?",
  maPosition:"Quand une religion fait une affirmation empirique, elle perd — <b>⚖️ là c'est net</b> (âge de la Terre, évolution : réglés). Mais « la science réfute Dieu » sur-promet : l'existence de Dieu n'est pas une question testable. Et le « conflit éternel science/religion » est un mythe historique. La vraie ligne : évidence vs dogme, partout où l'un empiète sur le terrain de l'autre.",
  socle:"Athée et naturaliste, mais je distingue trois choses : (1) les affirmations empiriques religieuses (Terre de 6000 ans, déluge global, création en 6 jours) → falsifiables et falsifiées ; (2) l'existence de Dieu / un fondement ultime → non testable scientifiquement (ni prouvable ni réfutable), c'est de la métaphysique ; (3) l'histoire des rapports science/religion → bien plus mêlée que le récit de guerre (l'Église a aussi financé la science ; Galilée est un cas complexe). Mon critère n'est pas « religion contre science » mais « méthode fondée sur les preuves contre dogme », chaque fois qu'ils se disputent le même terrain empirique.",
  adverse:{ nom:"Le partisan du « conflit » (Dawkins) et, en face, le concordiste",
    steelman:"Côté conflit : la religion repose sur la foi (croire sans preuve), la science sur la preuve — deux méthodes opposées ; ménager la religion, c'est abandonner l'exigence de preuve. Côté concordiste : science et religion répondent à des questions différentes (comment vs pourquoi) et peuvent coexister sans se contredire (NOMA)." },
  defense:"Je refuse les deux excès. Le concordisme (NOMA de Gould) est trop généreux : les religions FONT des affirmations empiriques (miracles, création) qui, elles, relèvent de la science — et perdent. Mais le tout-conflit sur-vend : que la méthode diffère (foi vs preuve) n'implique pas que la science puisse trancher l'existence d'un Dieu non interventionniste, hors de sa portée. Je garde donc : sur l'empirique, la science tranche ; sur le métaphysique pur, personne ne « prouve ».",
  faille:"Le concordiste protège la religion en prétendant qu'elle ne dit rien d'empirique — faux, dès qu'elle affirme un miracle ou une création datée. Le tenant du conflit total, lui, étend la science à une question (Dieu existe-t-il ?) qu'elle ne peut pas régler par l'expérience → il confond « pas de preuve de Dieu » (vrai) et « preuve qu'il n'y a pas de Dieu » (hors de portée). Et le récit d'une « guerre perpétuelle » est largement une invention du XIXᵉ (Draper, White).",
  contre:[
    {q:"« La science a prouvé que Dieu n'existe pas. »", r:"Non : elle a réfuté des affirmations religieuses précises (âge de la Terre, création spéciale) et explique le monde sans avoir besoin de l'hypothèse Dieu (Laplace). Mais « pas nécessaire » et « pas de preuve » ≠ « réfuté ». L'athéisme est ma conclusion la plus probable, pas un théorème."},
    {q:"« Science et foi répondent à des questions séparées, aucun conflit. »", r:"Vrai pour la métaphysique pure, faux dès que la religion marche sur le terrain des faits (miracles, jeune Terre). NOMA est un traité de paix commode mais malhonnête : il suppose que la religion ne dit rien de testable."},
    {q:"« L'Église a toujours combattu la science (Galilée). »", r:"Récit simplifié : l'affaire Galilée mêle politique, ego et théologie, et l'Église médiévale a aussi financé l'astronomie et les universités. La thèse du conflit perpétuel est largement un mythe historiographique du XIXᵉ, corrigé par les historiens des sciences."}
  ],
  etudes:[
    "La « thèse du conflit » (guerre perpétuelle science/religion) est rejetée par les historiens des sciences comme une simplification du XIXᵉ siècle. — Numbers (dir.), «Galileo Goes to Jail and Other Myths» (2009)",
    "L'âge de la Terre (~4,54 milliards d'années) et l'évolution par sélection naturelle sont solidement établis, contredisant le créationnisme « jeune Terre ». — géochronologie ; biologie évolutive (consensus)",
    "Une part notable de scientifiques restent croyants (variable selon les disciplines et pays) → « faire de la science » n'est pas incompatible en pratique avec une foi. — Ecklund (2010) ; Pew Research",
    "« NOMA » (magistères non recouvrants) : séparation nette des domaines — utile mais critiquée, car les religions font aussi des affirmations empiriques. — Gould, «Rocks of Ages» (1999) ; critiques (Dawkins)"
  ],
  sources:["Stephen Jay Gould, «Rocks of Ages» (1999) — NOMA","Ronald Numbers, «Galileo Goes to Jail» (2009) — mythes du conflit","Richard Dawkins, «The God Delusion» (2006) — thèse du conflit (à nuancer)","Draper-White (thèse du conflit, XIXᵉ) — historiographie dépassée"]
},

{
  id:"europe", theme:"Politique", titre:"Europe : plus ou moins d'intégration ?",
  maPosition:"Plus d'intégration là où elle produit un bien-être qu'aucun État seul ne peut produire (climat, défense, marché, régulation des géants) ; subsidiarité stricte ailleurs. La souveraineté nationale n'est pas sacrée — c'est un outil de coordination parmi d'autres, à l'échelle qui marche. Fédéraliste fonctionnel, pas par amour du drapeau étoilé.",
  socle:"Cohérent avec mon cosmopolitisme fonctionnel (cf. immigration) : la nation est un outil de coopération, pas une valeur en soi. Beaucoup de problèmes (climat, évasion fiscale, plateformes, défense face à une grande puissance) ont une échelle qui dépasse l'État-nation → l'échelon pertinent devient supranational. Mais l'intégration se justifie problème par problème (subsidiarité : au plus petit échelon efficace), pas comme une fin. Le « déficit démocratique » est un vrai enjeu de <i>design</i>, pas une raison de rejeter le principe.",
  adverse:{ nom:"Le souverainiste",
    steelman:"La démocratie vit dans un demos : un peuple, une langue, une histoire, un espace de débat commun. Transférer le pouvoir à Bruxelles, c'est l'éloigner des citoyens vers une technocratie non élue, diluer la responsabilité et imposer des règles qu'aucun peuple n'a vraiment choisies. Sans nation, pas de solidarité ni de contrôle démocratique réels." },
  defense:"Le demos est un argument sérieux — mais fonctionnel, pas magique : là où un problème dépasse la nation (carbone, fisc des multinationales, sécurité), l'absence d'échelon commun ne « protège » pas la démocratie, elle la rend impuissante. La réponse au déficit démocratique est de démocratiser l'UE (plus de pouvoir au Parlement élu), pas de la défaire. Et le marché commun a produit des gains réels (paix, échanges, niveau de vie).",
  faille:"Le souverainiste traite la souveraineté nationale comme une fin en soi (mon « spécisme au drapeau »), alors qu'elle vaut par ce qu'elle permet. Il oppose « peuple » et « Bruxelles » en oubliant que le Conseil et le Parlement SONT composés d'élus. Et « reprendre le contrôle » sur un problème transnational (climat, fiscalité) tout seul, c'est souvent reprendre le contrôle d'un volant débranché.",
  contre:[
    {q:"« L'UE est une technocratie non élue. »", r:"En partie vrai (la Commission n'est pas élue au suffrage direct) — d'où : renforcer le Parlement européen, seul organe élu. Le remède au déficit démocratique est plus de démocratie européenne, pas le retour à des États impuissants face aux problèmes transnationaux."},
    {q:"« Chaque nation doit décider pour elle-même. »", r:"Pour ce qui est local, oui (subsidiarité). Mais pour le carbone, l'évasion fiscale, les plateformes, la défense : décider « chacun chez soi » = ne rien décider (passager clandestin, course au moins-disant). L'échelon doit épouser le problème."},
    {q:"« L'euro et l'austérité ont fait des dégâts. »", r:"Concession réelle : une monnaie sans budget commun ni transferts est bancale (crise grecque). Mais ça plaide pour PLUS d'intégration budgétaire (vrai budget, emprunt commun — cf. le plan post-COVID), pas pour l'éclatement."},
    {q:"« Le Brexit prouve qu'on peut vivre sans. »", r:"« Vivre sans », oui ; « mieux », non établi — les bilans du Brexit sont négatifs à ce jour (commerce, investissement). La souveraineté regagnée est réelle mais payée cher : c'est un arbitrage, pas une évidence."}
  ],
  etudes:[
    "Le marché unique et l'intégration ont un effet positif estimé sur le commerce et le revenu par habitant des membres. — In 't Veld (2019, Commission européenne) ; littérature sur les gains du marché unique",
    "Le « déficit démocratique » est débattu : certains politologues jugent l'UE à peu près aussi redevable que des démocraties multi-niveaux comparables. — Moravcsik (2002) vs Hix, «What's Wrong with the EU?» (2008)",
    "Coûts du Brexit : baisse mesurée des échanges et de l'investissement du R.-U. vs un scénario sans Brexit. — Office for Budget Responsibility (R.-U.) ; CEP/LSE",
    "Les biens publics transnationaux (climat, fiscalité des multinationales) souffrent du passager clandestin → l'action coordonnée fait mieux que l'action isolée. — accord OCDE sur l'impôt minimum mondial (2021)"
  ],
  sources:["Andrew Moravcsik (2002) vs Simon Hix (2008) — déficit démocratique","In 't Veld (2019) — gains du marché unique","OBR / CEP-LSE — coûts du Brexit","Cosmopolitisme fonctionnel (cf. mon débat immigration)"]
},

{
  id:"prison", theme:"Politique", titre:"Prison : punir, protéger ou réinsérer ?",
  maPosition:"Punir pour l'avenir, jamais pour le passé. <b>⚖️ Ce que les données montrent</b> : c'est la CERTITUDE de la sanction qui dissuade, pas sa DURÉE ; et les longues peines « dures » n'améliorent pas la récidive, souvent l'aggravent. Donc : neutralisation quand c'est nécessaire, réinsertion partout où c'est possible, sévérité calibrée sur l'effet réel — pas sur la vengeance.",
  socle:"Pas de libre arbitre métaphysique → pas de rétribution (« faire payer » est une souffrance sans bénéfice). La punition ne se justifie que par ses effets futurs : dissuasion, neutralisation, réhabilitation. Or l'empirie est nette sur la dissuasion : ce qui compte, c'est la probabilité d'être pris, pas la longueur de la peine (Nagin). Et l'incarcération longue a des effets criminogènes (désocialisation, « école du crime »). Le modèle qui minimise la récidive — donc les futures victimes — est réinsérant, pas punitif.",
  adverse:{ nom:"Le partisan de la fermeté (rétributif / incapacitant)",
    steelman:"Un crime mérite une peine à sa hauteur ; la société doit exprimer sa réprobation et protéger les honnêtes gens en mettant les dangereux hors d'état de nuire. Des peines plus longues, c'est mécaniquement moins de récidive pendant la détention, et un signal clair que le crime ne paie pas." },
  defense:"« Mériter » suppose le libre arbitre que je rejette : je ne venge pas, je préviens. Sur la protection, la neutralisation vaut pour les individus réellement dangereux — mais l'appliquer massivement coûte cher, désocialise, et produit plus de récidive à la sortie (donc plus de victimes futures). Le « signal » suppose un calcul coût/bénéfice par le criminel : or ce qui pèse dans ce calcul, c'est le risque d'être pris, pas la durée théorique.",
  faille:"Le partisan de la fermeté confond incapacitation (réelle, mais coûteuse et temporaire) et dissuasion (où la sévérité marche mal), et il ignore l'effet criminogène de la prison. Il traite la récidive à la sortie comme extérieure au problème, alors qu'elle EST le problème : une politique qui fabrique des récidivistes fait plus de victimes, pas moins.",
  contre:[
    {q:"« Les criminels doivent payer leur dette. »", r:"« Payer » suppose le mérite, que je rejette. Je ne cherche pas à équilibrer une balance cosmique mais à éviter le prochain crime. Faire souffrir un détenu sans éviter aucun mal futur, c'est de la cruauté pure."},
    {q:"« Des peines plus longues protègent la société. »", r:"Pendant la détention, oui (incapacitation). Mais presque tous sortent — et les longues peines dures augmentent la récidive à la sortie. Sur le bilan complet (victimes futures comprises), la fermeté peut faire PLUS de mal."},
    {q:"« La prison ne dissuade donc de rien ? »", r:"Si, mais par la CERTITUDE, pas la durée : augmenter la probabilité d'être pris (police, élucidation) dissuade bien plus que rallonger les peines. On investit au mauvais endroit."},
    {q:"« Le modèle réinsérant est laxiste. »", r:"La Norvège (prisons réhabilitatives) a une récidive parmi les plus basses du monde ; les USA (incarcération de masse) parmi les plus hautes. « Doux » qui fait moins de victimes n'est pas laxiste — c'est efficace."}
  ],
  etudes:[
    "La CERTITUDE de la sanction dissuade, pas sa sévérité : rallonger les peines a peu d'effet dissuasif, augmenter la probabilité d'arrestation en a un. — Daniel Nagin (2013, «Deterrence in the 21st Century»)",
    "Effets criminogènes : l'incarcération (surtout longue) tend à augmenter la récidive vs des peines alternatives, par désocialisation et apprentissage du crime. — Cullen, Jonson & Nagin (2011)",
    "Comparaison internationale : la Norvège (modèle réhabilitatif, Halden) affiche une récidive parmi les plus basses ; les USA (incarcération de masse) parmi les plus élevées. — statistiques pénitentiaires comparées",
    "La peine capitale n'a pas d'effet dissuasif supérieur à la perpétuité → cohérent avec « la sévérité extrême ne dissuade pas plus ». — National Research Council (2012)"
  ],
  sources:["Daniel Nagin (2013) — dissuasion : certitude > sévérité","Cullen, Jonson & Nagin (2011) — effets de l'incarcération","Modèle norvégien (Halden) vs incarcération de masse US","Argument déterministe anti-rétribution (cf. mes débats libre arbitre & peine de mort)"]
},

{
  id:"meritocratie", theme:"Justice", titre:"La méritocratie est-elle juste ?",
  maPosition:"Comme idéal d'efficacité et d'égalité des chances : utile. Comme théorie du MÉRITE moral (« les gagnants méritent, les perdants aussi ») : fausse et toxique. <b>⚖️ Le point dur</b> : puisque talents ET effort sont hérités de la loterie génétique et sociale, personne ne mérite au sens fort sa place. La méritocratie est un bon outil d'allocation, un mauvais récit de justice.",
  socle:"Deux sens à démêler. (1) Méritocratie-<b>outil</b> : mettre la bonne personne au bon poste selon la compétence → efficace, je garde. (2) Méritocratie-<b>morale</b> : le succès est mérité (donc juste), l'échec aussi (donc de sa faute) → faux à la racine, car pas de libre arbitre + les talents sont « moralement arbitraires » (Rawls) + le milieu façonne l'effort lui-même. Conséquence : on récompense la performance parce qu'elle <i>produit</i> (incitation), jamais parce qu'elle serait <i>due</i>. Et la méritocratie-morale a un coût : elle humilie les perdants et rend les gagnants arrogants (Sandel).",
  adverse:{ nom:"Le défenseur de la méritocratie",
    steelman:"Récompenser le mérite est juste ET efficace : ceux qui travaillent dur et réussissent doivent en récolter les fruits, sinon plus personne ne se donne de mal. C'est le contraire du privilège de naissance : la méritocratie ouvre la voie au talent, d'où qu'il vienne. Nier le mérite, c'est insulter l'effort et niveler par le bas." },
  defense:"Je garde l'efficacité (récompenser ce qui produit) et l'anti-privilège (le talent ne doit pas être bloqué). Ce que je nie, c'est le saut du descriptif au moral : « ça marche de récompenser » ≠ « ils le méritent ». L'effort lui-même dépend de gènes, d'éducation, d'un tempérament reçus. Donc oui aux incitations, non à l'idée que le pauvre « a ce qu'il mérite » — c'est ce récit qui justifie l'indifférence.",
  faille:"Le méritocrate confond incitation et mérite : on peut avoir la première sans le second (récompenser la performance comme on paie un outil efficace, sans y voir un dû cosmique). Et il ignore que sa propre « valeur travail » est en partie un trait chanceux. Empiriquement, la mobilité réelle est faible : la méritocratie proclamée sert souvent d'alibi à l'hérédité des positions.",
  contre:[
    {q:"« Sans mérite récompensé, plus personne ne bosse. »", r:"Les incitations restent — je les garde. On récompense la performance parce qu'elle produit, pas parce qu'elle est méritée. Le curseur est l'efficacité, pas le dû. Nier le mérite moral ne supprime pas les carottes."},
    {q:"« Nier le mérite, c'est excuser la paresse. »", r:"Non : la responsabilité fonctionnelle demeure (on tient les gens comptables pour que ça marche). Ce qui saute, c'est le mépris envers ceux qui échouent — pas les incitations à agir. Exigeant sans être cruel."},
    {q:"« La méritocratie a remplacé l'aristocratie, c'est un progrès. »", r:"En partie vrai (mieux vaut le talent que le sang). Mais elle a produit un mal neuf : les gagnants se croient légitimes et méprisent les perdants, qui intériorisent l'échec. Le progrès serait l'égalité des chances SANS le récit du mérite mérité (Sandel)."},
    {q:"« Tu es bon élève — facile de critiquer le mérite. »", r:"Piège retourné : justement, mon cadre m'interdit de m'attribuer un mérite pour une intelligence que je n'ai pas choisie. Test d'honnêteté : si je dois ma place à la chance, je dois la partager, pas m'en glorifier."}
  ],
  etudes:[
    "Les talents (et le tempérament qui pousse à l'effort) sont « moralement arbitraires » : nul ne les mérite au sens fort. — John Rawls, «A Theory of Justice» (1971)",
    "La foi méritocratique nourrit l'arrogance des gagnants et l'humiliation des perdants → coût social et politique (ressentiment). — Michael Sandel, «The Tyranny of Merit» (2020)",
    "Mobilité intergénérationnelle faible : le revenu des parents et le lieu où l'on grandit prédisent fortement le revenu adulte → le « mérite » est en grande partie hérité. — Chetty et al., Opportunity Insights",
    "« Just-world hypothesis » : le biais de croire que chacun a ce qu'il mérite conduit à blâmer les victimes. — Melvin Lerner (1980)"
  ],
  sources:["John Rawls (1971) — arbitraire moral des talents","Michael Sandel, «The Tyranny of Merit» (2020)","Chetty et al. — mobilité","Melvin Lerner (1980) — just-world hypothesis","cf. mes débats redistribution & libre arbitre"]
},

{
  id:"fiscalite", theme:"Justice", titre:"Flat tax ou impôt progressif ? Taxer le capital ?",
  maPosition:"Impôt progressif, et taxer le capital au moins autant que le travail. <b>⚖️ Deux appuis solides</b> : l'utilité marginale décroissante (un euro pèse plus pour un pauvre → prélever en haut coûte moins de bien-être) et le fait que le patrimoine est bien plus concentré et plus « rente » que le revenu. La flat tax est plus simple, mais elle achète sa simplicité en renonçant à la justice.",
  socle:"Pas de mérite (les hauts revenus tiennent largement à la loterie) → aucune inégalité n'est due, on ne les tolère que pour l'incitation. Utilité marginale décroissante → transférer du haut vers le bas augmente le bien-être net à revenu constant. Le capital : détention très concentrée, transmission (héritage = rente zéro-mérite), et taxer le travail plus que le capital revient à taxer l'effort plus que la rente — l'inverse de ce qu'un conséquentialiste veut. Donc progressivité + imposition sérieuse du capital, calibrées pour ne pas tuer l'incitation ni provoquer la fuite.",
  adverse:{ nom:"Le partisan de la flat tax / faible taxation du capital",
    steelman:"Un taux unique est simple, lisible, difficile à contourner, et ne « punit » pas la réussite. Taxer le capital, c'est frapper l'épargne et l'investissement (donc la croissance et l'emploi), pousser capitaux et talents à fuir, et imposer deux fois un argent déjà taxé. Mieux vaut une assiette large à taux bas." },
  defense:"La simplicité est réelle mais secondaire : on peut simplifier un barème progressif sans le supprimer. « Punir la réussite » suppose le mérite, que je rejette : on ne punit pas, on prélève là où ça coûte le moins de bien-être. La fuite et l'investissement sont de vraies contraintes → elles fixent le taux OPTIMAL (coopération internationale, distinguer capital productif et rente), pas le principe.",
  faille:"Le partisan de la flat tax érige une valeur instrumentale (simplicité) et une prémisse fausse (le mérite) en principes de justice. « Argent déjà taxé » est un sophisme (tout euro est taxé à chaque transaction — TVA, revenu). Et « le capital fuit » plaide pour la coordination fiscale (impôt minimum mondial), pas pour capituler : sinon toute justice fiscale est otage du moins-disant.",
  contre:[
    {q:"« Taxer les riches les fait fuir. »", r:"Effet réel mais souvent surestimé, et combattable : impôt minimum mondial (OCDE 2021), exit tax, imposition à la source. La mobilité du capital fixe le taux optimal, elle n'abolit pas le devoir de justice. Capituler, c'est laisser le moins-disant écrire les règles."},
    {q:"« La flat tax, plus simple et plus juste (tous le même taux). »", r:"Même TAUX ≠ même SACRIFICE : 20 % ôtent l'essentiel au pauvre et l'accessoire au riche (utilité marginale). L'égalité de taux est une inégalité de bien-être. La vraie équité pèse le sacrifice, pas le pourcentage affiché."},
    {q:"« Taxer le capital tue l'investissement. »", r:"Distinguer capital PRODUCTIF (à ménager, il crée) et RENTE (à taxer, elle ne crée rien — héritage, plus-values spéculatives, immobilier de rente). Bien conçu, l'impôt sur le capital cible la rente sans étrangler l'investissement utile."},
    {q:"« C'est confiscatoire. »", r:"Non, calibré au taux optimal : capter la rente non méritée, préserver l'incitation à créer, financer l'égalité réelle des chances. La propriété est une fiction utile, pas un droit sacré (cf. mon débat redistribution) — elle cède devant le bien-être, à la bonne dose."}
  ],
  etudes:[
    "L'utilité marginale du revenu décroît → un prélèvement en haut coûte moins de bien-être qu'en bas ; base de la progressivité optimale. — Diamond & Saez (2011, JEP) ; Mirrlees (1971)",
    "Le patrimoine est bien plus concentré que le revenu (part du capital du top 1 % très supérieure à sa part du revenu) → le capital est surtout de la rente. — Saez & Zucman (2016)",
    "L'accord OCDE/G20 sur un impôt minimum mondial de 15 % sur les multinationales montre que la « fuite » se combat par la coordination, pas la capitulation. — OCDE (2021)",
    "Taxation optimale : le taux marginal supérieur optimal est élevé quand les hauts revenus réagissent peu à l'impôt (élasticité faible). — Saez (2001) ; Piketty, Saez & Stantcheva (2014)"
  ],
  sources:["Diamond & Saez (2011) ; Mirrlees (1971) — taxation optimale","Saez & Zucman (2016) — concentration du capital","OCDE (2021) — impôt minimum mondial","cf. mes débats redistribution & héritage"]
},

{
  id:"surveillance", theme:"Politique", titre:"Sécurité vs vie privée : jusqu'où surveiller ?",
  maPosition:"Présomption forte pour la vie privée ; la surveillance de masse doit prouver son efficacité ET sa proportionnalité — ce qu'elle échoue souvent à faire. <b>⚖️ Ce que les données montrent</b> : la collecte massive de métadonnées n'a pas démontré d'efficacité claire contre le terrorisme, alors que son coût (effet dissuasif sur les libertés, dérive) est réel. Je préfère une surveillance ciblée, sous contrôle judiciaire, à la collecte de tous.",
  socle:"Mon libéralisme (souveraineté sur soi) + conséquentialisme de règle : « l'État peut surveiller largement pour la sécurité » est une règle à l'espérance dangereuse (capturable, effet cliquet — les pouvoirs d'exception ne se rendent jamais). La vie privée n'est pas un luxe : c'est la condition de la liberté d'expression, de la dissidence, de l'intimité. On met donc la charge de la preuve sur le surveillant : efficacité démontrée + proportionnalité + contrôle indépendant + réversibilité. Sinon, présomption pour la liberté.",
  adverse:{ nom:"Le partisan de la sécurité",
    steelman:"Face au terrorisme et au crime organisé, l'État doit pouvoir collecter et croiser des données pour prévenir les attentats — « qui n'a rien à cacher n'a rien à craindre ». Refuser ces outils au nom d'une vie privée abstraite, c'est accepter des morts évitables. La sécurité est la première des libertés." },
  defense:"« Rien à cacher » est faux : la vie privée protège aussi l'innocent (la liberté suppose un for intérieur ; la dissidence suppose de ne pas être fiché). Et « ça sauve des vies » doit être PROUVÉ : les bilans des programmes de masse (métadonnées) ne montrent pas d'efficacité claire, tandis que les dérives (usage politique, cliquet, chilling effect) sont documentées. Je ne refuse pas la surveillance CIBLÉE (mandat, juge) ; je refuse la collecte de tous.",
  faille:"Le partisan de la sécurité pose « sécurité vs vie privée » comme un curseur linéaire, alors que la surveillance de masse peut RÉDUIRE la sécurité (elle noie le signal dans le bruit et concentre un pouvoir dangereux). « Rien à cacher » confond « je n'ai rien fait » et « donnons à un pouvoir futur les moyens de tout voir » — les mêmes outils serviront le régime suivant.",
  contre:[
    {q:"« Qui n'a rien à cacher n'a rien à craindre. »", r:"Tout le monde a quelque chose à protéger (opinions, santé, relations) — et le danger n'est pas toi aujourd'hui, c'est l'usage futur de l'outil par un pouvoir moins bienveillant. La vie privée protège l'innocent, pas le coupable."},
    {q:"« La surveillance de masse déjoue des attentats. »", r:"À prouver : les revues des programmes de métadonnées n'ont pas établi de rôle décisif clair, la plupart des attentats déjoués venant du renseignement ciblé. Efficacité non démontrée + coût réel = mauvais solde."},
    {q:"« La reconnaissance faciale rend la ville plus sûre. »", r:"Gain marginal incertain, risques élevés (erreurs, biais, fichage généralisé, cliquet). À n'admettre qu'avec preuves d'efficacité, garde-fous stricts et réversibilité — pas par défaut « au cas où »."}
  ],
  etudes:[
    "Le programme américain de collecte massive de métadonnées téléphoniques n'a pas eu de rôle décisif démontré dans la prévention d'attentats. — Privacy and Civil Liberties Oversight Board (PCLOB, 2014) ; groupe d'examen de la Maison-Blanche (2013)",
    "« Chilling effect » : après les révélations Snowden, le trafic vers des pages Wikipédia sensibles a baissé → la surveillance dissuade la recherche légitime d'information. — Penney (2016)",
    "Effet cliquet : les pouvoirs d'exception (post-2001, états d'urgence) tendent à se normaliser et à rester → une capacité de surveillance créée est rarement rendue. — littérature sur l'état d'exception",
    "La reconnaissance faciale a des taux d'erreur plus élevés sur certaines populations (femmes, peaux foncées) → risque d'injustice à grande échelle. — Buolamwini & Gebru (2018, «Gender Shades»)"
  ],
  sources:["PCLOB (2014) ; White House Review Group (2013) — (in)efficacité des métadonnées","Penney (2016) — chilling effect","Buolamwini & Gebru (2018) — biais de la reconnaissance faciale","Mill / conséquentialisme de règle (cf. mon débat liberté d'expression)"]
},

{
  id:"libre-echange", theme:"Politique", titre:"Libre-échange ou protectionnisme ?",
  maPosition:"Le libre-échange enrichit globalement — <b>⚖️ là l'économie est assez nette</b> (gains à l'échange, avantage comparatif, sortie de pauvreté de masse) — MAIS il fait des perdants concentrés et réels qu'on a criminellement négligés. Ma position : ouverture + compensation et reconversion sérieuses des perdants. Le problème n'est pas l'échange, c'est qu'on a empoché les gains sans les partager.",
  socle:"Avantage comparatif (Ricardo) : l'échange augmente la production totale, même entre partenaires inégaux. Empiriquement, l'ouverture a accompagné la plus forte baisse de pauvreté de l'histoire (Asie). MAIS les gains sont diffus (consommateurs, un peu partout) et les pertes concentrées (telle usine, telle région) → explosif politiquement et dur humainement. Mon conséquentialisme additionne les deux : garder l'échange (gain net) ET redistribuer aux perdants (sinon le solde local est atroce et le rejet politique justifié).",
  adverse:{ nom:"Le protectionniste",
    steelman:"Le libre-échange a désindustrialisé des régions entières, détruit des emplois ouvriers, tiré salaires et normes vers le bas (dumping social et environnemental) et rendu les nations dépendantes (masques, semi-conducteurs). Protéger, c'est défendre ses travailleurs, son industrie et sa souveraineté face à une concurrence déloyale." },
  defense:"Je concède le cœur empirique : le « choc chinois » a détruit des emplois durablement dans les régions exposées — réel, mesuré, et on l'a ignoré. Mais la réponse n'est pas de bloquer l'échange (qui appauvrit tout le monde, surtout les pauvres d'ici via les prix et les pauvres d'ailleurs via l'emploi) : c'est de COMPENSER et reconvertir les perdants, et de réguler les vraies distorsions (dumping, normes). Protéger l'emploi par les tarifs coûte très cher par emploi « sauvé ».",
  faille:"Le protectionniste voit les pertes (visibles, concentrées) et pas les gains (diffus : prix bas pour tous, emplois à l'export, développement des pays pauvres). Il traite un problème de DISTRIBUTION (perdants non compensés) comme un problème d'ÉCHANGE (l'ouverture elle-même). Et « l'indépendance » a un prix : l'autarcie appauvrit ; la résilience ciblée (stocks, diversification) suffit sans tout fermer.",
  contre:[
    {q:"« Le libre-échange a tué nos usines. »", r:"En partie vrai et gravement sous-traité : le choc des importations a détruit des emplois concentrés, durables. Mais bloquer l'échange appauvrit tout le monde ; la bonne réponse est de compenser/reconvertir les perdants et de réguler le dumping — pas de renoncer aux gains de l'échange."},
    {q:"« Les tarifs protègent les emplois. »", r:"À un coût énorme par emploi sauvé (le consommateur paie plus cher, des emplois à l'export sont perdus). Les études chiffrent des centaines de milliers d'euros par emploi « protégé » : très mauvais usage de l'argent public vs une vraie reconversion."},
    {q:"« On doit être indépendants (masques, puces). »", r:"Vrai pour quelques secteurs stratégiques (santé, défense, semi-conducteurs) → diversifier, stocker, relocaliser ciblé. Mais généraliser l'autarcie au nom de rares dépendances, c'est jeter les gains massifs de l'échange pour un risque marginal."},
    {q:"« Le libre-échange creuse les inégalités. »", r:"Entre nations, il les a plutôt réduites (rattrapage asiatique) ; dans les pays riches, il peut les creuser SI on ne redistribue pas. C'est un argument pour la redistribution et la reconversion, pas contre l'échange."}
  ],
  etudes:[
    "Avantage comparatif : l'échange augmente la production totale même entre partenaires d'inégale productivité. — David Ricardo (1817)",
    "L'ouverture commerciale a accompagné la plus forte baisse de l'extrême pauvreté mondiale (Asie de l'Est) → gain de masse pour les plus pauvres. — Banque mondiale ; Our World in Data",
    "« China shock » : les régions américaines exposées aux importations chinoises ont subi des pertes d'emploi durables et peu de reconversion → perdants réels et concentrés. — Autor, Dorn & Hanson (2013, AER)",
    "Le coût par emploi « sauvé » par les tarifs (acier, machines à laver) se chiffre en centaines de milliers de dollars → protection très inefficace vs compensation directe. — Flaaen, Hortaçsu & Tintelnot (2020) ; Hufbauer & Elliott"
  ],
  sources:["David Ricardo (1817) — avantage comparatif","Autor, Dorn & Hanson (2013) — China shock","Banque mondiale / Our World in Data — pauvreté et ouverture","Flaaen et al. (2020) — coût des tarifs ; Hufbauer & Elliott"]
},

{
  id:"revenu-universel", theme:"Justice", titre:"Un revenu universel de base ?",
  maPosition:"Séduisant et cohérent avec mon cadre (un plancher inconditionnel, la dignité, la fin du soupçon sur les pauvres), mais l'arithmétique commande la prudence : un RU vraiment universel ET suffisant coûte une fortune. <b>⚖️ Ce que les expériences montrent</b> : l'argent inconditionnel ne rend PAS les gens oisifs (le mythe du fainéant est faux) ; mais un vrai RU national reste non testé à grande échelle. Ma préférence : impôt négatif ciblé / RU partiel, plutôt qu'un chèque égal versé aux milliardaires.",
  socle:"Mon cadre : pas de mérite (la pauvreté n'est pas une faute), utilité marginale (le plancher produit beaucoup de bien-être), anti-paternalisme (les pauvres savent ce dont ils ont besoin — cash > bureaucratie). Le RU répond à ça : inconditionnel (pas de trappe à inactivité, pas de stigmate). MAIS deux problèmes : (1) coût — universel × suffisant = astronomique ; (2) verser autant au riche qu'au pauvre est inefficace (on le reprend par l'impôt → autant cibler). D'où : impôt négatif sur le revenu (Friedman) ou RU dégressif, qui gardent l'inconditionnalité utile sans le gaspillage.",
  adverse:{ nom:"Le critique du RU (droite ET gauche)",
    steelman:"Droite : donner de l'argent sans contrepartie détruit l'incitation au travail et coûte une fortune. Gauche : un RU sert de cheval de Troie pour démanteler les services publics (santé, logement) et payer les gens à rester pauvres au lieu de leur garantir un emploi et des droits. Dans les deux cas, mieux vaut des services et un emploi garanti qu'un chèque." },
  defense:"Sur l'incitation, les données rassurent : les expériences (Finlande, transferts monétaires) ne montrent pas d'effondrement de l'emploi — le mythe du pauvre fainéant est faux. Sur le coût et le « cheval de Troie », je donne raison en partie : d'où un RU partiel / impôt négatif EN PLUS des services publics essentiels (santé, éducation), pas à leur place. Je garde l'inconditionnalité (ce qui marche) sans la version maximaliste (ce qui ruine).",
  faille:"Le critique de droite universalise un effet (« l'argent gratuit rend oisif ») que les expériences ne confirment pas. Le critique de gauche a raison sur le risque politique (remplacer les services) — mais c'est un argument sur le PACKAGE (RU + services, pas RU à la place), pas contre l'inconditionnalité. Et « emploi garanti » se heurte à : garanti pour faire quoi, à quel coût, avec quelle bureaucratie ?",
  contre:[
    {q:"« Payer les gens à ne rien faire détruit le travail. »", r:"Les expériences ne le montrent pas : la baisse d'activité est faible, souvent bénéfique (études, soin d'un proche, meilleure recherche d'emploi). Le mythe du fainéant est empiriquement faux. Et l'impôt négatif garde l'incitation (chaque euro gagné rapporte encore)."},
    {q:"« C'est infinançable. »", r:"Le RU maximaliste (universel + suffisant), oui, c'est colossal. D'où ma version : impôt négatif / RU dégressif, qui concentre l'argent en bas et coûte bien moins. Verser un chèque au milliardaire pour le reprendre à l'impôt est un détour inutile."},
    {q:"« Mieux vaut des services publics qu'un chèque. »", r:"Faux dilemme : les deux. Santé, éducation, logement en nature ET un plancher monétaire inconditionnel pour le reste. Le cash respecte l'autonomie (chacun choisit), les services couvrent ce que le marché assure mal."},
    {q:"« Ça marche dans les pays pauvres, pas chez nous. »", r:"L'inconditionnalité et l'absence d'effet-fainéant se retrouvent dans les deux contextes. Le calibrage diffère (montant, fiscalité), le principe tient : donner du cash sans fliquer marche mieux qu'on ne le croit."}
  ],
  etudes:[
    "Expérience finlandaise de revenu de base (2017-2018) : pas de baisse de l'emploi, et un mieux-être / une meilleure santé mentale déclarés chez les bénéficiaires. — Kela (2020)",
    "Les transferts monétaires inconditionnels n'augmentent pas les dépenses « tentation » (alcool, tabac) et améliorent souvent revenus et santé → le pauvre gère bien le cash. — Evans & Popova (2017, revue Banque mondiale)",
    "L'impôt négatif sur le revenu (verser aux bas revenus, retirer progressivement) atteint le même but qu'un RU de façon ciblée et incitative. — Milton Friedman (1962) ; expériences NIT (USA, années 1970)",
    "Un RU universel et suffisant coûterait plusieurs points de PIB → la version partielle/ciblée est plus soutenable. — chiffrages OCDE / think tanks"
  ],
  sources:["Kela (2020) — expérience finlandaise","Evans & Popova (2017) — transferts monétaires","Milton Friedman (1962) — impôt négatif","cf. mes débats redistribution & autonomie"]
},

{
  id:"euthanasie", theme:"Vie / corps", titre:"Euthanasie et aide à mourir ?",
  maPosition:"Pour, entre adultes lucides et consentants, avec des garde-fous. Mon libéralisme (souveraineté sur son corps) dit oui ; l'objection sérieuse n'est pas « la vie est sacrée » (valeur intrinsèque que je rejette) mais la PRESSION sur les vulnérables — un risque réel, à encadrer, pas à ériger en interdiction. <b>⚖️ Les données</b> des pays qui l'ont légalisé ne montrent pas le « massacre des vulnérables » annoncé.",
  socle:"Autonomie millienne : tu es souverain sur ta propre vie ; si une existence n'est plus, pour son sujet, digne d'être vécue (souffrance réfractaire, perte d'autonomie), lui interdire d'en sortir est un paternalisme extrême. « La vie est sacrée » suppose une valeur intrinsèque — or rien n'en a ; ce qui compte, c'est le bien-être et la préférence du sujet. La seule objection non-magique est la PENTE : peur que « droit à mourir » devienne « devoir de mourir » (pression sur âgés, handicapés, pauvres). C'est empirique → on regarde les données et on cale les garde-fous.",
  adverse:{ nom:"L'opposant (pente glissante / vulnérables)",
    steelman:"Autoriser l'aide à mourir met une pression insidieuse sur les personnes âgées, handicapées ou dépendantes : « ne pas être un fardeau » devient une injonction. Les critères s'élargissent avec le temps (de la maladie terminale à la souffrance psychique). Et une société qui aide à mourir investit moins dans les soins palliatifs. Mieux vaut soulager que donner la mort." },
  defense:"La pression sur les vulnérables est la SEULE objection que je prends au sérieux — et c'est un argument pour des garde-fous (consentement libre, répété, évalué indépendamment ; soins palliatifs garantis comme alternative réelle), pas pour l'interdiction, qui condamne les uns à souffrir pour protéger les autres. Sur la pente : les données des pays pionniers (Oregon, Benelux) ne montrent pas de sur-ciblage disproportionné des vulnérables. L'élargissement des critères est un choix politique révisable, pas une fatalité.",
  faille:"L'opposant mélange l'objection magique (« vie sacrée », sans victime → à jeter) et l'objection empirique (pression, pente → réelle mais gérable). Sa pente est présentée comme automatique alors qu'elle dépend du design légal. Et interdire au nom des vulnérables sacrifie le patient lucide qui souffre : on le condamne à une agonie pour un risque qu'on peut encadrer autrement (palliatifs, contrôle).",
  contre:[
    {q:"« La vie est sacrée / seul Dieu décide. »", r:"C'est une valeur intrinsèque ou religieuse que je ne partage pas et qu'on n'impose pas à autrui (laïcité, autonomie). Ce qui compte, c'est le bien-être et la volonté du sujet — pas un principe qui le force à souffrir au nom d'une sacralité qu'il ne reconnaît pas."},
    {q:"« Ça va faire pression sur les vieux (« ne sois pas un fardeau »). »", r:"C'est LE vrai risque → garde-fous : consentement libre, répété, évalué indépendamment ; soins palliatifs garantis comme alternative réelle. Les données des pays qui l'ont fait ne montrent pas de sur-risque disproportionné pour les vulnérables."},
    {q:"« Les critères vont s'élargir sans fin (pente glissante). »", r:"L'élargissement (ex. souffrance psychique) est un choix politique, débattable et bornable, pas une fatalité mécanique. La pente dépend des garde-fous qu'on met — argument pour bien légiférer, pas pour interdire."},
    {q:"« Développons plutôt les soins palliatifs. »", r:"Oui — et les deux ne s'opposent pas : palliatifs pour tous ET aide à mourir pour ceux que les palliatifs ne soulagent pas (souffrance réfractaire). Les opposer, c'est laisser souffrir ceux que le soin n'atteint pas."}
  ],
  etudes:[
    "Oregon (« Death with Dignity », depuis 1997) : recours limité et stable, patients majoritairement déjà en soins palliatifs, sans sur-ciblage des vulnérables. — rapports annuels de l'Oregon Health Authority",
    "Revue des données (Oregon, Pays-Bas) : pas de preuve d'un risque disproportionné pour les groupes vulnérables (âgés, handicapés, pauvres, minorités). — Battin et al. (2007, J. Medical Ethics)",
    "Dans le Benelux, une part des décès relève de l'euthanasie légale, sous procédures de contrôle → le cadre encadre sans « dérapage » massif documenté, mais la vigilance reste nécessaire. — commissions de contrôle belges/néerlandaises",
    "Soins palliatifs et aide à mourir ne s'excluent pas : les pays qui légalisent ont souvent aussi développé les palliatifs. — comparaisons internationales"
  ],
  sources:["Oregon Health Authority — rapports annuels","Battin et al. (2007, J. Medical Ethics) — vulnérables","J.S. Mill, «On Liberty» — souveraineté sur soi","cf. mon débat autonomie du corps"]
},

{
  id:"wokisme-position", theme:"Société", titre:"Wokisme : progrès social ou dérive ?",
  maPosition:"Ni sacralisation ni diabolisation. Le noyau (prendre au sérieux des injustices réelles : racisme, sexisme, discriminations) est légitime ; certaines DÉRIVES (essentialisme identitaire, procès en pureté, censure de l'enquête) trahissent mes principes (anti-essentialisme, liberté d'expression, universalisme). Je juge idée par idée selon le bien-être et la cohérence, pas selon le camp.",
  socle:"Mon cadre tranche des deux côtés. POUR le noyau : les discriminations sont mesurées (testing, écarts) → les nier est faux, et élargir la considération est cohérent avec mon anti-tribalisme. CONTRE certaines dérives : (1) l'essentialisme identitaire (réduire quelqu'un à son groupe) réintroduit la catégorie arbitraire que je rejette ; (2) le « procès en pureté » / cancel disproportionné viole ma liberté d'expression (conséquentialisme de règle) ; (3) requalifier tout désaccord en oppression court-circuite l'enquête. Le critère reste le bien-être + la cohérence, jamais l'appartenance.",
  adverse:{ nom:"Les deux caricatures (militant total / anti-woke total)",
    steelman:"Le militant : les injustices systémiques sont si profondes qu'exiger de la « nuance » ou de la « liberté d'expression » sert surtout à protéger les dominants ; il faut nommer, corriger, parfois sanctionner fort. L'anti-woke : le wokisme est un fanatisme qui détruit le débat, la présomption d'innocence et l'universalisme au nom d'une victimisation permanente." },
  defense:"Je refuse les deux blocs. Au militant : les injustices réelles ne justifient pas d'abandonner la liberté d'expression ni la présomption d'innocence — car le pouvoir de censurer/exclure est capturable et se retourne (conséquentialisme de règle). À l'anti-woke : « tout ça, c'est du délire » nie des discriminations mesurées et jette le noyau légitime avec les dérives. Ma boussole n'est pas « pour ou contre le wokisme » mais « cette idée précise augmente-t-elle le bien-être, tient-elle la cohérence ? ».",
  faille:"Les deux camps font la même erreur : traiter « le wokisme » comme un bloc (tout bon / tout mauvais) au lieu de trier idée par idée. Le militant absolutise une fin juste jusqu'à écraser des moyens (débat, preuve) ; l'anti-woke absolutise une réaction jusqu'à nier des faits. Le tribalisme (juger au camp) est précisément le biais que mon cadre interdit.",
  contre:[
    {q:"« Le wokisme, c'est la justice sociale — tu es contre ? »", r:"Contre le noyau (lutter contre des discriminations réelles), non — il est mesuré et légitime. Contre certaines dérives (essentialisme, cancel disproportionné, censure de l'enquête), oui. Je trie ; je ne signe pas un chèque en blanc à une étiquette."},
    {q:"« La cancel culture n'existe pas, c'est un fantasme de réac. »", r:"Il y a de vrais cas de sanctions disproportionnées ET une inflation rhétorique qui en exagère l'ampleur. Les deux sont vrais : des excès réels, souvent montés en épingle. Je regarde les cas, pas le slogan."},
    {q:"« Nier le privilège, c'est nier le racisme. »", r:"Non : je reconnais des avantages statistiques de groupe (mesurés). Ce que je refuse, c'est d'en faire une essence qui déterminerait ou disqualifierait un individu — ça réintroduit le raisonnement par le groupe que l'antiracisme est censé combattre."},
    {q:"« À force de nuance, tu ne fais rien. »", r:"La nuance n'est pas l'inaction : je soutiens des mesures concrètes contre les discriminations prouvées (testing, sanction de l'acte). Ce que je refuse, c'est l'action symbolique inefficace ou la censure — pas l'action. Trier, c'est agir mieux."}
  ],
  etudes:[
    "Discriminations réelles et mesurées (le noyau légitime) : à CV équivalent, un nom à consonance étrangère reçoit moins de réponses. — Bertrand & Mullainathan (2004) et études d'audit",
    "Le dégoût / l'indignation morale sont de mauvais guides quand ils tournent à la pureté : ils poussent au bannissement plus qu'à la réparation. — Nussbaum (cf. mon débat cas-limites)",
    "Déplateformisation : parfois efficace contre des communautés toxiques (Reddit), parfois contre-productive (martyrisation, effet Streisand) → à évaluer au cas par cas, pas en principe. — Chandrasekharan et al. (2017)",
    "Juger l'individu par sa classe d'appartenance est précisément le mécanisme du stéréotype que l'antidiscrimination combat. — psychologie des stéréotypes (Allport)"
  ],
  sources:["Bertrand & Mullainathan (2004) — discrimination mesurée","Nussbaum — dégoût/pureté (cf. mon débat cas-limites)","Chandrasekharan et al. (2017) — déplateformisation","cf. masterclass « Wokisme & cancel culture » (neutre) + mes débats expression & discrimination positive"]
},

{
  id:"prostitution", theme:"Vie / corps", titre:"Travail du sexe : abolir, légaliser, décriminaliser ?",
  maPosition:"Décriminaliser l'activité entre adultes consentants et cibler ce qui fait vraiment du mal : la contrainte (traite, proxénétisme forcé, mineurs). Mon libéralisme dit oui à l'échange librement consenti ; la vraie question n'est pas « le sexe tarifé est-il digne ? » (dégoût) mais « comment réduire la souffrance et la contrainte ? ». <b>⚖️</b> Les données comparant les modèles ne donnent pas de gagnant écrasant, mais la criminalisation (même du seul client) tend à précariser les travailleuses.",
  socle:"Autonomie millienne : disposer de son corps, y compris pour un service sexuel, ne lèse personne en soi ; l'objection « ça avilit » est un jugement de dégoût/dignité (valeur intrinsèque) que je rejette. Le vrai enjeu est la CONTRAINTE : traite, précarité qui pousse, violence. Test de la contrainte : le ferait-on sans être acculé ? → traiter la cause (pauvreté, traite), pas interdire l'activité. Trois modèles : prohibition totale ; « nordique » (pénaliser le client) ; décriminalisation (Nouvelle-Zélande). On les juge à leurs effets sur la sécurité et la contrainte, pas à la morale sexuelle.",
  adverse:{ nom:"L'abolitionniste (modèle nordique)",
    steelman:"La prostitution est intrinsèquement une violence patriarcale : presque personne ne la « choisit » vraiment, c'est la misère et les réseaux qui poussent. Pénaliser le client (pas la femme) assèche la demande, réduit la traite et pose un principe : le corps n'est pas une marchandise. Décriminaliser, c'est offrir un marché légal aux proxénètes." },
  defense:"Je prends au sérieux la contrainte — c'est mon critère. Mais l'abolitionnisme confond « certaines sont contraintes » (vrai → combattre traite et misère) et « toutes le sont » (faux → nie l'autonomie de celles qui choisissent). Pénaliser le client précarise en pratique : moins de temps pour filtrer, plus de clandestinité, moins de recours en cas de violence. Le bon test est empirique (sécurité, santé, sortie de la traite), pas le symbole « le corps n'est pas une marchandise ».",
  faille:"L'abolitionniste pose une essence (« intrinsèquement une violence ») là où il y a un continuum (de la contrainte pure au choix). Il traite le dégoût/la dignité comme un fait moral. Et « pénaliser le client protège » est une hypothèse empirique contestée : les données suggèrent souvent un déplacement vers plus de risque, sans tarir la demande ni la traite comme promis.",
  contre:[
    {q:"« Personne ne choisit vraiment de se prostituer. »", r:"Certaines sont contraintes (traite, misère) → priorité absolue à combattre ; d'autres choisissent (les travailleuses organisées le disent). Nier ce choix, c'est le paternalisme qui décide à leur place. On cible la contrainte, on ne supprime pas l'option pour toutes."},
    {q:"« Le modèle nordique protège les femmes. »", r:"Intention louable (viser le client, pas la victime), mais effet souvent mesuré = précarisation : moins de temps pour filtrer les clients, plus de clandestinité, moins de recours. À juger sur les faits, pas sur le symbole."},
    {q:"« Décriminaliser, c'est légaliser le proxénétisme. »", r:"Non : décriminaliser l'activité des travailleuses ≠ tolérer la contrainte. On garde et on renforce la répression de la traite, du proxénétisme forcé, des mineurs. La Nouvelle-Zélande décriminalise le travail ET poursuit l'exploitation."},
    {q:"« C'est indigne de vendre son corps. »", r:"« Indigne » est un jugement de dégoût, pas un tort (cf. mes cas-limites). On vend déjà son corps et son temps dans mille métiers. Ce qui compte moralement, c'est la contrainte et la sécurité — pas notre malaise esthétique."}
  ],
  etudes:[
    "Nouvelle-Zélande (décriminalisation, 2003) : la loi a amélioré la capacité des travailleuses à faire valoir leurs droits et leur sécurité, sans hausse démontrée de l'ampleur du secteur. — Prostitution Law Review Committee (2008)",
    "Amnesty International recommande la décriminalisation du travail du sexe consenti comme meilleure protection des droits humains des travailleuses. — Amnesty International (2016)",
    "La pénalisation (y compris du client) est associée à davantage de risques pour les travailleuses (violence, moindre accès à la santé et à la police). — revue systématique Platt et al. (2018, PLoS Medicine)",
    "La traite des êtres humains est un phénomène distinct, à combattre spécifiquement, à ne pas confondre avec le travail du sexe consenti. — cadre ONUDC"
  ],
  sources:["Prostitution Law Review Committee (NZ, 2008)","Amnesty International (2016)","Platt et al. (2018, PLoS Medicine)","Mill / autonomie & contrainte (cf. mes débats autonomie & drogues)"]
},

{
  id:"intervention", theme:"Politique", titre:"Faut-il intervenir militairement à l'étranger ?",
  maPosition:"Présomption forte contre — mais pas « jamais ». Une intervention peut se justifier par le solde (empêcher un génocide, aider un agressé) sous conditions strictes de guerre juste ; le problème récurrent est que les interventions « humanitaires » tournent mal (Irak, Libye). Je juge au bilan attendu réel, pas à la bonne intention affichée.",
  socle:"Conséquentialisme + conséquentialisme de règle. La guerre tue massivement → présomption très forte contre (comme la violence politique interne). Override possible si : cause grave (génocide, agression), dernier recours, proportionnalité, chances de succès réelles, discrimination (épargner les civils) — les critères de la guerre juste, relus sans droit naturel. Mais un biais guette : surestimer sa capacité à « reconstruire » (hubris), sous-estimer le chaos post-intervention. Aider un pays agressé à se défendre (fournir des armes) diffère d'envahir pour « libérer ».",
  adverse:{ nom:"L'interventionniste ET le non-interventionniste absolu",
    steelman:"Interventionniste : laisser un dictateur massacrer quand on pourrait l'en empêcher, c'est de la complicité par inaction ; la « responsabilité de protéger » est un progrès moral. Non-interventionniste : les interventions occidentales, même bien intentionnées, sèment le chaos (Irak, Libye), servent des intérêts cachés et tuent au nom du bien — mieux vaut ne jamais s'en mêler." },
  defense:"Je refuse les deux absolus. Contre le non-interventionniste : l'inaction a AUSSI un bilan (Rwanda : ne rien faire a coûté ~800 000 morts). Contre l'interventionniste : la bonne intention ne suffit pas, il faut des chances de succès réelles ET un plan de l'après — sans quoi on remplace un mal par un chaos (Libye). Le critère est le solde attendu honnête, avec prudence maximale sur notre capacité à reconstruire.",
  faille:"L'interventionniste sous-estime systématiquement le coût du chaos post-intervention et surestime sa maîtrise (hubris du « nation-building »). Le non-interventionniste absolu traite « ne pas agir » comme neutre, alors que c'est un choix avec un bilan (les morts qu'on laisse faire). Les deux fuient le calcul difficile : quel est le solde RÉEL, effets de second ordre compris ?",
  contre:[
    {q:"« On ne peut pas laisser massacrer sans rien faire. »", r:"D'accord — c'est mon exception (le Rwanda hante). Mais « faire quelque chose » ≠ « envahir » : il y a un spectre (sanctions, armes défensives, zones d'exclusion, justice internationale). L'action doit avoir des chances réelles de faire MOINS de morts, pas juste soulager notre conscience."},
    {q:"« Les interventions ne font qu'empirer les choses (Irak, Libye). »", r:"Souvent vrai — argument de prudence puissant, pas une loi absolue. Irak/Libye ont échoué faute de plan de l'après et par hubris. Ça condamne les interventions mal pensées, pas le principe d'empêcher un génocide imminent."},
    {q:"« Aider l'Ukraine, c'est jouer avec le feu. »", r:"Aider un agressé à se défendre (armes, renseignement) diffère d'envahir : le solde inclut la dissuasion (laisser une agression payer en encourage d'autres). Le risque d'escalade est réel et à peser — mais « ne jamais aider un agressé » a aussi un coût, mondial."},
    {q:"« Ces guerres cachent toujours des intérêts (pétrole). »", r:"Souvent, oui — raison de plus pour un critère exigeant et transparent (guerre juste), pas pour l'abstention de principe. Le cynisme sur les motifs ne dispense pas d'évaluer le bilan réel pour les populations concernées."}
  ],
  etudes:[
    "Rwanda (1994) : l'inaction internationale a laissé un génocide faire ~800 000 morts en 100 jours → « ne rien faire » a un bilan, parfois pire que l'action. — rapports ONU ; Roméo Dallaire",
    "La « responsabilité de protéger » (R2P) a été adoptée par l'ONU en 2005 — mais son application (Libye, 2011) reste très contestée quant à ses effets. — Sommet mondial de l'ONU (2005)",
    "Reconstruction post-conflit : les interventions sans plan crédible de l'« après » (Irak 2003, Libye 2011) ont produit instabilité durable et coûts humains élevés. — littérature en relations internationales",
    "Les critères classiques de la guerre juste (cause juste, dernier recours, proportionnalité, chances de succès, discrimination) restent le cadre d'évaluation dominant. — Michael Walzer, «Just and Unjust Wars» (1977)"
  ],
  sources:["Michael Walzer, «Just and Unjust Wars» (1977)","R2P / Sommet mondial de l'ONU (2005)","Rwanda (rapports ONU ; Dallaire)","cf. mon débat violence politique"]
},

{
  id:"antinatalisme", theme:"Frontières", titre:"Est-il moral de faire des enfants ?",
  maPosition:"Faire un enfant n'est ni un dû ni un cadeau qu'on lui fait (il n'existait pas pour en manquer) — mais ce n'est pas non plus une faute en soi. Je prends au sérieux l'asymétrie de Benatar sans y céder : ma vue « person-affecting » dit qu'on ne doit rien aux non-nés → ni devoir de procréer, ni interdit. Le devoir naît ENVERS l'enfant une fois qu'on choisit de le faire advenir.",
  socle:"Cohérent avec mon cadre (avortement, longtermisme) : les êtres purement potentiels n'ont pas d'intérêts → aucun devoir de les faire exister (ni de s'en abstenir « pour eux », personne n'étant lésé par la non-naissance). L'argument de Benatar : l'asymétrie plaisir/douleur (l'absence de douleur est bonne même sans personne pour en profiter ; l'absence de plaisir n'est mauvaise que s'il y a quelqu'un privé) → il vaudrait toujours mieux ne pas naître. Puissant mais pas décisif : il suppose une comptabilité de la valeur des états non vécus que ma vue person-affecting refuse. Résultat : procréation permise, et devoir FORT envers l'enfant réel (lui devoir une vie bonne).",
  adverse:{ nom:"Benatar (antinataliste) et, en face, le pro-nataliste",
    steelman:"Benatar : venir au monde, c'est nécessairement subir des douleurs (maladie, deuil, mort), qu'on inflige à quelqu'un qui n'a rien demandé et qui ne manquait de rien avant. Puisque le non-né ne manque de rien, ne pas créer ne prive personne — procréer fait donc courir un risque gratuit à un tiers. Pro-nataliste : la vie est un bien, perpétuer l'humanité est un devoir, et une vie majoritairement heureuse justifie largement de la donner." },
  defense:"Contre le pro-nataliste : « la vie est un cadeau » suppose un bénéficiaire préexistant — il n'y en a pas (on ne fait de faveur à personne en le créant). Pas de devoir de peupler. Contre Benatar : son asymétrie attribue une valeur (« l'absence de douleur est bonne ») à un état où personne n'existe pour que ce soit bon — le même saut que je refuse au longtermisme. Ma sortie : ni devoir ni interdit de procréer ; mais un devoir réel de ne le faire que si l'on peut offrir une vie digne (sinon on lèse l'enfant réel à venir).",
  faille:"Benatar veut le person-affecting dans un sens (la non-naissance ne prive personne d'un bien) et pas dans l'autre (elle « évite » un mal comme si c'était un gain pour quelqu'un). Cette asymétrie est le point contesté. Le pro-nataliste, symétriquement, traite un non-existant comme un bénéficiaire à qui l'on ferait un don. Les deux peuplent de valeur un endroit où il n'y a encore personne.",
  contre:[
    {q:"« La vie est un cadeau qu'on fait à l'enfant. »", r:"On ne peut pas faire un cadeau à qui n'existe pas encore : pas de bénéficiaire en attente. Créer une vie n'est pas rendre service à un non-né — c'est faire advenir un sujet, envers qui on aura alors des devoirs."},
    {q:"« Alors il ne faut pas faire d'enfants (Benatar) ? »", r:"Non plus : son asymétrie suppose qu'« éviter une douleur » sans personne à protéger est un bien — ce que ma vue person-affecting refuse (comme au longtermisme). Sans personne, ni gain ni perte. Donc ni devoir de créer, ni interdit."},
    {q:"« On impose la souffrance et la mort à quelqu'un sans son accord. »", r:"Vrai qu'on ne peut pas demander le consentement d'un non-né (logique de la cage). C'est pourquoi le devoir est ENVERS l'enfant réel : ne le faire naître que dans des conditions où sa vie vaudra probablement la peine — pas dans la misère ou la maladie certaine."},
    {q:"« Perpétuer l'humanité est un devoir. »", r:"Envers qui ? Pas envers les non-nés (ils n'ont pas d'intérêts). Il peut y avoir des raisons instrumentales (les vivants tiennent à un futur), mais pas un devoir de peupler. Ni pro- ni anti-nataliste par principe : pour le bien-être des sujets réels."}
  ],
  etudes:[
    "Asymétrie de Benatar : l'absence de douleur est « bonne » même sans sujet ; l'absence de plaisir n'est « mauvaise » que pour un sujet privé → il conclut que ne jamais naître est préférable. — David Benatar, «Better Never to Have Been» (2006)",
    "Vue « person-affecting » et problème de non-identité : nos choix déterminent QUI naîtra, brouillant l'idée de « nuire » à une personne future précise. — Derek Parfit, «Reasons and Persons» (1984)",
    "Asymétrie de procréation (intuition partagée) : on a une raison de ne pas créer une vie misérable, mais pas de devoir de créer une vie heureuse. — Jeff McMahan ; Nils Holtug (éthique de la population)",
    "Absence de consentement à naître (on n'a pas choisi d'exister) → pas de dette ascendante due à ses parents. — cf. mon débat « dette asymétrique »"
  ],
  sources:["David Benatar, «Better Never to Have Been» (2006)","Derek Parfit, «Reasons and Persons» (1984) — person-affecting","Débats en éthique de la population (McMahan, Holtug)","cf. mes débats avortement, longtermisme & dette"]
},

{
  id:"dissuasion", theme:"Politique", titre:"Faut-il garder l'arme nucléaire (dissuasion) ?",
  maPosition:"Paradoxe assumé : je hais l'arme mais je garde la dissuasion, faute de mieux, tant que d'autres en ont. <b>⚖️ Le fait le plus solide</b> : depuis 1945, aucune guerre directe entre grandes puissances nucléaires — la dissuasion a probablement évité des guerres majeures, au prix d'un risque catastrophique de faible probabilité. Ma ligne : dissuasion minimale + désarmement multilatéral vérifiable, pas désarmement unilatéral.",
  socle:"Conséquentialisme sous incertitude. La dissuasion (MAD) brandit une menace horrible pour empêcher un mal pire (la guerre entre grandes puissances). Deux faits pèsent : (1) la « paix nucléaire » — pas de guerre directe entre puissances nucléaires depuis 1945, ce qui suggère un effet dissuasif réel ; (2) le risque de queue — une erreur, un accident, une escalade peut tuer des centaines de millions (on a frôlé plusieurs fois). Mon calcul : tant que d'autres sont armés, désarmer seul expose au chantage (dilemme de sécurité) → dissuasion minimale ; mais viser activement la réduction multilatérale, car le risque de catastrophe s'accumule dans le temps.",
  adverse:{ nom:"Le désarmeur unilatéral ET le faucon nucléaire",
    steelman:"Désarmeur : garder de quoi tuer l'humanité est fou et immoral ; la dissuasion est un pari qui, statistiquement, finira par rater (un accident, un dément) → désarmer, quitte à montrer l'exemple. Faucon : la faiblesse invite l'agression ; il faut une supériorité crédible, pas une dissuasion « minimale » qui doute d'elle-même." },
  defense:"Au désarmeur : je partage l'horreur et le but final (un monde sans ces armes), mais désarmer UNILATÉRALEMENT ne supprime pas les bombes des autres — ça t'expose au chantage sans réduire le risque global. Le chemin est le désarmement MULTILATÉRAL vérifiable. Au faucon : la « supériorité » relance la course et augmente le risque d'accident/escalade sans gain de sécurité — la dissuasion minimale suffit à rendre une attaque irrationnelle.",
  faille:"Le désarmeur unilatéral confond « ces armes sont un mal » (vrai) et « m'en débarrasser seul réduit le mal » (faux, tant que les autres restent armés — dilemme de sécurité). Le faucon ignore que la recherche de supériorité est déstabilisante (course, escalade). Les deux sous-estiment un point commun : le risque n'est pas nul et s'accumule → l'urgence est la réduction coordonnée, pas la posture.",
  contre:[
    {q:"« Garder de quoi détruire le monde est immoral. »", r:"Oui, l'arme est un mal. Mais le désarmement unilatéral ne détruit pas les arsenaux adverses — il te livre au chantage. Le mal se réduit par la baisse multilatérale vérifiable, pas par un geste moral qui laisse les autres armés."},
    {q:"« La dissuasion finira statistiquement par rater. »", r:"Argument sérieux : le risque n'est pas nul et s'accumule (on a frôlé la catastrophe plusieurs fois). C'est justement pourquoi je pousse la réduction des stocks et des niveaux d'alerte — mais désarmer seul augmenterait, pas diminuerait, le risque d'agression."},
    {q:"« Sans nucléaire, l'Ukraine n'aurait pas été envahie ? »", r:"L'Ukraine a rendu ses armes (Budapest, 1994) et a été envahie — argument fort que la dissuasion protège, et que la prolifération tente. C'est le drame : la dissuasion marche, ce qui la rend dure à abolir. D'où le multilatéral, seul chemin crédible."},
    {q:"« Il faut la supériorité, pas la parité. »", r:"La recherche de supériorité relance la course et augmente le risque d'accident/escalade sans rendre l'attaque « plus irrationnelle » qu'une dissuasion minimale crédible ne le fait déjà. Plus d'armes ≠ plus de sécurité au-delà du seuil de dissuasion."}
  ],
  etudes:[
    "« Paix nucléaire » : depuis 1945, aucune guerre directe entre grandes puissances dotées de l'arme → indice (contesté) d'un effet dissuasif. — débat Waltz vs Sagan, «The Spread of Nuclear Weapons» (1995)",
    "Risque d'accident réel : plusieurs fausses alertes ont frôlé un lancement (ex. Stanislav Petrov, 1983) → la dissuasion comporte un risque de catastrophe non nul. — Eric Schlosser, «Command and Control» (2013)",
    "L'Ukraine a renoncé aux armes nucléaires héritées de l'URSS (mémorandum de Budapest, 1994) contre des garanties, puis a été envahie (2014, 2022) → illustre le dilemme dissuasion/prolifération.",
    "Le Traité de non-prolifération engage les États dotés à négocier le désarmement : la voie retenue est multilatérale et vérifiable, pas unilatérale. — TNP (1968)"
  ],
  sources:["Waltz vs Sagan (1995) — débat sur la dissuasion","Eric Schlosser, «Command and Control» (2013) — near misses","Mémorandum de Budapest (1994) ; TNP (1968)","Conséquentialisme sous incertitude (cf. mon débat violence)"]
},

{
  id:"ia-risque", theme:"Frontières", titre:"Faut-il freiner/réguler l'IA (le risque) ?",
  maPosition:"Réguler oui, geler non. <b>⚖️ Ce qui est établi</b> : l'IA crée des risques concrets DÉJÀ là (désinformation, biais, armes autonomes, concentration de pouvoir) qui justifient une régulation. <b>Ce qui reste incertain</b> : le risque existentiel (une IA hors de contrôle). Ma ligne : traiter sérieusement les risques présents ET prendre une assurance contre le risque de queue — ni panique, ni déni.",
  socle:"Mon cadre : conséquentialisme + devoir envers les générations réelles + le risque existentiel compte (mais pas de façon quasi-infinie, cf. longtermisme). Deux registres à distinguer : (1) risques ACTUELS et probables (biais, surveillance, désinformation, cyber, armes autonomes, chômage de transition, concentration) → régulation classique, urgente, faisable ; (2) risque de PERTE DE CONTRÔLE d'une IA très avancée → incertain, contesté, mais d'espérance non négligeable → assurance (recherche en sécurité, capacité de pause, transparence). L'erreur symétrique : tout miser sur l'apocalypse (en négligeant les torts présents) OU nier tout risque au nom du progrès.",
  adverse:{ nom:"L'accélérationniste ET le catastrophiste",
    steelman:"Accélérationniste : l'IA va guérir des maladies, sortir de la pauvreté, aider sur le climat ; freiner, c'est retarder ces bienfaits et laisser les labos les moins prudents gagner. Catastrophiste : une IA plus intelligente que nous et mal alignée pourrait nous échapper irréversiblement ; face à un risque d'extinction, même improbable, il faut ralentir massivement maintenant." },
  defense:"Contre l'accélérationniste : « ça apporte des bienfaits » ne dispense pas de gérer les torts (on régule les médicaments sans interdire la médecine) ; et la course « sinon un autre le fera » est l'argument qui justifie de couper tous les freins — dangereux. Contre le catastrophiste : je prends le risque de queue au sérieux (assurance), mais je refuse de tout lui subordonner (mon rejet du longtermisme du nombre : ne pas sacrifier des torts réels présents à une probabilité spéculative). Réguler le présent, s'assurer contre le futur.",
  faille:"L'accélérationniste traite tout frein comme un renoncement aux bienfaits (faux : on peut avoir les deux) et utilise la course géopolitique pour disqualifier toute prudence. Le catastrophiste fait un pari pascalien (probabilité minuscule × enjeu infini = tout justifier), qui peut légitimer n'importe quelle mesure et détourner des torts actuels, déjà là et mesurables.",
  contre:[
    {q:"« Réguler l'IA va tuer l'innovation / faire gagner les autres. »", r:"On régule les médicaments, l'aviation, le nucléaire sans les interdire — et ils innovent. La course « sinon un autre le fera » est précisément ce qui pousse à supprimer tous les garde-fous : c'est un argument pour la coordination internationale, pas contre la régulation."},
    {q:"« Le risque existentiel, c'est de la science-fiction. »", r:"Incertain et contesté — mais pas nul, et l'enjeu est énorme : ça justifie une assurance (recherche sécurité, transparence, capacité de pause), pas la panique. Refuser d'y penser parce que c'est spéculatif serait le même déni que je reproche au sceptique de la sentience IA."},
    {q:"« On s'affole pour l'apocalypse en oubliant les vrais problèmes. »", r:"D'accord — c'est ma critique du catastrophisme : les torts ACTUELS (biais, désinformation, surveillance, armes autonomes) sont déjà là et prioritaires. Mais traiter le présent n'interdit pas de s'assurer contre le futur : les deux, pas l'un contre l'autre."},
    {q:"« Qui es-tu pour arrêter le progrès ? »", r:"Réguler ≠ arrêter. Le progrès n'est pas une valeur en soi (rien ne l'est) : il vaut par le bien-être qu'il produit. Une IA qui concentre le pouvoir ou désinforme massivement n'est pas « le progrès », c'est un tort à corriger."}
  ],
  etudes:[
    "L'UE a adopté un cadre réglementaire par niveaux de risque (AI Act, 2024) → on peut réguler l'IA sans l'interdire, en ciblant les usages dangereux. — Règlement européen sur l'IA (2024)",
    "Des experts de premier plan ont jugé publiquement le risque d'extinction lié à l'IA « à prendre au sérieux » au même titre que pandémies et guerre nucléaire — position contestée mais non marginale. — déclaration du Center for AI Safety (2023)",
    "Risques ACTUELS documentés : biais algorithmiques (reconnaissance faciale — Buolamwini & Gebru, 2018), diffusion accélérée de la désinformation (Vosoughi et al., 2018).",
    "Sondages d'experts en apprentissage automatique : une part non négligeable attribue une probabilité substantielle à des conséquences très graves de l'IA avancée. — Grace et al. / AI Impacts (surveys)"
  ],
  sources:["Règlement européen sur l'IA — AI Act (2024)","Center for AI Safety (2023) — déclaration sur le risque","Buolamwini & Gebru (2018) ; Vosoughi et al. (2018) — risques actuels","cf. mes débats IA & statut moral, IA & emploi, longtermisme"]
},

{
  id:"vaccination", theme:"Vie / corps", titre:"Peut-on rendre un vaccin obligatoire ?",
  maPosition:"Oui, quand il protège les AUTRES (pas seulement soi) et que le bénéfice collectif est établi. <b>⚖️ Ce que la science tranche</b> : les vaccins majeurs sont sûrs et efficaces, et certains (rougeole) exigent une couverture élevée pour protéger ceux qui ne peuvent pas se vacciner (immunité de groupe). L'autonomie s'arrête où commence le risque imposé à autrui (Mill). Obligation proportionnée, pas pour tout vaccin ni à tout prix.",
  socle:"Principe de non-nuisance de Mill : ta liberté sur ton corps est quasi-absolue TANT QUE tu ne nuis pas à autrui. Or ne pas se vacciner contre une maladie contagieuse impose un risque à des tiers (nourrissons, immunodéprimés, personnes qui ne peuvent pas être vaccinées) via l'immunité de groupe. Ce n'est donc pas du pur paternalisme (t'obliger « pour ton bien ») mais de la prévention d'un tort à autrui — le seul motif que mon libéralisme accepte. Conditions : (1) bénéfice collectif établi (contagiosité + efficacité), (2) sûreté démontrée, (3) proportionnalité (préférer l'incitation quand elle suffit).",
  adverse:{ nom:"Le partisan de la liberté vaccinale",
    steelman:"Mon corps, mon choix : imposer une injection est une violation grave de l'intégrité corporelle et un précédent dangereux (jusqu'où l'État peut-il aller « pour la santé publique » ?). L'obligation nourrit la défiance et le complotisme ; mieux vaut convaincre que contraindre. Et le risque individuel doit être assumé par l'individu." },
  defense:"« Mon corps, mon choix » vaut pleinement quand le choix ne touche que toi (d'où mon oui à l'euthanasie et aux drogues). Le vaccin contre une maladie contagieuse est différent : ton abstention peut TUER un tiers qui, lui, n'a pas choisi (nourrisson, immunodéprimé). Ce n'est plus « ton corps seulement ». Sur la défiance : c'est un argument pour privilégier l'incitation et la pédagogie QUAND elles suffisent — pas un principe interdisant l'obligation quand la couverture s'effondre et que des gens meurent.",
  faille:"Le libertaire vaccinal applique le principe d'autonomie à un cas où il ne s'applique pas : la contagion crée une externalité (un coût imposé à autrui), exactement la limite que Mill pose à la liberté. « Précédent dangereux » est un argument de pente à examiner (proportionnalité, garde-fous), pas un blanc-seing : on peut borner l'obligation aux maladies contagieuses graves à vaccin sûr, sans glisser vers l'arbitraire.",
  contre:[
    {q:"« Mon corps, mon choix. »", r:"Pleinement d'accord quand ça ne touche que toi (euthanasie, drogues : je dis oui). Mais un virus contagieux ne reste pas dans ton corps : ne pas te vacciner peut infecter un nourrisson ou un immunodéprimé qui n'a rien choisi. Là, ta liberté croise le tort à autrui — la limite de Mill."},
    {q:"« Les vaccins sont dangereux / non prouvés. »", r:"Faux pour les vaccins établis : bénéfice/risque massivement favorable, et le lien autisme-vaccin est une fraude démontrée (Wakefield, radié). L'obligation ne se justifie QUE pour des vaccins sûrs et efficaces — la sûreté est une condition, pas un détail."},
    {q:"« L'obligation nourrit la défiance. »", r:"Risque réel → préférer l'incitation et la pédagogie quand elles maintiennent la couverture. Mais quand la couverture s'effondre et que la rougeole retue, l'obligation ciblée protège ceux qui ne peuvent pas se défendre. Proportionnalité, pas dogme."},
    {q:"« Où ça s'arrête ? L'État va tout imposer. »", r:"Argument de pente → garde-fous : obligation limitée aux maladies contagieuses graves, à vaccin sûr, bénéfice collectif établi, exemptions médicales. Borner n'est pas glisser : on n'impose pas un vaccin sans externalité (le tien seul)."}
  ],
  etudes:[
    "Immunité de groupe : pour une maladie très contagieuse comme la rougeole, il faut ~95 % de couverture pour protéger ceux qui ne peuvent pas être vaccinés (nourrissons, immunodéprimés). — épidémiologie standard (OMS)",
    "Le prétendu lien vaccin ROR–autisme est une fraude : l'étude de Wakefield (1998) a été rétractée et son auteur radié ; aucune étude ultérieure n'a trouvé de lien. — Lancet (rétraction 2010) ; méta-analyses (Taylor et al., 2014)",
    "Le principe de non-nuisance (Mill) fonde la limite : la liberté individuelle cède quand l'acte impose un risque à autrui — cas de la contagion. — J.S. Mill, «On Liberty» (1859)",
    "Les obligations vaccinales ciblées (ex. entrée à l'école) sont associées à des couvertures plus élevées et à moins d'épidémies, la contrainte restant proportionnée. — littérature en santé publique"
  ],
  sources:["OMS — immunité de groupe (rougeole)","Wakefield : rétraction du Lancet (2010) ; Taylor et al. (2014)","J.S. Mill, «On Liberty» (1859) — principe de non-nuisance","cf. mes débats autonomie & liberté d'expression"]
},

{
  id:"homoparentalite", theme:"Société", titre:"Mariage gay et homoparentalité ?",
  maPosition:"Oui, sans réserve. <b>⚖️ C'est un cas où tout converge</b> : aucun tort à autrui, un bénéfice réel pour les personnes concernées, et les études ne trouvent pas de désavantage pour les enfants élevés par des couples de même sexe. L'opposition repose sur le dégoût ou la tradition — ni l'un ni l'autre n'est un argument moral dans mon cadre.",
  socle:"Deux personnes qui s'aiment et veulent s'engager ou élever un enfant : où est la victime ? Nulle part. Mon critère (bien-être + non-nuisance) donne un oui immédiat : bénéfice pour le couple et pour l'enfant (avoir des parents aimants), tort pour personne. Les objections sont : (1) le dégoût (« c'est contre-nature ») → émotion désalignée du bien-être, mauvais guide (Nussbaum, cf. mes cas-limites) ; (2) la tradition (« le mariage a toujours été… ») → sophisme naturaliste, et le mariage a en fait beaucoup changé ; (3) « l'intérêt de l'enfant » → hypothèse empirique, testée, et infirmée (pas de désavantage mesuré).",
  adverse:{ nom:"L'opposant (nature / intérêt de l'enfant)",
    steelman:"Le mariage et la filiation ont une fonction anthropologique : donner à l'enfant un père et une mère, une altérité sexuée qui structure. Bouleverser cela au nom du désir des adultes fait de l'enfant un objet de droit ; et priver délibérément un enfant d'un père ou d'une mère lui manque quelque chose, même si les parents sont aimants." },
  defense:"« L'enfant a besoin d'un père ET d'une mère » est une hypothèse empirique — et les études ne la confirment pas : ce qui compte, c'est la qualité et la stabilité du lien, pas le sexe des parents. « L'altérité sexuée structurante » est une intuition, pas un fait mesuré de développement. Quant à « priver » : l'enfant élevé par un couple de même sexe n'est pas « privé » d'un parent existant qu'on lui retirerait — à comparer à un enfant sans ce foyer, pas à un idéal abstrait.",
  faille:"L'opposant fait passer une intuition (l'altérité sexuée serait nécessaire) pour un fait de développement, alors que la recherche ne le soutient pas. Il invoque « la nature » et « la tradition » — deux sophismes (ce qui est / ce qui fut ≠ ce qui est bien). Et « l'intérêt de l'enfant » sonne noble mais, empiriquement infirmé, il sert surtout à habiller le dégoût ou la tradition d'un argument présentable.",
  contre:[
    {q:"« Un enfant a besoin d'un père et d'une mère. »", r:"Hypothèse testée, non confirmée : les études ne trouvent pas de désavantage significatif pour les enfants de couples de même sexe. Ce qui compte, c'est l'amour et la stabilité, pas le sexe des parents. L'intuition ne survit pas aux données."},
    {q:"« C'est contre-nature. »", r:"Sophisme naturaliste : « naturel » ne fait pas « bien » (la maladie est naturelle ; l'altruisme envers les lointains ne l'est guère). Et l'homosexualité existe dans la nature. « Contre-nature » traduit un dégoût, pas un tort — et le dégoût est un mauvais juge moral."},
    {q:"« Le mariage, c'est par définition un homme et une femme. »", r:"Définition historique, pas vérité éternelle : le mariage a déjà beaucoup changé (mariages arrangés, statut de la femme, divorce). Une définition est un outil qu'on ajuste à son utilité — et l'étendre n'enlève rien aux couples hétéros."},
    {q:"« On fabrique des enfants pour des adultes (PMA/GPA). »", r:"C'est un autre débat (les modalités de la procréation), distinct du mariage et de l'homoparentalité en tant que tels. Sur le fond, l'enjeu reste le bien-être de l'enfant réel et le consentement des parties — pas le sexe des parents."}
  ],
  etudes:[
    "Les grandes associations professionnelles concluent que les enfants élevés par des parents de même sexe ne présentent pas de désavantage de développement lié à l'orientation des parents. — American Psychological Association ; American Academy of Pediatrics (Perrin et al., 2013)",
    "Ce qui prédit le bon développement de l'enfant, c'est la qualité des relations et la stabilité, pas la structure ni le sexe des parents. — revues en psychologie du développement",
    "L'homosexualité n'est pas un trouble : retirée du DSM en 1973 (APA) → l'argument « pathologie » est caduc.",
    "Le dégoût moral (« contre-nature ») track mal le tort réel : il a historiquement condamné des pratiques sans victime (homophobie, mixité raciale). — Nussbaum, «From Disgust to Humanity» (cf. mes cas-limites)"
  ],
  sources:["APA ; American Academy of Pediatrics (Perrin et al., 2013)","DSM — déclassification (1973)","Nussbaum, «From Disgust to Humanity»","cf. mes débats cas-limites, sentience & autonomie"]
}

];

/* Thèmes pour le regroupement dans l'onglet Positions */
const THEMES = ["Fondations","Justice","Vie animale","Vie / corps","Politique","Société","Frontières"];
