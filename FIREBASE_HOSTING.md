# Publicar o Grêmio Escolar no Firebase Hosting

Este projeto é um site estático com várias páginas HTML, CSS, JavaScript e a imagem da águia.
O arquivo `firebase.json` já está configurado para publicar os arquivos desta pasta no Firebase Hosting.

## 1. Abrir a pasta no VS Code
Abra a pasta `gremio_escolar_joao_camargo` no VS Code.

## 2. Instalar o Firebase CLI
É necessário ter o Node.js instalado. No terminal do VS Code, execute:

```bash
npm install -g firebase-tools
```

## 3. Entrar no Firebase
```bash
firebase login
```

## 4. Selecionar o projeto Firebase
```bash
firebase use --add
```

Escolha o projeto Firebase correto na lista. Selecione o projeto existente da escola; não crie outro sem necessidade.

## 5. Publicar o site
```bash
firebase deploy --only hosting
```

Ao terminar, o Firebase mostrará o endereço público do site.

## Importante: Hosting não é o banco de dados
Esta configuração publica o site na internet. Ela NÃO substitui a integração com Firebase Authentication e Firebase SQL Connect.
No estado atual, o login e os dados ainda usam `localStorage`, portanto não são compartilhados entre computadores e não devem ser usados como autenticação real.
A próxima etapa é integrar autenticação, banco de dados e regras de autorização antes de usar o sistema oficialmente.

Não compartilhe senhas, chaves privadas ou credenciais administrativas.
