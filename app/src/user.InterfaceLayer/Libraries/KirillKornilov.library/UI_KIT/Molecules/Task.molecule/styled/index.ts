
import styled , {css} from "styled-components";

interface taskProps{
    complet: boolean;
}
export const btn = styled.button`

        background-color: transparent;
        display: flex;
        align-items: center;
        border: none;
        cursor: pointer;
        padding: 0;
        
        `;
export const checkbox_box = styled.div<taskProps>`

    width: 0;
    transform: translateX(-20px);
    transition: 0.25s;

`;
export const task = styled.div<taskProps>`

    
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;

    &:hover ${checkbox_box} {
        width: 20px;
        transform: translateX(0);

    }

    & button {
            opacity: 0;
            transition: 0.25s;
    }

    &:hover button {
    opacity: 1;
    }

    & p{
        margin: 0;
    flex: 1;
    }
       

    ${(props) =>props.complet && css`
       & p {
        text-decoration: line-through;
       }
       & ${btn} {
        visibility: hidden;
       }
        
    `};

    @media print {
     
            display: none;
           
    }


    `;
// color: ${props=>props.color||"white"};
// .task {
//     width: 100%;
//     padding: 15px;
//     display: flex;
//     justify-content: space-between;
//     gap: 10px;
//     align-items: center;
//     box-sizing: border-box;
//     border: 2px solid rgba(0, 0, 0, 0.1);
//     border-radius: 10px;
//     cursor: pointer;
//     transition: 0.25s;
// }

// .task.completed p {
//     text-decoration: line-through;
// }

// .task.completed .btn {
//     visibility: hidden;
// }

// .task .btn {
//     background-color: transparent;
//     display: flex;
//     align-items: center;
//     border: none;
//     cursor: pointer;
//     padding: 0;
// }

// .task .checkbox-box {
//     width: 0;
//     transform: translateX(-20px);
//     transition: 0.25s;
// }

// .task button {
//     opacity: 0;
//     transition: 0.25s;
// }

// .task p {
//     margin: 0;
//     flex: 1;
// }

// .task:hover {
//     background-color: rgb(247, 247, 247);
// }

// .task:hover .checkbox-box {
//     width: 20px;
//     transform: translateX(0);
// }

// .task:hover button {
//     opacity: 1;
// }