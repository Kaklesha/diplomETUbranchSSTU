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