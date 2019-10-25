<template>

  <!-- Dentro do template só pode ter um elemento filho, que neste caso é o 
  div#app. Caso seja necessário ter mais de um elemento dentro de template, 
  eles devem ser envolvidos por outro elemento permanecendo assim somente um 
  elemento filho dentro de template. -->
  <div id="app">

    <nav>
      <ul>    
        <li v-for="route in routes" :key="route ">
          <router-link :to="route.path ? route.path : '/'">
            {{route.titulo}}
          </router-link>
        </li>   
      </ul>
    </nav>

    <router-view></router-view>
    
  </div>
</template>

<script>
  import { routes }  from './routes';
  export default {

    data() {
      return {
        routes
      }
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
</style>
