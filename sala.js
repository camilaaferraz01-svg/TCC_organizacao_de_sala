/* =========================================
   VERIFICAÇÃO DA SESSÃO
========================================= */

const sessao = JSON.parse(
    localStorage.getItem("gremioSessao")
);


if (!sessao) {

    window.location.href = "login.html";

}


if (!["sala", "gestao"].includes(sessao.tipo)) {

    window.location.href = "gestao.html";

}


/* =========================================
   DADOS DO ALUNO
========================================= */

const nomeSala = document.getElementById("nomeSala");
const usuarioSala = document.getElementById("usuarioSala");


if (nomeSala) {
    nomeSala.textContent = sessao.nome || "Sala";
}


if (usuarioSala) {
    usuarioSala.textContent = sessao.login || sessao.usuario || "Sala";
}


/* =========================================
   DADOS DO RANKING
========================================= */

const rankingData = {
    outubro: { titulo: "Outubro 2026", salas: [
            { posicao: 1, sala: '9º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 2, sala: '9º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 3, sala: '1º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 4, sala: '1º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 5, sala: '1º C', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 6, sala: '1º D', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 7, sala: '1º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 8, sala: '1º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 9, sala: '1º G', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 10, sala: '1º H', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 11, sala: '1º I', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 12, sala: '2º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 13, sala: '2º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 14, sala: '2º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 15, sala: '2º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 16, sala: '2º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 17, sala: '3º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 18, sala: '3º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 19, sala: '3º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 20, sala: '3º A', observacao: "Sem avaliações", pontos: 0 }
        ] },
    setembro: { titulo: "Setembro 2026", salas: [
            { posicao: 1, sala: '9º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 2, sala: '9º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 3, sala: '1º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 4, sala: '1º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 5, sala: '1º C', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 6, sala: '1º D', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 7, sala: '1º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 8, sala: '1º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 9, sala: '1º G', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 10, sala: '1º H', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 11, sala: '1º I', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 12, sala: '2º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 13, sala: '2º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 14, sala: '2º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 15, sala: '2º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 16, sala: '2º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 17, sala: '3º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 18, sala: '3º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 19, sala: '3º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 20, sala: '3º A', observacao: "Sem avaliações", pontos: 0 }
        ] },
    agosto: { titulo: "Agosto 2026", salas: [
            { posicao: 1, sala: '9º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 2, sala: '9º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 3, sala: '1º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 4, sala: '1º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 5, sala: '1º C', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 6, sala: '1º D', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 7, sala: '1º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 8, sala: '1º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 9, sala: '1º G', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 10, sala: '1º H', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 11, sala: '1º I', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 12, sala: '2º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 13, sala: '2º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 14, sala: '2º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 15, sala: '2º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 16, sala: '2º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 17, sala: '3º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 18, sala: '3º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 19, sala: '3º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 20, sala: '3º A', observacao: "Sem avaliações", pontos: 0 }
        ] },
    julho: { titulo: "Julho 2026", salas: [
            { posicao: 1, sala: '9º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 2, sala: '9º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 3, sala: '1º A', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 4, sala: '1º B', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 5, sala: '1º C', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 6, sala: '1º D', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 7, sala: '1º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 8, sala: '1º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 9, sala: '1º G', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 10, sala: '1º H', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 11, sala: '1º I', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 12, sala: '2º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 13, sala: '2º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 14, sala: '2º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 15, sala: '2º E', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 16, sala: '2º F', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 17, sala: '3º D.S', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 18, sala: '3º LOG', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 19, sala: '3º ADM', observacao: "Sem avaliações", pontos: 0 },
            { posicao: 20, sala: '3º A', observacao: "Sem avaliações", pontos: 0 }
        ] }
};


/* =========================================
   DADOS DO HISTÓRICO
========================================= */

const historicoData = {
    outubro: { titulo: "Outubro 2026", avaliacoes: [] },
    setembro: { titulo: "Setembro 2026", avaliacoes: [] },
    agosto: { titulo: "Agosto 2026", avaliacoes: [] },
    julho: { titulo: "Julho 2026", avaliacoes: [] }
};


/* =========================================
   ELEMENTOS
========================================= */

const menuItems = document.querySelectorAll(".menu-item");

const pageSections = document.querySelectorAll(".page-section");

const rankingMonth = document.getElementById("rankingMonth");

const historyMonth = document.getElementById("historyMonth");

const rankingFullList = document.getElementById("rankingFullList");

const historyFullList = document.getElementById("historyFullList");

const rankingTitle = document.getElementById("rankingTitle");

const historyTitle = document.getElementById("historyTitle");


/* =========================================
   TROCAR DE PÁGINA
========================================= */

function mostrarPagina(nomePagina) {

    pageSections.forEach(section => {

        section.classList.remove("active-section");

    });


    const pagina = document.getElementById(
        nomePagina + "Section"
    );


    if (pagina) {

        pagina.classList.add("active-section");

    }


    menuItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.section === nomePagina) {

            item.classList.add("active");

        }

    });


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   MENU LATERAL
========================================= */

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const section = item.dataset.section;

        mostrarPagina(section);

    });

});


