<template>
  <div>
    <b-button @click="goToDashoard" variant="primary">Dashboard</b-button>
    <b-card class="mt-5" header="Student Details">
      <pre class="m-0"> Name : {{ studentInformation.name }}</pre>
      <pre class="m-0"> Email : {{ studentInformation.email }}</pre>
      <pre class="m-0"> Mobile : {{ studentInformation.mobile }}</pre>
      <pre class="m-0"> Gender : {{ studentInformation.gender }}</pre>
      <pre class="m-0"> Joining Date : 12 May 2019</pre>
      <pre class="m-0"> Fees Paid : {{ studentInformation.feesPaid }}</pre>
      <pre class="m-0"> Fee Due : {{ studentInformation.feesDue }}</pre>
      <pre class="m-0"> Email : {{ studentInformation.email }}</pre>
      <img :src="getImage()" /> 
    </b-card>
  </div>
</template>

<script>
import { fetchStudentById } from "../api/student";
import { mapActions, mapState } from "vuex";
export default {
  name: "ShowStudent",
  methods: {
    ...mapActions(["fetchStudentById"]),
    goToDashoard(){
        this.$router.push('/dashboard');
    },
    getImage(){
        return this.studentInformation.imageUrl.secure_url;
        // return "https://res.cloudinary.com/dd0qluwmo/image/upload/v1558635432/isfoj94wfqhbsosc0kr8.png";
    }
  },
  computed: {
    ...mapState({
      studentInformation: state => state.studentModule.studentDetail
    })
  },
  async created() {
    const studentInfo = await fetchStudentById(this.$route.params.id);
    if (studentInfo.data.status === 200) {
      console.log("---> ", studentInfo.data.data);
      const data = {
        payload: studentInfo.data.data,
        type: 'SHOW'
      }
      this.fetchStudentById(data);
    }
  }
};
</script>

