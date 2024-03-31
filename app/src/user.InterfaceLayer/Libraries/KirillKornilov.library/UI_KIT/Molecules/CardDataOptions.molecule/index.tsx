import { FC } from "react";

import {ICardData} from "../../Atoms/CardData.Atom";
import * as S from "./styled";

const CardDataOptions: FC<ICardData> = ({title, children}) => {

    return (

        <S.column_card>
                <S.title_box>
                <p className="title">{title}</p>
                <button >• • •</button>
                </S.title_box>

                <div className="children">
                    {children}
                </div>
        </S.column_card>
        
    );
};

export default CardDataOptions;