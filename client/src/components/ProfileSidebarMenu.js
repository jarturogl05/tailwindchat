import React from 'react'
import messageIcon from '../img/chat.png'
import contactIcon from '../img/user.png'
import settingsIcon from '../img/settings.png'

const elementListStyle = "cursor-pointer hover:bg-purple-400 py-4 transition ease-out duration-500"

const menuElements = [
    {"name": "CHAT", "icon" : messageIcon, "linkTo": "#"  },
    {"name": "CONTACTS", "icon" : contactIcon, "linkTo": "#"  },
    {"name": "SETTINGS", "icon" : settingsIcon, "linkTo": "#"  }
]
export default function ProfileSidebarMenu() {
    return (
        <div className="block text-white uppercase font-bold text-2xl py-5">
        <ul>
            {menuElements && menuElements.map((element) =>(
                          <li className={elementListStyle}>
                          <a className="pl-5">
                             <img src={element.icon} className="inline-block"></img> 
                            <span className="pl-3">{element.name}</span>
                          </a>
                        </li>
            ))}
        </ul>
      </div>
    )
}
