import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const SocialButton = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.socialButton}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	socialButton: {
		color: THEME.LOGIN_BTN_COLOR,
		marginRight: 15,
		backgroundColor: THEME.LOGIN_BTN_BG,
		padding: 10,
	},
	container: {
		marginTop: 15,
	},
});
