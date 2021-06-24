const app = Vue.createApp({
  data() {
    return {
      number: 0,
      message: "not enough!",
    };
  },
  methods: {
    add(num) {
      this.number = this.number + num;
    },
  },
  computed: {
    displayMessage() {
      if (this.number === 37) {
        return this.number;
      } else if (this.number < 37) {
        return this.message;
      } else {
        this.message = "too much!";
        return this.message;
      }
    },
  },
});

app.mount("#assignment");
