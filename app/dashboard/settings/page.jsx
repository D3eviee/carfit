'use client'

import { useState } from "react";
import './page.css'
import { GoHome } from "react-icons/go";
import Link from "next/link";
import ContentContainer from '../_components/ContentContainer';


export default function SettingsPage() {

  const [activePage, setActivePage] = useState(0);

  return (
    <ContentContainer>
      <div className="settings-page-title">
        <h1 >Settings</h1>
        <h3>Manage your business information, set up marketing options, calendar, mange workers permissions and more.</h3>
      </div>
      <div className="settings-page-menu">
        <div className={`settings-page-menu-item ${activePage == 0 ? "active" : ""}`} onClick={()=>setActivePage(0)}>Business</div>
        <div className={`settings-page-menu-item ${activePage == 1 ? "active" : ""}`} onClick={()=>setActivePage(1)}>Marketing</div>
        <div className={`settings-page-menu-item ${activePage == 2 ? "active" : ""}`} onClick={()=>setActivePage(2)}>Other</div>
      </div>
      
      <div className="settings-page-grid">
        <SettingGridItem title="Business Information" description="Check and edit details about your business, manage locations, client source and provide social media links" />
        <SettingGridItem title="Business Information" description="Check and edit details about your business, manage locations, client source and provide social media links" />
        <SettingGridItem title="Business Information" description="Check and edit details about your business, manage locations, client source and provide social media links" />
        <SettingGridItem title="Business Information" description="Check and edit details about your business, manage locations, client source and provide social media links" />
        <SettingGridItem title="Business Information" description="Check and edit details about your business, manage locations, client source and provide social media links" />
        <SettingGridItem title="Business Information" description="Check and edit details about your business, manage locations, client source and provide social media links" />
      </div>
      </ContentContainer>
  );
}

export function SettingGridItem({title, description}){
  return(
    <Link href="settings/business?tab=details">
    <div className="settings-page-grid-item">
      {<GoHome className="settings-page-grid-item-icon" size={70} color="#F25287"/>}
      <div className="settings-page-grid-item-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </Link>
  )
}
