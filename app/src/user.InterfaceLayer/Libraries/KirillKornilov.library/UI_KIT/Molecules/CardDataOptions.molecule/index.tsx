import { FC } from "react";

import { ICardData } from "../../Atoms/CardData.Atom";
import * as S from "./styled";

const CardDataOptions: FC<ICardData> = ({ title, children, callback }) => {
	return (
		<article>
			<S.column_card>
				<S.title_box>
					<p className="title">{title}</p>

					{callback ? (
						<button onClick={(event) => callback(event)}>• • •</button>
					) : (
						<button>• • •</button>
					)}
				</S.title_box>

				<div className="children">{children}</div>
			</S.column_card>
		</article>
	);
};

export default CardDataOptions;
