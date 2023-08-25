import { styled } from "styled-components";
export const Wrapper = styled.div`

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

  `
