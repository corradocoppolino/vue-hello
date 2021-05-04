const app = new Vue({

    el: "#app",
    data:{

        messaggio: "Ciao mondo",
        url: "burger-top.png",
        miaClasse: ''

    },
    methods:{

        cambiaClasse(classe){
            this.miaClasse = classe;
            console.log(classe);
        }

    }

})