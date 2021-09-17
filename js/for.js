var app = new Vue({
    el: '#app',
    data: {
        frutas: {
            Maçã: "3,80",
            Pera: "2,95",
            Banana: "2,45"
        },
        fruta: [{nome: 'Pera' , preco: '2,95'},
                {nome: 'Banana' , preco: '2,45'},
                {nome: 'Maçã', preco: '3,80'} ]
    }
})