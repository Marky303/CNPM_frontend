import React from "react";
import { Outlet } from "react-router-dom";

// Import Chatbox component
import ChatBubble from "../components/ChatBubble/ChatBubble";

const ChatBubbleLayout = (props) => (
  <>
    <ChatBubble />
    <Outlet />
  </>
);

export default ChatBubbleLayout;
