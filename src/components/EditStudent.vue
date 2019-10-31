<template>
  <div class="container">
    <h2 align="center">{{editTitle}}</h2>
    <Loader/>
    <div id="app">
      <div>
        <video filter ref="video" id="video" width="200" height="200" autoplay>Camera</video>
      </div>
      <div>
        <b-button id="snap" v-on:click="capture()">Snap Photo</b-button>
      </div>
      <canvas ref="canvas" id="canvas" width="200" height="200"></canvas>
      <!-- <button @click="stopCamera">Stop Camera</button> -->
      <!-- <ul v-if="captures"> -->
        <!-- <li v-for="c in captures"> -->
          <!-- <div v-if="captures.length"> -->
            <img v-bind:src="studentInfo.imageUrl && studentInfo.imageUrl.secure_url" width="200" height="200">
            <b-button @click="canclePhoto">Cancle</b-button>
          <!-- <div> -->
        <!-- </li> -->
      <!-- </ul> -->
    </div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Student Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="studentInfo.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="studentInfo.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Mobile No :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="studentInfo.mobile"
          required
          placeholder="Enter Mobile No"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Gender">
        <b-form-radio-group
          id="radio-group-1"
          v-model="studentInfo.gender"
          :options="options"
          name="radio-options"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group id="input-group-3" label="Courses:" label-for="input-3">
        <b-form-select id="input-3" v-model="studentInfo.course" :options="courses" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Fees to be paid:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="studentInfo.feesPaid"
          v-on="calcLeftFees"
          required
          placeholder="Enter Fees"
        ></b-form-input>
      </b-form-group>

      <b-alert
        v-if="studentInfo.feesDue != 0"
        variant="danger"
        show
      >Fees Due : {{studentInfo.feesDue}}</b-alert>
      <b-alert v-else variant="success" show>Fees Due : {{studentInfo.feesDue}}</b-alert>

      <b-button type="submit" variant="primary">UPDATE</b-button>
      <b-button @click="updatedAndReturnToDashboard" variant="primary">UPDATE AND RETURN TO DASHBOARD</b-button>
      <b-button type="reset" @click="onCancle" variant="primary">CANCLE</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { fetchCourses, saveStudent, updatedStudent, fetchStudentById } from "../api/student";
import Loader from "@/components/Loader.vue";
import { setTimeout } from "timers";
export default {
  name: 'EditStudent',
  data() {
    return {
      video: {},
      canvas: {},
      captures: null
    };
  },
  mounted() {
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      navigator.mediaDevices.getUserMedia({video: true})
        .then(stream =>{
          this.video.src = window.URL.createObjectURL(stream);
          this.video.play();
        });
    }
  },
  methods: {
    async canclePhoto(){
      this.studentInfo.imageUrl = null;
    },
    stopCamera (){
      debugger;
      let stream =this.$refs.video.src;
      let tracks = stream.getTracks();
      tracks.forEach((track) =>{
        track.stop();
      })
      this.video.src = null;
    },
    capture(){
      this.canvas = this.$refs.canvas;
      var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 200, 200);
      this.captures =canvas.toDataURL("image/png");
      this.studentInfo.imageData = this.captures;
    },
    ...mapActions(["fetchCoursesOfInstitute", "showLoader", "fetchStudentById"]),
    async onSubmit(evt) {
      evt.preventDefault();

      await this.showLoader(true);
      const saveResponse = await updatedStudent(this.studentInfo, this.studentInfo._id);
      await this.showLoader(false);
      const studentInfo = await fetchStudentById(this.$route.params.id);
      // if (courseData.data && courseData.data.status === 200 && courseData.data.error === null) {
      //   this.fetchCoursesOfInstitute(courseData.data.data);
      // }
      if (studentInfo.data.status === 200) {
        console.log("---> ", studentInfo.data.data);
        const data = {
          payload: studentInfo.data.data,
          type: 'UPDATE'
      }
      this.fetchStudentById(data);
      return;
    }
      // setTimeout(()=>{
      //   this.showLoader(false);
      // },1000)
    },
    async updatedAndReturnToDashboard(e) {
      await this.onSubmit(e);
      this.showLoader(false);
      this.$router.push("/dashboard");
      // setTimeout(()=>{
      //   this.$router.push("/dashboard");
      // },1000)
    },
    onCancle(evt) {
      evt.preventDefault();
      this.$router.push("/dashboard");
    }
  },
  components: {
    Loader
  },
  async created() {
    let courseData = await fetchCourses();
    const studentInfo = await fetchStudentById(this.$route.params.id);
    if (courseData.data && courseData.data.status === 200 && courseData.data.error === null) {
      this.fetchCoursesOfInstitute(courseData.data.data);
    }
    if (studentInfo.data.status === 200) {
      console.log("---> ", studentInfo.data.data);
      const data = {
        payload: studentInfo.data.data,
        type: 'UPDATE'
      }
      this.fetchStudentById(data);
    }
  },
  computed: {
    ...mapState({
      editTitle: state => state.studentModule.editTitle,
      studentInfo: state => state.studentModule.studentInfo,
      courses: state => state.studentModule.courses,
      options: state => state.studentModule.options
    }),
    ...mapGetters(["calcLeftFees"])
  }
};
</script>

<style scoped>

</style>
