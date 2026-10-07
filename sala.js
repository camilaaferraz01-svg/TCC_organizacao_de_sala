/* =========================================
   VERIFICAÇÃO DA SESSÃO
========================================= */

const sessao = JSON.parse(
    localStorage.getItem("gremioSessao")
);


if (!sessao) {

    window.location.href = "login.html";

}


if (sessao.tipo !== "sala") {

    window.location.href = "index.html";

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

    outubro: {

        titulo: "Outubro 2026",

        salas: [

            {
                posicao: 1,
                sala: "3º A",
                observacao: "🥇 Primeiro lugar",
                pontos: 92
            },

            {
                posicao: 2,
                sala: "3º D.S",
                observacao: "Sua sala",
                pontos: 85
            },

            {
                posicao: 3,
                sala: "2º B",
                observacao: "Terceiro lugar",
                pontos: 78
            },

            {
                posicao: 4,
                sala: "2º D.S",
                observacao: "Quarto lugar",
                pontos: 72
            }

        ]

    },


    setembro: {

        titulo: "Setembro 2026",

        salas: [

            {
                posicao: 1,
                sala: "3º D.S",
                observacao: "Sua sala",
                pontos: 80
            },

            {
                posicao: 2,
                sala: "3º A",
                observacao: "Segundo lugar",
                pontos: 77
            },

            {
                posicao: 3,
                sala: "2º B",
                observacao: "Terceiro lugar",
                pontos: 71
            },

            {
                posicao: 4,
                sala: "2º D.S",
                observacao: "Quarto lugar",
                pontos: 68
            }

        ]

    },


    agosto: {

        titulo: "Agosto 2026",

        salas: [

            {
                posicao: 1,
                sala: "3º A",
                observacao: "🥇 Primeiro lugar",
                pontos: 88
            },

            {
                posicao: 2,
                sala: "2º B",
                observacao: "Segundo lugar",
                pontos: 82
            },

            {
                posicao: 3,
                sala: "3º D.S",
                observacao: "Sua sala",
                pontos: 76
            },

            {
                posicao: 4,
                sala: "2º D.S",
                observacao: "Quarto lugar",
                pontos: 69
            }

        ]

    },


    julho: {

        titulo: "Julho 2026",

        salas: [

            {
                posicao: 1,
                sala: "2º B",
                observacao: "🥇 Primeiro lugar",
                pontos: 84
            },

            {
                posicao: 2,
                sala: "3º A",
                observacao: "Segundo lugar",
                pontos: 80
            },

            {
                posicao: 3,
                sala: "3º D.S",
                observacao: "Sua sala",
                pontos: 75
            },

            {
                posicao: 4,
                sala: "2º D.S",
                observacao: "Quarto lugar",
                pontos: 65
            }

        ]

    }

};


/* =========================================
   DADOS DO HISTÓRICO
========================================= */

const historicoData = {

    outubro: {

        titulo: "Outubro 2026",

        avaliacoes: [

            {
                data: "06/10/2026",
                resultado: "Excelente",
                observacao: "Sala bem organizada.",
                pontos: "+15"
            },

            {
                data: "29/09/2026",
                resultado: "Bom",
                observacao: "Pequenos ajustes necessários.",
                pontos: "+14"
            },

            {
                data: "22/09/2026",
                resultado: "Regular",
                observacao: "Melhorar a organização das carteiras.",
                pontos: "+12"
            }

        ]

    },


    setembro: {

        titulo: "Setembro 2026",

        avaliacoes: [

            {
                data: "25/09/2026",
                resultado: "Excelente",
                observacao: "Sala organizada e limpa.",
                pontos: "+15"
            },

            {
                data: "18/09/2026",
                resultado: "Bom",
                observacao: "Pequenos ajustes necessários.",
                pontos: "+13"
            },

            {
                data: "11/09/2026",
                resultado: "Excelente",
                observacao: "Ótima organização.",
                pontos: "+15"
            }

        ]

    },


    agosto: {

        titulo: "Agosto 2026",

        avaliacoes: [

            {
                data: "28/08/2026",
                resultado: "Bom",
                observacao: "Sala organizada.",
                pontos: "+14"
            },

            {
                data: "21/08/2026",
                resultado: "Regular",
                observacao: "Melhorar organização das carteiras.",
                pontos: "+11"
            },

            {
                data: "14/08/2026",
                resultado: "Bom",
                observacao: "Bom desempenho da turma.",
                pontos: "+13"
            }

        ]

    },


    julho: {

        titulo: "Julho 2026",

        avaliacoes: [

            {
                data: "24/07/2026",
                resultado: "Bom",
                observacao: "Organização satisfatória.",
                pontos: "+13"
            },

            {
                data: "17/07/2026",
                resultado: "Regular",
                observacao: "Necessário melhorar a organização.",
                pontos: "+10"
            },

            {
                data: "10/07/2026",
                resultado: "Bom",
                observacao: "Sala em boas condições.",
                pontos: "+12"
            }

        ]

    }

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