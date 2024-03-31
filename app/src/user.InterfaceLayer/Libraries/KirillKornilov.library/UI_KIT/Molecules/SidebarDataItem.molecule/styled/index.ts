// const test = {};

// export default test;


import styled ,{css} from "styled-components";



export const sidebar_data_item =styled.button`
    width: 100%;
    cursor: pointer;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    & p{
        flex: 1;
        margin: 0;
        text-align: left;
    }
`;


    interface selectorProps{
        onActive: boolean;
    }

export const selector =styled.div<selectorProps>`
    width: 30px;
    height: 18px;
    border-radius: 10px 0px 0px 10px;
    background: transparent;
    transform: translateX(100%);
    transition: .25s;

    ${(props) =>props.onActive && css`
        width: 30px;
        height: 18px;
        border-radius: 10px 0px 0px 10px;
        transform: translateX(0%);
        background: #29A19C;
        `};

    `;


    // interface taskProps{
    //     complet: boolean;
    // }
    // export const btn = styled.button`
    
    //     background-color: transparent;
    //         display: flex;
    //         align-items: center;
    //         border: none;
    //         cursor: pointer;
    //         padding: 0;
            
    // `;
    // export const task = styled.div<taskProps>`
// .active .selector{
//     width: 30px;
//     height: 18px;
//     border-radius: 10px 0px 0px 10px;
//     transform: translateX(0%);
//     background: #29A19C;
// }


