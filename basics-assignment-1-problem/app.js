const app = Vue.createApp({
  data() {
    return {
      name: "Allie",
      age: 25,
      image: "https://unsplash.com/photos/_bLKmoqrJIA",
    };
  },
  methods: {
    outputRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
