import Image from 'next/image';
import { ConfirmButton, FormTitle, TopBar } from '../LoginUIComponents/LoginUIComponents';
import './WorkingDays.css';
import edit_icon from '@/Assets/icons/edit_icon.png'
import EditWorkingDay from './EditWorkingDay/EditWorkingDay';
import './EditWorkingDay/EditWorkingDay.css';
import { useContext, useState } from 'react';
import { OnboardingContext } from '@/app/onboard/context';

export function WorkingDays() {

    const [editDayIndex, setEditDayIndex] = useState(null);
    const [editDayData, setEditDayData] = useState(null);
    const [showEditWorkingDay, setShowEditWorkingDay] = useState(false);
    const {workingDays, toogleIsChecked, moveToNextOnboardingStep} = useContext(OnboardingContext)


    return(
        <>
        {showEditWorkingDay ? <EditWorkingDay index={editDayIndex} dayData={editDayData} showEditWorkingDay={()=>{setShowEditWorkingDay(false)}}/> :
        <div className='working-days-container'>

            <TopBar/>

            <FormTitle title="Your Working Days" subtitle="Let clients know when they can book a visit"/>

            <div className='working-days-container-form'>
                {workingDays.map((item, index)=>{
                    console.log(index)
                    return(<WorkingDayCard 
                        key={index} 
                        weekday={item.day} 
                        isChecked={item.isChecked} 
                        open={item.open}
                        close={item.close}
                        toogleisChecked={()=>{toogleIsChecked(index)}}
                        showEditWorkingDay={()=>{
                            setShowEditWorkingDay(true); 
                            setEditDayIndex(index);
                            setEditDayData(item);
                        }}/>)
                })}
            </div>

            <ConfirmButton click={()=>{moveToNextOnboardingStep()}}/>
        </div>
        }
        </>
    );
}

export function WorkingDayCard({weekday, isChecked, open, close, toogleisChecked, showEditWorkingDay=f=>f}){
    return(
        <div className="working-day-card-container">
            <input type="checkbox" checked={isChecked} onChange={toogleisChecked}/>
            <h3>{weekday}</h3>
            <p>{isChecked ? `${open} - ${close}` : "Closed"}</p>
            {isChecked ? <Image src={edit_icon} height={17} width={17} onClick={()=>showEditWorkingDay()}/> : <></>}
        </div>
    )
}