<template>
  <div class="login">
    <h1>Please Signup</h1>
    <form>
      <input type="text" placeholder="Your Name" v-model="name">
      <input type="text" placeholder="Username" v-model="username">
      <input type="text" placeholder="Password" v-model="password">
      <button @click="doSignup">Sign Up</button>
      <a href @click="goToLogin">Login</a>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      name: "",
      username: "",
      password: ""
    };
  },
  name: "Login",
  computed: {
    // ...mapState(["username", "password", "name"])
  },
  methods: {
    ...mapActions(["signupAction"]),
    goToLogin(e) {
      e.preventDefault();
      this.$router.push("/");
    },
    async doSignup (e) {
      e.preventDefault();
      const payload = {
        name: this.name,
        username: this.username,
        password: this.password
      };
      await this.signupAction(payload);
      setTimeout(()=>{
        this.$router.push('/todos')
      }, 2000);
    }
  }
};
</script>

<style scoped>
input {
  padding: 10px;
  width: 30%;
  border: none;
  box-shadow: 0 5px 5px lightgrey;
}

button {
  float: center;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
.login {
  padding: 10%;
}
</style>

