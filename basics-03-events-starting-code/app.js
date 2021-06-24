const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return this.name;
      }
      return this.name + " " + "Caton";
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    getName(e) {
      this.name = e.target.value + " " + "Caton";
    },
    reset() {
      this.name = "";
    },
  },
});

app.mount("#events");
