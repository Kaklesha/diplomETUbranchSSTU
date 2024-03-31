import React from "react";

import SubTitle from "../../../Atoms/SubTitle/index";
import * as ST from "../styled/styled";
import PayBlock from "../../PayBlock";

interface CheckMethodProps {
	selectedPayment: any;
	selectedDelivery: any;
	payment: any;
	delivery: any;
	handleSelectPayment: any;
	handleSelectDelivery: any;
	textPaymentTitle: any;
	textDeliveryTitle: any;
}

const CheckMethod: React.FC<CheckMethodProps> = ({
	payment,
	delivery,
	selectedPayment,
	selectedDelivery,
	handleSelectPayment,
	handleSelectDelivery,
	textPaymentTitle,
	textDeliveryTitle,
}: CheckMethodProps) => {
	return (
		<ST.container>
			<ST.subtitle>
				<SubTitle title={textPaymentTitle} />
			</ST.subtitle>
			<ST.text>
				{payment.map((pay: any) => (
					<PayBlock
						key={pay.id}
						name={pay.name}
						value={pay.type}
						checked={selectedPayment === pay.type}
						onChange={(e: any) => handleSelectPayment(e.target.value)}
					/>
				))}
			</ST.text>

			<ST.delivery>
				<ST.subtitle>
					<SubTitle title={textDeliveryTitle} />
				</ST.subtitle>
				<ST.text>
					<ST.delivery_block>
						{delivery.map((del: any) => (
							<PayBlock
								key={del.id}
								name={del.name}
								value={del.type}
								checked={selectedDelivery === del.type}
								onChange={(e: any) => handleSelectDelivery(e.target.value)}
							/>
						))}
					</ST.delivery_block>
				</ST.text>
			</ST.delivery>
		</ST.container>
	);
};

export default CheckMethod;
