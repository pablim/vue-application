<template>
    <div id="">
        <h1>Cadastro:</h1>
       
        <label for="nome">Nome:</label>
        <!-- v-on:input a cada entrada do usuário a variável valorInput definida na 
        função data é preenchida com o valor do input -->
        <input   /> <br>

        <!-- v-show="false" não exibe o elemento. No caso de um slot o v-show deve 
        ser aplicado a um elemento pai que envolve o slot para funcionar -->
        <label for="email">E-mail:</label>
        <input /> <br>

        <label>Cor:</label>
        <!-- <input v-meu-transform /> -->
        <input />

        <!-- No caso de eventos pode ser utilizado o @ para substituir o v-on: -->
        <!--<input @input="filtrar"/><br>-->

        <input type="text" value="meu input" v-show="false" /><br>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style>
</style>