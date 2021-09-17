var Transformers = Vue.component('transformers', {
    template: '#transformers',
    props:{
        sidebar: String, 
    },
    data() {
        return {
            transformers: [
                { name: 'Optmus Prime', slug:'optimus_prime'},
                { name: 'Bumble Bee', slug:'bumble-bee'},
                { name: 'Megatron', slug:'megatron'},
                
            ]
        }
    }
});

var GameOfThrones = Vue.component('game-of-thrones', {
    template: '#gameOfThrones',
    data() {
        return {
            gameOfThrones: [
                { name: 'Jon Snow'},
                { name: 'Daenerys Targaryen'},
                { name: 'Tyron'}
            ]
        }
    }
});

var TransFormerscontent = Vue.component('transformers-content', {
    template: '#transformersContent',
});

var error404 = Vue.component('error404', {
    template: '#error404'
});

var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/rota.html', name: 'home', redirect: {name: 'transformerscontent', params:{name: 'megatron '}} },
        { path: '/transformers', name:'transformers', component: Transformers,
          props:{ sidebar: 'dark' },  
          children:[
            {path: ':name', name:'transformerscontent', component: TransFormerscontent },
          ]  
    },
        { path: '/game-of-thrones' , name:'game', component: GameOfThrones },
        { path: '*', name: 'error404', component: error404}
    ]
});

var app = new Vue({
    el: '#app',
    router,
    created(){
        // this.$router.push({name: 'transformerscontent', params:{name: 'megatron '}})
    },
    data: {
        titulo: 'Vuejs',
        movie: 'transformers'
    }
});