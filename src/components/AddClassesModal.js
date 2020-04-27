import React, { useState } from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import { BoldText } from "./UI/BoldText";
import { ModalButton } from "./UI/ModalButton";

export const AddClassesModal = ({ visible, addNewClass }) => {
	const [time, setTime] = useState("");
	const [title, setTitle] = useState("");
	const [name, setName] = useState("");

	const handleClick = () => {
		const info = {
			time,
			title,
			name,
		};
		addNewClass(info);
	};

	return (
		<Modal animationType="slide" visible={visible} transparent={true}>
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<BoldText style={{ fontSize: 18, color: "#000", marginBottom: 20 }}>
						Fill in the fields to add a new class
					</BoldText>
					<TextInput
						style={styles.input}
						maxLength={64}
						placeholder="Time of the class"
						value={time}
						onChange={(time) => setTime(time)}
					/>
					<TextInput
						style={styles.input}
						maxLength={30}
						placeholder="Name of the class"
						value={title}
						onChange={(title) => setTitle(title)}
					/>
					<TextInput
						style={styles.input}
						maxLength={30}
						placeholder="Teacher's name"
						value={name}
						onChange={(name) => setName(name)}
					/>
					<ModalButton
						style={{ marginTop: 20 }}
						onPress={() => handleClick()}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fdfdfd",
		width: 300,
		height: 300,
		elevation: 5,
		borderRadius: 5,
		paddingTop: 10,
		paddingBottom: 10,
	},
});
