export default {
    fetchCoursesOfInstitute: (context, data) => {
        context.commit("FETCH_COURSES_OF_INSTITUTE", data);
    },
    fetchStudents: (context, data) => {
        context.commit("FETCH_STUDENTS", data);
    },
    showLoader: (context, data) =>{
        context.commit('SHOW_LOADER',data);
    },
    fetchStudentById: (context, data) =>{
        context.commit('FETCH_STUDENT_BY_ID',data);
    },
    resetStudentInfo: (context) =>{
        context.commit('RESET_STUDENT_INFO');
    }
}
