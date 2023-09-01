import { styled } from "styled-components";

const Wrapper = styled.div`

  h2{
    color:#773ced;
    margin-bottom:15px;
  }

img{
    width:20px;
    margin:5px 5px;
    padding:5px 5px;
}

input{
    width:100%;
    border:none;
    outline:none;
    font-size:1rem;
    margin : 0px 5px;
    padding:6px 6px;
}

form{
  width:100%;
}

p {
    font-size: 16px;
    margin:10px 10px;
  }

  p a{
    text-decoration: none;
}

button{
    width:40%;
    margin:10px 90px;
    font-size:1rem;
    background:#773ced;
    color: white;
    border-radius:6px;
    padding:5px 5px;
    
     &:hover {
        cursor: pointer;
    }

`
export default Wrapper