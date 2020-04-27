import React, { useState } from "react";
import { View, Picker, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const DayPicker = ({ onChange }) => {
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const curDay = days[new Date().getDay() - 1];
	const [selectedValue, setSelectedValue] = useState(curDay);

	const changeHandler = (itemValue, itemIndex) => {
		onChange(itemIndex);
		setSelectedValue(itemValue);
	};

	const { width, height } = Dimensions.get("window");

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={selectedValue}
				onValueChange={changeHandler}
				mode="dropdown"
				style={{
					height: 30,
					width: width * 0.4,
					marginTop: 9,
				}}
			>
				{days.map((day, index) => {
					return <Picker.Item key={index} label={day} value={day} />;
				})}
			</Picker>
		</View>
	);
};

const styles = EStyleSheet.create({
	container: {
		width: 130,
		height: 32,
	},
});
