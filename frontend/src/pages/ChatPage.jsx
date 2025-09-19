import { useChatStore } from "../store/useChatStore";
import NoConversationPlceholder from "../components/NoConversationPlaceholder";
import ChatContainer from "../components/ChatContainer";
import ContactList from "../components/ChatList";
import ChatList from "../components/ChatList";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ProfileHeader from "../components/ProfileHeader";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";

export default function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[800px]">
      <BorderAnimatedContainer>
        {/* Left Side */}
        <div className="w-80 flex flex-col bg-slate-800 backdrop:blur-sm">
          <ProfileHeader />
          <ActiveTabSwitch />
          <div className="flex-1 overflow-y-auto space-y-2 p-4">
            {activeTab === "chats" ? <ChatList /> : <ContactList />}
          </div>
        </div>
        {/* Right side  */}
        <div className="flex-1 flex-col bg-slate-900/50 backdrop-blur-sm">
          {selectedUser ? <ChatContainer /> : <NoConversationPlceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
