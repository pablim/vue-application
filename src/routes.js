import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    // Espaço vazio equivale a localhost:3000/#/
    { path: '', component: Home },
    { path: '/cadastro', component: Cadastro }
]