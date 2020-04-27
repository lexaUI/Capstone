import React from "react";
import {View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
    Chat,
    Channel,
    MessageList,
    MessageInput,
} from "stream-chat-expo";

const client = new StreamChat("qk4nn7rpcn75")
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmFwaWQtdm9pY2UtNyJ9.hmYQCBbQ-nETOzoHNVem0ATpSyyHDDUVW8yGvkReah4';

const user = {
    id: 'rapid-voice-7',
    name: 'Rapid voice',
    image: 'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
    render() {
        const channel = chatClient.channel("messaging", "rapid-voice-7");
        channel.watch();

        return (
            <SafeAreaView>
                <Chat client={chatClient}>
                    <Channel channel={channel}>
                        <View style={{ display: "flex", height: "100%" }}>
                            <MessageList />
                            <MessageInput />
                        </View>
                    </Channel>
                </Chat>
            </SafeAreaView>
        );
    }
}

export default class ChannelScreen extends React.Component {
    render() {
        return <ChannelScreen />;
    }
}

/*
await client.setUser({
  id: "jon-snow",
  name: "Jon Snow",
  image: "https://bit.ly/2u9Vc0r",
}, token)

return client;

const channel = client.channel('messaging', 'the-small-council_eOa54BkYC',
    {
        name: "Calculus Group Chat",
        image: "https://bit.ly/2F3KEoM",
        members: ["jon-snow"],
        session: 8 //custom field, can add as many as needed
    }
);

await channel.watch();

return channel;

const message = await channel.sendMessage({
    text: "Did you solve #4 on page 55 yet?"
});

return message;

const messageId = "3ade410c-b3c9-4e03-82a2-6e5d011fe377";

const reaction = await channel.sendReaction(messageId, {
    type: "like"
});

return reaction;

const parent = await channel.sendMessage({
    text: 'I cannot understand what this lesson was about at all ... any help?',
});

const reply = await channel.sendMessage({
    text: "YouTube helped me understand it. Try this video: https://www.youtube.com/watch?v=Y8haMqYwb5I",
    parent_id: parent.message.id,
    customField: 123, //custom field, can add as many as needed
})

channel.on("message.new", event => {
    logEvent(event);
})
await channel.sendMessage({
    text: "What is the difference between integrals and differentials? This exam is going to kill me.",
});
*/