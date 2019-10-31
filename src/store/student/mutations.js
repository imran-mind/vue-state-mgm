import {coursesParser, studentParser} from "../../generic/parser";

export default {
    FETCH_COURSES_OF_INSTITUTE: (state, data) => {
        let parsedData = coursesParser(data);
        state.courses = parsedData;
    },
    FETCH_STUDENTS: (state, data) => {
        state.students = data.students;
        let countObj = data.counts[0];
        state.maleCounts = countObj.male_students;
        state.femaleCounts = countObj.female_students;
    },
    SHOW_LOADER: (state, loading) =>{
        state.isLoading = loading;
    },
    FETCH_STUDENT_BY_ID: (state, data) =>{ 
        if(data.type === 'UPDATE'){
            state.studentDetail = data.payload;
            state.studentInfo = data.payload;
        } else {
            state.studentDetail = studentParser(data.payload);
        }
    },
    RESET_STUDENT_INFO: (state) =>{
        state.studentInfo = {
            name: "",
            email: "",
            mobile: "",
            joiningDate: 1558164435697,
            course: {},
            feesPaid: 0,
            feesDue: 0,
            gender: "MALE",
            imageData: null,
            imageUrl: null
        }
    }
}