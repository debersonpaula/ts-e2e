#language: pt

@login
Funcionalidade:  Prencher o nome
Como usuário da página de teste
Eu deveria preencher o nome
Para visualizar o meu no escrito

Contexto:
Dado que estou na tela "http://localhost:8080/"

Cenário:  Sucesso
Quando um usuário digita "John"
E o botão é clicado
Então a página principal deve ser apresentada com o nome "John"
