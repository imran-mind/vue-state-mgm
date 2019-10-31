import _ from 'lodash';
export const coursesParser =(data) =>{
    let courseArray = [];
    if (data && data.length) {
        data.forEach(element => {
            let courseObj = {
                value: element._id,
                text: element.courseName,
                fees: element.fees
            }
            courseArray.push(courseObj);
        });
    }
    courseArray.unshift({
        value: "",
        text: "Please select course",
        fees: 0
    }) 
    return courseArray;
}

export const studentParser = (data) =>{
    let newData = _.cloneDeep(data);
    newData.course = newData.course._id;
    // Object.assign(data.course,);
    return newData;
}