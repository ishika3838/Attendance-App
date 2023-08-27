import { styled } from "styled-components";
export const Wrapper = styled.div`

display:flex;
flex-direction:column;
width:90%;
margin:0px auto;

.inner{
gap:30px;
display:flex;
flex-direction:column;
}

.student-row{
  border: solid grey 1px;
  margin:10px;
  border-radius:5px;
}

.student-info{
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.student-info img,p{
  margin:12px auto;
}

.attendance-buttons{
  margin:5px auto;
  width:60%;
  display:flex;
  justify-content:space-between;
}

button{
  width:120;
  margin : 10px 0;
  font-size:1rem;
  background:#773ced;
  color: white;
  border-radius:6px;
  padding:5px 5px;

   &:hover {
      cursor: pointer;
  }
}

.mark-button{
  background:teal;
  margin:10px auto;
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

`