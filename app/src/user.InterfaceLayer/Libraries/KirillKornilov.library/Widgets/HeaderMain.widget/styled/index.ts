// const test = {};

// export default test;

import styled from "styled-components";
import { device } from "user.InterfaceLayer/Libraries/KirillKornilov.library/constants/breakPoints";

export const main_header =styled.div`
display: flex;
    align-items: left;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 20px;
  @media ${device.laptop} {
        flex-direction: column-reverse;
      }

`;
export const user_card =styled.div`
display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`;
export const toggle_button =styled.button`
background-color: #fff;
    color: #29A19C;
    box-shadow: 10px 0px 25px rgba(29, 52, 54, 0.116);
    transform: rotate(90deg);
    padding: 0;
    width: 24px;
    height: 24px;
`;
export const theme_button =styled.button`
    padding: 0;
    background-color: transparent;
`;

export const container_hide =styled.div<{hide:string}>`
    
    display: ${props=>props.hide};
   

`;
// #main-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }

// .theme-button {
//     padding: 0;
//     background-color: transparent;
// }

// #user-card {
//     display: flex;
//     flex-direction: row;
//     gap: 20px;
//     align-items: center;
// }

// .toggle-button {
//     background-color: #fff;
//     color: #29A19C;
//     box-shadow: 10px 0px 25px rgba(29, 52, 54, 0.116);
//     transform: rotate(90deg);
//     padding: 0;
//     width: 24px;
//     height: 24px;
// }