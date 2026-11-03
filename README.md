
# Grêmio Escolar — HTML independente para cada perfil

Abra `index.html` ou `login.html` no Live Server do VS Code.

| Perfil | Usuário | Senha | Página |
| --- | --- | --- | --- |
| Sala | `3ds` | `1234` | `sala.html` |
| Grêmio | `gremio` | `1234` | `gremio.html` |
| Gestão | `gestao` | `1234` | `gestao.html` |

- `index.html`: entrada do site, direciona para `login.html`.
- `gestao.html` + `gestao.js`: painel próprio da Gestão Escolar, com acesso administrativo geral.
- `gremio.html` + `gremio.js`: painel próprio do Grêmio, sem cadastro de salas.
- `sala.html` + `sala.js`: portal da sala.
- Os botões **Sair / Voltar ao login** estão visíveis nos painéis da Gestão e do Grêmio.
- O cadastro de salas e as avaliações dos painéis administrativos usam armazenamento demonstrativo compartilhado no navegador.

**Importante:** as credenciais e a sessão são demonstrativas (JavaScript/localStorage).
Para utilização real, implementar autenticação e autorização com Supabase Auth e RLS.
O Portal das Salas ainda usa dados demonstrativos próprios, sem sincronização com os painéis administrativos.
