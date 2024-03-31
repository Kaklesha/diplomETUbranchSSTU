// const test = {};

// export default test;

import styled from "styled-components";

export const column_card  =styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export const title_box  =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    & button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    border: none;
    opacity: .4;
    letter-spacing: 2px;
    font-size: 20px;
    };
    & p {
        margin: 0;
        color: #29A19C; 
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.36px;
    };
`;
