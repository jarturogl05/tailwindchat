import React from 'react'
import ConversationCard from './ConversationCard'

const conversations = [
  {
    name: "El furias",
    msg: "Las weas tan buenas",
    date: "07/05",
    unread: 2,
    image: "https://picsum.photos/id/1074/100/100",
  },
  {
    name: "Jose",
    msg: "Las weas tan buenas",
    date: "07/05",
    unread: 5,
    image: "https://picsum.photos/id/1025/100/100",
  },
  {
    name: "Arturo",
    msg: "Las weas tan buenas",
    date: "07/05",
    unread: 1,
    image: "https://picsum.photos/id/1024/100/100",
  },
];

export default function Conversations() {
    return (
        <div className="max-h-screen min-h-screen  overflow-y-auto">          
        
        <div className="container px-10 pt-24">
            <h1 className="text-4xl pb-10">Conversations</h1>

            {conversations && conversations.map((conversation) =>(
                
                <ConversationCard conversation={conversation} ></ConversationCard>

            ))}
        </div>
        </div>
    )
}
