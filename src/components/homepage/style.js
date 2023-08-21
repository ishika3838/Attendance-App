import { styled } from "styled-components";
export const Wrapper = styled.div`
background:radial-gradient(rgb(195, 152, 241) , rgb(98, 121, 237)); 
height:100vh;
margin: 0 auto;
width:100%;

  .container{
    position:relative;
  background-color: white;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width:80%;
  margin : 0px auto;
  border-radius:16px;
  box-shadow: grey 4px 4px 4px;
 top:18%;
  }

  .underline{
    width:60%;
    height:4px;
    background: #773ced;
    border-radius:6px;
  }
  
  h2 {
    font-size: 24px;
    margin-top:10px;
    margin-bottom:6px;
    color: #773ced;
  }

  h1{
    font-size:1rem;
    background:transparent;
    font-weight: 500;
    color: #773ced;

  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top:30px;
  }

  .header{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    // gap:30px;
  }

  .main{
    display:flex;
    align-items: center;
    justify-content: center;
  }

  button {
    padding :30px 30px;
    border-radius:16px;
    background: transparent;
    color:black;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color:rgba(0,0,0,.03);
      color:black;
    }
  }

  img {
    width: 90px;
  }

  @media (min-width:500px){
      width:100%;



    .container{
      margin: 0 auto;
      width:35%;
      top:80px;

    // background:black;
    }

    h2 {
      font-size: 44px;
      margin-top:10px;

    }

    h1{
      font-size:2rem;
    }
  
    p {
      font-size: 26px;

    }

    button{
      padding:20px 20px;

    }

    img{
      width : 100px;
    }
  }

  `
  //#007bff