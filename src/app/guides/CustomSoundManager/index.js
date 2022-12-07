import React from "react";

import {
  CometChatMessages,
  MessagesConfiguration,
  MessageListConfiguration,
  CometChatMessageList,
  CometChatTheme,
  CometChatConversationsWithMessages,
} from "react-ui-kit-testing";

import audio from "./resources/audio.mp3";
import incommingAudio from "./resources/sample-incomming.mp3";

import { Hook } from "./hook";

const CustomSoundManager = (props) => {
  const [_user, setUser] = React.useState(null);
  const [_group, setGroup] = React.useState(null);

  const messageListConfig = {
    customIncomingMessageSound: incommingAudio,
  };

  const composerConfig = {
    customOutgoingMessageSound: audio,
  };

  let listConfig = new MessageListConfiguration({});

  Hook(setGroup, setUser);

  return _user ? (
    <>
      <CometChatMessages
        user={_user}
        group={_group}
        alignment={"standard"}
        style={{ width: "700px", height: "500px" }}
        messageTypes={props?.messageTypes}
        messageComposerConfiguration={composerConfig}
        messageListConfiguration={messageListConfig}
        customIncomingMessageSound={incommingAudio}
        customOutgoingMessageSound={audio}
      />
    </>
  ) : null;
};

export { CustomSoundManager };