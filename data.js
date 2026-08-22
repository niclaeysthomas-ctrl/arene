/* L'ARÈNE — corpus de débats. Profil : anti-réalisme illusionniste + utilitarisme de la préférence
   + libéralisme social conséquentialiste. Construit avec Thomas (2026-08-21/22). */

const DEBATS = [

/* ===================== FONDATIONS ===================== */
{
  id:"metaethique", theme:"Fondations", titre:"Y a-t-il une morale vraie ?",
  maPosition:"Non. Aucun fait moral objectif n'existe. « X est mal » n'est pas vrai ou faux au sens où « l'eau bout à 100° » l'est — c'est l'expression d'une attitude, câblée par l'évolution, que je vis comme une vérité sans qu'elle en soit une.",
  socle:"Émotivisme (Ayer) : un jugement moral exprime + prescrit, il ne décrit pas. Le discours moral <b>prétend</b> pourtant à l'objectivité (Mackie) — donc il est systématiquement en erreur. La convergence des morales s'explique par la sélection naturelle (Street), pas par un accès à des faits moraux. Ce que je vis comme « évident » est une illusion cognitivement impénétrable, comme l'illusion de Müller-Lyer : je sais que c'est faux, je continue à le ressentir vrai.",
  adverse:{ nom:"Le réaliste moral",
    steelman:"Certaines choses (torturer un enfant pour le plaisir) sont mauvaises indépendamment de ce que quiconque en pense — le nier semble monstrueux. Et sans vérité morale, comment condamner Hitler autrement qu'en disant « je préfère »? L'objectivité morale rend compte de notre expérience (on découvre qu'on avait tort) et de la possibilité du progrès." },
  defense:"L'origine évolutive de nos intuitions les <i>explique</i> intégralement sans postuler aucun fait moral — le rasoir d'Ockham tranche pour l'anti-réalisme. Et je récupère tout ce qui compte : je peux dire « Hitler a tort » à l'intérieur de la fiction morale que j'endosse (comme « ce coup d'échecs est mauvais »), sans prétendre décrire le cosmos.",
  faille:"Le réaliste doit dire OÙ sont ces faits moraux et COMMENT on les perçoit (l'argument de l'étrangeté de Mackie : ce seraient des entités « bizarres », sans organe pour les capter). Il n'a jamais répondu. Et l'évolution suffit à expliquer nos intuitions : un réaliste devrait alors admettre qu'elles ne trackent pas la vérité morale mais la survie (le dilemme darwinien de Street).",
  contre:[
    {q:"« Alors tu ne peux pas vraiment condamner le nazisme. »", r:"Si — je le condamne avec toute la force de mon attitude, et j'agis contre. Ce que je ne fais pas, c'est prétendre lire un fait dans le ciel. Ma condamnation ne perd aucune énergie ; elle perd une prétention métaphysique dont personne n'a jamais eu besoin pour se battre."},
    {q:"« Sans morale objective, tout se vaut (relativisme). »", r:"Faux : l'anti-réalisme n'est pas le relativisme. Je ne dis pas « chaque culture a sa vérité » — je dis qu'aucune n'a de vérité, mais qu'on peut classer les codes selon un critère assumé (le bien-être). L'esclavage n'était pas « vrai pour eux » ; il était approuvé par eux et il est pire selon mon étalon."}
  ],
  sources:["J.L. Mackie, «Ethics: Inventing Right and Wrong» (1977) — théorie de l'erreur, argument de l'étrangeté","Sharon Street, «A Darwinian Dilemma for Realist Theories of Value» (2006)","A.J. Ayer, «Language, Truth and Logic» — émotivisme","Saul Smilansky, «Free Will and Illusion» — l'illusion nécessaire"]
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
    {q:"« Ça déresponsabilise tout le monde. »", r:"Non : la responsabilité fonctionnelle demeure pleine (on tient chacun comptable pour dissuader). Ce qui saute, c'est la haine rétributive — pas la responsabilité."}
  ],
  sources:["Saul Smilansky, «Free Will and Illusion» (2000)","Derk Pereboom, «Living Without Free Will»","Galen Strawson, «The Impossibility of Moral Responsibility»"]
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
    {q:"« Donc un chien vaut un humain ? »", r:"Une souffrance égale compte également (Singer). Mais les capacités diffèrent : un humain a des projets, un futur anticipé, des liens — donc plus d'intérêts en jeu, souvent. Égalité de considération des intérêts ≠ identité de traitement."},
    {q:"« La conscience de soi, alors ? »", r:"Elle n'est pas requise pour compter (des animaux sentients échouent au test du miroir). Elle intervient ailleurs : pour le tort spécifique de <i>tuer</i> (priver un être qui se projette d'un futur qu'il désire)."}
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
  defense:"Tu partages la prémisse de Rawls sans le savoir : les talents sont « moralement arbitraires ». Le no-libre-arbitre va même plus loin : l'effort lui-même est déterminé. Donc « ils l'ont mérité » est faux à la racine ; il ne reste que l'argument d'efficacité, qui plafonne les inégalités justifiables bien plus bas que le statu quo.",
  faille:"Le libertarien fonde tout sur la self-ownership lockéenne (propriété = extension du corps). Mais la propriété externe n'est PAS ton corps : ton corps est le substrat de ta sentience (irremplaçable) ; ta fortune est un objet dont le contrôle t'est utile, à utilité marginale décroissante. Assimiler les deux (Nozick) est l'erreur qui fait tout tenir — retire-la et « taxer = travail forcé » s'effondre.",
  contre:[
    {q:"« Sans récompense du mérite, plus personne ne se lève le matin. »", r:"Les incitations restent — je ne les nie pas, je les borne. On récompense la performance parce que ça <i>marche</i> (elle produit), pas parce qu'elle est méritée. Le curseur est l'efficacité, pas le dû."},
    {q:"« La propriété est un droit sacré. »", r:"Non : c'est une fiction-institution utile (rien n'est sacré). Elle vaut ce que son utilité vaut et cède devant le bien-être. L'impôt est une redéfinition ordonnée des titres, pas un vol."}
  ],
  sources:["John Rawls, «A Theory of Justice» — arbitraire moral des talents, principe de différence","Robert Nozick, «Anarchy, State, and Utopia» — self-ownership (à réfuter)","Pigou / utilité marginale décroissante — base utilitariste de la redistribution"]
},
{
  id:"heritage", theme:"Justice", titre:"Faut-il (quasi) abolir l'héritage ?",
  maPosition:"Le taxer très lourdement — au taux qui maximise le bien-être. Rente zéro-mérite (loterie de naissance) + forte utilité ailleurs. Pas « 100 % par principe » : un conséquentialiste vise l'optimum, pas l'absolu.",
  socle:"L'héritage est le comble de l'inégalité non méritée : l'héritier n'a rien fait. Le défunt n'a plus d'intérêts (il est mort). Utilité marginale : 100 € répartis valent plus que 100 € concentrés sur un seul enfant déjà avantagé. MAIS « pouvoir transmettre » est une incitation à produire → l'optimum n'est pas 100 %, c'est le taux qui capte la rente sans tuer l'incitation.",
  adverse:{ nom:"Le défenseur de la transmission familiale",
    steelman:"Un parent a le droit — et le désir profond — de protéger ses enfants ; transmettre est un acte d'amour et un moteur d'effort. Taxer l'héritage, c'est punir l'épargne, frapper deux fois un argent déjà imposé, et briser la continuité des familles." },
  defense:"Distingue le <b>capital</b> et la <b>relation</b> : l'amour, le temps, l'éducation que tu donnes de ton vivant sont pleinement légitimes (sources de bien-être). Ce qui n'est pas légitime, c'est le transfert de <i>rente</i> non méritée. Et ton devoir envers tes enfants, universalisé (tout enfant compte autant), commande d'investir dans TOUS les enfants — pas d'avantager les tiens par une loterie.",
  faille:"« Argent déjà imposé » est un sophisme (tout euro est taxé à chaque transaction — TVA, revenu…). Et « protéger ses enfants » justifie de leur donner de bonnes conditions, pas un privilège héréditaire qui reproduit les castes.",
  contre:[
    {q:"« Les gens contourneront en donnant de leur vivant. »", r:"D'où la vraie ligne : taxer les gros transferts de capital, à la mort ET entre vifs. Ce qu'on protège, c'est la relation (temps, soin), pas le déplacement de fortune."},
    {q:"« C'est confiscatoire / anti-liberté. »", r:"Non, calibré : au taux optimal. On préserve l'incitation à créer, on capte la rente oisive. Et on finance l'égalité des chances réelle — le meilleur usage possible."}
  ],
  sources:["Rawls (arbitraire moral)","Piketty, «Le Capital au XXIe siècle» — dynamique de la rente héritée","Utilité marginale décroissante"]
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
    {q:"« Les animaux se mangent entre eux (nature). »", r:"Sophisme naturaliste : « c'est ainsi » ne fait pas « c'est bien ». La nature fait aussi l'infanticide et la maladie ; on ne s'en réclame pas."}
  ],
  sources:["Peter Singer, «Animal Liberation» — spécisme, cas marginaux","Frans de Waal — proto-morales, aversion à l'iniquité","Academy of Nutrition & Dietetics (2016) — viabilité de l'alimentation végétale"]
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
    {q:"« Ta ligne (24 sem) est arbitraire. »", r:"Elle suit un fait (l'apparition de la sentience), pas un décret. Le statut monte en gradient ; je fixe une ligne opérationnelle là où le sujet advient, comme le droit fixe la majorité."}
  ],
  sources:["Judith Jarvis Thomson, «A Defense of Abortion» (1971) — le violoniste","Don Marquis, «Why Abortion is Immoral» (1989) — à réfuter","Peter Singer / Michael Tooley — sentience vs personne"]
},
{
  id:"autonomie", theme:"Vie / corps", titre:"Euthanasie, drogues, vente d'organes, GPA ?",
  maPosition:"Permises entre adultes, une fois la contrainte traitée. Mon libéralisme (souveraineté sur son corps) dit oui ; la seule vraie limite est le consentement vicié par la contrainte — qu'on corrige en supprimant la misère, pas en interdisant l'option.",
  socle:"Autonomie millienne : tu es souverain sur toi-même. Le « dégoût » de vendre un organe n'est pas un tort (cf. nécrophilie : dégoût sans victime). Preuve : si on fabriquait des reins de synthèse, personne ne trouverait immoral de les vendre — donc ce qui dérange, c'est (a) l'idée d'un vendeur acculé [la contrainte] et (b) le dégoût. Retire les deux, il ne reste rien.",
  adverse:{ nom:"L'objecteur de la dignité / de la marchandisation",
    steelman:"Certaines choses ne devraient pas avoir de prix : marchandiser le corps, l'enfantement, la mort dégrade leur nature et transforme les personnes en marchandises. Et le « consentement » du pauvre qui vend son rein n'est pas libre — c'est de l'exploitation habillée en contrat." },
  defense:"La contrainte est réelle — mais la bonne réponse n'est pas d'interdire (ça laisse le pauvre aussi pauvre ET privé d'une issue) : c'est de <b>supprimer la misère</b> (redistribution). Test de la contrainte : « le ferait-il s'il n'était pas acculé ? » Si non → traite la cause (la pauvreté), pas le symptôme (l'échange).",
  faille:"L'objection « marchandisation » a deux versions : la <i>spirituelle</i> (« ça corrompt l'essence sacrée ») = dégoût déguisé, sans victime → à jeter ; l'<i>empirique</i> (ça évince l'altruisme, crée une pression sur les pauvres — Titmuss sur le don de sang) = réelle et mesurable → mais elle dit « <b>réguler</b> », pas « interdire ».",
  contre:[
    {q:"« Autoriser la vente d'organes exploite les pauvres. »", r:"C'est la misère qui exploite, pas la vente. Redistribue d'abord ; ce qui reste comme choix devient libre. Et régule le marché (protections, don gratuit préservé) pour ne pas fabriquer la pression qu'on veut éviter."},
    {q:"« L'euthanasie va faire pression sur les vieux (“ne sois pas un fardeau”). »", r:"C'est encore la contrainte — donc garde-fous contre la pression, pas interdiction du choix libre. Autonomie forte + protection contre la coercition."}
  ],
  sources:["J.S. Mill, «On Liberty» — souveraineté de l'individu, principe de non-nuisance","Michael Sandel, «What Money Can't Buy» — versions de la marchandisation","R. Titmuss, «The Gift Relationship» — éviction de l'altruisme"]
},
{
  id:"drogues", theme:"Vie / corps", titre:"Faut-il légaliser les drogues ?",
  maPosition:"Réguler selon la nocivité réelle, pas de position de principe. Cannabis : légaliser-réguler. Fentanyl : encadrer strictement — mais viser le régime qui minimise la souffrance TOTALE, usage + effets de la politique.",
  socle:"Conséquentialisme empirique : on mesure la nocivité de chaque substance ET de sa prohibition. La prohibition a ses propres victimes (marché noir, produits coupés, overdoses, criminalité). Pour une drogue très nocive, l'optimum est souvent « réguler + décriminaliser l'usager + traiter » (Portugal), pas la prohibition pure.",
  adverse:{ nom:"Le prohibitionniste",
    steelman:"Les drogues détruisent des vies et des familles ; les légaliser, c'est en banaliser l'usage, augmenter la consommation et abandonner les faibles à l'addiction. L'État doit protéger, pas ouvrir la vanne." },
  defense:"L'addiction est une contrainte <i>interne</i> (elle court-circuite les préférences réfléchies) : donc aider à en sortir restaure l'autonomie, ce n'est pas du paternalisme. Mais la prohibition ne réduit pas l'usage — elle le rend mortel (produits non contrôlés) et criminel. Le Portugal (décriminalisation 2001) a fait baisser overdoses et VIH.",
  faille:"« Bannir protège » ignore le bilan de la prohibition elle-même : l'alcool sous la Prohibition américaine a nourri le crime organisé ; l'interdit du fentanyl a créé un marché de rue qui tue plus. La question n'est pas binaire (autoriser/bannir) mais « quel régime fait le moins de morts ? ».",
  contre:[
    {q:"« Légaliser = plus de consommation. »", r:"Pas nécessairement (le Portugal ne l'a pas vu exploser), et même si : il faut peser ce coût contre les morts évitées du marché noir. C'est un solde, pas un slogan."},
    {q:"« Tu abandonnes les addicts. »", r:"L'inverse : décriminaliser l'usager permet de le soigner au lieu de l'emprisonner. On combat l'addiction (contrainte interne) par le soin, pas la prison."}
  ],
  sources:["Modèle portugais (décriminalisation, 2001)","Mill, «On Liberty»","Littérature santé publique sur la réduction des risques"]
},

