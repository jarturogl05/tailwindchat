import React from "react";
import ProfileSidebarMenu from "./ProfileSidebarMenu";

const user = {
  image: "https://picsum.photos/id/237/200/200",
  name: "Jose arturo",
};

export default function ProfileSidebar() {
  return (
      
    <div className="bg-purple-500 max-h-screen min-h-screen col-span-1 flex flex-col  ">
      <div className="flex flex-col items-center pt-40 pb-20">
        <img src={user.image} className="object-cover rounded-full"></img>
        <p className="text-white uppercase font-bold text-xl py-4 ">
          {user.name}
        </p>
      </div>

    <ProfileSidebarMenu></ProfileSidebarMenu>
    </div>
  );
}
