import React, { PureComponent } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { BoldText } from "../components/UI/BoldText";
import { StreamChat } from 'stream-chat';
import {
  Avatar,
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelList,
  IconBadge,
} from 'stream-chat-expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import truncate from 'lodash/truncate';

const theme = {
'avatar.image': 'border-radius 500px',
	colors: {
		primary: 'pink',
	},
};
const chatClient = new StreamChat('f7c4tg2pxwtd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGluZ2VyaW5nLWRyZWFtLTIifQ.-VGsFn-7mSx_g0E04o-wmsL7hOrVCP-8Z2nYrJCjsFc';

  const user = {
	id: 'lingering-dream-2',
	name: 'Lingering dream',
	image:
	  'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
  };

chatClient.setUser(user, userToken);

class CustomChannelPreview extends PureComponent {
  channelPreviewButton = React.createRef();

  onSelectChannel = () => {
    this.props.setActiveChannel(this.props.channel);
  };

  render() {
    const { channel } = this.props;
    const unreadCount = channel.countUnread();

    return (
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderBottomColor: '#EBEBEB',
          borderBottomWidth: 0,
          padding: 10,
        }}
        onPress={this.onSelectChannel}
      >
        <Avatar image={channel.data.image} size={40} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontWeight: unreadCount > 0 ? 'bold' : 'normal',
                fontSize: 20,
                flex: 9,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {channel.data.name}
            </Text>
            <IconBadge unread={unreadCount} showNumber>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 11,
                  flex: 3,
                  textAlign: 'right',
                }}
              >
                {this.props.latestMessage.created_at}
              </Text>
            </IconBadge>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class ChannelListScreen extends PureComponent {
	static navigationOptions = () => ({
	  headerTitle: (
		<Text style={styles.convo}>Conversations</Text>
	  ),
	});
  
	render() {
	  return (
		<SafeAreaView>
		  <Chat client={chatClient}>
			<View style={{ display: 'flex', height: '100%', padding: 10 }}>
			  <ChannelList
				filters={{ type: 'messaging', members: { $in: ['lingering-dream-2'] } }}
				sort={{ last_message_at: -1 }}
				Preview={CustomChannelPreview}
				onSelect={(channel) => {
				  this.props.navigation.navigate('Channel', {
					channel,
				  });
				}}
			  />
			</View>
		  </Chat>
		</SafeAreaView>
	  );
	}
  }
  
  class ChannelScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
	  const channel = navigation.getParam('channel');
	  return {
		headerTitle: (
		  <Text style={{ fontWeight: 'bold' }}>{channel.data.name}</Text>
		),
	  };
	};

  render() {
    const { navigation } = this.props;
	const channel = navigation.getParam('channel');
	
    return (
		<SafeAreaView>
		  <Chat client={chatClient}>
			<Channel client={chatClient} channel={channel}>
			  <View style={{ display: 'flex', height: '100%' }}>
				<MessageList />
				<MessageInput />
			  </View>
			</Channel>
		  </Chat>
		</SafeAreaView>
	  );
	}
  }

  const RootStack = createStackNavigator(
	{
	  ChannelList: {
		screen: ChannelListScreen,
	  },
	  Channel: {
		screen: ChannelScreen,
	  },
	},
	{
	  initialRouteName: 'ChannelList',
	},
  );

  const AppContainer = createAppContainer(RootStack);

  /*class MessageScreen extends React.Component {
	render() {
	  return <AppContainer />;
	}
  } */
  export const MessagesScreen = () => {
  return <AppContainer />
}
const styles = EStyleSheet.create({
	convo: {
		paddingTop:2,
		fontWeight:"bold",
		fontSize:32,
		color:"#ff8282",
	}
});