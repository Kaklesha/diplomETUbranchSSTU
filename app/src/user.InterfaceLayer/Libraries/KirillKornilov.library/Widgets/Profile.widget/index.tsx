import React, { FunctionComponent } from "react";

import ProfileWidgetType from "./type";
import Card from "../../UI_KIT/Atoms/Card.Atom";
import Avatar from "../../UI_KIT/Atoms/Avatar.Atom";
import CheckBox from "../../UI_KIT/Atoms/Checkbox.Atom";
import Media from "../../UI_KIT/Atoms/Media.Atom";
import Button from "../../UI_KIT/Molecules/Button.molecule";
//import {Icons} from "../../UI_KIT/Atoms/Atom1/icons";
import * as S from "./styled";

const ProfileWidget: FunctionComponent<ProfileWidgetType> = () => {
	return (
		<div id="profile-page">
			<Card>
				<S.user_info>
					<S.avatar>
						<Avatar
							//img="avatar.png"
							img={require("../../assets/icons/avatar.png")}
							diameter={150}
						/>
						<a href="#">изменить фото</a>
					</S.avatar>
					<S.user_data>
						<S.nickname>
							<p>Ваш никнейм:</p>
							<input
								type="text"
								value={"username"}
							/>
						</S.nickname>
						
							<p>Ваша почта:</p>
							<input
								type="text"
								value={"username@email.com"}
							/>
							<S.mailing>
								<CheckBox checked={false} />
								<p>Подписаться на рассылку</p>
							</S.mailing>
						
						
							<p>Ваши социальные сети:</p>
							<S.socials_links>
								{/* <Media link="facebook.com" color='#1976D2' logo={Icons.Facebook} />
                        <Media link="#" color='lightgray' logo={Icons.Twitter} /> */}
								<Media
									logo={require("../../assets/icons/facebook.webp")}
									link="facebook.com"
								/>
								<Media
									logo={require("../../assets/icons/twitter.png")}
									link="twitter.com"
								/>
							</S.socials_links>
						
						<Button
							text="Сохрнанить изменения"
							color="#29A19C"
							icon={false}
						/>
					</S.user_data>
				</S.user_info>
			</Card>
		</div>
	);
};

export default ProfileWidget;
