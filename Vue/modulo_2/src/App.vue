<!--definir um template e adicionar um elemento para exibir na aplicação-->
<template>
  <div>
    <firstComponents/>
    <p>Operação: {{ test }}</p>
    <lifeCycle/>
  </div>
</template>
<!--temos que exportar o template com a tag 'script'-->
<script>
  //vamos importar conteudo do arq 'firstComponents.vue' porem para utilizar o conteudo do arquivo importado devemos adicionar na propriedade components:
  import firstComponents from './components/firstComponents.vue'
  import lifeCycle from './components/lifeCycle.vue'
  

  //vamos exportar o conteudo do arquivo de nome App, podemos verificar o import na main.js
  export default {
    name: 'App',
    components: {
      firstComponents,
      lifeCycle
    },
    //neste arq tbm podemos aplicar o data()
    data(){
      return {
        test: 'Testando programação!'
      }
    }

  }
  //podemos verificar o que foi adicionado no template na aplicação (ou seja, temos um projeto de Vue rodando)
</script>

