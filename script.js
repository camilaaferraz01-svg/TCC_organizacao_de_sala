const salas = [
  { nome: "3º D.S", pontos: 95 },
  { nome: "3º A", pontos: 88 },
  { nome: "2º B", pontos: 84 },
  { nome: "2º A", pontos: 78 },
  { nome: "1º D.S", pontos: 72 },
  { nome: "1º A", pontos: 65 }
];

const storageKey = "gremioAvaliacoes2026";
const avaliacaoInicial = [
  { sala: "3º D.S", data: "2026-10-02", nota: 10, observacao: "Sala muito bem organizada." },
  { sala: "3º A", data: "2026-10-02", nota: 9, observacao: "Boa organização." },
  { sala: "2º B", data: "2026-10-01", nota: 8, observacao: "Boa limpeza." }
];

function getAvaliacoes() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    localStorage.setItem(storageKey, JSON.stringify(avaliacaoInicial));
    return avaliacaoInicial;
  }
  try { return JSON.parse(saved); } catch { return []; }
}

function renderRanking(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const ranking = [...salas].sort((a,b) => b.pontos - a.pontos);
  target.innerHTML = ranking.map((sala, index) => {
    const medal = ["🥇","🥈","🥉"][index] || "🏅";
    const width = Math.max(15, Math.min(100, sala.pontos));
    return `
      <div class="rank-row">
        <div class="rank-position">${index + 1}º</div>
        <div class="rank-medal">${medal}</div>
        <div>
          <div class="rank-name">${sala.nome}</div>
          <div class="rank-bar"><span style="width:${width}%"></span></div>
        </div>
        <div class="rank-score">${sala.pontos} pts</div>
      </div>`;
  }).join("");
}

function updateStats() {
  const ranking = [...salas].sort((a,b) => b.pontos - a.pontos);
  document.getElementById("totalSalas").textContent = salas.length;
  document.getElementById("totalAvaliacoes").textContent = 15 + getAvaliacoes().length - avaliacaoInicial.length;
  document.getElementById("salaLider").textContent = ranking[0].nome;
  document.getElementById("melhorPontuacao").textContent = `${ranking[0].pontos} pts`;
  document.getElementById("studentLeader").textContent = ranking[0].nome;
  document.getElementById("studentPoints").textContent = `${ranking[0].pontos} pontos`;
  document.getElementById("leaderProgress").style.width = `${ranking[0].pontos}%`;
}

function populateSalas() {
  const select = document.getElementById("salaSelect");
  salas.forEach(sala => {
    const option = document.createElement("option");
    option.value = sala.nome;
    option.textContent = sala.nome;
    select.appendChild(option);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function setView(viewId, label) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));
  const selected = document.querySelector(`[data-view="${viewId}"]`);
  if (selected) selected.classList.add("active");

  const titles = {
    gremioView: ["Gestão escolar", "Painel do Grêmio"],
    alunoView: ["Acompanhamento", "Portal do Aluno"],
    rankingView: ["Desempenho", "Ranking geral"],
    regrasView: ["Projeto", "Regras"]
  };
  document.getElementById("pageKicker").textContent = titles[viewId][0];
  document.getElementById("pageTitle").textContent = titles[viewId][1];

  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({top:0, behavior:"smooth"});
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("scoreRange").addEventListener("input", e => {
  document.getElementById("scoreValue").textContent = e.target.value;
});

document.getElementById("dataAvaliacao").value = new Date().toISOString().slice(0,10);

document.getElementById("evaluationForm").addEventListener("submit", e => {
  e.preventDefault();

  // FUTURA AUTENTICAÇÃO:
  // Este ponto deverá verificar o usuário logado e permitir apenas role === "gremio".
  // A mesma regra deverá ser aplicada no backend quando o login for implementado.

  const avaliacao = {
    sala: document.getElementById("salaSelect").value,
    data: document.getElementById("dataAvaliacao").value,
    nota: Number(document.getElementById("scoreRange").value),
    observacao: document.getElementById("observacao").value.trim()
  };

  const avaliacoes = getAvaliacoes();
  avaliacoes.push(avaliacao);
  localStorage.setItem(storageKey, JSON.stringify(avaliacoes));

  // Protótipo local: acrescenta pontos à sala escolhida.
  const sala = salas.find(s => s.nome === avaliacao.sala);
  if (sala) sala.pontos += avaliacao.nota;

  document.getElementById("observacao").value = "";
  document.getElementById("scoreRange").value = 10;
  document.getElementById("scoreValue").textContent = "10";

  renderRanking("rankingGremio");
  renderRanking("rankingAluno");
  renderRanking("rankingCompleto");
  updateStats();
  showToast(`Avaliação da ${avaliacao.sala} registrada com sucesso!`);
});

populateSalas();
renderRanking("rankingGremio");
renderRanking("rankingAluno");
renderRanking("rankingCompleto");
updateStats();

/*
  PRÓXIMA ETAPA — LOGIN:
  1. Login do Grêmio -> acesso ao formulário de avaliação.
  2. Login de cada sala -> acesso somente ao Portal do Aluno.
  3. O ranking pode ser público/visível para alunos.
  4. A permissão de cadastrar avaliação deve ser protegida no backend,
     não somente escondendo o botão no JavaScript.
*/
