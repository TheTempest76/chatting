import MessageInput from "./messageInput";
import MessageList from "./messagesList";

export default function Chat(){
   return(
      <div className="flex justify-center">
      <div className="flex flex-col h-screen w-2/3 ">
         <div className="flex justify-center">
         <h1 className="text-4xl font-bold border-b ">Chat forum</h1>

         </div>
         
        <MessageList />
        <MessageInput/>
      </div>
      </div>
   
   )                             
}