#language: pt

@login
Funcionalidade:  Prencher o nome
Como usuário do AngularJs
Eu deveria preencher o nome
Para visualizar a palavra Hello com o nome

Contexto:
Dado que estou na tela "https://angularjs.org/"

Cenário:  Sucesso
Quando um usuário digita "John"
Então a página principal deve ser apresentada com o nome
