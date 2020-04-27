import React from "react";
import { StyleSheet } from "react-native";
import { THEME } from "../../../constants/theme";
import { LightText } from "../UI/LightText";

export const Header = ({ children, style }) => {
	return <LightText style={{ ...styles.text, ...style }}>{children}</LightText>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		color: THEME.WHITE,
	},
});
