Vue.config.devtools = true;

console.log ('collegato', Vue);

const app = new Vue({
    el: '#root',
    data: {
        
        lunghezza: 0,
        list: [],
    },

    methods: {
    
    },


    created() {

        for (let i = 0; i < 10; i++) {
            axios 
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.lunghezza++;
                const response = res.data.response;
                console.log(response);
                this.list.push(response);
            })
        }  
    },
    
  });