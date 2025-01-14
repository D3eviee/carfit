import './page.css'
import ContentContainer from "../../_components/ContentContainer";
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import tesla_service from '@/Assets/images/tesla_service.jpg'
import Image from 'next/image';
import { RiMoreFill } from "react-icons/ri";


export default async function SettingsPage({searchParams}) {
  const params  = await searchParams;
  const activeTab = params.tab;

  if (activeTab === "details") {
    var title = "Business details";
  } else if (activeTab === "locations"){
    var title = "Locations";
  } else if (activeTab === "links"){
    var title = "Social links";
  }

  return (
    <ContentContainer>
      <div className="settings-page-navigation">
        <Link href="/dashboard/settings"><IoMdArrowBack  className="settings-page-navigation-arrow" color='#FFFFFF'/></Link>
        <div className='settings-page-navigation-title'>
        <p><span>Business | </span> Business Information</p>
        </div>
      </div>
      
      <div className='settings-page-content'>
        <div className="settings-page-sub-navigation">
          <h2 className="settings-page-sub-navigation-title">Business Information</h2>
          <div className="settings-page-sub-navigation-tabs">
            <Link href={'?tab=details'}>
              <p className={activeTab === 'details' ? 'settings-page-sub-navigation-tabs-active' : ''}>Business details</p>
            </Link>
            <Link href={'?tab=locations'}>
              <p className={activeTab === 'locations' ? 'settings-page-sub-navigation-tabs-active' : ''}>Locations</p>
            </Link>
            <Link href={'?tab=links'}>
              <p className={activeTab === 'links' ? 'settings-page-sub-navigation-tabs-active' : ''}>Social links</p>
            </Link>
          </div>
        </div>
        <div className="settings-page-content-right">
          <div className="settings-page-content-title">
            <h2>{title}</h2>
            <p>Set your business name, country  and language preferences. Add social media links to your profile.</p>
          </div>

          {activeTab === "details" && <BusinessDetailsForm/>}
          {activeTab === "locations" && <BusinessLocationsForm/>}
          {activeTab === "links" && <BusinessSocialLinksForm/>}
        </div>
      </div>
      
    </ContentContainer>
  );
}

export function BusinessDetailsForm(){
  return(
    <div className="settings-page-content-form">
      <div className='settings-page-content-form-button-container'>
        <button className='settings-page-content-form-button'>Edit</button>
      </div>

      <div className="settings-page-content-form-grid">
        <div className="settings-page-content-form-grid-item">
          <h3>Business name</h3>
          <p>Auto car service</p>
        </div>
        <div className="settings-page-content-form-grid-item">
          <h3>Language</h3>
          <p>English</p>
        </div>
        <div className="settings-page-content-form-grid-item">
          <h3>Country</h3>
          <p>United States</p>
        </div>
        <div className="settings-page-content-form-grid-item">
          <h3>Currency</h3>
          <p>USD</p>
        </div>
      </div>
    </div>
  )
}

export function BusinessLocationsForm(){
  return(
    <div className="settings-page-content-form">
      <div className='settings-page-content-form-button-container'>
        <button className='settings-page-content-form-button'>Edit</button>
      </div>

      <div className="settings-page-content-form-locations">
        <div className="settings-page-content-form-locations-item">
          <Image src={tesla_service} alt="service-image" width={149} height={88}/>
          <div className="settings-page-content-form-locations-item-title">
            <RiMoreFill className='settings-page-content-form-locations-item-title-icon'/>
            <h2>Tesla Auto Service</h2>
            <h4>1921 Calico Drive | Kennewick | Washington</h4>
          </div>
        </div>
      </div>

      <div className="settings-page-content-form-locations">
        <div className="settings-page-content-form-locations-item">
          <Image src={tesla_service} alt="service-image" width={149} height={88}/>
          <div className="settings-page-content-form-locations-item-title">
            <RiMoreFill className='settings-page-content-form-locations-item-title-icon'/>
            <h2>Tesla Auto Service</h2>
            <h4>1921 Calico Drive | Kennewick | Washington</h4>
          </div>
        </div>
      </div>
      <div className="settings-page-content-form-locations">
        <div className="settings-page-content-form-locations-item">
          <Image src={tesla_service} alt="service-image" width={149} height={88}/>
          <div className="settings-page-content-form-locations-item-title">
            <RiMoreFill className='settings-page-content-form-locations-item-title-icon'/>
            <h2>Tesla Auto Service</h2>
            <h4>1921 Calico Drive | Kennewick | Washington</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BusinessSocialLinksForm(){
  return(
    <div className="settings-page-content-form">
      <div className='settings-page-content-form-button-container'>
        <button className='settings-page-content-form-button'>Edit</button>
      </div>

      <div className="settings-page-content-form-grid">
        <div className="settings-page-content-form-grid-item">
          <h3>Facebook</h3>
          <p>https://www.facebook.com</p>
        </div>
        <div className="settings-page-content-form-grid-item">
          <h3>Instagram</h3>
          <p>To be provided</p>
        </div>
        <div className="settings-page-content-form-grid-item">
          <h3>Website</h3>
          <p>To be provided</p>
        </div>
        <div className="settings-page-content-form-grid-item">
          <h3>Currency</h3>
          <p>To be provided</p>
        </div>
      </div>
    </div>
  )
}