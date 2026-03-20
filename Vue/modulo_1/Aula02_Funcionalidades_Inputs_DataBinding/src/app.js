/*Vamos criar uma nova instancia de Vue */
const MyNameapp = {
    //criando objeto na instancia do Vue
    data(){
        return{
            //criando proriedade do objeto data()
            name: " ",
            input_name: " "
        }
    },//final do objeto data(), vamos criar um metodo (que é uma prorpiedade)
    methods: {
        //vamos resgatar o evento no html
        submitForm(e) {
            //vamos fazer uma ação com o evento, não permitindo que o formulario seja enviado para o servidor
            e.preventDefault();
            //verificando se ao clicar o dado nao vai pro servidor
            //console.log("Enviado!");
            //tranfesrir o input_name para name (ou para a aplicação)
            //console.log(this.input_name);
            //associar a propriedade que esta sendo submetida com a que vai receber
            this.name = this.input_name;
        }
    }
}
/*
*vamos ter que criar um app para o elemento principal no Html
*vamos instanciar uma classe do Vue que vai criar o APP 'Mypp', que vai ser montando no elemento principal
*/
Vue.createApp(MyNameapp).mount('#app');

/*********************************************/
var cont = 0;
const app1 = {
    data(){
        return{
            name1: "",
            age1: " ",
            input_name1: " ",
            input_age1: " ",  
        }
    },
    methods: {
        submitForm1(e){
            e.preventDefault();

            console.log(typeof(this.input_name1));//string
            this.name1 = this.input_name1;

            console.log(typeof(this.input_age1));//number
            this.age1 = this.input_age1;

            //contador de entrada de dados do usuario
            cont++;
            console.log(cont);
            if(cont >= 5){
                console.log("Banco de dados preenchido!");
                
            }

        }
    }
}

Vue.createApp(app1).mount('#app1');