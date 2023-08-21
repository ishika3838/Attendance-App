import { styled } from "styled-components";

const Wrapper = styled.div`

background:radial-gradient(rgb(195, 152, 241) , rgb(98, 121, 237)); 
height:100vh;
margin: 0 auto;
width:100%;

.container{
    position:relative;
gap:30px;
background-color: white;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
width:35%;
margin : 0 auto;
padding:10px 10px;
border-radius:16px;
box-shadow: grey 2px 2px 3px;
top:18%;
}

.input{
    display:flex;
}

img{
    width:26px;
    margin:5px 5px;
}

.input{
    display:flex;
    gap :10px;
    // width:80%;
    font-size:1.5rem;
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

form{
    width:100%;
    margin-bottom:10px;
}

`
export default Wrapper