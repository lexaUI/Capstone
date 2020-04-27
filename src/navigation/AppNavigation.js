import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation } from "./BotttomNavigation";

export const AppNavigation = () => {
	return (
		<NavigationContainer>
			<BottomNavigation />
		</NavigationContainer>
	);
};
