import { FC } from "react";

import * as S from "./styled"; 
import { Icons, Icon} from "../../Atoms/Atom1/icons";

interface ISidebarDataItem {
    color: string;
    text: string;
    icon: Icons;
    active: boolean;
    onDelete?:any;
}


const SidebarDataItem: FC<ISidebarDataItem> = ({color, text, icon ,active, onDelete}) => {

    return (
        <S.sidebar_data_item>
            
            <Icon width={18} height={18} color={color} icon={icon}  />
            <p style={{color: color}}>{text}</p>

            {onDelete &&
            <div onClick={onDelete}> 
            <Icon width={18} height={18} color={"#F05454"} icon={Icons.TrashBin} />
            </div>}
           
            <S.selector  onActive={active}/>
        </S.sidebar_data_item>
    );
};

 export default SidebarDataItem;