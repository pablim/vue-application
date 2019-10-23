<template>

  <!-- Dentro do template só pode ter um elemento filho, que neste caso é o 
  div#app. Caso seja necessário ter mais de um elemento dentro de template, 
  eles devem ser envolvidos por outro elemento permanecendo assim somente um 
  elemento filho dentro de template. -->
  <div id="app">

    <h1>my applications VUE {{ msg }}</h1>
    <h3>{{ meuResult[0] }}</h3>

    <!-- v-on:input a cada entrada do usuário a variável valorInput definida na 
    função data é preenchida com o valor do input -->
    <input :value="meuResult[1]" /> <br>
    <input v-on:input="valorInput = $event.target.value"/><br>
    {{ valorInput }}

    <br><br>
    <div v-for="result of meuResult">  
      {{ result }} <br>
    </div>

    <meu-componente :titulo="meuResult[2]">
      <h4>aqui é um slot</h4>
    </meu-componente>
  </div>
</template>

<script>
import MeuComponente from './components/shared/meucomponente/MeuComponente.vue'

export default {

  // Define uma tag para o componente poder ser utilizado
  components: {
    'meu-componente': MeuComponente
  },

  name: 'app',
  data () {
    return {
      msg: 'eu aqui!!!',
      meuResult: [],
      valorInput: ''
    }
  }, 


  // ciclos de vida do componente https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
  // Função executada quando o componente é criado
  created() {
    alert('fui criado')

    /**
     * Como ativamos o módulo VueResource no global view object, todo 
     * componente terá acesso ao objeto $http através de this. É este o objeto 
     * responsável pela realização de requisições ajax que permitem o consumo 
     * de API's. 
    */
    let promise = this.$http.get('http://localhost/teste-vue/api.php')

    promise
      .then(res => res.json())
      .then(result => this.meuResult = result, err => console.log(err) );

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
