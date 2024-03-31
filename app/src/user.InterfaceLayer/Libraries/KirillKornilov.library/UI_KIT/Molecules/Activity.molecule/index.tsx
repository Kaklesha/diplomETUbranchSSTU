import React,{ FC,useContext } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";
import { UserCategory } from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Main.widget";
import { useTranslation } from "react-i18next";

import ActivityType from "./type";
import ActivityCircle from "../../Atoms/ActivityCircle.Atom";
import * as S from "./styled";
import "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/i18n.widget/i18n";

//const FactWidget: FunctionComponent<FactWidgetType> = ({ useGetFactQuery }) => {
const Activity:FC<ActivityType> = ({useGetActivityQuery}) => {
    const {t} = useTranslation();
    const { data , isLoading} = useGetActivityQuery({user_id: useContext(UserIdContext),category_id:useContext(UserCategory)});
    //const {data, isLoading} = useGetActivityQuery();
    if(isLoading)return <h1>Loading..</h1>;

    return (
        <S.activity>
            {/* <ActivityCircle title='Создано' number={113} />
            <ActivityCircle title='Завершено' number={97} />
            <ActivityCircle title='Удалено' number={14} /> */}

            <ActivityCircle
             title={t("weekAchievements.created")}
									
              number={
                 data["created"].reduce((partialSum:number, a:number) => partialSum + a, 0)
                }/>

            <ActivityCircle
             title={t("weekAchievements.done")}
              number={
                 data["completed"].reduce((partialSum:number, a:number) => partialSum + a, 0)
                }/>
            <ActivityCircle
             title={t("weekAchievements.deleted")}
              number={
                 data["deleted"].reduce((partialSum:number, a:number) => partialSum + a, 0)
                }/>
        </S.activity>
    );
};

export default Activity;