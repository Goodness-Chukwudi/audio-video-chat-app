import SendMessage from "../../components/chat/sendMessage";
import UsernamePrompt from "../../components/chat/usernamePrompt";
import { useSelector } from "react-redux";
import { getChats, getUser } from "./chatSlice";
import ChatBubble from "../../components/chat/chatBubble";
import { useEffect } from "react";

function ChatView() {
  let chats = useSelector(getChats);
  let user = useSelector(getUser);

  useEffect(() => {

  } );
  

  function viewPreviousChat() {
    //fetch paged chat
  }

  return (
    <div className="chart-view mx-auto mt-5 rounded shadow-lg position-relative text-light">
      <div className="text-center bold rounded-top bg-color">
        {user || "Enter a name for reference"} 
      </div>
      {true && (
        <div
          onClick={viewPreviousChat}
          className="view-previous text-center alert-secondary w-50 mx-auto p-1"
        >
          click to view previous
        </div>
      )}
      <div className="chat-container mt-2 mx-auto overflow-auto">
        {chats.map((chat, i) => {
          return (
            user && (
              <ChatBubble
                message={chat}
                isOwnMessage={user == chat.sender}
                key={i}
              />
            )
          );
        })}
      </div>
      <UsernamePrompt />
      <SendMessage />
    </div>
  );
}

export default ChatView;
