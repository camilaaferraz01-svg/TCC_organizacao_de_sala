const ROLE_PERMITIDA = "gestao";
// Acesso ao painel do Grêmio (proteção de demonstração).
let sessaoGremio = null;
try {
  sessaoGremio = JSON.parse(localStorage.getItem("gremioSessao"));
} catch (erro) {
  localStorage.removeItem("gremioSessao");
}
if (!sessaoGremio) {
  window.location.replace("login.html");
  throw new Error("Faça login para acessar o painel do Grêmio.");
}
if (sessaoGremio.tipo !== ROLE_PERMITIDA) {
  window.location.replace(({sala:"sala.html",gremio:"gremio.html",gestao:"gestao.html"})[sessaoGremio.tipo] || "login.html");
  throw new Error("Este painel não pertence ao seu perfil.");
}

// Protótipo visual do painel do Grêmio. Os dados ainda são fictícios.
const rooms = [
 {id:1,name:"3º A",login:"3a",points:92,logo:""},
 {id:2,name:"3º D.S",login:"3ds",points:85,logo:""},
 {id:3,name:"2º B",login:"2b",points:78,logo:""},
 {id:4,name:"2º D.S",login:"2ds",points:72,logo:""}
];
const rankings = {
 outubro:[["3º A",92],["3º D.S",85],["2º B",78],["2º D.S",72]],
 setembro:[["3º D.S",80],["3º A",77],["2º B",71],["2º D.S",68]],
 agosto:[["3º A",88],["2º B",82],["3º D.S",76],["2º D.S",69]],
 julho:[["2º B",84],["3º A",80],["3º D.S",75],["2º D.S",65]]
};
let evaluations = [
 {date:"2026-10-06",room:"3º A",result:"Excelente",points:92,notes:"Sala limpa e carteiras organizadas.",month:"outubro"},
 {date:"2026-10-05",room:"3º D.S",result:"Bom",points:85,notes:"Boa organização geral.",month:"outubro"},
 {date:"2026-10-03",room:"2º B",result:"Bom",points:78,notes:"Melhorar a organização dos materiais.",month:"outubro"},
 {date:"2026-09-28",room:"3º D.S",result:"Bom",points:80,notes:"Melhora na limpeza.",month:"setembro"},
 {date:"2026-09-20",room:"3º A",result:"Bom",points:77,notes:"Manter os bons hábitos.",month:"setembro"},
 {date:"2026-08-18",room:"3º A",result:"Excelente",points:88,notes:"Ótimo resultado.",month:"agosto"},
 {date:"2026-07-21",room:"2º B",result:"Bom",points:84,notes:"Bom cuidado com o espaço.",month:"julho"}
];
const isGestao = ROLE_PERMITIDA === "gestao";
const STORAGE_DADOS = "gremioEscolarDadosV3";
function salvarDados(){
  try { localStorage.setItem(STORAGE_DADOS, JSON.stringify({rooms, rankings, evaluations})); }
  catch(error){ console.warn("Não foi possível salvar dados demonstrativos.",error); }
}
try {
  const dados = JSON.parse(localStorage.getItem(STORAGE_DADOS) || "null");
  if(dados && Array.isArray(dados.rooms) && dados.rankings && Array.isArray(dados.evaluations)){
    rooms.splice(0,rooms.length,...dados.rooms);
    for(const mes of Object.keys(rankings)) delete rankings[mes];
    Object.assign(rankings,dados.rankings);
    evaluations = dados.evaluations;
  }
} catch(error){ console.warn("Dados demonstrativos inválidos; usando dados iniciais.",error); }
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const monthNames = {outubro:"Outubro 2026",setembro:"Setembro 2026",agosto:"Agosto 2026",julho:"Julho 2026"};
function safe(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function initials(n){return n.replace(/[º°]/g,"").split(/\s+/).map(x=>x[0]).join("").slice(0,3).toUpperCase();}
function logo(r){return `<span class="room-logo">${r.logo?`<img src="${r.logo}" alt="Logo ${safe(r.name)}">`:safe(initials(r.name))}</span>`;}
function room(name){return rooms.find(r=>r.name===name)||{name,logo:""};}
function dateText(s){if(!s)return "—";let [y,m,d]=s.split("-");return `${d}/${m}/${y}`;}
function toast(message){let el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("show"),3200);}
function go(name){if (!isGestao && ["gestao","configuracoes"].includes(name)) return;let el=$("#page-"+name);if(!el)return;$$(".page").forEach(p=>p.classList.toggle("active",p===el));$$("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===name));$("#crumbCurrent").textContent=({dashboard:"Dashboard",salas:"Salas",ranking:"Ranking",avaliacoes:"Avaliações",historico:"Histórico",configuracoes:"Configurações",gestao:"Gestão"})[name];$("#sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
$$("[data-page]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
$("#menuToggle").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#logout").addEventListener("click",()=>{
  localStorage.removeItem("gremioSessao");
  window.location.replace("login.html");
});
function drawDashRanking(month){let list=[...(rankings[month]||rankings.outubro)].sort((a,b)=>b[1]-a[1]);$("#dashRanking").innerHTML=list.map(([name,points],i)=>`<div class="rank-row"><span class="rank-number ${i===0?"first":""}">${i+1}</span><div class="rank-room">${logo(room(name))}<b>${safe(name)}</b></div><div class="track"><span style="width:${points}%"></span></div><span class="points">${points}</span></div>`).join("");}
function drawRanking(month){let list=[...(rankings[month]||rankings.outubro)].sort((a,b)=>b[1]-a[1]);$("#rankTable").innerHTML=list.map(([name,points],i)=>`<tr><td><span class="position ${i===0?"first":""}">${i+1}º</span></td><td><div class="table-room">${logo(room(name))}${safe(name)}</div></td><td><b class="table-points">${points} pts</b></td><td><div class="table-track"><span style="width:${points}%"></span></div></td><td><span class="badge">${i===0?"Líder do mês":"Participando"}</span></td></tr>`).join("");}
function drawRecent(){$("#recent").innerHTML=[...evaluations].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4).map(e=>`<div class="recent-item"><span class="recent-icon">📝</span><div class="recent-copy"><b>${safe(e.room)} · ${safe(e.result)}</b><p>${dateText(e.date)} · ${safe(e.notes||"Sem observações")}</p></div><span class="recent-points">+${e.points}</span></div>`).join("");}
function drawRooms(query=""){let list=rooms.filter(r=>(r.name+" "+r.login).toLowerCase().includes(query.toLowerCase()));$("#roomCount").textContent=`${list.length} ${list.length===1?"sala":"salas"}`;$("#roomsGrid").innerHTML=list.length?list.map(r=>`<article class="room-card"><div class="room-top">${logo(r)}<div><h3>${safe(r.name)}</h3><small>Login demonstrativo: ${safe(r.login)}</small></div></div><div class="room-score"><span>Pontuação de outubro</span><b>${r.points}<small style="font-size:10px;color:#8c98ab;font-weight:500">/100</small></b></div><div class="room-foot"><span class="badge">Participante</span><button class="mini-link" data-detail="${r.id}">Ver detalhes ↗</button></div></article>`).join(""):`<div class="empty">Nenhuma sala encontrada.</div>`;$$("[data-detail]").forEach(b=>b.addEventListener("click",()=>{let r=rooms.find(x=>x.id===Number(b.dataset.detail));toast(`${r.name}: ${r.points} pontos. Login real será criado no Supabase.`);}));refreshSelects();}
function refreshSelects(){let ev=$("#evalRoom"),hist=$("#historyRoom"),evValue=ev.value,histValue=hist.value;ev.innerHTML='<option value="">Selecione uma sala</option>'+rooms.map(r=>`<option>${safe(r.name)}</option>`).join("");hist.innerHTML='<option value="todas">Todas as salas</option>'+rooms.map(r=>`<option>${safe(r.name)}</option>`).join("");if(rooms.some(r=>r.name===evValue))ev.value=evValue;if(rooms.some(r=>r.name===histValue))hist.value=histValue;}
function drawHistory(){let rf=$("#historyRoom").value,mf=$("#historyMonth").value;let list=evaluations.filter(e=>(rf==="todas"||e.room===rf)&&(mf==="todos"||e.month===mf)).sort((a,b)=>b.date.localeCompare(a.date));$("#historyTable").innerHTML=list.map(e=>`<tr><td>${dateText(e.date)}</td><td><div class="table-room">${logo(room(e.room))}${safe(e.room)}</div></td><td>${safe(e.result)}</td><td><b class="table-points">${e.points} pts</b></td><td>${safe(e.notes||"—")}</td></tr>`).join("");$("#emptyHistory").classList.toggle("hidden",list.length>0);}
function updateStats(month="outubro"){let list=rankings[month]||rankings.outubro;let sorted=[...list].sort((a,b)=>b[1]-a[1]);$("#totalRooms").textContent=rooms.length;$("#totalEvaluations").textContent=evaluations.filter(e=>e.month===month).length;$("#leader").textContent=sorted[0]?.[0]||"—";$("#average").textContent=(list.reduce((s,x)=>s+x[1],0)/list.length).toLocaleString("pt-BR",{maximumFractionDigits:1});}
$("#dashMonth").addEventListener("change",e=>{drawDashRanking(e.target.value);updateStats(e.target.value);});
$("#rankMonth").addEventListener("change",e=>drawRanking(e.target.value));
$("#historyRoom").addEventListener("change",drawHistory);$("#historyMonth").addEventListener("change",drawHistory);
$("#roomSearch").addEventListener("input",e=>drawRooms(e.target.value));
$("#today").textContent="📅 "+new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"long",year:"numeric"}).format(new Date());
const dialog=$("#roomDialog");if(isGestao && $("#newRoom")) $("#newRoom").addEventListener("click",()=>dialog.showModal());$("#closeDialog").addEventListener("click",()=>dialog.close());$("#cancelDialog").addEventListener("click",()=>dialog.close());
$("#roomForm").addEventListener("submit",e=>{e.preventDefault();if(!isGestao)return toast("Somente a Gestão pode cadastrar salas.");let name=$("#roomName").value.trim(),login=$("#roomLogin").value.trim(),file=$("#roomLogo").files[0];if(rooms.some(r=>r.name.toLowerCase()===name.toLowerCase()||r.login.toLowerCase()===login.toLowerCase()))return toast("Já existe uma sala com esse nome ou login.");if(file&&file.size>2*1024*1024)return toast("A imagem deve ter no máximo 2 MB.");const add=logoData=>{rooms.push({id:Date.now(),name,login,points:0,logo:logoData});salvarDados();dialog.close();e.target.reset();drawRooms($("#roomSearch").value);drawDashRanking($("#dashMonth").value);drawRanking($("#rankMonth").value);updateStats($("#dashMonth").value);toast(`${name} cadastrada no navegador (modo demonstração).`);};if(file){let reader=new FileReader();reader.onload=()=>add(String(reader.result));reader.onerror=()=>toast("Não foi possível ler a imagem.");reader.readAsDataURL(file);}else add("");});
$("#evalDate").value=new Date().toISOString().slice(0,10);
$("#evalForm").addEventListener("submit",e=>{e.preventDefault();let date=$("#evalDate").value,roomName=$("#evalRoom").value,points=Number($("#evalPoints").value),result=$("#evalResult").value,notes=$("#evalNotes").value.trim();if(!roomName||!date||!result||points<0||points>100)return toast("Confira os campos e informe pontuação entre 0 e 100.");let monthText=new Intl.DateTimeFormat("pt-BR",{month:"long"}).format(new Date(date+"T12:00:00")).toLowerCase();let month=Object.keys(monthNames).find(m=>monthNames[m].toLowerCase().startsWith(monthText))||"outubro";evaluations.unshift({date,room:roomName,points,result,notes:notes||"Sem observações",month});if(rankings[month]){let found=rankings[month].find(x=>x[0]===roomName);if(found)found[1]=points;else rankings[month].push([roomName,points]);}let r=rooms.find(x=>x.name===roomName);if(r&&month==="outubro")r.points=points;salvarDados();drawRecent();drawHistory();drawRooms($("#roomSearch").value);drawDashRanking($("#dashMonth").value);drawRanking($("#rankMonth").value);updateStats($("#dashMonth").value);e.target.reset();$("#evalDate").value=new Date().toISOString().slice(0,10);toast("Avaliação salva no navegador (modo demonstração).");go("historico");});
drawRooms();drawDashRanking("outubro");drawRanking("outubro");drawRecent();drawHistory();updateStats();

// Identificação visual do usuário autenticado.
const nomeGremio = sessaoGremio.nome || "Grêmio Estudantil";
const gestaoMenu = document.getElementById("gestaoMenu");
if (gestaoMenu) gestaoMenu.hidden = !isGestao;
const gestaoPage = document.getElementById("page-gestao");
if (gestaoPage) gestaoPage.hidden = !isGestao;
document.querySelectorAll("[data-page='gestao']").forEach(button => {
  button.addEventListener("click", event => {
    if (!isGestao) { event.stopImmediatePropagation(); go("dashboard"); }
  }, true);
});
const acessoSala = document.getElementById("gestaoAcessoSala");
if (acessoSala) acessoSala.addEventListener("click", () => {
  if (isGestao) window.location.href = "sala.html";
});

window.addEventListener("storage", e => {
  if(e.key === STORAGE_DADOS) window.location.reload();
  if(e.key === "gremioSessao" && !e.newValue) window.location.replace("login.html");
});
const adminNome = document.querySelector(".admin b");
const adminAvatar = document.querySelector(".avatar");
if (adminNome) adminNome.textContent = nomeGremio;
if (adminAvatar) adminAvatar.textContent = nomeGremio.charAt(0).toUpperCase();
