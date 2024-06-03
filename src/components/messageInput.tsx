import { useSocket } from "@/context/socketProvider";
import { useState } from "react";

export default function MessageInput(){
    const {sendMessage} = useSocket()
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
      if (message.trim() === '') return;
   
      // Here you would typically send the message to the server
      console.log('Message sent:', message);
      sendMessage(message)
      setMessage('');
    };




    return (
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border rounded-l text-black"
            placeholder="Type your message..."
            
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Send
          </button>
        </div>
      );

        
    
}