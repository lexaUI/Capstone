
import React from "react";
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BoldText } from "../components/UI/BoldText";
import EStyleSheet from "react-native-extended-stylesheet";
import { StreamApp, FlatFeed, Activity, LikeButton, StatusUpdateForm, } from 'expo-activity-feed';

const CustomActivity = (props) => {
	return (
	  <Activity
		{...props}
		Footer={
		  <LikeButton {...props} />
		}
	  />
	);
  };

export const HelloScreen = () => {
	return(
    	<SafeAreaProvider >
			<BoldText style={styles.headerTitle}>Activity</BoldText>
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
        <StreamApp
          apiKey="3q8772q3qyte"
          appId="77207"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.Obh2rYY1BKVfA5t8LcH8DjYFytwThce3HojaUnAwne8"
        >
          <FlatFeed Activity={CustomActivity} />
          <StatusUpdateForm feedGroup="timeline" />
        </StreamApp>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = EStyleSheet.create({
	headerTitle: {
		paddingTop:2,
		paddingLeft: 43,
		fontWeight:"bold",
		fontSize:32,
		color:"#ff8282",
		marginTop:70,
	},
	bkg: {
		backgroundColor: "#f9f9f7",
	}
});