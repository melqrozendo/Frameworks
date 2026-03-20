<!--definir onde o html deve fica: no Template-->
<!--os componentes do vue so podem ter um elemento assim podemos envolver eles em uma div-->
<template>
    <div>
        <h1>Olá, Vuejs!</h1>
        <second-components/>
        <h3>Dados pessoais do programador</h3>
        <p>Nome: {{ name }}</p>
        <p>Profissão: {{ ocupation }}</p>
        <p>Idade: {{ age }}</p>
    </div>
</template>

<!--e novamente vamos exportar o conteudo do template-->
<script>
    import secondComponents from './secondComponents.vue'
    //exportando o conteudo do arq 'firstComponents'
    export default {
        name: 'firstComponents',
        components: {
            secondComponents
        },
        //adicionar uma função data que possui um return
        data(){
            return {
                name: 'Melquisedeque',
                ocupation: 'Software Engineer',
                age: 24
            }
        }
    }
</script>
