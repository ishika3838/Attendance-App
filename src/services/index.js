import axios from "axios";

export const services = {
    user : {
        login : payload => axios.post(`https://server-api1-li2k.onrender.com/api/user/login`, payload),
        read : _ => axios.get(`https://server-api1-li2k.onrender.com/api/user/read`),
              
        
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
                    id : 'EC-I-A',
                    name : 'EC-I-A'
                },{
                    id : 'EE-II-A',
                    name : 'EE-II-A'
                },{
                    id : 'EE-III-A',
                    name : 'EE-III-A'
                },{
                    id : 'EE-IV-A',
                    name : 'EE-IV-A'
                }]
            })
        },3000)
    })
}
