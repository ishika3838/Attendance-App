/* Add this CSS to your stylesheets */
import { styled } from "styled-components";
 export const Wrapper = styled.div` 
// {
//   font-family: Arial, sans-serif;
//   margin: 20px;
// }
 
width:95%;
margin:30px auto;
background:white;
padding:5px;
border-radius:5px;

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  margin-bottom: 30px;
  text-align:center;
}

h4 {
  font-size: 18px;
  margin: 30px 10px 0px 0px;
}

table {
  border-collapse: collapse;
   width: 100%;
  margin:10px auto;
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
