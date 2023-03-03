
import styled from '@emotion/styled'
    export const StyledHome = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    padding:15px;
    flex-wrap:wrap;
    gap:5%;
    h1{
     width:90% !important;
     text-align: center;
     margin:0;
     font-weight: 100;
     padding:20px;
     margin-bottom: 50px;
     color:#505050;
     padding:0;
    }
    & > div{
       max-width:300px;
       width:100%;
       background-color: white;
       .txt{
        margin-bottom: 10px;
        .value{
          opacity: 0.6;
        }
       }
      & *{
        font-weight: 100;
        font-size: 13px;
        font-family: Arial, Helvetica, sans-serif;
      }
       padding:30px;
       margin-bottom:20px;
     }
     .btn-cont{
      display: flex;
      justify-content: space-between;
     }
     button{
      margin-top: 10px;
      cursor: pointer;
     }
    `
            