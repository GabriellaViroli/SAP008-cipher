# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Protótipo inicial](#3-prototipo-inicial)
* [4. Considerações gerais](#4-considerações-gerais)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Projeto criado durante o Bootcamp da Laboratória. Neste projeto você
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_). 
A temática escolhida foi: Bruxas de Salém. As bruxas de Salém podem cifrar
mensagens para que não sejam  pegas pela inquisição utilizando esta aplicação web. 
A aplicação irá interagir com o usuário final através do navegador 
utilizando HTML, CSS e JavasCript como ferramentas. A interface permite 
que o usuário: 

* Eleja um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Insira uma mensagem (texto) para ser cifrada.
* Veja o resultado da mensagem cifrada.
* Insira uma mensagem (texto) para ser decifrada.
* Veja o resultado da mensagem decifrada.

Nesse projeto não foi permitido usar bibliotecas ou frameworks, só vanilla 
JavaScript. Por conta disso a lógica do projeto foi implementada inteiramente
em JavaScript. 

<details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

## 3. Prototipo do projeto 

Através [desse link] (https://www.figma.com/file/824wTB3IrJbnaCWNVHMemR/Projeto-1-Laborat%C3%B3ria%3A-Caesar-Cipher?node-id=0%3A1) você pode acessar o protótipo de baixa fidelidade 
deste projeto, desenvolvido através da ferramenta Figma. Durante o percurso do projeto, tomei a decisão de simplificar o design pois ainda não tinha neste momento o conhecimento de HTML e CSS nivelado com o protótipo que havia feito inicialmente. Para entregar a tempo, acabei modificando algumas coisas e priorizando a parte do JavasCript e suas funcionalidades.

### Scripts / Arquivos

* `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.


### Deploy

Disponibilizar os projetos e colocá-los "no ar" vai ser parte cotidiana do
ciclo de desenvolvimento em produtos de tecnologia.

Para este projeto, utilizaremos o Github Pages para essa finalidade.
O comando `npm run deploy` pode te auxiliar nessa tarefa e você pode também
consultar a [documentação oficial](https://docs.github.com/pt/pages).

## 7. Considerações técnicas

A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse
projeto **NÃO** está permitido usar bibliotecas ou frameworks, só vanilla
JavaScript.

Os testes unitários devem cobrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ inclui testes de exemplo, como ponto de partida.

Para começar esse projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida assim
como toda a configuração de dependências e testes de exemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomendações padrão tanto para o
`eslint` quanto `htmlhint`.

***



Ferramentas:

* [Terminal](https://www.loom.com/share/29a6cf0f3c5245bf995738284b706468)
* [Git config](https://www.loom.com/share/c7d445872b9f4618a24605fdcb26a48d)
* GitHub e GitHub Pages.


