'use client'
import Image from "next/image";
import '@/Components/LayoutComponents/Navbar/Navbar.css'
import { inter } from '@/Assets/fonts';
import profile_picture from '@/Assets/images/profile_picture.jpeg';
import down_arrow from '@/Assets/images/down_arrow.png';
import { useState } from 'react';
import NavbarProfileMenu from "../NavbarProfileMenu/NavbarProfileMenu";

export default function Navbar({profileNavigationUrls, settingNavigationUrls}){
    const [openMenu, setOpenMenu] = useState(false);
    

    const openMenuHandler = () =>{
      if(openMenu == false){
        setOpenMenu(true);
      }else{
        setOpenMenu(false)
      }
      console.log(openMenu)
    }

  return (
    <nav className={`${inter.className}`}>
        <p className="logo">CarFit</p>

        <div className="profile-naviagtion-box" onClick={openMenuHandler}>
            <Image alt="profile_pic" src={profile_picture} className="profile-naviagtion-box-profile-picture" width="35" height="35"/>
            <p>Profile</p>
            <Image alt="down_arrow" src={down_arrow} width="16" height="16"/>
        </div>

        {openMenu ? <NavbarProfileMenu 
          profileNavigationUrls={profileNavigationUrls} 
          settingNavigationUrls={settingNavigationUrls}
          /> 
          : <></>}
    </nav>
  );
}
