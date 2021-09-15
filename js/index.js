var app = new Vue({
    el: '#app',
    data: {
        msg: 'Olá Mundo!',
        vdd: false,
        materiais: ['tesoura', 'faca', 'cola'],
        aluno: { nome: 'Ricardo', idade: '17' },
        num1: 30
    },
    methods: {
        metodo(indice) {
            return 'Materiais: ' + this.materiais[indice]
        }
    },
});