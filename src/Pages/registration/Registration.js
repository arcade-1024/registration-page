import React, { useState } from "react";
import { Route } from "react-router-dom";

import "./Registration.scss";

//pages
import Information from "../information/Information";
import Authenticate from "../authenticate/Authenticate";
import Details from "../details/Details";
import Fingerprint from "../fingerprint/Fingerprint";
import SuccessPage from "../../Pages/successPage/SuccessPage";

//images
import Buffer from "../buffer/Buffer";
import accessAccount from "../../assets/icon/Access_account.svg";
import secureLogin from "../../assets/icon/secure_login.svg";
import secureSheild from "../../assets/icon/Security_on.svg";
import toStar from "../../assets/icon/step_to_the_sun.svg";

const Registration = () => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="Registration">
			<Buffer img={toStar} />
			<Route
				exact={true}
				path="/"
				component={() => (
					<Information
						img={accessAccount}
						email={email}
						phone={phone}
						setEmail={setEmail}
						setPhone={setPhone}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/auth"
				component={() => (
					<Authenticate
						img={secureLogin}
						phone={phone}
						code={code}
						setCode={setCode}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/del"
				component={() => (
					<Details
						setName={setName}
						setAddress={setAddress}
						setPassword={setPassword}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/fig"
				component={() => <Fingerprint img={secureSheild} />}
			/>
			<Route exact={true} path="/success" component={SuccessPage} />
		</div>
	);
};
export default Registration;
