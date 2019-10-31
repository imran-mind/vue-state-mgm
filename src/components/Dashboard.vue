<template>
  <div class="container-fluid">
      <b-button variant="success" @click="goToAddStudent">Add Student</b-button>
    <StudentList/>
  </div>
</template>

<script>
import StudentList from '@/components/StudentList.vue'
export default {
  name: "Dashboard",
  methods:{
      goToAddStudent(){
          this.$router.push('/addStudent');
      }
  },
  components:{
      StudentList
  }
};
</script>

<style scoped>
</style>


