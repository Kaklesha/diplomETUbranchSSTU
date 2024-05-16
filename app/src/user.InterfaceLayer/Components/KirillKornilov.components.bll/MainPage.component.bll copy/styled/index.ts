import styled from "styled-components";

export const container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

`;
export const wrapper = styled.div`
    width: 350px;
    height: 375px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 25px #1D343614;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    & h4 {
            margin: 0;
            font-weight: 600;
            font-size: 18px;
            line-height: 24.55px;
            letter-spacing: 2%;
            color: #29A19C;
        }
    & input {
            padding: 10px 15px;
            align-self: stretch;
            border-radius: 8px;
            border: 1px solid rgba(40, 40, 70, 0.10);
        }
    &   a {
            color: #29A19C;
            text-decoration: underline;
        }
    &  p {
            margin: 0;
        }
    `;

    export const division_box = styled.div`
    
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 15;
    opacity: .5;

    & hr {
            width: 40%;
        }
`;
export const media_box = styled.div`

    display: flex;
    gap: 20px;
`;
// .body{
//     display: flex;
//     width: 100%;
//     height: 100%;

//     align-items: center;
//     justify-content: center;
// }
// .wrapper {
//     width: 350px;
//     height: 375px;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 10px 25px #1D343614;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
// }

// .wrapper h4 {
//     margin: 0;
//     font-weight: 600;
//     font-size: 18px;
//     line-height: 24.55px;
//     letter-spacing: 2%;
//     color: #29A19C;
// }

// .wrapper input {
//     padding: 10px 15px;
//     align-self: stretch;
//     border-radius: 8px;
//     border: 1px solid rgba(40, 40, 70, 0.10);
// }

// .wrapper p {
//     margin: 0;
// }

// .wrapper a {
//     color: #29A19C;
//     text-decoration: underline;
// }

// .division-box {
//     display: flex;
//     width: 100%;
//     justify-content: space-between;
//     align-items: center;
//     gap: 15;
//     opacity: .5;
// }

// .division-box hr {
//     width: 40%;
// }

// .media-box {
//     display: flex;
//     gap: 20px;
// }

