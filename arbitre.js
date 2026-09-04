/* =====================================================================
   L'ARBITRE — l'app lit ce que tu écris et le confronte à la référence.
   Objectif : tuer l'auto-évaluation complaisante ("je l'avais").
   Méthode assumée : on compare des MOTS, pas des idées. C'est un
   indicateur, pas un verdict — d'où le bouton "je l'avais dit autrement".
   ===================================================================== */

const STOP = new Set(`
alors au aucun aussi autre avant avec avoir bon car ce cela ces cet cette ceux chaque chez
comme comment dans des du dedans dehors depuis deux devrait doit donc dont elle elles en
encore entre est et eu fait faire fois font hors ici il ils je juste la le les leur leurs
la lui mais me meme mes moi moins mon mot ne ni nos notre nous on ont ou par parce pas peu
peut plupart pour pourquoi quand que quel quelle quelles quels qui sa sans ses seulement si
sien son sont sous soyez sur ta tandis tellement tels tes toi ton tous tout trop tres tu
voient vont votre vous etre ete cela celui celle plus tout toute toutes rien deja alors
alors alors aux alors donc alors ainsi aussi bien deja entre etait etaient sera seront
faut peut-etre quelque quelques leur meme meme cela nest cest quil quelle dune dun lon
autres chose choses facon maniere point points cas exemple contre selon vers apres avant
lorsque puisque afin cela cette celles ceux dire dit fait faits fond grand grande grands
non oui alors ainsi tandis surtout ensuite enfin dabord voila etc
exactement pourtant lourdement seul seule seuls concerne utiles separe seulement
seulement vraiment simplement justement totalement entierement seulement aurais
aurait auraient serait seraient pouvait pouvaient devait devaient reste restent
donne donnent prend prennent passe passent trouve trouvent
`.trim().split(/\s+/));

function _norm(s){
  return String(s||"")
    .replace(/<[^>]+>/g," ")
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g," ")
    .trim();
}
function _mots(s){
  return _norm(s).split(/\s+/).filter(w=>w.length>=4 && !STOP.has(w) && !/^\d+$/.test(w));
}
/* racine grossière : suffit pour l'accord et la conjugaison françaises */
function _rac(w){ return w.slice(0, Math.min(6, w.length)); }

/* --- fréquence documentaire sur tout le corpus : les mots rares sont les mots forts --- */
let _DF=null;
function _df(){
  if(_DF) return _DF;
  _DF = {};
  const docs = [];
  (typeof DEBATS!=="undefined"?DEBATS:[]).forEach(d=>{
    docs.push(d.defense||"", d.faille||"", (d.adverse&&d.adverse.steelman)||"");
    (d.contre||[]).forEach(c=>docs.push(c.r||""));
  });
  docs.forEach(t=>{
    const vus=new Set(_mots(t).map(_rac));
    vus.forEach(r=>{ _DF[r]=(_DF[r]||0)+1; });
  });
  _DF.__n = docs.length || 1;
  return _DF;
}

/* --- les N idées-clés d'un texte de référence --- */
function conceptsFor(ref, n){
  n = n || 5;
  const df=_df(), vus=new Map();
  // formes de surface d'origine (accents + majuscules), indexées par racine
  // on garde la ponctuation attachée : sans elle, impossible de voir un début de phrase
  const brut = String(ref||"").replace(/<[^>]+>/g," ").split(/\s+/).filter(Boolean);
  const surface = new Map(), propre = new Set();
  const nu = t => t.replace(/^[^A-Za-zÀ-ÿ0-9]+|[^A-Za-zÀ-ÿ0-9]+$/g,"");
  brut.forEach((tok,i)=>{
    const w = nu(tok); if(!w) return;
    const nw = _norm(w); if(!nw) return;
    const r = _rac(nw);
    if(!surface.has(r) || w.length < surface.get(r).length) surface.set(r, w);
    // nom propre = majuscule qui n'ouvre PAS une phrase
    const prec = i>0 ? brut[i-1] : "";
    const ouvre = i===0 || /[.!?:;»)]$/.test(prec) || /^[«("']/.test(tok);
    if(!ouvre && /^[A-ZÀ-Ý]/.test(w)) propre.add(r);
  });
  _mots(ref).forEach(w=>{
    const r=_rac(w);
    if(!vus.has(r)) vus.set(r, {rac:r, mot:w, occ:0});
    const e=vus.get(r); e.occ++;
    if(w.length < e.mot.length) e.mot = w;
  });
  const arr=[...vus.values()].map(e=>{
    const freq = df[e.rac] || 1;
    // rare dans le corpus + répété dans ce texte = concept central
    let p = (Math.log(df.__n / freq) + 0.3) * (1 + Math.log(e.occ));
    if(propre.has(e.rac)) p *= 2.2;              // Ockham, Rawls, Mackie… = les nerfs
    if(/ment$/.test(e.mot)) p *= 0.35;           // adverbes : du remplissage
    if(e.mot.length <= 5) p *= 0.8;              // mots courts, souvent génériques
    e.poids = p;
    e.label = surface.get(e.rac) || e.mot;       // ce qu'on affiche
    return e;
  });
  arr.sort((a,b)=>b.poids-a.poids);
  return arr.slice(0, n);
}

/* --- confronter ce qu'il a écrit à la référence --- */
function arbitrer(ecrit, ref, n){
  const concepts = conceptsFor(ref, n);
  const siens = new Set(_mots(ecrit).map(_rac));
  const sienMots = _mots(ecrit);
  const res = concepts.map(c=>{
    let trouve = siens.has(c.rac);
    if(!trouve){ // tolérance : racine plus courte de part et d'autre
      trouve = sienMots.some(w => w.startsWith(c.rac.slice(0,5)) || c.mot.startsWith(w.slice(0,5)));
    }
    return { mot:c.label||c.mot, rac:c.rac, trouve };
  });
  const nbMots = sienMots.length;
  const touches = res.filter(r=>r.trouve).length;
  return {
    concepts: res,
    touches,
    total: res.length,
    couverture: res.length ? touches/res.length : 0,
    nbMots,
    vide: nbMots < 5
  };
}
