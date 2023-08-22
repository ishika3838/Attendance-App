import { styled } from "styled-components";

export const Wrapper = styled.div`
/* Slider.css */
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.student-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.green-button,
.red-button,
.undo-button {
  margin-top: 10px;
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

.undo-button {
  background-color: #2196f3;
  color: white;
}
`;