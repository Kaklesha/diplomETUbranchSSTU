import { styled } from "styled-components";

export const media =styled.div<{color:string}>`
    
    color: ${props=>props.color};
   
    & img{
        width: 32px;
        height: 32px;
    }
`;