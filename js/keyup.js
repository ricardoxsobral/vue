var app = new Vue({
    el: '#app',
    data: {
        text: '',
        array: []
    },
    methods: {
        alterName(){
            this.array.push(this.text);
            this.text = '';
        },
        alerta(event) {
            element = event.target;
            if(element.style.background == 'white')
                event.target.style = "background: red";
            else
                event.target.style = "background: white";  
        }
    },
});