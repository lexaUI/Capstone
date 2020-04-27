import React, { useState } from "react";
import { Dimensions } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";
import EStyleSheet, { create } from "react-native-extended-stylesheet";

// loading fonts
async function loadApplication() {
	await Font.loadAsync({
		"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
		"roboto-light": require("./assets/fonts/Roboto-Thin.ttf"),
	});
}

// defining rem units
const { width } = Dimensions.get("window");
const rem = width > 360 ? 18 : 14;

// setting global variables
EStyleSheet.build({ $rem: rem });

export default function App() {
	const [isReady, setIsReady] = useState(false);
	
	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={(err) => console.log(err)}
				onFinish={() => setIsReady(true)}
			/>
		);
	}

	return <AppNavigation />;
}