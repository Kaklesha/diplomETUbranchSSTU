import React from "react";
import { useParams } from "react-router-dom";

const IdCardPage: React.FC = () => {
	const { id } = useParams();

	return <div>IdCardPage {id}</div>;
};

export default IdCardPage;
