import { styled } from "styled-components";

const Wrapper = styled.div`


background-color: white;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
width:80%;
margin : 10% auto;
padding:10px 10px;
border-radius:16px;

p a{
    text-decoration: none;

}

.underline{
    width:15%;
    height:6px;
    background:black;
    border-radius:6px;
  }
form{
    width:100%;
    margin-bottom:10px;
}

img{
    width:46px;
    margin:5px 5px;
}
.inputs{
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:30px;
    width:100%;
    // border: solid grey 1px;

.input{
    display:flex;
    gap :10px;
    width:80%;
    font-size:2rem;
    border: solid grey 1px;
    border-radius:6px;
    outline:none;
    // background:grey;
}

input{
    width:100%;
    border:none;
    font-size:1.2rem;
    padding:6px 6px;
}

button{
    width:80%;
    margin-bottom:30px;
    font-size:26px;
    background:black;
    color:white;
    border-radius:6px;
    padding:5px 5px;

     &:hover {
        cursor: pointer;
    }

}

  

// @media (min-width:500px){
//     width:40%;
//     background:black;

//     h1{
//       font-size:2rem;
//     }
  
//     p {
//       font-size: 26px;

//     }

//     button{
//       padding:20px 20px;

//     }

//     img{
//       width : 60px;
//     }
//   }

`
export default Wrapper