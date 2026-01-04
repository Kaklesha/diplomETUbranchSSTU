import styled from "styled-components";
import { device } from "user.InterfaceLayer/Libraries/KirillKornilov.library/constants/breakPoints";

export const date_time = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${device.mobileS} {
        flex-direction: column;
      }
}`;