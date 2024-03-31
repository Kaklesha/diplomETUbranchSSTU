// const test = {};

// export default test;
// .data-name{
//     margin: 0 0 20px 0;
//     color: #29A19C;
//     font-size: 24px;
//     font-weight: 600;
//     letter-spacing: 0.72px;
// }
// .data-items{
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
// }

// #side-bar-box {
//     position:fixed;
//     overflow-y: auto;
//     overflow-x: hidden;
//     box-sizing: border-box;
//     box-shadow: 0px 10px 25px 0px rgba(29, 52, 54, 0.08);
//     width: 232px;
//     height: 100vh;
//     top: 0;
//     bottom: 0;
//     padding: 20px 0 20px 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 60px;
// }

// #exit {
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: end;
// }

import styled from "styled-components";

export const data_name =styled.h2`
margin: 0 0 20px 0;
    color: #29A19C;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.72px;
`;
export const data_items =styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const side_bar_box =styled.div`
    position:fixed;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    box-shadow: 0px 10px 25px 0px rgba(29, 52, 54, 0.08);
    width: 232px;
    height: 100vh;
    top: 0;
    bottom: 0;
    padding: 20px 0 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;

`;
export const exit =styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;
