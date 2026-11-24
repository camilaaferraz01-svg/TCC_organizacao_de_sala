# Grêmio Escolar — E.E. Professor João Camargo

## Identidade visual
Tema em preto e laranja, com símbolo de águia e identificação da E.E. Professor João Camargo.

## Arquivos
- `index.html`: direciona para o login.
- `login.html`, `login.css`, `login.js`: tela de acesso.
- `gestao.html`, `gestao.js`: painel da Gestão Escolar.
- `gremio.html`, `gremio.js`: painel do Grêmio.
- `sala.html`, `sala.css`, `sala.js`: portal de consulta das salas.
- `style.css`: estilos dos painéis administrativos.

## Salas iniciais
20 salas: 9º A, 9º B; 1º A até 1º I; 2º D.S, 2º LOG, 2º ADM, 2º E, 2º F; 3º D.S, 3º LOG, 3º ADM e 3º A.

## Atenção — integração com banco pendente
Esta versão continua sendo um protótipo local. O login ainda usa credenciais fixas em JavaScript e `localStorage`; não há conexão ativa com Firebase Data Connect/Supabase, autenticação segura ou regras de acesso no servidor.

Para concluir a integração real, envie os arquivos de configuração e esquema do Firebase Data Connect (por exemplo, `dataconnect.yaml`, `connector.yaml`, `schema.gql`, operações `.gql` e configuração Firebase do projeto) ou compartilhe o conteúdo atual do serviço/connector. Não publique chaves privadas ou credenciais administrativas. A configuração pública do cliente Firebase pode ser compartilhada; segredos devem permanecer no ambiente seguro.


## Atualização visual e reinicialização dos dados (11/11/2026)
- Brasão da águia aplicado à tela inicial e às marcas dos painéis.
- Identidade visual refinada com preto, laranja e branco.
- Cartão de perfil lateral removido das três áreas de acesso.
- Configurações da área administrativa identificadas como Gestão Escolar / Administrador geral.
- Avaliações, histórico e pontuações demonstrativas reiniciados; a nova chave local é `gremioEscolarDadosV4`.
- O portal das salas começa com 20 turmas, pontuação zero e histórico vazio.
- A integração com banco de dados real continua pendente; esta atualização não conecta Supabase/Firebase.
