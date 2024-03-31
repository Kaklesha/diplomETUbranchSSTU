import { FC } from "react";
import { useTranslation } from "react-i18next";

import "./styled/style.css";
import "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/i18n.widget/i18n";

interface IActivity {
    title: string,
    number: number
}

const ActivityCircle: FC<IActivity> = ({title, number}) => {

    const {t}=useTranslation();

    return (
        <div className='activity-circle'>
            <p>
                {title}
            </p>
            <div className="circle">
                <p>
                    <span>{number}</span><br/>
                    {t("weekAchievements.tasks")}
                </p>
            </div>
        </div>
    );
};

export default ActivityCircle;