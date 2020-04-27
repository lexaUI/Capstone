
import React, { useState } from "react";
import { View, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import { BoldText } from "../components/UI/BoldText";
import { Messages } from "../Messages";
import EStyleSheet from "react-native-extended-stylesheet";
import { RoundButton } from "../components/UI/RoundButton";

export const MessagesScreen = () => {
	const [search, setSearch] = useState("");

	return (
		<View style={styles.vee}>
			<ScrollView
				name="scroll"
				marginTop="0%"
				height="100%"
				automaticallyAdjustContentInsets={false}
			>
				<BoldText style={styles.convo}>Conversations</BoldText>
				<SearchBar
					name="search"
					lightTheme
					round 
					placeholder="Search friends"
					onChangeText={(value) => setSearch(value)}
					value={search}
				/>
				{Messages.map((user, index) => (
					<ListItem marginLeft={5}
						key={index}
						leftAvatar={{ source: user.pic, size: "large" }}
						title={user.title}
						titleStyle={styles.title}
						subtitle={user.message}
						subtitleStyle={styles.subtitle}
						style={styles.msgItem}
						chevron
						onPress = {()=>this.props.navigation.navigate('ChannelScreen')}
					/>
				))}
				
			</ScrollView>
			<View style={styles.fab}>
				<RoundButton
					size={60}
					color="#ff8282"
					onPress={() => console.log("hello")}
					name="pencil"
				/>
			</View>
		</View>
	);
};

const styles = EStyleSheet.create({
	vee: {
		backgroundColor: 'white'
	},
	convo: {
		paddingTop:50,
		paddingLeft: 40,
		fontWeight:"bold",
		fontSize:"1.8rem",
		color:"#ff8282",
		marginTop:22,
		marginBottom:25
	},
	fab: {
		position: "absolute",
		bottom: 20,
		right: 20,
	},
	title: {
		paddingLeft: 10,
		fontSize: 24,
		color: "#3F3F3F",
	},
	subtitle: {
		paddingLeft: 10,
		paddingTop: 3,
		color: "#A5A5A5",
	},
	msgItem: {
		borderWidth: 0,
		paddingLeft: 20
	},
});

