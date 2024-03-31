import { FC } from "react";

import { Icon, Icons} from "../Atom1/icons";
import "./styled/style.css";

interface IDateTimeContent {
    title:string,
    datetime:string,
    icon:Icons,
}

const DateTimeContent:FC<IDateTimeContent> = ({title, datetime, icon}) => {

    return (
        <div className='date-time-content-box'>
            <p>{title}</p>
            <div className='date-time-content'>
                <Icon width={24} height={24} icon={icon} color='#000'/>
                <h2>{datetime}</h2>
            </div>
        </div>
    );
};

export default DateTimeContent;