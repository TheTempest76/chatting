import React from "react";

const messages = [
    { id: 1, user: 'Alice', text: 'Hi there!' },
  { id: 2, user: 'Bob', text: 'Hello!' },
  {id:3 , user: 'sextina' , text :'ddez'}
]

export default function MessageList(){
    return (
        <div>
        {messages.map((message) => (
          <div key={message.id} className="p-2 my-2 border-b">
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
    )
}