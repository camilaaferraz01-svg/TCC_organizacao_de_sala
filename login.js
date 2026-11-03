// ===============================
// USUÁRIOS DE TESTE
// ===============================

const usuarios = {

    sala: {
        usuario: "3ds",
        senha: "1234",
        nome: "3º D.S"
    },

    gremio: {
        usuario: "gremio",
        senha: "1234",
        nome: "Grêmio Estudantil"
    },

    gestao: {
        usuario: "gestao",
        senha: "1234",
        nome: "Gestão Escolar"
    }

};


// ===============================
// ELEMENTOS
// ===============================

const tipoUsuario = document.getElementById("accessType");

const usuarioInput = document.getElementById("username");

const senhaInput = document.getElementById("password");

const prototypeInfo = document.getElementById("prototypeInfo");


// ===============================
// ESCOLHER TIPO DE ACESSO
// ===============================

const botoes = document.querySelectorAll(".access-type");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        botoes.forEach(item => {
            item.classList.remove("active");
        });

        botao.classList.add("active");

        const tipo = botao.dataset.type;

        tipoUsuario.value = tipo;


        const exemplos = {
            sala: ["sala", "3ds"],
            gremio: ["Grêmio", "gremio"],
            gestao: ["Gestão", "gestao"]
        };
        const [descricao, usuarioDemo] = exemplos[tipo];
        usuarioInput.placeholder = `Digite o usuário da ${descricao}`;
        prototypeInfo.innerHTML = `
            <strong>🔎 Modo demonstração</strong>
            <span>Usuário: <b>${usuarioDemo}</b></span>
            <span>Senha: <b>1234</b></span>
        `;

    });

});


// ===============================
// MOSTRAR / ESCONDER SENHA
// ===============================

document
    .getElementById("passwordToggle")
    .addEventListener("click", () => {

        if (senhaInput.type === "password") {

            senhaInput.type = "text";

        } else {

            senhaInput.type = "password";

        }

    });


// ===============================
// MENSAGEM
// ===============================

function mostrarMensagem(mensagem) {

    const toast =
        document.getElementById("toast");

    toast.textContent = mensagem;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


// ===============================
// LOGIN
// ===============================

document
    .getElementById("loginForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        const tipo =
            tipoUsuario.value;

        const usuario =
            usuarios[tipo];

        const nomeDigitado =
            usuarioInput.value
                .trim()
                .toLowerCase();

        const senhaDigitada =
            senhaInput.value;


        // Verificar usuário

        if (
            nomeDigitado !==
            usuario.usuario
        ) {

            mostrarMensagem(
                "❌ Usuário incorreto."
            );

            return;

        }


        // Verificar senha

        if (
            senhaDigitada !==
            usuario.senha
        ) {

            mostrarMensagem(
                "❌ Senha incorreta."
            );

            return;

        }


        // Criar sessão

        const sessao = {

            tipo: tipo,

            usuario:
                usuario.usuario,

            nome:
                usuario.nome,

            login:
                new Date().toISOString()

        };


        localStorage.setItem(
            "gremioSessao",
            JSON.stringify(sessao)
        );


        // Mensagem de sucesso

        mostrarMensagem(
            `✅ Bem-vindo(a), ${usuario.nome}!`
        );


        // ===============================
        // REDIRECIONAMENTO
        // ===============================

        setTimeout(() => {

            if (tipo === "sala") {

                window.location.href =
                    "sala.html";

            } else if (tipo === "gremio") {

                window.location.href = "gremio.html";

            } else if (tipo === "gestao") {

                window.location.href = "gestao.html";

            }

        }, 700);

    });


// ===============================
// ESQUECI MINHA SENHA
// ===============================

document
    .getElementById("forgot")
    .addEventListener("click", () => {

        mostrarMensagem(
            "ℹ️ Recuperação de senha será adicionada na próxima etapa."
        );

    });
