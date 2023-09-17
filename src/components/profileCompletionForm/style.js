import { styled } from "styled-components";

const Wrapper = styled.div`

    display:flex;
    // flex-direction:column;
    width:70%;
    margin:60px auto;
    align-items:center;
    justify-content:center;
    // .box{
    //   width:500px;
    // }

    form{
        display : flex;
        flex-direction : column;
        width:90%;
        margin:0px auto;
    }

    .heading{
        margin :10px 10px;
    }

    img{
        width:20px;
        margin:5px 5px;
        padding:5px 5px;
    }

      
    .inputs{
        width:600px;
    }
        .input{
            display:flex;
            gap :10px;
            font-size:1rem;
            border: 1px solid grey;
            border-radius:5px;
            outline:none;
            width:100%;
        }
    
    input, select{
        width:100%;
        overflow:hidden;
        border:none;
        outline:none;
        background:transparent;
    }

    .input [type=file]{
        margin:10px auto;
        width:100%;
    }

       .button{
         margin : 0px auto;
       }
      
    button{
        width:120;
        // margin-bottom:30px;
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
export default Wrapper