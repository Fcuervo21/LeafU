import React, { useState } from "react";
import useStyles from "./styles";
import { Grid, Typography, Avatar, Button } from "@mui/material";
import Logo from "../../../assets/images/LeafULogoPNH2.png";
import Input from "./Input";

const LogInCard = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignIn, setIsSignIn] = useState(false);

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleSubmit = () => {};
	const handleChange = () => {};
	const switchMode = () => {
		setIsSignIn((prevIsSignUp) => !prevIsSignUp);
		handleShowPassword(false);
	};

	return (
		<>
			<div className={classes.paperLogin}>
				<div className={classes.logoContainer}>
					<Avatar
						className={classes.logo}
						alt="Logo"
						src={Logo}
						variant="square"
						sx={{ width: "80px", height: "90px" }}
					/>
				</div>

				<Typography variant="h5" sx={{ marginBottom: "2rem" }}>
					{isSignIn ? "Sign In" : "Sign Up"}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignIn ? (
							<>
								<Input
									name="email"
									id=""
									label="Email"
									handleChange={handleChange}
									autoFocus
								/>
								<Input
									name="password"
									label="Password"
									handleChange={handleChange}
									type={showPassword ? "text" : "password"}
									handleShowPassword={handleShowPassword}
								/>
							</>
						) : (
							<>
								<Input
									name="email"
									label="Email Address"
									handleChange={handleChange}
									type="email"
									half
								/>
								<Input
									name="name"
									id=""
									label="Name"
									handleChange={handleChange}
									half
								/>
								<Input
									name="password"
									label="Password"
									handleChange={handleChange}
									type={showPassword ? "text" : "password"}
									handleShowPassword={handleShowPassword}
								/>
								<Input
									name="confirmPassword"
									label="Repeat Password"
									handleChange={handleChange}
									type="password"
								/>
							</>
						)}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ marginTop: "2rem" }}
					>
						{isSignIn ? "Sign In" : "Sign Up"}
					</Button>
				</form>
				<Button sx={{ marginTop: "2rem" }} onClick={switchMode}>
					{isSignIn
						? "You dont have an account?"
						: "You have an account? "}
				</Button>
			</div>
		</>
	);
};

export default LogInCard;
