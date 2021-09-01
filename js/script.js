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
            this.lunghezza++;
            axios 
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
            const response = res.data.response;
            console.log(response);
            this.list.push(response);
            })
        }  
    },
    
  });