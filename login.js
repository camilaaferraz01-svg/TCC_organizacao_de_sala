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


        if (tipo === "gremio") {

            usuarioInput.placeholder =
                "Digite o usuário do Grêmio";

            prototypeInfo.innerHTML = `
                <strong>🔎 Modo demonstração</strong>

                <span>
                    Usuário: <b>gremio</b>
                </span>

                <span>
                    Senha: <b>1234</b>
                </span>
            `;

        } else {

            usuarioInput.placeholder =
                "Digite o usuário da sala";

            prototypeInfo.innerHTML = `
                <strong>🔎 Modo demonstração</strong>

                <span>
                    Usuário: <b>3ds</b>
                </span>

                <span>
                    Senha: <b>1234</b>
                </span>
            `;

        }

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

            } else {

                window.location.href =
                    "index.html";

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