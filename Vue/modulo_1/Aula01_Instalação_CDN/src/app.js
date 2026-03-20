/*Vamos criar uma nova instancia de Vue */
const MyNameApp = {
    /*
    *criando um objeto na instancia do Vue com propriedades chamada 'data'
    *esse objeto vai retornar dados para o front-end da aplicação
    */
    data(){
        return{
            /*
            *a prorpiedade 'name' tem que estar disponivel na pagina do html
            *vamos dinamicamente exportar um dado
            */
            name: "Melquisedeque",
            age: 24
        }
    }
}

/*
*vamos ter que criar um app para o elemento principal no Html
*vamos instanciar uma classe do Vue que vai criar o APP 'MyNameApp', que vai ser montando no elemento principal
*/
Vue.createApp(MyNameApp).mount("#app");

/************************************************/
const app1 = {
    data(){
        return{
            nameMon: "Joana",
            ageMon: 54
        }
    }
}
Vue.createApp(app1).mount("#app1");

/************************************************/
const app2 = {
    data(){
        return{
            nameDad: "Rozendo",
            ageDad: 53
        }
    }
}
Vue.createApp(app2).mount('#app2');

/************************************************/
const app3 = {
    data(){
        return{
            nameSister: "Melquisia",
            ageSister: 26
        }
    }
}
Vue.createApp(app3).mount('#app3');
