import React from "react";
import {
  CometChatConversationsWithMessages,
  CometChatTheme,
  Palette,
} from "react-ui-kit-testing";

import { Hook } from "./hook";

const MessageTheme = () => {
  const [user, setUser] = React.useState(null);
  const [group, setGroup] = React.useState(null);

  const theme = new CometChatTheme({
    palette: new Palette({
      mode: "dark",
      background: {
        light: "#fff",
        dark: "#432818",
      },
      primary: {
        light: "#dda15e",
        dark: "#dda15e",
      },

      accent500: {
        light: "#fff",
        dark: "#432818",
      },
      accent600: {
        light: "#fff",
        dark: "#39f",
      },
      accent: {
        light: "#bc6c25",
        dark: "#B6F0D3",
      },
      accent100: {
        light: "#fff",
        dark: "#432818",
      },
      accent50: {
        light: "#9e2a2b",
        dark: "#141414",
      },
      accent900: {
        light: "ef476f",
        dark: "black",
      },
    }),
  });

  Hook(setGroup, setUser);
  return user ? (
    <CometChatConversationsWithMessages
      style={{ width: "750px", height: "450px" }}
      user={user}
      group={group}
      theme={theme}
    />
  ) : null;
};

export { MessageTheme };
