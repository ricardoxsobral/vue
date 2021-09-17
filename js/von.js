var app = new Vue({
    el: '#app',
    data: {
        text: 'Clique para enviar',
        
    },
    methods: {
        enviar(){
            alert('Enviado!');
        },
    }
});