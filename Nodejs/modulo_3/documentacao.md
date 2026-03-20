NODEJS
Definição: É um interpretador JavaScript que não depende do navegador, ou seja, ele é totalmente desvinculado do navegador
Obs: Como nodejs é possivel criar programas javascript fora dos navegadores

Bases do nodejs:
V8: motor criado pelo google para interpretar o javascript
LibUV: biblioteca que deu caracteristicas de linguagem backend para o node


1-Modulos: divisao de arquivos no nodejs, por meio dos metodos
module.exports e do require

2-Protocolo HTTP: como fazer requisições e como servi o nodeJs
Para criar aplicaçoes web é necessario aplicar protocolo http nativo do node que é limitado,
assim temo que utilizar o framework (ferramenta para web) express
### npm install express --save

Obs: uso do NPM (maior repositorio de pacotes do mundo);

Função de Callback: é uma função que é executada sempre que um evento ocorre;

Ao criar um servidor com express e rodar o servidor ao abria a pagina web é possivel ver a msg: Cannot GET /
essa msg é exibido por que nenhuma rota foi definida.

3-Rota: caminho para usa aplicação, podemos definir rota principais

Obs: Express é uma ferramenta baseada em rotas

4-Parametros: rotas dinamicas sao criadas a partir de paramentros;

Obs: req: resposavel por receber dados de sua aplicacao;
Obs: res.send: o paramentro res e a funcao send só pode ser enviado uma vez;

5-Nodemon: reiniciar o servidor automaticamente
### npm install nodemon -g
usando no app.js:
### nodemon app.js

6-Como exibir arquivos HTML nas rotas?
__dirname: retorna o caminho padrao da aplicacao;

7-MySQL: Sistema de gerenciamento de banco de dados (armazenamento de dados)
utilizado para aplicacoes backend
Instalacao: MySQL comunnity edition
https://youtu.be/HmmYkLyVy-c?si=WT10lIb3DMBDyXU_

