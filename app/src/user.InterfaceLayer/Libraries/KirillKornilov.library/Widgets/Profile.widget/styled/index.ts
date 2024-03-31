import styled from "styled-components";

// export const media =styled.div<{color:string}>`
//         color: ${props=>props.color};
   
//         & img{
//             width: 32px;
//             height: 32px;
//         }
// `;

export const user_info =styled.div`

    display: flex;
    flex-direction: row;
    gap: 50px;

    & p {
            color: #000;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.42px;
            margin: 0;
        }

    & input {
            border: 2px solid rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 10px 15px;
        }
`;
export const avatar =styled.div`

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;
    
    & a {

    color: #29A19C;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.36px;
    }
`;

export const nickname  =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const email  =styled(nickname);
export const socials  =styled(nickname);

export const user_data =styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;
`;
export const mailing =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    p {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.28px;
        }
`;

export const socials_links =styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

