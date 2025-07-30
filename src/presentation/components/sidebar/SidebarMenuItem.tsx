import React from 'react'
import { NavLink } from 'react-router'

interface Props{
    to:string,
    title:string,
    icon:string,
    description:string
}

export const SidebarMenuItem = ({description, title, to, icon}:Props) => {
  return (
    <>

    <NavLink
           className={({isActive})=> 
            isActive ? 
           'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors'
          : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors'}
          
           to={to} >
            <i className={`${icon} text-2xl mr-4 text-indigo-400 `}></i>
            <div className="flex flex-col grow ">
              <span className="text-white text-lg font-semibold"> 
                {title}
              </span>
              <span className="text-gray-400 text-sm">
                {description}
              </span>
            </div>
          </NavLink>
    
    </>
  )
}
