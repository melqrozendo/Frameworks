/*Criando um evento de envio de msg pelo terminal sempre que a pagina é atualizada */
const http = require('http');
//chamada do modulo events
const eventos = require('events');
//criando e instanciando um novo objeto para o metodo EventEmitter do modulo eventos
const EventoEmissor = new eventos.EventEmitter();

//criando eventos:
const inicial = () => {
    console.log('Teste iniciado!');
}
const final = () => {
    console.log('Teste finalizado!');
}

EventoEmissor.on('msgIntro', inicial);
EventoEmissor.on('msgFinal', final);

//criando servidor:
const porta = process.env.PORT || 3000;
const retorno = () => {
    console.log('Servidor Ativado..');
};
const servidor = http.createServer((req, res) => {
    EventoEmissor.emit('msgIntro');

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Testando Eventos em Nodejs');

    EventoEmissor.emit('msgFinal');

    res.end();
})
servidor.listen(porta, retorno);