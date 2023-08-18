import { styled } from "styled-components";
export const Wrapper = styled.div`
text-align: center;
  padding: 20px;
  background-color: white;
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  button {
    margin-right: 10px;
    font-size: 16px;
    padding: 10px 20px;
    background-color: purple;
    color: #fff;
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
  `;
  //#007bff