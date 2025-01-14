import '@/Components/LoginComponents/AddServices/AddServices.css';
import {FormTitle, TopBar, EndRegisteringButton} from '../LoginUIComponents/LoginUIComponents';
import Image from 'next/image';
import close_icon from '@/Assets/icons/close_icon.png';
import edit_icon from '@/Assets/icons/edit_icon.png'
import { AddNewService } from './AddNewService/AddNewService';
import { useState, useContext } from 'react';
import { OnboardingContext } from '@/app/onboard/context';
import { EditNewService } from './EditNewService/EditNewService';

export function AddServices(){
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeEditData, setActiveEditData] = useState(null);

    const {services, deleteService, handleRegisteringBusiness} = useContext(OnboardingContext);

    const showActiveTab = (activeTabIndex) => {
        if(activeTabIndex == 0){
            return(
                <div className='add-services-container'>
                    <TopBar/>
                    <FormTitle title="Add Services" subtitle="Add services that your company offers. Set prices and assign estimated time that a service takes."/>

                    <div className='add-services-container-form'>
                        {services.map((service, index)=>{
                            return(
                                <Service 
                                serviceName={service.serviceName} 
                                serviceCategory={service.serviceCategory} 
                                servicePrice={service.servicePrice}
                                serviceDuration={service.serviceDuration} 
                                deleteService = {()=>{deleteService(index)}} 
                                editService = {()=>{setActiveTabIndex(2); setActiveEditData({index , ...service})}}
                            />)
                        })}

                        <div className='add-services-container-form-add-service' onClick={()=>{setActiveTabIndex(1)}}>
                            <h3>+</h3>
                            <p> Add service </p>
                        </div>
                        <EndRegisteringButton click={()=>{(handleRegisteringBusiness())}}/>
                    </div>   
                </div>
            )
        }
        else if(activeTabIndex==1){
                return (<AddNewService showAddNewService={()=>{setActiveTabIndex(0)}}/>)
        }else if(activeTabIndex==2){
                return(<EditNewService data={activeEditData} showAddNewService={()=>{setActiveTabIndex(0)}}/>)
        }
    }

    return(
        showActiveTab(activeTabIndex)
    )
}

export function Service({deleteService, editService, serviceName, serviceCategory, serviceDuration, servicePrice, showAddNewService= f=>f}) {
    return(
        <div className='service-container'>
            <h3>{serviceName}</h3>
            <p>{serviceDuration}</p>
            <h4>{servicePrice}$</h4>
            <div className='service-container-left'>
                <Image src={edit_icon} height={17} width={17} onClick={()=>{editService()}}/>
                <Image src={close_icon} height={22} width={22} onClick={()=>{deleteService()}}/>
            </div>
        </div>
    )
}