import axios from 'axios';
import {
    studentConst
} from '../constants/student-constants';


export const fetchCourses = async () => {
    try {
        const courseResponse = await axios({
            method: 'GET',
            url: studentConst.coursesUrl
        });
        return courseResponse;
    } catch (error) {
        return error && error.response;
    }
}

export const saveStudent = async data => {
    try {
        const stdResponse = await axios({
            method: 'POST',
            url: studentConst.saveStudentUrl,
            data: data
        });
        return stdResponse;
    } catch (error) {
        return error && error.response;
    }
}

export const fetchStudents = async () => {
    try {
        const stdResponse = await axios({
            method: 'GET',
            url: studentConst.getStudentsUrl
        });
        return stdResponse;
    } catch (error) {
        return error && error.response;
    }
}

export const fetchStudentById = async (id) => {
    try {
        const stdResponse = await axios({
            method: 'GET',
            url: studentConst.getStudentsUrl+"/"+id
        });
        return stdResponse;
    } catch (error) {
        return error && error.response;
    }
}

export const updatedStudent = async (data, id) => {
    try {
        const stdResponse = await axios({
            method: 'PUT',
            url: studentConst.updateStudentsUrl+"/"+id,
            data: data
        });
        return stdResponse;
    } catch (error) {
        return error && error.response;
    }
}

export const deleteStudentById = async (id) => {
    try {
        const stdResponse = await axios({
            method: 'DELETE',
            url: studentConst.deleteStudentsUrl+"/"+id
        });
        return stdResponse;
    } catch (error) {
        return error && error.response;
    }
}