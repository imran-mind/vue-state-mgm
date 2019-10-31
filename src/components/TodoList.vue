<template>
  <div class="hello">
    <div class="left">
      <a @click="goToLogin">Logout</a>
      <!-- <h1>{{title}}</h1> -->
      <!-- Welcome to <span style="color:green">{{userInfo.name}}</span> -->
      <form @submit.prevent="addLink">
        <input class="link-input" type="text" placeholder="Add a Todo" v-model="newLink"/>
      </form>
      <ul>
        <li v-for="(link,index) in links" v-bind:key="index">
          {{link}}
        <button v-on:click="removeLinks(index)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <stats/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Stats from '@/components/Stats.vue';
export default {
  name: "TodoList",
  data (){
    // return {
    //   newLink: ''
    // }
    
  },
  components:{
    Stats
  },
  computed: {
    ...mapState({
      title: state => state.todoModule.title,
      links: state => state.todoModule.links,
      newLink: state => state.todoModule.newLink,
      userInfo: state => state.userModule.userInfo
    })

    // result () {
    //   return this.$store.getters['state/todoModule/title']
    // }
    // ...mapState(['state.todoModule.title'])
  },
  methods:{
    ...mapActions([
      'removeLink',
      'addLinks'
    ]),
    addLink : function(){
      const payload ={
        title: this.newLink,
        isCompleted: false
      }
      this.addLinks(payload);
      this.newLink = '';
    },
    removeLinks: function(index){
      this.removeLink(index);
    },
    goToLogin: function(){
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }
  

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

   input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

</style>