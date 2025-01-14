import '../StaffMembers/StaffMembers.css'
import { ConfirmButton, FormTitle, TopBar } from '../LoginUIComponents/LoginUIComponents'
import {useContext, useState } from 'react'
import { AddStaffMembers } from './AddStaffMembers/AddStaffMembers';
import Image from 'next/image';
import edit_icon from "@/Assets/icons/edit_icon.png"
import { OnboardingContext } from '@/app/onboard/context';
import { EditStaffMember } from './EditStaffMember/EditStaffMember';

export function StaffMembers() {
    const {staff, moveToNextOnboardingStep}  = useContext(OnboardingContext);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeEditData, setActiveEditData] = useState(null);

    const showActiveTab = (activeTabIndex) => {
        if(activeTabIndex==0){
            return(
                <div className='stuff-members-container'>
                    <TopBar/>
                    <FormTitle title="Add Stuff Members" subtitle="You can add information about your team. This will let you add profiles of your workers, assign their calendars, services and adjusting their working hours"/>

                    <div className='stuff-members-container-form'>
                        {staff.map((item, index)=>{
                            return (<Member key={index} name={item[0]} position={item[3]} openEditTab={()=>{setActiveEditData([index,...item]); setActiveTabIndex(2); }}/>)
                        })}
                        <div className='stuff-members-container-form-add-members' onClick={()=>{setActiveTabIndex(1)}}>
                            <h3>+</h3>
                            <p> Add stuff member</p>
                        </div>
                    </div>
                    <ConfirmButton click={()=>moveToNextOnboardingStep()}/>
                </div>
        );
        }else if(activeTabIndex==1){
            return (<AddStaffMembers showAddStaff={()=>{setActiveTabIndex(0)}}/>)
        }else if (activeTabIndex==2){
            return (<EditStaffMember
                data={activeEditData} 
                showAddStaff={()=>{setActiveTabIndex(0)}} 
            />)
        }
    }

    return(
        <>
        {showActiveTab(activeTabIndex)}
        </>
    )
}

export function Member({name, position, openEditTab}) {
    return(
        <div className='stuff-members-container-form-member' >
            <div>
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
            <Image src={edit_icon} height={17} width={17} onClick={()=>{openEditTab()}}/>
        </div>
    )
}