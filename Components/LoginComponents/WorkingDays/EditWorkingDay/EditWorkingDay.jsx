import { use, useContext, useState } from 'react';
import './EditWorkingDay.css';
import { OnboardingContext } from '@/app/onboard/context';

export default function EditWorkingDay({index, dayData, showEditWorkingDay=f=>f}) {
    const {changeOpeningHours} = useContext(OnboardingContext)

    const [openingHour, setOpeningHour] = useState("7:00")
    const [closingHour, setClosingHour] = useState("18:00")

    function handleChangingOpeningHours(){
        changeOpeningHours(index, openingHour, closingHour);
        showEditWorkingDay();
    }

    console.log(openingHour)

     function TimePicker(hour, setNewHour) {
        const times = Array.from({ length: 45 }, (_, i) => {
          const hours = Math.floor((7 * 60 + i * 15) / 60);
          const minutes = (7 * 60 + i * 15) % 60;
          const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
          return (
            <option key={time} value={time}>
              {time}
            </option>
          );
        });
      
        return (
          <select defaultValue={hour} onChange={(e)=>{setNewHour(e.target.value)}}>
            {times}
          </select>
        );
      }

    return(
        <div className='edit-working-day-container'>
            <div className='edit-working-day-container-title'>
                <h4>{dayData.day}</h4>
            </div>

            <div className='edit-working-day-container-form'>
                <div className='edit-working-day-container-form-box'>
                    <p>Opening hours</p>
                    <div className='edit-working-day-container-form-inputs'>
                        <div className='edit-working-day-container-form-inputs-open'>
                            {TimePicker(openingHour, setOpeningHour)}
                        </div>
                        <div className='edit-working-day-container-form-inputs-close'>
                            {TimePicker(closingHour, setClosingHour)}
                        </div>
                    </div>       
                </div>            
            </div>

            <div className='add-stuff-members-container-buttons'>
                <div className='add-stuff-members-container-buttons-cancel' onClick={()=>showEditWorkingDay()}>CANCEL</div>
                <div className='add-stuff-members-container-buttons-add' onClick={()=>handleChangingOpeningHours()}>SAVE</div>
            </div>
        </div>
    );
}