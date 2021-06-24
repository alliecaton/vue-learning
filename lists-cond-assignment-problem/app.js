const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      listState: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.listState ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    showList() {
      this.listState = !this.listState;
    },
  },
});

app.mount("#assignment");
