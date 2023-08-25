import { styled } from "styled-components";

export const Wrapper = styled.div`

  position:relative;
  gap:15px; 
  background-color: white;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  max-width:610px;
  min-width:312;
  margin :60px auto;
  padding:10px 10px;
  border-radius:16px;
  box-shadow: grey  3px 3px 4px;

  .forgotInput{
    width:100%;
    gap :15px;
    align-items:center;
    display:flex;
    flex-direction:column;
  }
 
  .forgotInput div{
  display:flex;
  width:100%;
  border: solid grey 1px;
  border-radius:5px;
  overflow:hidden;
  }

button{
  width:120;
  margin : 5px 0;
  font-size:1rem;
  background:#773ced;
  color: white;
  border-radius:6px;
  padding:5px 5px;

   &:hover {
      cursor: pointer;  
  }
}

img{
  width:20px;
  margin:5px 5px;
  padding:5px 5px;
}

input{
  width:100%;
  border:none;

}

.inputF{
  margin: 30px auto;
  border: solid grey 1px;
  border-radius:5px;
  display:flex;
  width:100%;
  box-sizing: border-box;
  overflow:hidden;
}
  

`

export default Wrapper