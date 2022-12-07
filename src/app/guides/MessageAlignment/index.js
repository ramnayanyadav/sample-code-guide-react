import React from "react";
import { CometChatMessageList } from "react-ui-kit-testing";
import { Hook } from "./hook";

const MessageAlignment = () => {
  const [user, setUser] = React.useState(null);
  const [group, setGroup] = React.useState(null);

  Hook(setGroup, setUser);

  return user ? (
    <CometChatMessageList
      user={user}
      // group={group}
      alignment={"standard"} //['standard','leftAligned']
      style={{ width: "700px", height: "500px" }}
      // sentMessageInputData={{
      //   thumbnail: false,
      //   title: false,
      //   time: true,
      //   readReceipt: true,
      // }}
      // receivedMessageInputData={{
      //   thumbnail: false,
      //   title: false,
      //   time: true,
      //   readReceipt: false,
      // }}
    />
  ) : null;
};

export { MessageAlignment };
