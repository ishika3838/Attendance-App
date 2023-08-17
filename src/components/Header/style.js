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
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  img {
    width: 90px;
  }
  `;