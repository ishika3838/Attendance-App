import { styled } from "styled-components";

const Wrapper = styled.div`

    display:flex;
    flex-direction:column;
    width:100%;

    form{
        display : flex;
        flex-direction : column;
        width:90%;
        margin:0px auto;
        // gap:10px;
    }

    .heading{
        margin :10px 10px;
    }

    img{
        width:20px;
        margin:5px 5px;
        padding:5px 5px;
    }

        .input{
            display:flex;
            gap :10px;
            // width:80%;
            font-size:1rem;
            border: 1px solid grey;
            border-radius:5px;
            outline:none;
            // overflow:hidden;
            // margin : 10px 10px;
            // background:grey;
        
        }
    

    input{
        width:100%;
        overflow:hidden;


    }

`
export default Wrapper