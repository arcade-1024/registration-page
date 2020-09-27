import React from "react";
import "./SuccessPage.scss";

//img
import Check from "../../assets/icon/check.png";
const SuccessPage = () => {
	return (
		<div className="Success">
			<div className="Success-div">
				<img src={Check} alt="" />
			</div>
			<h1 className="Success-text">Congrats! all done</h1>
			<button className="Success-continue">Continue</button>
		</div>
	);
};

export default SuccessPage;
