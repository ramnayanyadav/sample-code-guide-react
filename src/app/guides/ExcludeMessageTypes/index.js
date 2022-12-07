import React from "react";
import {
  MessageTypeConstants,
  CometChatMessageTemplate,
} from "react-ui-kit-testing";

import { Hook } from "./hook";
import { CometChatMessages } from "react-ui-kit-testing";

const ExcludeMessageTypes = () => {
  const [user, setUser] = React.useState(null);
  const [group, setGroup] = React.useState(null);

  const _excludeMessageTypes = [
    // MessageTypeConstants.image,
    MessageTypeConstants.file,
    // MessageTypeConstants.poll,
    MessageTypeConstants.document,
  ];

  const messageConfig = {
    sentMessageInputData: {
      thumbnail: false,
      title: false,
      time: true,
      readReceipt: true,
    },
    receivedMessageInputData: {
      thumbnail: true,
      title: true,
      time: true,
      readReceipt: false,
    },
    excludeMessageType: [
      MessageTypeConstants.text,
      MessageTypeConstants.image,
      MessageTypeConstants.file,
      MessageTypeConstants.poll,
      MessageTypeConstants.sticker,
      MessageTypeConstants.document,
    ],
  };

  let messageTypes = CometChatMessageTemplate.getDefaultTypes();
  let paymentTemplate = new CometChatMessageTemplate({
    type: "payment",
    icon: "assets/credit-card.png",
    name: "Payment",
    // customView: this.customView,
    //actionCallback: this.openPaymentTab,
  });
  // messageTypes.push(paymentTemplate);

  const composerConfig = {
    excludeMessageTypes: _excludeMessageTypes,
  };

  const messageListConfig = {
    excludeMessageTypes: [
      MessageTypeConstants.file,
      MessageTypeConstants.whiteboard,
      MessageTypeConstants.document,
      // MessageTypeConstants.poll,
    ],
    // messageTypes: messageTypes,
    // customMessageOptions: [
    //   MessageOptionConstants.shareMessage,
    //   MessageOptionConstants.forwardMessage,
    //   MessageOptionConstants.editMessage,
    // ],
    // excludeMessageOptions: [
    //   MessageOptionConstants.deleteMessage,
    //   MessageOptionConstants.reactToMessage,
    //   MessageOptionConstants.editMessage,
    //   MessageOptionConstants.copyMessage,
    // ],
  };

  const excludeMessageTypes = [
    MessageTypeConstants.file,
    MessageTypeConstants.whiteboard,
    MessageTypeConstants.document,
    MessageTypeConstants.poll,
    MessageTypeConstants.image,
    MessageTypeConstants.text,
  ];

  Hook(setGroup, setUser);

  return user ? (
    <CometChatMessages
      user={user}
      alignment={"standard"} //standard, leftAligned
      style={{ width: "750px", height: "500px" }}
      messageListConfiguration={messageListConfig}
      messageComposerConfiguration={composerConfig}
    />
  ) : null;
};

export { ExcludeMessageTypes };
