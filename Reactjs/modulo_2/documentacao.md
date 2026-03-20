ReactJs: 
### https://react.dev/learn/creating-a-react-app
-Uma bibliteca JS (ou frameworks) para criação de interfaces;
-Utilizado para construir SPAs (Single Page Application);
-Baseado em componentes (ou seja, relacionado a arquitetura);
-Utiliza o JSX para renderizar HTML;
-E aplica o Virtual DOM para realizar as alterações de DOM;
-Podemos adicionar a um projeto ou criar um projeto com ele;

1-Como instalar o React?
-instalar node e np no pc
-comandos:
### npx create-react-app <projeto01>
### cd <projeto01>
### npm start
Obs: comando de execução do script

2-O que é JSX?
-O JSX é como um html, porem dentro do codigo js
-é a principal maneira de escrever html com react
-podemos interpolar variaveis, inserindo ela entre {}
-é possivel tambem executar funções e JSX;
-Inserir valores em atributos de tags tambem é valido em JSX;

3-Componentes
-dividir a aplicação em partes
-os componentes renderizam JSX, assim como o App.js(queé um componente);
-Precisamos criar um arquivo de componentes
-E importa-lo onde precisamos utilizar (import/exports)
-Normalmente ficam em uma pasta chamada components;

Obs: componentes são funçoes exportadas para o arquivos principal
Obs: que no react fazemos o encapsulamente de JSX

4-Props
-As props são valores passados para componentes
-podemos deixar os componentes dinamicos atraves das porps
-o valor é passado como atributo na chamada do componente

5-Adicionando CSS
-o css pode ser adicionado de forma global na aplicação, por meio do arquivo index.css
-porem é possivel estilizar a nível de componentes
-utilizamos o css modules para isso -> criando um arquivo: Componente.module.css

6-Fragmentos
-Os react fragments permite a criação de um component sem elemento pai;
-tem o proposito de descomplicar os nós do DOM
-Sua sintaxe é <></>, não há um nome para a tag
-é criada no próprio JSX

7-Props
-podemos definir tipos para as props, realizando uma especie de validação
-definimos em um objeto chamado propTypes no próprio componente
-e ainda há a possibilidade de definir um valor padrão
-neste caso utilizamos o objeto defaultProps

Obs:Antes do lançamento do React 15.5.0, os PropTypes estavam disponíveis no pacote React, mas agora temos que adicionar a biblioteca prop-types em nosso projeto.

Podemos fazer isso executando o seguinte comando em nosso terminal:
### npm install prop-types --save

8-Eventos
-os eventos de react são os mesmos eventos do DOM;
-ou seja, temos eventos para responder a um click
-o evento é atrelado a uma tag que irá executa-lo
-geralmente um método é atribuido ao evento
-este método deve ser criado no componente

9-useState
-o usestate é um hook do react
-como ele conseguimos manusear o estado de um componente de forma simples
-este hook funciona muito bem com eventos
-podemos atrelar um evento a mudança de state
### import { useState } from "react";

10-Métodos por props
-os metodos tbm podem ser passados por props;
-ou seja, um componente filho pode ativar o método do seu pai;
-vamos acessar o método por meio de um evento;
-a sintaxe é a mesma de uma props de dados: 
### props.meuEvento;

11-Renderização por condição
-podemos atrelar a exibição de algum elemento a um if
-Esta ação é chamada de renderização condicional
-Envolvemos as tags em chaves {}
-Como as chaves executam JavaScript, criamos nossa condição
-É possivel usar o state para criar as condições




