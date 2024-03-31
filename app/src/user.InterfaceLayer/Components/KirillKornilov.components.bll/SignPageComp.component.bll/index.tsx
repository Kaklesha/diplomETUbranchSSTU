import React from "react";
import { usePostAuthMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import SignWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Sign.widget";

const SignPageComp = () => {

    return (
      
        <SignWidget usePostAuthMutation={usePostAuthMutation}/>

     );
};

export default SignPageComp;