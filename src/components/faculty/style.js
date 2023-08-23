 import { styled } from "styled-components";
 export const Wrapper = styled.div`
 h2{
  margin:12px auto;
  text-align:center;
  
 }
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 20px;
  top: 20px;
}

.bm-burger-bars {
  background: #373a47;
}

.bm-burger-bars-hover {
  background: #a90000;
}

/* Styling for the menu items */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

.bm-item-list {
  color: #b8b7ad;
}

.bm-item {
  display: inline-block;
  margin-bottom: 10px;
  color: white;
  text-decoration: none;
} 
input[type=search]{
  width : 100%;
  border : none;
  padding : 10px;
}

.sections{
  display : flex;
  flex-wrap : wrap;
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