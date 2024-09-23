import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import Popup from "reactjs-popup";

// Import bubble open button style
import "../../pagestyles/chatbubble.css";

// <img src="/src/assets/gemini.png"></img>

const ChatBubble = () => {
  return (
    <Popup
      trigger={<button className="btn-open-chatbubble"></button>}
      position="right bottom"
      closeOnDocumentClick
    >
      <div
        className="chatbubble-expanded"
        style={{ position: "relative", height: "65dvh", width: "25dvw" }}
      >
        <MainContainer>
          <ChatContainer>
            <ConversationHeader>
              <ConversationHeader.Content
                info="Your useless AI assistant"
                userName="Andrew Taste"
              />
            </ConversationHeader>
            <MessageList>
              <Message
                model={{
                  message:
                    "Can you give me a report of what happened last week",
                  sentTime: "just now",
                }}
              />
              <Message
                model={{
                  message:
                    "Sure, here is the report of what happened last week: 10 people were killed in the school shooting in Arkansas Texas...",
                  sentTime: "just now",
                  direction: "incoming",
                }}
              />
              <Message
                model={{
                  message:
                    "Good, make it 20.",
                  sentTime: "just now",
                }}
              />
            </MessageList>
            <MessageInput placeholder="Type query here" attachButton={false} />
          </ChatContainer>
        </MainContainer>
      </div>
    </Popup>
  );
};

export default ChatBubble;
