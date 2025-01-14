import Image from "next/image";
import '@/Components/LayoutComponents/NavbarProfileMenu/NavbarProfileMenu.css'
import NavbarProfileMenuOption from "@/Components/LayoutComponents/NavbarProfileMenuOption/NavbarProfileMenuOption"
import profile_picture from '@/Assets/images/profile_picture.jpeg';

import analytics_icon from '@/Assets/icons/analytics_icon.png';
import team_icon from '@/Assets/icons/team_icon.png';
import logout_icon from '@/Assets/icons/logout_icon.png';
import setting_icon from '@/Assets/icons/setting_icon.png';
import subscription_icon from '@/Assets/icons/subscription_icon.png';
import support_icon from '@/Assets/icons/support_icon.png';
import user_icon from '@/Assets/icons/user_icon.png';

export default function NavbarProfileMenu({profileNavigationUrls, settingNavigationUrls}) {
    
  const menuOptions = [["View profile", user_icon]]
  const settingOptions = [["Settings", setting_icon], ["Support", support_icon]];

  return (
    <div className="menu-box">
      <div className="menu-box-profile-name">
        <Image alt="profile_picture" src={profile_picture} width={35} height={35}/>
        <div className="menu-box-profile-name-data">
          <h5>Hipolit Roszkowski</h5>
          <p>Owner</p>
        </div>      
      </div>

      {menuOptions.map(([title, image], index)=>{
          return <NavbarProfileMenuOption key={index} title={title} image={image} link={profileNavigationUrls[index]} />
      })}

      <hr></hr>

      {settingOptions.map(([title, image], index)=>{
          return <NavbarProfileMenuOption key={index} title={title} image={image} link={settingNavigationUrls[index]}/>
      })}

      <hr></hr>

      <NavbarProfileMenuOption title={"Log out"}  link="" image={logout_icon}/>
    </div>
  );
}