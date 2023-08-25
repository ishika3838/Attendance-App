import { styled } from "styled-components";
export const Wrapper = styled.div`

display:flex;
flex-direction:column;
width:90%;
margin:0px auto;

.student-info{
  display:flex;
  flex-direction:column;
  
  justify-content:center;
}
.student-info img,p{
  margin:12px auto;
}

.attendance-buttons{
  display:flex;
  justify-content:center;
}

h1{
  background:transparent;

}
.underline{
  width:100%;
  height:4px;
  background: #773ced;
  border-radius:6px;
}

`