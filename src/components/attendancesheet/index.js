import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const AttendanceSheet = () => {
 
    let sectionId = window.location.search.split('=')[1]
    let date = new Date()
    let Attendance = {
      sectionId:"",
      subjectId:"",
      Attendance:{
        sectiontId:{
              subjectId:{
                date:["true", "false"]
              }
        }
      }
            
    }
     
      
      
    const [students, setStudents] = useState([])
     
    useEffect(() => {
        services.user.read()
        .then(res => {
            setStudents(res.data.filter(user => user.role && user.role.toLowerCase() === 'student'
          ))
        })
      
    },  [])
  return (
    <div>
      {
        students.map(student => <div>{student.name}</div>)
      }
      </div>
        
        
       
    )
}

export default AttendanceSheet
