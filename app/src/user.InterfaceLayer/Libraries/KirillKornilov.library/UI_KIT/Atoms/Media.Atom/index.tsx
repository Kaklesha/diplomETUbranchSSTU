import { FC } from "react";

import * as S from "./styled";

interface IMedia{
    link: string,
    logo: string,
    color?: string,
}



const Media:FC<IMedia> =({link,logo,color})=> {

    return(
        <S.media color={color?color:""}>
            <a href={link}><img src={logo} alt={logo} /></a>
        </S.media>
    );
};

export default Media;
