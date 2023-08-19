import { styled } from "styled-components";

const Wrapper = styled.div`

background:radial-gradient(rgb(195, 152, 241) , rgb(98, 121, 237)); 
height:100vh;
margin: 0 auto;
width:100%;

.container{
    position:relative;

background-color: white;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
width:80%;
margin : 0 auto;
padding:10px 10px;
border-radius:16px;
box-shadow: grey 2px 2px 3px;
top:18%;
}

p a{
    text-decoration: none;

}

h2{
    margin-bottom:6px;
    color : #773ced;

}

.underline{
    width:15%;
    height:6px;
    background: #773ced;
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
    // width:80%;
    margin-bottom:30px;
    font-size:26px;
    background:#773ced;
    color: white;
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