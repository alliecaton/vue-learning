const app = Vue.createApp({
  data() {
    return {
      output: "Output",
    };
  },
  methods: {
    alert() {
      alert("this is the alert");
    },
    onInput(e) {
      this.output = e.target.value;
    },
  },
});

app.mount("#assignment");
