import axios from "axios";
export const services = {
    user : {
        login : payload => axios.post(`https://quizattendace.onrender.com/api/user/login`, payload),
        read : _ => axios.get(`https://quizattendace.onrender.com/api/user/read`),
        getProfile : contact => axios.get(`https://quizattendace.onrender.com/api/user/profile/${contact}`,contact),
        update:payload=>axios.put('https://quizattendace.onrender.com/api/user/update',payload),    
        markattendance:payload=>axios.post(`https://quizattendace.onrender.com/api/attendance/mark`,payload),
        getAttendance: _ =>axios.get(`https://quizattendace.onrender.com/api/attendance/read`),
        resetpassword:payload=>axios.post('https://quizattendace.onrender.com/api/user/resetPassword',payload),
    },
    getSections : () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data : [{

                    id : 'CS-I-A',
                    name : 'CS-I-A'
                },{
                    id : 'CS-II-A',
                    name : 'CS-II-A'
                },{
                    id : 'CS-III-A',
                    name : 'CS-III-A'
                },{
                    id : 'CS-IV-A',
                    name : 'CS-IV-A'
                },{
                    id : 'IT-I-A',
                    name : 'IT-I-A'
                },{
                    id : 'ME-I-A',
                    name : 'ME-I-A'
                },{
                    id : 'ME-II-A',
                    name : 'ME-II-A'
                },{
                    id : 'ME-III-A',
                    name : 'ME-III-A'
                },{
                    id : 'ME-IV-A',
                    name : 'ME-IV-A'
                },{
                    id : 'EC-III-A',
                    name : 'EC-III-A'
                },{
                    id : 'EE-II-A',
                    name : 'EE-II-A'
                }
                ,{
                    id : 'EE-III-A',
                    name : 'EE-III-A'
                }]
            })
        },1000)
    })
}
export const subjects = ['Dbms','OOPS','DSA']