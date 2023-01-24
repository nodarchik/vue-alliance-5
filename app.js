const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isVisible: true,
      button:"Hide"
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
      this.button = this.isVisible ? "Hide" : "Show"
    },
  },
});
app.mount("#assignment");
