// const test = {};

// export default test;

// #main-page {
//     margin-left: 232px;
//     padding: 20px 70px;
//     background-color: #FAFAFA;
// }
// /* #contentBar{
//     position:fixed;
//     overflow-y: auto;
// } */
// .columns {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
// }

// .left-column {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
// }

// .right-column {
//     width: 45%;
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
// }

// .tasks-list {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// }



import styled from "styled-components";
import { device } from "user.InterfaceLayer/Libraries/KirillKornilov.library/constants/breakPoints";

export const container_heap =styled.div`
display: flex;
flex-direction: row;
gap: 30px;
justify-content: center;
    
background-color: #FAFAFA;
    @media ${device.mobileS} {
       
        flex-direction: column;
       }
   
`;
export const burger_menu =styled.div`
display: none;
flex-direction: row;
gap: 30px;
justify-content: left;
    
background-color: #FFFFFF
    @media ${device.mobileS} {
       
        display:flex;
       }
   
       @media  (max-width: 868px) {
        display: flex;
        padding-bottom: 30px;
      }
`;


export const main_page =styled.div`
    //margin-left: 232px;
    padding: 20px 50px;
    background-color: #FAFAFA;
  
    @media ${device.mobileS} {
        padding: 1rem;
      }
   
`;

export const columns =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  margin-bottom: 100px; 
  gap: 30px;
    @media ${device.desktop} {
        flex-direction: column;
      }
    
`;

export const left_column =styled.div`


width: clamp(300px, 100%, 700px);
`;
export const right_column =styled.div`

    
width: clamp(300px, 100%, 700px);
    display: flex;
    flex-direction: column;
    gap: 30px;

`;

export const container_hide =styled.div<{hide:string}>`
    
    display: ${props=>props.hide};
    width: 100%;

    flex-direction: column;
    gap: 30px;

`;