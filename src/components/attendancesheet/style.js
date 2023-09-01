import { styled } from "styled-components";
export const Wrapper = styled.div`

display:flex;
flex-direction:column;
width:90%;
margin:0px auto;

.inner{
  margin-top:30px;
gap:30px;
display:flex;
flex-direction:column;
}

.attendance-summary{
  display:flex;
  justify-content:space-between;
  margin-top:30px;
}

.student-carousel {
  display: flex;
  overflow: hidden;
  position: relative;
}

.student-card {
  flex: 0 0 calc(100% / 3);/* Set the width of each student card */
  transition: transform 0.5s ease-in-out;
  justify-content:center;
 /* Add some spacing between cards */
  // border: solid grey 1px;
  display:flex;
   flex-direction:column;
  // border-radius:5px;
  margin: 0px auto;

  background:white;
  border:solid grey 1px;
  border-radius:5px;
  width:100%;

}


.student-card img{
  width: 80%;
  margin:10px auto;
  text-align:center;
  
}

p{
  margin: 10px auto;
}

.current {
  transform: translateX(150%);
  position: absolute;
  left: 120%; /* Slide the card to the left */
}




.student-row{
  border: solid grey 1px;
  margin:10px;
  border-radius:5px;
}

// .student-info{
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
// }

// .student-info p,img{
//   margin:12px auto;
//   text-align:center;
//   width:30%;
  
// }


.attendance-buttons{
  margin:5px auto;
  width:100%;
  display:flex;
  justify-content:space-between;
  gap:30px;
}

button{
  width:120;
  margin : 10px 0;
  font-size:1rem;
  // background:#773ced;
  color: white;
  border-radius:6px;
  padding:5px 5px;

   &:hover {
      cursor: pointer;
  }
}

.prev-button{
  background:grey;
  height:35px;
}

#absentbutton{
  background:#FF5733;
 
}

#presentbutton{
  background:#32CD32;
  
}

.mark-button{
  background:teal;
  margin:30px auto;
  margin-bottom:60px;
}

img{
  border-radius:50%;
  margin : 10px auto;
}

h1{
  background:transparent;
  text-align: center;
}

.underline{
  margin:0px auto;
  width:120px;
  height:4px;
  background: #773ced;
  border-radius:6px;
}

@media (min-width:500px){
  width:50%;
}
@media (min-width: 400px) {
  .student-card {
    max-width: 400px; /* Adjust this value as needed */
  }
}
`