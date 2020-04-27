import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { THEME } from "../theme";

export const LoginInput = ({ title, secure }) => {
	const [active, setActive] = useState(false);

	const styles = StyleSheet.create({
		input: {
			backgroundColor: active ? "#FCF9C6" : THEME.INPUT_BG,
			width: 250,
			height: 50,
			paddingLeft: 10,
			fontSize: 16,
			marginBottom: 7,
			color: "#AAAAA0",
			fontFamily: "roboto-regular",
		},
	});

	return (
		<TextInput
			secureTextEntry={secure}
			style={styles.input}
			placeholder={title}
			maxLength={32}
			onFocus={() => setActive(true)}
			onEndEditing={() => setActive(false)}
		></TextInput>
	);
};
