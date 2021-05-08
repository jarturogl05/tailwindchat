import React from "react";

const cardStyle =
  "hover:shadow-lg rounded-xl bg-white border-gray-200 shadow-md overflow-hidden relative cursor-pointer my-5";

export default function ConversationCard(props) {
  return (  
    <div className={cardStyle}>
      <div className="flex">
        <img
          src={props.conversation.image}
          className="rounded-full p-2"
        ></img>

        <div className="flex justify-between w-full items-center p-4">
          <div className="flex flex-col">
            <p className="font-bold">{props.conversation.name}</p>
            <p className="">{props.conversation.msg}</p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <p>{props.conversation.date}</p>
            <div className="rounded-full h-7 w-7 flex items-center justify-center  bg-red-600 text-white text-lg ">
              {props.conversation.unread}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
