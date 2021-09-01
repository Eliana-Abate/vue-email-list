Vue.config.devtools = true;

console.log ('collegato', Vue);

const app = new Vue({
    el: '#root',
    data: {
      email: '',
    },
    methods: {},
    created() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          const response = res.data.response;
          console.log(response);
          this.email = response;
        })
        
    },
  });