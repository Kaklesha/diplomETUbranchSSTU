import { FC } from "react";

import "./styled/style.css";

export interface ICardData {
    title: string,
    children: JSX.Element,
    callback?(event),
}

const CardData: FC<ICardData> = ({title, children}) => {
    
    return (
        <div className="column-card">
            <div className="title-box">
                <p className="title">{title}</p>
            </div>
            <div className="children">
                {children}
            </div>
        </div>
    );
};

export default CardData;