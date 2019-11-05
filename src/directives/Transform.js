import Vue from 'vue';

/**
 * 
 * Nossa diretiva ainda não esta completa, mas quando formos utilizá-la em 
 * nossos template somos obrigados a utilizar o prefixo v-. Veja que diretivas 
 * como v-for e v-show possui o mesmo prefixo. Sendo assim, para utilizarmos 
 * nossa diretiva precisaremos fazer v-meu-transform.
 */
Vue.directive('meu-transform', {

    /** 
     * O objeto passado como segundo parâmetro precisa ter o método bind, um 
     * hook chamado toda vez que a diretiva é associada ao elemento do DOM.O 
     * método recebe três parâmetros.O nome desses três parâmetros podem ser 
     * qualquer um, no entanto vamos utilizar aqueles que deixaram claro o 
     * papel de cada um:
     * */
    bind(el, binding, vnode) {

        /**
         * Por enquanto, vamos no ater apenas ao primeiro parâmetro da diretiva, 
         * que nada mais é do que o elemento do DOM no qual a diretiva esta 
         * sendo aplicada. Vamos imprimir no console esse parâmetro
         */


       
        console.log(el);

        if (binding.value) {
            color = binding.value;
        } else {
            color = this.value;
        }

        el.addEventListener('input', function () {
            this.style.backgroundColor = `${color}`;
        });
    }

});