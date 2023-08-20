
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  margin: 10px;
  border-radius: 5px;

  h3 {
    margin-top: 0;
    font-size: 24px;
  }

  .select-student {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f5f5f5;
  }

  p {
    margin: 10px 0;
    text-align: center;
  }
`;