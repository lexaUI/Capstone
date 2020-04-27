import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { LoginForm } from "../components/LoginForm";
import { Header } from "../components/UI/Header";

export const LoginScreen = () => {
	return (
		<View style={styles.login}>
			<Header style={styles.header}>Welcome back!</Header>
			<LoginForm />
		</View>
	);
};

const styles = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: THEME.LOGIN_BACKGROUND,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		marginBottom: 20,
	},
});
