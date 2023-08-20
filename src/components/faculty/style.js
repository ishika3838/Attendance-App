import { styled } from "styled-components";
export const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;

  h2 {
    margin-bottom: 10px;
    font-size: 28px;
  }

  h3 {
    margin-top: 20px;
    font-size: 24px;
  }

  button {
    margin-right: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .green-button {
    background-color: #4caf50;
    color: white;
  }

  .red-button {
    background-color: #f44336;
    color: white;
  }
`;