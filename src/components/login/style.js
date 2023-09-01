import { styled } from "styled-components";

const Wrapper = styled.div`

h2{
    margin-bottom:4px;
    color : #773ced;
    margin-top:15px;

}

.header{
    background:white;
    margin : 0px auto;
    
}

.header h1{
    font-size:2rem;
    background:transparent;
    font-weight: 500;
     margin : 1px 0;
     color : #773ced;
  }

.underline{
    width:35%;
    height:4px;
    background: #773ced;
    border-radius:6px;
  }

form{
    width:100%;
    margin-bottom:10px;
}

img{
    width:20px;
    margin:5px 5px;
    padding:5px 5px;
}

.inputs{
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width:100%;
}

input{
    width:100%;
    border:none;
    outline:none;
    font-size:1.2rem;
    padding:6px 6px;   
}

form p{
    margin:30px auto 4px 30px;
}

p{
    margin:10px 0;  
}

.forgot{
    // margin:15px auto 0px 30px;  
    color:grey;
}

 a{
    text-decoration: none;
}

.button{
    display:flex;
    margin:10px;
    align-items:center;
    justify-content:center;
    justify-content:space-between;
}

button{
    width:40%;
    margin : 10px 0;
    font-size:1rem;
    background:#773ced;
    color: white;
    border-radius:6px;
    padding:5px 5px;

     &:hover {
        cursor: pointer;
    }
}

`
export default Wrapper