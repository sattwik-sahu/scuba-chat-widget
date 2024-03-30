import * as React from "react";
import "./index.css";
import RevealButton from "./RevealButton";
import { AiOutlineMessage } from "react-icons/ai";

const ChatWidget: React.FC = () => {
  const [showChat, setShowChat] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (showChat) {
      console.log("Chat available");
    } else {
      console.log("Chat hidden");
    }
  }, [showChat]);

  return (
    <div className="chat_widget">
      <RevealButton
        reveal={() => {
          setShowChat(true);
        }}
        icon={
          <>
            <AiOutlineMessage size={24} />
          </>
        }
      />
    </div>
  );
};

export default ChatWidget;
