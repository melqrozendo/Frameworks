<template>
    <h1>Marca: {{ marca }}</h1>
</template>

<script>
export default{
    name: 'LifeCycle',
    data() {
        return{
            marca: 'Ainda não comprei'
        }
    },
    //definir o hooks (criando eventos)
    //evento de criação de um elemento(componente) no DOM com delay de 1seg
    created() {
        setTimeout(() => {
            this.marca = 'Ford'
            console.log('O componente foi criado')
        }, 1000);
    },
    //evento de montar um elemento(componente) no DOM com delay de 2seg
    mounted(){
        setTimeout(() => {
            this.marca = 'Renault'
            console.log('O componente foi montado')
        }, 2000);
    },
    //evento de atualizar um elmento(componente) no DOM 
    updated(){
        setTimeout(() => {
            this.marca = 'Ferrari'
            console.log('O componente foi atualizado')
        }, 2000);
    },
    //evento de destruir um elemento(componente) do DOM
    destroyed(){
        setTimeout(() => {
            this.marca = 'Chevrolet'
            console.log('O componente foi destruido');
        }, 1000);
    }
}
</script>
