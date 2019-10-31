import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import TodoList from "./views/Todo-view.vue";
import Signup from "@/components/SignupComp";
import Dashboard from "@/components/Dashboard";
import AddStudent from "@/components/AddStudent";
import EditStudent from "@/components/EditStudent";
import ShowStudent from "@/components/ShowStudent";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/todos",
      name: "TodoList",
      component: TodoList
    },
    {
      path: "/addStudent",
      name: "AddStudent",
      component: AddStudent,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard
    },
    {
      path: "/showDetails/:id",
      component: ShowStudent
    },
    {
      path: "/editStudent/:id",
      component: EditStudent
    }
  ]
});