import { FC } from "react";

import * as S from "./styled";

interface ICard {
    children: JSX.Element
}

const Card:FC<ICard> = ({children}) => {

    return (
        <S.card>
            {children}
        </S.card>
    );
};

export default Card;