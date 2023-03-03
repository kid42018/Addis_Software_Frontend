
import styled from '@emotion/styled'
    export const StyledHeader = styled.div`
     width:100vw;
     display:flex;
     justify-content:center;
     background-color: white;
     ul{

        display:flex;
        padding:10px;
        list-style-type:none;
        flex-wrap: wrap;
        & > li{
            margin:10px;
            padding:10px;
            cursor: pointer;
        }
         a{
            text-decoration: none;
        }
     }
    `
            