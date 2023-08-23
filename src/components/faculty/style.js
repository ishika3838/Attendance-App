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
.inner{
  margin:12px 3px;
}
.imginner{
  display:flex;
}
.imginner img{
  background:white;
  width:16px;
  padding:12px 10px;
 
}
input[type=search]{
  width : 100%;
  border : none;
  padding : 10px;
}

.sections{
  display : flex;
  flex-wrap : wrap;
  gap:2px;
  margin:12px auto;
  max-width:610px;
  
  
}
input[type=button]{
  background:#bce2e2;

  border-radius:5px;
 
}
input[type=button]:hover{
  cursor:pointer;
  background:teal;

}

.section{
  min-width : 120px;
  min-height : 120px;
  text-align : center;
  line-height : 100px;
  flex : 1;
  border : solid thin #ccc;
  font-size : 1.2rem;
}
`;
