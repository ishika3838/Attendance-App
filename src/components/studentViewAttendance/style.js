/* Add this CSS to your stylesheets */
import { styled } from "styled-components";
 export const Wrapper = styled.div` 
{
  font-family: Arial, sans-serif;
  margin: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}
`
