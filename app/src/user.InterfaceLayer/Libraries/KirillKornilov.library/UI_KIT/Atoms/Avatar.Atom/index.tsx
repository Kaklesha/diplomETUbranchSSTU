import { FC } from "react";

import "./styled/style.css";

interface IAvatar {
    img: string,
    diameter: number
}

const Avatar: FC<IAvatar> = ({img, diameter}) => {

    return (
       // require(`../../assets/icons/${userInfo["avatar"]}`)
      //  <img className='avatar' src={require(`../../../assets/icons/${img}`)} style={{height: diameter, width: diameter}} />
   
   <img className='avatar' src={img} style={{height: diameter, width: diameter}} />
   
   
      );
};

export default Avatar;