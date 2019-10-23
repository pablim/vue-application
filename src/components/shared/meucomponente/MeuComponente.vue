<template>
    <div>
        <h1>{{ titulo }}</h1>
        <slot>
        </slot>
    </div>
</template>

<script>
export default {

    // propriedades que podem ser passadas ao componente
    props: ['titulo']
}
</script>


<style scoped>
    /** 
        <style scoped> garante que o estilo será aplicado somente para este 
        componente
    */

    div {
        background-color:aquamarine
    }
</style>
