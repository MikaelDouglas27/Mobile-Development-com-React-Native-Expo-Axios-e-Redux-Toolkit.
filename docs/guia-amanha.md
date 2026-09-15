# Seu trabalho para amanhã

O código e os documentos estão preparados. Reserve cerca de 2 a 3 horas para executar, entender, ajustar a identificação e fazer a entrega.

## 1. Rodar e entender (45 a 60 min)

- Extraia o ZIP. Abra a pasta `catalogo-mobile` no VS Code.
- No terminal dessa pasta, execute `npm ci` e depois `npx expo start`.
- Abra no Expo Go compatível, com celular e computador na mesma rede. `npm run web` também permite revisar no navegador.
- Faça login com `mikael@exemplo.com` / `123456` e percorra as duas abas, detalhes, Configurações e Sair da conta.
- Leia `src/services/api.js`, `src/store/authSlice.js`, `src/hooks/useRemoteData.js` e `app/_layout.js` para explicar as decisões.
- Confira a lista de testes no README, especialmente em seu celular. Os prints incluídos são da execução web em tamanho de celular.

## 2. Revisar os documentos (15 a 20 min)

- Leia `reflexao-contextual.pdf` e ajuste a reflexão se necessário para refletir seu entendimento das aulas.
- Confira seu nome e inclua matrícula, turma ou instituição se o professor exigir. O nome usado foi Mikael Douglas.
- Confira `funcionalidades.pdf`, com quatro prints em duas páginas.
- O PDF de prints deve ter no máximo duas páginas. O layout foi adaptado às capturas do Figma enviadas, mantendo a personalização preta. Confira com o professor se a cor azul do modelo também precisa ser reproduzida.
- Se mudar a interface, substitua os prints e atualize o PDF antes de enviar.

## 3. Publicar no GitHub (15 a 25 min)

Pelo navegador, sem precisar instalar Git:

1. Entre no GitHub e clique em **New repository**.
2. Nomeie como `catalogo-mobile`, marque **Public** e crie o repositório.
3. Clique em **uploading an existing file** ou **Add file > Upload files**.
4. Envie o conteúdo da pasta do projeto: `app`, `src`, `assets`, `docs`, `package.json`, `package-lock.json`, `app.json`, `README.md` e `.gitignore`.
5. Não envie `node_modules`, `.expo`, `dist` ou apenas o ZIP. O avaliador deve ver o código e o README na raiz.
6. Conclua em **Commit changes** e abra o link em janela anônima para confirmar acesso público.

Alternativa pelo terminal, após criar o repositório vazio (substitua SEU_USUARIO):

```bash
git init
git add .
git commit -m "Implementa catalogo mobile com Expo, Axios e Redux Toolkit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/catalogo-mobile.git
git push -u origin main
```

## 4. Gravar o pitch (30 a 40 min)

- Use `roteiro-video.md` como base e explique com suas próprias palavras.
- Grave até 4 minutos, mostrando o app funcionando. Meta sugerida: 3min40s.
- Demonstre validação, login, abas, detalhes e logout. Comente os desafios e soluções.
- Publique no YouTube como não listado, ou em outro serviço com visualização por link.
- Abra o link fora da sua conta para conferir acesso e áudio.

## 5. Entregar (10 min)

- Link do repositório público do GitHub.
- Link do vídeo de até 4 minutos.
- `reflexao-contextual.pdf` (12 linhas).
- `funcionalidades.pdf` (prints e explicações, 2 páginas).

Não basta enviar somente o ZIP: a disciplina exige os links de GitHub e vídeo.
