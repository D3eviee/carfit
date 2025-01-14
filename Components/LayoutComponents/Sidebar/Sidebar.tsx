'use client'
import { usePathname } from 'next/navigation'
import '@/Components/LayoutComponents/Sidebar/Sidebar.css';
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

export default function Sidebar(){

  const path = usePathname();
  const activePage = path!.split("/")[2];

  return (
    <aside className="sidebar-container">
      <Link href="/dashboard">
        <div className={`sidebar-container-option ${path == "/dashboard" ? "active-link" : ""}`}>
          <GoHome size={25} color="#FFFFFF"/>
        </div>
      </Link>
      <div className="sidebar-container-option">
        <IoCalendarOutline size={24} color="#FFFFFF"/>
      </div>
      <div className="sidebar-container-option">
        <FaBookOpen size={23} color="#FFFFFF"/>
      </div>
      <div className="sidebar-container-option">
        <FaWrench size={23} color="#FFFFFF"/>
      </div>
      <div className="sidebar-container-option">
        <RiTeamFill size={26} color="#FFFFFF"/>
      </div>
      <div className="sidebar-container-option">
        <FaHandshakeSimple size={26} color="#FFFFFF"/>
      </div>
      <div className="sidebar-container-option">
        <FaChartLine size={24} color="#FFFFFF"/>
      </div>
      <Link href="/dashboard/settings">
        <div className={`sidebar-container-option ${activePage == "settings" ? "active-link" : ""}`}>
          <IoMdSettings size={27} color="#FFFFFF"/>
        </div>
      </Link>
    </aside>
  );
}