/* =========================================
   BOTÕES "VER MAIS"
========================================= */

const openButtons = document.querySelectorAll(
    "[data-open]"
);


openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destino = button.dataset.open;

        mostrarPagina(destino);

    });

});


/* =========================================
   BOTÕES VOLTAR
========================================= */

const backButtons = document.querySelectorAll(
    "[data-section]"
);


backButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destino = button.dataset.section;

        mostrarPagina(destino);

    });

});


/* =========================================
   RENDERIZAR RANKING
========================================= */

function renderRanking(mes) {

    const dados = rankingData[mes];

    if (!dados) return;


    rankingTitle.textContent = dados.titulo;


    rankingFullList.innerHTML = "";


    dados.salas.forEach(sala => {

        const item = document.createElement("div");

        item.classList.add("ranking-full-item");


        if (sala.posicao === 1) {

            item.classList.add("top-one");

        }


        /*
         * Identifica a sala do aluno.
         */

        const nomeAtual = (
            sessao.nome || ""
        ).toLowerCase();


        const salaAtual = (
            sala.sala || ""
        ).toLowerCase();


        if (
            salaAtual.includes("3º d.s") ||
            salaAtual.includes("3º ds")
        ) {

            item.classList.add("current-class");

        }


        item.innerHTML = `

            <div class="rank-position">
                ${sala.posicao}º
            </div>


            <div class="rank-class">

                <strong>
                    ${sala.sala}
                </strong>

                <span>
                    ${sala.observacao}
                </span>

            </div>


            <div class="rank-points">
                ${sala.pontos} pontos
            </div>

        `;


        rankingFullList.appendChild(item);

    });

}


/* =========================================
   RENDERIZAR HISTÓRICO
========================================= */

function renderHistorico(mes) {

    const dados = historicoData[mes];

    if (!dados) return;


    historyTitle.textContent = dados.titulo;


    historyFullList.innerHTML = "";


    dados.avaliacoes.forEach(avaliacao => {

        const item = document.createElement("div");

        item.classList.add("history-full-row");


        item.innerHTML = `

            <span>
                ${avaliacao.data}
            </span>


            <span class="result">
                ${avaliacao.resultado}
            </span>


            <span>
                ${avaliacao.observacao}
            </span>


            <span class="points">
                ${avaliacao.pontos} pts
            </span>

        `;


        historyFullList.appendChild(item);

    });

}


/* =========================================
   SELEÇÃO DO MÊS — RANKING
========================================= */

if (rankingMonth) {

    rankingMonth.addEventListener("change", () => {

        renderRanking(
            rankingMonth.value
        );

    });

}


/* =========================================
   SELEÇÃO DO MÊS — HISTÓRICO
========================================= */

if (historyMonth) {

    historyMonth.addEventListener("change", () => {

        renderHistorico(
            historyMonth.value
        );

    });

}


/* =========================================
   CARREGAMENTO INICIAL
========================================= */

renderRanking("outubro");

renderHistorico("outubro");


/* =========================================
   LOGOUT
========================================= */

const logoutBtn = document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("gremioSessao");

        window.location.href = "login.html";

    });

}

// Gestão pode alternar entre os dois painéis.
if (sessao && sessao.tipo === "gestao") {
    const voltarGestao = document.createElement("button");
    voltarGestao.type = "button";
    voltarGestao.textContent = "🔐 Voltar à Gestão";
    voltarGestao.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:9999;padding:12px 16px;border:0;border-radius:12px;background:#2864e8;color:white;font-weight:700;cursor:pointer;box-shadow:0 4px 16px #0002";
    voltarGestao.addEventListener("click", () => window.location.href = "gestao.html");
    document.body.appendChild(voltarGestao);
}
