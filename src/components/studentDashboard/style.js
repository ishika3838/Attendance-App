import { styled } from "styled-components";
 export const Wrapper = styled.div`
 h2{
  margin:12px auto;
  text-align:center;
  margin-top:15px;
  
 }
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 25px;
  left: 20px;
  top: 20px;
}

.bm-burger-bars {
  background: #373a47;
}

.bm-burger-bars-hover {
  background: #373a47;
}

.bm-menu {
  background:grey;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
  
}

.bm-item-list {
  color: #773ced;
  background: grey;
  height:100px;
}

.bm-item {
  display: inline-block;
  margin-bottom: 10px;
  color: white;
  text-decoration: none;
  
}
//  .profile{
//   display:flex;
//   width:412px;
//   flex-direction:column;
//   margin:60px auto;

//  } 
 p{
  font-family:
 }

 .innerContainer{
  position:relative;
  gap:15px; 
background-color: white;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
max-width:610px;
min-width:312;
margin : 80px 10px;
padding:10px 10px;
border-radius:16px;
box-shadow: grey  3px 3px 4px;

}

@media (min-width:500px){

  .innerContainer{
    margin : 80px auto;

  } 

// button{
//   width:120px;
//   // margin-bottom:30px;
//   margin : 10px 0;
//   font-size:0.8rem;
//   background:#773ced;
//   color: white;
//   border-radius:6px;
//   padding:5px 5px;

//    &:hover {
//       cursor: pointer;
     
//   }

// }

 
 `;