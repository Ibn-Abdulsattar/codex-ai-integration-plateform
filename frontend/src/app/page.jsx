import ChatInput from "@/components/chatInput/ChatInput";
import UserLayout from "@/layout/userLayout/UserLayout";

export default function Home() {
  return (
    <UserLayout>
      <div className="flex flex-col justify-between h-full">
        {/* Chat*/}
        <div>
          <h1 className="bg-[#212121]">Home</h1>
        </div>

        {/* Chat Input Bar */}
        <div className="">
          <ChatInput />
        </div>
      </div>
    </UserLayout>
  );
}
