const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
      const input = (document.getElementById("#input").value = "");
      input.value = "";
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount("#user-goals");
