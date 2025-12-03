// const test = {};

// export default test;

import styled from "styled-components";

export const button = styled.button`

padding: 10px 25px;
border: none;
border-radius: 8px;
color: #FAFAFA;
cursor: pointer;
font-size:16px;
background-color:${(props)=>props.color};

& div{
    display: flex;
    align-items: center;
    gap: 10px;
};
& p{
    margin: 0;
    margin-left: 1vw;
}
`; 

export const head = styled.div`
    display: flex;
    padding: 8px 20px;
    justify-content: space-between;
    
    `;

export const Footer =styled.footer`
display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 20px;
    opacity: .5;
`;

export const Copyright =styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Footer__a =styled.a`
    color: black;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.42px;
`;


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