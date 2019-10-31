<template>
  <div>
    <h2>Total Students : {{femaleCount + maleCount}}</h2>
    <h2>Male : {{maleCount}}</h2>
    <h2>Female : {{femaleCount}}</h2>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <tr v-for="item in students" v-bind:key="item._id">
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.mobile }}</td>
      <td>
        <b-button class="button is-small is-light" @click="editStudent(item._id)">Edit</b-button>
      </td>
      <td>
        <b-button id="show-btn" @click="showModal(item._id)">Delete</b-button>
      </td>
      <td>
        <b-button class="button is-small is-light" @click="showDetails(item._id)">Show</b-button>
      </td>
    </tr>
    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Do you want to delete student ?</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="deleteStudent">Delete</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="hideModal">Cancle</b-button>
    </b-modal>
  </div>
</template>

<script>
import { fetchStudents, deleteStudentById } from "../api/student";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      id: ""
    };
  },
  name: "StudentList",
  methods: {
    ...mapActions(["fetchStudents", "showLoader"]),
    async showDetails(id) {
      this.$router.push("/showDetails/" + id);
    },
    async editStudent(id) {
      this.$router.push("/editStudent/" + id);
    },
    showModal(_id) {
      this.$refs["my-modal"].show();
      this.id = _id;
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    async deleteStudent() {
      this.hideModal();
      await this.showLoader(true);
      const data = await deleteStudentById(this.id);
      await this.showLoader(false);
      let stdentsData = await fetchStudents();
      if (
        stdentsData.data &&
        stdentsData.data.status === 200 &&
        stdentsData.data.error === null
      ) {
        this.fetchStudents(stdentsData.data.data);
      }
    }
  },
  async created() {
    let stdentsData = await fetchStudents();
    if (
      stdentsData.data &&
      stdentsData.data.status === 200 &&
      stdentsData.data.error === null
    ) {
      this.fetchStudents(stdentsData.data.data);
    }
  },
  computed: {
    ...mapState({
      students: state => state.studentModule.students,
      maleCount: state => state.studentModule.maleCounts,
      femaleCount: state => state.studentModule.femaleCounts,
      total: state => state.studentModule.totalCounts
    }),
    ...mapGetters(["makeTotolCounts"])
  }
};
</script>


