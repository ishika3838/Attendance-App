import { styled } from "styled-components";
export const Wrapper = styled.div`

  background-color: white;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width:80%;
  margin : 80px auto;
  border-radius:16px;

  .underline{
    width:60%;
    height:6px;
    background:black;
    border-radius:6px;
  }
  
  h2 {
    font-size: 24px;
    margin-top:10px;
  }

  h1{
    font-size:1rem;
    background:transparent;
    font-weight: 500;
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
    width:40%;
    // background:black;

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
      padding:40px 40px;

    }

    img{
      width : 180px;
    }
  }

  `
  //#007bff