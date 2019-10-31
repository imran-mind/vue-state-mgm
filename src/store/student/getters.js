import _ from "lodash";
export default {
    calcLeftFees: state => {
        let courseObj = _.find(state.courses, { value: state.studentInfo.course });
      if (courseObj) {
        state.studentInfo.feesDue = courseObj.fees - state.studentInfo.feesPaid;
      }
    },
    makeTotolCounts: state =>{
      state.totalCounts = state.maleCounts + state.femaleCounts;
    }
}