# Verificação realizada

## Adaptação ao Figma

A estrutura foi adaptada às imagens fornecidas: cartão de login sobreposto ao cabeçalho, estados de validação, abas superiores, grade de produtos, detalhes e navegação inferior com Configurações. O nome Se vista e a cor preta seguem a personalização solicitada; a referência original usa azul. O botão de adicionar foi omitido conforme o enunciado.

## Testes desta atualização

A revisão foi executada em Chromium na versão web, reproduzindo respostas capturadas da API real DummyJSON. As imagens vieram do CDN da API. Essa reprodução pertence somente ao teste; o aplicativo continua consultando os endpoints reais via Axios.

- Campos vazios e login com dados inválidos exibem mensagens.
- Mostrar e ocultar senha funciona.
- Login válido abre o catálogo masculino.
- As abas exibem produtos masculinos e femininos.
- Falha de consulta apresenta erro e permite tentar novamente.
- Detalhes são consultados pelo ID e exibem imagem, descrição, preço e desconto.
- Voltar e navegar por Configurações preserva a categoria selecionada.
- Configurações mostra o e-mail da sessão.
- Logout limpa a sessão e impede retornar ao catálogo pelo histórico.
- Layout conferido nas larguras 320, 390 e 1024.
- Não foram registradas exceções JavaScript no fluxo final.
- Cálculo e formatação de desconto verificados, inclusive desconto zero e de 100%.
- Exportações web, Android e iOS concluídas.
- PDF de funcionalidades renderizado e revisado visualmente: duas páginas.

Os preços são apresentados em reais por convenção didática, sem conversão cambial. O desconto é aplicado uma vez sobre o preço-base retornado pela API.

## Limites

Esta atualização visual ainda precisa ser conferida no celular. Gerar os bundles nativos não substitui executar o app no dispositivo. Antes da entrega, conferir teclado, áreas seguras, rolagem, voltar e acesso à API usando Expo Go. Estado vazio e imagem indisponível estão implementados, mas não foram exercitados nesta revisão.
