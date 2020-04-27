import React, { useState } from "react";
import { View, TextInput, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { BoldText } from "./UI/BoldText";
import { RegularText } from "./UI/RegularText";
import { LightText } from "./UI/LightText";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ClassItem = ({
	time,
	title,
	name,
	active,
	total,
	mode,
	onAdd,
}) => {
	const [classTime, setClassTime] = useState("");
	const [classTitle, setClassTitle] = useState("");
	const [teacherName, setTeacherName] = useState("");
	const [check, setCheck] = useState(false);

	const handleClick = () => {
		if (classTime === "" || classTitle === "") {
			setCheck(true);
			return;
		}
		onAdd(classTime, classTitle, teacherName);
		setClassTime("");
		setClassTitle("");
		setTeacherName("");
		setCheck(false);
	};

	return (
		<TouchableOpacity
			onPress={mode === "add" ? () => handleClick() : null}
			activeOpacity={0.8}
			style={styles.touchable}
		>
			{mode === "add" ? (
				<View style={styles.card}>
					<AntDesign style={styles.icon} name="addfile" />
					<View style={styles.container}>
						<TextInput
							autoCapitalize="characters"
							autoCorrect={true}
							style={{ ...styles.input }}
							returnKeyType="go"
							maxLength={64}
							placeholder={check ? "Fill in the field" : "Time of the class"}
							placeholderTextColor={check ? "#e74c3c" : "gray"}
							value={classTime}
							onChangeText={(value) => setClassTime(value)}
						/>
						<TextInput
							autoCapitalize="words"
							autoCorrect={true}
							style={styles.input}
							maxLength={30}
							returnKeyType="go"
							placeholder={check ? "Fill in the field" : "Name of the class"}
							placeholderTextColor={check ? "#e74c3c" : "gray"}
							value={classTitle}
							onChangeText={(value) => setClassTitle(value)}
						/>
						<TextInput
							autoCapitalize="words"
							autoCorrect={true}
							style={styles.input}
							maxLength={30}
							placeholder="Teacher's name"
							placeholderTextColor="gray"
							value={teacherName}
							onChangeText={(value) => setTeacherName(value)}
						/>
						<LightText>Click on the card to add class</LightText>
					</View>
				</View>
			) : (
				<View style={styles.card}>
					<MaterialIcons style={styles.icon} name="class" />
					<View>
						<BoldText style={styles.time}>{time}</BoldText>
						<RegularText style={styles.title}>{title}</RegularText>
						<RegularText style={styles.name}>{name}</RegularText>
						<LightText style={styles.number}>
							{active} of {total}
						</LightText>
					</View>
				</View>
			)}
		</TouchableOpacity>
	);
};

const { width, height } = Dimensions.get("window");

const styles = EStyleSheet.create({
	card: {
		flexDirection: "row",
		alignItems: "center",
		width: width * 0.9,
		height: height * 0.2,
		backgroundColor: "#fdfdfd",
		padding: 10,
		marginBottom: "1rem",
		marginTop: "1rem",
	},
	icon: {
		fontSize: "6rem",
		marginRight: 10,
		color: "#4043c9",
	},
	time: {
		color: "#a9afbc",
		fontSize: "1.5rem",
		marginBottom: 5,
	},
	title: {
		fontSize: "1rem",
		marginBottom: 5,
	},
	name: {
		fontSize: "1rem",
		marginBottom: 5,
	},
	number: {
		fontSize: "1rem",
	},
	touchable: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "#fff",
		elevation: 2, // Android
		marginBottom: 20,
		borderRadius: 5,
	},
	input: {
		fontSize: "1rem",
		borderWidth: 1,
		width: width * 0.5,
		marginBottom: "0.6rem",
		borderRightColor: "transparent",
		borderLeftColor: "transparent",
		borderTopColor: "transparent",
		borderBottomColor: "gray",
	},
});
