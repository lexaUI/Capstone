import React from "react";
import {
	View,
	StyleSheet,
	Platform,
	TouchableNativeFeedback,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const RoundButton = ({
	style,
	onPress,
	size,
	color,
	name,
	iconColor,
}) => {
	const Wrapper =
		Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
	return (
		<View
			style={{
				...styles.button,
				width: size,
				height: size,
				backgroundColor: color,
				...style,
			}}
		>
			<Wrapper
				background={TouchableNativeFeedback.Ripple("red")}
				activeOpacity={0.8}
				onPress={onPress}
			>
				<Foundation
					name={name}
					style={{
						fontSize: size / 1.8,
						color: iconColor ? iconColor : "#fff",
					}}
				/>
			</Wrapper>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 45,
		elevation: 5,
	},
});
