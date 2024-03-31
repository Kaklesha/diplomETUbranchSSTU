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



export const main_page =styled.div`
    margin-left: 232px;
    padding: 20px 70px;
    background-color: #FAFAFA;
`;

export const columns =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  

`;

export const left_column =styled.div`

    
width: 100%
`;
export const right_column =styled.div`

    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;

`;

export const container_hide =styled.div<{hide:string}>`
    
    display: ${props=>props.hide};
    width: 90%;

    flex-direction: column;
    gap: 30px;

`;