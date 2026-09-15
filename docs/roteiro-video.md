# Roteiro para a apresentação

Duração sugerida: de 3 a 4 minutos. Use os trechos abaixo como apoio e explique com suas palavras. Na parte dos desafios, comente o que você entendeu e verificou ao testar o projeto.

## 1. Apresentação - até 20 segundos

“Olá, meu nome é Mikael Douglas. Vou apresentar o trabalho de Mobile Development, que é o Se vista, um catálogo de produtos feito com React Native e Expo. Ele consulta a API DummyJSON e organiza os produtos em categorias masculinas e femininas.”

Mostre a tela inicial do aplicativo.

## 2. Login - cerca de 35 segundos

“Essa é a tela de login. Se os campos estiverem vazios ou o e-mail estiver incorreto, o aplicativo mostra uma mensagem. A senha precisa ter pelo menos seis caracteres. Como o login é simulado, não é necessário criar uma conta. Os dados ficam temporariamente em memória, usando Redux Toolkit.”

Tente entrar com os campos vazios. Depois preencha o campo Usuário com `aluno@exemplo.com` e a senha com `123456`.

## 3. Listagem - cerca de 45 segundos

“Depois do login, aparece a listagem. A aba masculina tem camisas, calçados e relógios. A feminina tem bolsas, vestidos, joias, calçados e relógios. Os dados são consultados na API usando Axios. As categorias ficam no topo, e a barra inferior dá acesso ao início e às configurações.”

Mostre as duas abas e percorra alguns produtos.

## 4. Detalhes - cerca de 35 segundos

“Ao clicar em um produto, o aplicativo passa o ID para a tela de detalhes. Essa tela faz uma nova consulta para mostrar o nome, a descrição, a imagem, o preço e o desconto. Pelo botão Voltar, é possível retornar à listagem.”

Abra um produto, mostre as informações e volte.

## 5. Desafios e organização - cerca de 50 segundos

Explique como o projeto trata a dependência da internet: carregamento, mensagem de erro, limite de tempo e botão para tentar novamente. Mostre a recuperação após uma falha se conseguir ensaiar essa parte sem ultrapassar os quatro minutos.

Comente a separação do código: telas em `src/screens`, componentes em `src/components`, consultas em `src/services` e login em `src/store`. Você pode mostrar brevemente essas pastas.

Não precisa decorar uma dificuldade que não teve. Após testar, escolha um ponto que você consiga explicar, como juntar as categorias de uma aba ou passar o ID entre as telas.

## 6. Logout e encerramento - cerca de 25 segundos

“Por fim, em Configurações, o botão Sair da conta limpa os dados da sessão e retorna à tela de login. Esse foi o fluxo do aplicativo. O repositório contém o código, as instruções de execução e os prints das telas.”

Mostre o logout. Antes de enviar, confira se o vídeo tem até quatro minutos e se o link pode ser aberto pelo professor.
