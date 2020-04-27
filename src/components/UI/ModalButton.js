import React from "react";
import {
	View,
	StyleSheet,
	Platform,
	TouchableNativeFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LightText } from "./LightText";
import { Entypo } from "@expo/vector-icons";

export const ModalButton = ({ title, style, onPress }) => {
	const Wrapper =
		Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
	return (
		<View style={{ ...styles.button, ...style }}>
			<Wrapper
				background={TouchableNativeFeedback.Ripple("red")}
				activeOpacity={0.8}
				onPress={onPress}
			>
				<Entypo name="add-to-list" style={styles.title} />
			</Wrapper>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 50,
		backgroundColor: "#4043c9",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		elevation: 5,
	},
	title: {
		fontSize: 35,
		color: "#fff",
	},
});
