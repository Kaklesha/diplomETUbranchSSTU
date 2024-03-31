import { Icons, Icon } from "../../Atoms/Atom1/icons";
import * as S from "./styled";

const Logo =()=>{

return(
    <S.logo>
        <Icon width={54} height={54} color="#29A19C" icon={Icons.Clipboard}  />
        <p>
            Tasks <br />
            Book
        </p>
    </S.logo>

);

};

export default Logo;
