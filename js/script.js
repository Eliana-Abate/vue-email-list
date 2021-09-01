Vue.config.devtools = true;

console.log ('collegato', Vue);

const app = new Vue({
    el: '#root',
    data: {
        email: '',
        list: [],
    },

    methods: {
       printList(item, array) {
           for (let i = 0; i < 10; i++) {
               item = array[i];
               array.push(item);
           }
        return item;
    },

    
       
    },
    created() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          const response = res.data.response;
          console.log(response);
          this.email = response;
          this.printList(response, this.list);
        })
        
    },
  });