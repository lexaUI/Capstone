import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { THEME } from "../../../constants/theme";

export const LoginButton = ({
	children,
	color = THEME.LOGIN_BTN_COLOR,
	onPress,
}) => {
	return (
		<TouchableNativeFeedback activeOpacity={0.8} onPress={onPress}>
			<View>
				<Text onPress={onPress} style={{ ...styles.button, color: color }}>
					{children}
				</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	button: {
		textAlign: "center",
		backgroundColor: THEME.LOGIN_BTN_BG,
		width: 250,
		height: 50,
		paddingLeft: 10,
		paddingTop: 14,
		marginTop: 20,
		marginBottom: 7,
		fontSize: 16,
		textTransform: "uppercase",
	},
});
