import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
	MaterialCommunityIcons,
	MaterialIcons,
	Entypo,
} from "@expo/vector-icons";
import { HelloScreen } from "../screens/HelloScreen";
import { ClassesScreen } from "../screens/ClassesScreen";
import { MessagesScreen } from "../screens/MessagesScreen";

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
	return (
		<Tab.Navigator
			activeColor="#ff8282"
			inactiveColor="#223063"
			barStyle={{ backgroundColor: "#fdfdfd", elevation: 15 }}
			initialRouteName="Home"
		>
			<Tab.Screen
				name="Home"
				component={HelloScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Classes"
				component={ClassesScreen}
				options={{
					tabBarLabel: "Classes",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="class" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Private Chats"
				component={MessagesScreen}
				options={{
					tabBarLabel: "Private Chats",
					tabBarIcon: ({ color }) => (
						<Entypo name="chat" color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
