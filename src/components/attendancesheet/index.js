import React, { useEffect, useState } from 'react'
import { services } from '../services'

const AttendanceSheet = () => {
 
    let sectionId = window.location.search.split('=')[1]
    let date = new Date()
    
     
      // Call your service to submit attendanceData to the backend
      
    const [students, setStudents] = useState([])
   // const[section,setselectedSection] = useState([])
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
