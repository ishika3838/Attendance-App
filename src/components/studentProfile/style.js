import { styled } from "styled-components";

export const Wrapper = styled.div`

display:flex;
width:100%;
margin:60px auto;

img{
    // width:26px;
    border-radius:50%;
    margin : 0 auto;
}

div{
    display:flex;
    flex-direction:column;
    width:90%;
    margin : 0px auto;
}

h3{
    margin:5px auto;
    padding:5px;
}

p{
    padding:5px;
}



.card{
    width:90%;
    background:white;
    border-radius:25px;
    box-shadow: grey  3px 3px 4px;
    max-width:412px;
}
.card-photo{
    // background:#4070f4;
    background:#773ced;
    width:100%;
    border-radius:25px 25px 0px 25px;
    box-sizing:border-box;
}

.photo-frame{
    background:white;
    padding:5px;
    border-radius:50%;
    width:120px;
    height:120px;
}
// .card-photo::before,
.card-photo::after{
    content:'';
    background:red;
    height:40px;
    width:40px;
    // position:absolute;
    position:relative;
    //  right:0;
    left:372px;
    top:40px;
    border-radius:0 25px 0 0;
    background:white;
}

.card-photo::before{
    content:'';
    background:red;
    height:39px;
    width:39px;
    position:relative;
    left:373px;
    bottom:-208px;
    // background:#4070f4;
    background:#773ced;

}

// .card-photo::after{
//     border-radius:0 25px 0 0;
//     background:blue;
// }

.card-details{
  gap:5px;
  margin:15px auto;
  
}

.card-detail{
   flex-direction:row;
   width:100%;
}

@media screen and (max-width: 412px) {
    .card{
     width:312px;

    }

    .card-photo::after{
        left: 272px;
    }

    .card-photo::before{
        left: 273px;

    }

     
}

`