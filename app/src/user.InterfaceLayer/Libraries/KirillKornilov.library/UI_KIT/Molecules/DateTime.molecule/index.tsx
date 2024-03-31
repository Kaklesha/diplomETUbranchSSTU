import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/i18n.widget/i18n";
import DateTimeContent from "../../Atoms/DataTimeContent.Atom";
import { Icons } from "../../Atoms/Atom1/icons";
import * as S from "./styled";


const DateTime = () => {
    
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const {t} = useTranslation();

    const [datetime, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const hours = datetime.getHours().toString().length > 1 ? datetime.getHours() : "0" + datetime.getHours();
    const minutes = datetime.getMinutes().toString().length > 1 ? datetime.getMinutes() : "0" + datetime.getMinutes();
    const seconds = datetime.getSeconds().toString().length > 1 ? datetime.getSeconds() : "0" + datetime.getSeconds();

    const time = `${hours}:${minutes}:${seconds}`;
    const date = `${datetime.getDate()} ${monthNames[datetime.getMonth()]} ${datetime.getFullYear()}`;

    return (
        <S.date_time >
            <DateTimeContent title={t("timer.onWatch")} icon={Icons.Clock} datetime={time} />
            <DateTimeContent title={t("timer.onDay")} icon={Icons.Calendar} datetime={date} />
        </S.date_time>
    );

};

export default DateTime;