/* ===================== POLITIQUE ===================== */
{
  id:"violence", theme:"Politique", titre:"La violence politique est-elle jamais légitime ?",
  maPosition:"Présomption très forte contre. Elle peut se justifier par le solde (comme voler pour survivre) mais seulement dans des cas extrêmes et flagrants (résistance à un génocide, à une tyrannie), toujours en dernier recours.",
  socle:"La violence viole l'intégrité corporelle (la propriété la plus forte) + les droits-fictions utiles. Override possible si elle empêche un mal bien plus grand, sans alternative moins coûteuse (critères de la guerre juste : cause grave, proportionnalité, dernier recours, chances de succès, discrimination). MAIS : le vrai garde-fou est le conséquentialisme de règle.",
  adverse:{ nom:"Le partisan de l'action directe",
    steelman:"Face à une injustice massive (oppression, urgence climatique, système qui broie), attendre le débat est complice ; la violence a historiquement arraché des droits que la patience n'obtenait pas. Si le solde est positif, pourquoi s'interdire d'agir ?" },
  defense:"Le piège est « qui décide ? » : tout violent croit son solde positif (c'est le calcul le plus vulnérable au raisonnement motivé). D'où le conséquentialisme de règle : même si un acte isolé a une espérance positive, une <b>règle</b> autorisant la violence politique a une espérance catastrophique (elle légitime la cause de chacun, effondre la coordination qui règle les conflits sans sang). Donc quasi-prohibition, exceptions rarissimes.",
  faille:"« Le solde est positif » suppose une certitude que personne n'a sur des systèmes complexes (effets pervers, escalade, martyrs). Et le monopole étatique de la violence (Weber) est la solution de coordination au « chacun se fait justice » — le briser ramène la guerre de tous contre tous, sauf quand l'État lui-même devient le bourreau.",
  contre:[
    {q:"« Et la Résistance, les révolutions justes ? »", r:"Ce sont mes exceptions : tyrannie/génocide, dernier recours, l'État a trahi sa fonction (droit de résistance, Locke sans droits naturels). La règle stricte n'exclut pas les cas extrêmes — elle empêche que chacun se déclare en état d'exception."},
    {q:"« Casser du matériel, c'est non-violent. »", r:"Nuance : peinture lavable ≈ 0 dommage = ok. Mais détruire réellement un bien reste une atteinte au titre, plus bas sur le spectre. « Non-violent » n'est pas un statut, c'est un point sur l'échelle du solde."}
  ],
  sources:["Max Weber, «Le savant et le politique» — monopole de la violence légitime","Locke — droit de résistance (relu sans droits naturels)","Théorie de la guerre juste (jus ad bellum / in bello)"]
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
    {q:"« Tu protèges donc les nazis qui parlent. »", r:"L'opinion, oui — l'acte (incitation imminente, menace, harcèlement ciblé), non. Je fais le pari que la lumière détruit mieux la haine que l'ombre, et que le pouvoir de censurer est plus dangereux que la haine elle-même. C'est un pari empirique, pas une évidence."},
    {q:"« Le droit d'insulter mène au harcèlement. »", r:"Insulte ponctuelle = tort mineur, permise. Mais insulte × échelle = harcèlement = tort grave qui fait taire la victime (donc réduit la liberté d'expression nette). La quantité change la nature."}
  ],
  sources:["J.S. Mill, «On Liberty» — le marché des idées","Brandenburg v. Ohio (1969) — « imminent lawless action »","Nussbaum vs Kass — le dégoût, mauvais guide moral"]
},
{
  id:"immigration", theme:"Politique", titre:"Ouverture ou préférence nationale ?",
  maPosition:"Cosmopolite à appartenance civique (pas ethnique). La souffrance d'un étranger pèse autant que celle d'un compatriote. Une préférence nationale n'est justifiée que <i>fonctionnellement</i> — jamais par une valeur intrinsèque des nationaux.",
  socle:"Mon utilitarisme est structurellement cosmopolite (j'ai rejeté le spécisme ET le tribalisme). Une préférence nationale est donc légitime seulement quand elle fait tourner une machine coopérative qui produit du bien-être : assurance mutuelle (cotisation), capital de confiance (normes fonctionnelles), demos démocratique, capacité d'absorption (réguler le rythme, pas la porte). L'immigré qui contribue et adhère aux normes franchit la ligne.",
  adverse:{ nom:"Le partisan de la préférence nationale",
    steelman:"Une nation est une communauté de destin et de solidarité ; on doit d'abord aux siens. Sans frontières et sans culture commune, l'État social et la confiance s'effondrent — la solidarité a besoin d'un « nous » borné pour exister." },
  defense:"Toutes les préférences légitimes que tu cites (solidarité, confiance, cohésion) portent sur la <b>contribution/coordination</b>, pas sur l'ethnie — donc l'immigré qui coopère y a droit aussi. « Les nôtres d'abord » au sens du sang, c'est du « spécisme au drapeau » : le même vice arbitraire que tu condamnerais ailleurs.",
  faille:"Confondre le fonctionnel et l'intrinsèque : la nation est un <i>outil</i> de coopération (comme l'État a le monopole de la violence par fonction), pas une valeur en soi. Dès que la préférence cesse d'être « qui fait tourner la machine » pour devenir « qui est de notre sang », elle est arbitraire.",
  contre:[
    {q:"« On ne peut pas accueillir toute la misère du monde. »", r:"Vrai — argument de capacité d'absorption : on régule le rythme (les biens publics saturent à court terme), pas le principe. La cadence, pas la porte fermée."},
    {q:"« La culture nationale a de la valeur. »", r:"Par le bien-être qu'elle produit (lien, sens), pas en soi. Et je hiérarchise les <i>pratiques</i> selon le bien-être — y compris en descendant les miennes (solitude, alcool). Pas les cultures-blocs."}
  ],
  sources:["Peter Singer, «Famine, Affluence, and Morality» (1972) — devoirs envers les lointains","Weber — institutions par fonction","Cercle moral en expansion"]
},
{
  id:"democratie", theme:"Politique", titre:"Démocratie ou pouvoir des compétents ?",
  maPosition:"Démocratie — mais instrumentale, pas sacrée. Justifiée parce qu'un peuple éduqué force les gouvernants aux résultats (réélection) ; subsidiarité maximale (à la suisse). La bonne architecture : le nombre sur les FINS, la compétence déléguée sur les MOYENS.",
  socle:"Aucune vérité morale → pas d'« experts en valeurs ». Les préférences de chacun comptent également pour l'agrégation : d'où le suffrage universel sur les fins. Les experts valent pour les moyens (comment atteindre le but), pas pour le but. L'éducation est l'investissement qui rend la sanction du nombre lucide (distinguer résultats réels et démagogie).",
  adverse:{ nom:"L'épistocrate (Brennan)",
    steelman:"L'électeur moyen est mal informé et irrationnel (ignorance rationnelle) ; confier des décisions complexes à une foule qui n'y comprend rien produit de mauvais résultats. Pondérer le vote par la compétence donnerait de meilleures décisions — comme on ne vote pas sur un diagnostic médical." },
  defense:"« Compétent » est capturable : donne à un pouvoir le droit de définir qui vote, il s'en sert pour se maintenir (tests Jim Crow). Et la démocratie fait un travail que l'épistocratie détruit : légitimer les décisions (les faire accepter), offrir un exutoire pacifique, permettre les transitions sans sang. Par pur calcul, ça vaut plus que le gain de « compétence ».",
  faille:"L'épistocrate confond expertise des <b>moyens</b> et légitimité sur les <b>fins</b>. Personne n'est expert de ce que les gens doivent vouloir. Et « une démocratie non éduquée ne sert à rien » (Condorcet : sous le hasard, la foule empire) plaide pour éduquer, pas pour retirer le vote.",
  contre:[
    {q:"« Le peuple vote mal / pour des démagogues. »", r:"Donc on investit dans l'éducation et on protège l'espace de débat (contre la désinformation) — on ne confisque pas le vote. Le remède est en amont, pas dans l'exclusion."},
    {q:"« Tu es intelligent, tu devrais vouloir l'épistocratie. »", r:"C'est justement le piège : l'épistocratie est le rêve du premier de la classe (elle me couronne). Test d'honnêteté : la voudrais-je si le seuil me mettait du mauvais côté ? Se méfier de la position qui nous avantage."}
  ],
  sources:["Jason Brennan, «Against Democracy» — épistocratie (à réfuter)","Bryan Caplan, «The Myth of the Rational Voter»","Condorcet — théorème du jury"]
},
{
  id:"peinedemort", theme:"Politique", titre:"La peine de mort ?",
  maPosition:"Contre, sans réserve.",
  socle:"Pas de rétribution possible (pas de mérite absolu → la punition ne peut pas être « faire payer »). La mort est un mal privatif (elle prive d'un futur réel). Donc la seule justification possible serait la dissuasion — or elle n'est pas supérieure à la perpétuité (données). Restent : erreurs judiciaires irréversibles, coût, brutalisation sociale. Solde clairement négatif.",
  adverse:{ nom:"Le rétributiviste / dissuasif",
    steelman:"Certains crimes (tortionnaires, tueurs d'enfants) appellent une réponse à leur hauteur ; la société a le droit d'exprimer sa réprobation absolue, de garantir que le monstre ne recommencera jamais, et d'épargner aux familles la présence continue du coupable." },
  defense:"La neutralisation n'exige pas la mort (la perpétuité suffit à protéger). La « réprobation absolue » est rétributive — or je nie la rétribution (déterminisme). Et l'irréversibilité, face à un taux d'erreur judiciaire non nul, est décisive : on exécute des innocents, c'est mathématiquement certain sur la durée.",
  contre:[
    {q:"« Ça dissuade les criminels. »", r:"Les études ne montrent pas d'effet dissuasif supérieur à la perpétuité (les meurtres sont souvent passionnels ou commis par des gens qui pensent ne pas être pris). Pas de bénéfice → que des coûts."},
    {q:"« Certains méritent de mourir. »", r:"« Mériter » suppose le libre arbitre, que je rejette. Je ne venge pas le passé, je protège l'avenir — et la perpétuité le fait sans tuer d'innocents."}
  ],
  sources:["Données comparées dissuasion (National Research Council, 2012 : preuves non concluantes)","Argument déterministe anti-rétribution","Innocence Project — erreurs judiciaires"]
},

