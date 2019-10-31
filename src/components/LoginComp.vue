<template>
  <div class="login">
    <h1>Please Login</h1>
    <hr>
    <form>
      <div v-if="isValidLoginData" style="color:red">Username or Password is incorrect</div>
      <br>
      <input type="text" placeholder="Username" v-model="username">
      <br>
      <br>
      <input type="password" placeholder="Password" v-model="password">
      <br>
      <br>
      <button @click="doLogin">Login</button>
      <br>Don't have an account
      <a href @click="redirectToSignup">Sign Up</a>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { userLogin } from "../api/user";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isValidLoginData: false,
      isServerError: false
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.userModule.userInfo
    })
  },
  methods: {
    ...mapActions(["loginAction"]),
    async doLogin(e) {
      e.preventDefault();
      const payload = {
        email: this.username,
        password: this.password
      };
      if (this.isValidCreds(payload)) {
        let userInfo = await userLogin(payload);
        console.log("----", userInfo);
        if (userInfo.status === 200) {
          await this.loginAction(userInfo.data.data);
          this.username = "";
          this.password = "";
          this.$router.push("/todos");
        } else if (userInfo.status == 400) {
          this.isValidLoginData = true;
        } else {
          this.isServerError = true;
          this.isValidLoginData = true;
        }
      } else {
        this.isValidLoginData = true;
      }
    },
    redirectToSignup(e) {
      e.preventDefault();
      this.$router.push("/signup");
    },
    isValidCreds(data) {
      if (data && data.email !== "" && data.password !== "") {
        return true;
      }
      return false;
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

