import React, { useEffect } from "react";
import "./Buffer.scss";

//img
import logo from "../../assets/icon/xing.svg";

const Buffer = ({ img }) => {
	useEffect(() => {
		setTimeout(() => {
			const reg = document.querySelector(".Buffer");
			reg.style.display = "None";
		}, 2000);
	}, []);
	return (
		<div className="Buffer">
			<div className="Buffer-logo">
				<img className="Buffer-logo-img" src={logo} alt="" />
				<p className="Buffer-logo-name">secure</p>
			</div>
			<p className="Buffer-tagline">Keep your accounts secure</p>
			<img className="Buffer-img" src={img} alt="" />
			<div class="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Buffer;
