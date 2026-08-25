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
}

];

/* Thèmes pour le regroupement dans l'onglet Positions */
const THEMES = ["Fondations","Justice","Vie animale","Vie / corps","Politique","Frontières"];
