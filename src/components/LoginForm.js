import React from "react";
import { View, StyleSheet } from "react-native";
import { LoginInput } from "./LoginInput";
import { THEME } from "../theme";
import { BoldText } from "./UI/BoldText";
import { LoginButton } from "./UI/LoginButton";

export const LoginForm = () => {
	return (
		<View style={styles.container}>
			<LoginInput title={"Username"} />
			<LoginInput title={"Password"} secure={true} />
			<LoginButton>Log in</LoginButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});
