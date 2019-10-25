<template>

  <!-- Dentro do template só pode ter um elemento filho, que neste caso é o 
  div#app. Caso seja necessário ter mais de um elemento dentro de template, 
  eles devem ser envolvidos por outro elemento permanecendo assim somente um 
  elemento filho dentro de template. -->
  <div id="my_home">

    <h1>my applications VUE {{ msg }}</h1>
    <h3>{{ meuResult[0] }}</h3>

    <!-- v-on:input a cada entrada do usuário a variável valorInput definida na 
    função data é preenchida com o valor do input -->
    <input :value="meuResult[1]" /> <br>

    <input v-on:input="valorInput = $event.target.value"/><br>

    <!-- No caso de eventos pode ser utilizado o @ para substituir o v-on: -->
    <!--<input @input="filtrar"/><br>-->

    <!-- v-show="false" não exibe o elemento. No caso de um slot o v-show deve 
    ser aplicado a um elemento pai que envolve o slot para funcionar -->
    <input type="text" value="meu input" v-show="false"/><br>

    {{ valorInput }}

    <br><br>
    <div v-for="result of meuResult" :key="result">  
      {{ result }} <br>
    </div>

    <meu-componente :titulo="meuResult[2]">
      <h4>aqui é um slot</h4>
    </meu-componente>


    <!-- O componente transition cria animações. Obrigatoriamente precisamos 
    escolher um name para ele. E só é permitido um elemento filho. Semelhante 
    a tag template. O componente transition adiciona dinamicamente nos seus 
    elementos filhos as seguintes classes dinamicamente:
    painel-fade-enter // antes do elemento ser incluído ou removido, o estado atual
    painel-fade-enter-active // quando o elemento esta sendo incluído
    painel-fade-leave-active // quando o elemento esta sendo removido
    -->
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">Testar transition</h2>
    <transition name="painel-fade" v-show="visivel">
      <div class="painel-conteudo" >
        <h1>Aqui tem transition</h1>
      </div>
    </transition>
    
  </div>
</template>

<script>
import MeuComponente from '../shared/meucomponente/MeuComponente.vue'

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
      valorInput: '',
      visivel: true
    }
  }, 

  /**
   * funções computed's (computed properties) podem ser chamadas como 
   * propriedades na view
   */
  computed: {

    filtrar() {
      
        console.log('teste')
      
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
    let promise = this.$http.get('http://localhost/vue-application/api.php')

    promise
      .then(res => res.json())
      .then(result => this.meuResult = result, err => console.log(err) );

  }
}
</script>

<style>

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

.painel-titulo {
  border: 1px solid;
  cursor: pointer;
}

.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0
}

.painel-fade-enter-active, .painel-fade-leave-active {
  transition: opacity .4s
}
</style>