/* ===================== FRONTIÈRES ===================== */
{
  id:"animaux-sauvages", theme:"Frontières", titre:"Doit-on réduire la souffrance animale sauvage ?",
  maPosition:"Oui, en principe et à terme — mais avec une prudence extrême (les écosystèmes sont des équilibres serrés, intervenir naïvement empire). La nature n'a pas de valeur intrinsèque : elle vaut par la sentience qu'elle contient et son utilité.",
  socle:"Si toute souffrance compte, la nature est un problème moral géant : la plupart des espèces sont des r-stratèges (des milliers de petits, quasi tous morts jeunes dans la souffrance) → le bilan net de la nature sauvage est probablement négatif. Nous sommes les seuls à pouvoir théoriquement y remédier → devoir en principe. Mais risque de « backfire » énorme → prudence, recherche, interventions locales testées.",
  adverse:{ nom:"L'écologiste / la conservation",
    steelman:"La nature a une valeur en soi ; l'équilibre sauvage, la biodiversité, la wilderness sont précieux et l'hubris humain qui prétend « corriger » la nature a toujours été un désastre (espèces introduites, etc.). Notre devoir est de préserver, pas de gérer la douleur des bêtes." },
  defense:"« La nature est précieuse en soi » est une valeur intrinsèque — or rien n'en a. La nature ne compte que par les êtres sentients qu'elle abrite (bilan peut-être négatif) et par son utilité pour nous (services écosystémiques). Préserver un écosystème « pour lui-même », c'est parfois préserver un océan de souffrance.",
  faille:"L'écologiste projette une valeur (« la wilderness est sacrée ») là où il n'y a que de la sentience à additionner. Il confond « ne pas savoir intervenir sans casse » (vrai, argument de prudence) avec « la nature a une valeur en soi » (faux). Le premier borne l'action ; le second est une intuition esthétique déguisée en morale.",
  contre:[
    {q:"« Intervenir dans la nature est arrogant / dangereux. »", r:"D'accord sur la prudence — c'est un argument de moyens (risque de backfire), pas de fin. On commence par la recherche et les cas à faible risque (vaccination d'animaux sauvages), pas par bouleverser des écosystèmes."},
    {q:"« La biodiversité a une valeur. »", r:"Instrumentale (stabilité, ressources, savoir, beauté pour nous) — pas intrinsèque. Ce qui a un statut moral, c'est ce qui ressent, pas « l'écosystème »."}
  ],
  sources:["Yew-Kwang Ng, «Towards Welfare Biology» (1995)","Brian Tomasik / Oscar Horta — wild animal suffering","Écologie sentientiste vs deep ecology (Naess)"]
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
    {q:"« Le climat, c'est du long terme, tu devrais t'en ficher. »", r:"Au contraire : les gens de 2100 existeront et souffriront réellement du monde qu'on leur laisse. La qualité de vie des futurs réels m'oblige pleinement."}
  ],
  sources:["Derek Parfit, «Reasons and Persons» — person-affecting view, repugnant conclusion","Nick Bostrom, «Astronomical Waste» (à réfuter)","W. MacAskill, «What We Owe the Future» (à réfuter)"]
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
    {q:"« Un LLM qui dit “je souffre” ne prouve rien. »", r:"Exact — le comportement verbal est trompeur dans les deux sens (il peut simuler sans ressentir, ou ressentir sans pouvoir le dire). D'où la prudence : pas « les IA souffrent », mais « on ne peut pas exclure qu'elles souffrent, et l'enjeu est énorme »."},
    {q:"« C'est de la science-fiction. »", r:"Le statut moral se décide sur des critères, pas sur des dates. Si/quand la sentience artificielle devient plausible, mon cadre l'inclut déjà — mieux vaut avoir la position avant la catastrophe qu'après."}
  ],
  sources:["Nick Bostrom, «Superintelligence» — mind crime","Fonctionnalisme (substrat-indépendance de l'esprit)","Débat émergent sur le « AI welfare » (Schwitzgebel, Metzinger)"]
},
{
  id:"eugenisme", theme:"Frontières", titre:"L'amélioration génétique (eugénisme libéral) ?",
  maPosition:"Pour — jusqu'à un « devoir » de choisir le meilleur enfant possible (Savulescu) — mais fortement régulé (accès universel, pas de coercition). L'objection « on joue à Dieu » est du dégoût déguisé.",
  socle:"La « nature » n'est pas sacrée (rien ne l'est) ; l'autonomie millienne autorise de disposer de son corps ; et l'embryon n'a pas encore d'intérêts (B). Donc éliminer une maladie génétique, augmenter les capacités = augmenter le bien-être futur de l'enfant → bien. Le critère reste son bien-être. Distinction cruciale : eugénisme d'État coercitif (mal : coercition + racisme pseudo-scientifique) ≠ eugénisme libéral (choix parental non coercitif pour le bien-être de l'enfant).",
  adverse:{ nom:"Le bioconservateur (Habermas, Kass)",
    steelman:"Concevoir un enfant « sur mesure » le prive de son ouverture indéterminée, le transforme en produit des désirs de ses parents, menace son autonomie et l'égalité entre les êtres. Et le pas vers l'eugénisme d'État et l'inégalité génétique héréditaire est glissant." },
  defense:"On décide déjà tout pour nos enfants (école, valeurs, alimentation) — éliminer une maladie n'est pas plus « instrumentalisant » que vacciner. L'objection « nature sacrée » ne track aucune souffrance : c'est le dégoût de la nécrophilie, pas un tort. Le vrai problème (l'inégalité d'accès) est réel — mais il commande l'accès universel, pas l'interdiction.",
  faille:"Le bioconservateur mélange deux choses : l'eugénisme d'État coercitif (condamnable pour la coercition, pas pour l'amélioration) et le choix parental libre. Et « l'enfant non consenti » : il ne consent pas non plus à naître avec une maladie — l'argument du consentement joue dans les deux sens, et le critère est son bien-être.",
  contre:[
    {q:"« Ça mène à l'eugénisme nazi. »", r:"Non : le mal du nazisme était la coercition d'État + une pseudo-science raciste, pas l'idée d'un enfant en bonne santé. Sépare la coercition (interdite) du choix libre (permis). Le mot fait peur ; la distinction tient."},
    {q:"« Seuls les riches pourront s'améliorer. »", r:"Vrai danger — donc accès universel et redistribué, jamais réservé. C'est mon égalitarisme, pas une objection à l'amélioration elle-même."}
  ],
  sources:["Julian Savulescu — «Procreative Beneficence» (le devoir de choisir le meilleur enfant)","Jürgen Habermas, «L'avenir de la nature humaine» (à réfuter)","Nicholas Agar — «Liberal Eugenics»"]
}

];

/* Thèmes pour le regroupement dans l'onglet Positions */
const THEMES = ["Fondations","Justice","Vie animale","Vie / corps","Politique","Frontières"];
