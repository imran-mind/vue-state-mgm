<template>
    <div class="login">
        <h1>Please Login</h1>
        <hr>
        <form>
            <input
                type="text"
                placeholder="Username"
                v-model="username"/>
                <br><br>
            <input
                type="password"
                placeholder="Password"
                v-model="password"/>
                <br><br>
            <button @click="doLogin">Login</button>
            <br>
            Don't have an account
            <a href @click="redirectToSignup">Sign Up</a>
        </form>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: "Login",
    data(){
        return{
            username: '',
            password: ''
        }
    },
    computed:{
        ...mapState([
        ])
    },
    methods:{
        ...mapActions([
            'loginAction'
        ]),
        doLogin(e){
            e.preventDefault();
           const payload ={
               username: this.username,
               password: this.password
           };
           this.loginAction(payload);
           this.username = '';
           this.password = '';
           this.$router.push('/todos')
        },
        redirectToSignup(e){
            e.preventDefault();
            this.$router.push('/signup');
        }
    }
}
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
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }
  .login {
      padding: 10%
  }
</style>

