import Image from 'next/image'
import { TextInput } from '../../LoginUIComponents/LoginUIComponents'
import '../AddStaffMembers/AddStaffMembers.css'
import us_flag_icon from '@/Assets/icons/us_flag_icon.png'
import { useContext, useRef } from 'react'
import { OnboardingContext } from '@/app/onboard/context'

export function AddStaffMembers({showAddStaff=f=>f}) {
    const {addNewStaffMember} = useContext(OnboardingContext);

    const stuffMemberName = useRef("");
    const stuffMemberEmail = useRef("");
    const stuffMemberPhone = useRef("");
    const stuffMemberPosition = useRef(""); 

    function handleAddStaffMember(){
        const newMemberData = [stuffMemberName.current.value, stuffMemberEmail.current.value, stuffMemberPhone.current.value, stuffMemberPosition.current.value];
        addNewStaffMember(newMemberData);
        showAddStaff();
    }
    
    return(
        <div className='add-stuff-members-container'>
            <div className='add-stuff-members-container-title'>
                <h4>Add member</h4>
            </div>

            <div className='add-stuff-members-container-form'>
                <TextInput type="text" placeholder="Name" ref={stuffMemberName}/>
                <TextInput placeholder="Email" ref={stuffMemberEmail}/>

                <div className="add-stuff-members-container-form-phone">
                    <div className="add-stuff-members-container-form-phone-prefix">
                        <Image src={us_flag_icon} height={20} width={20}/>
                        <select disabled>
                            <option>+1</option>
                            <option>+48</option>
                            <option>+22</option>
                        </select>
                    </div>
                    <TextInput placeholder="Phone number" ref={stuffMemberPhone}/>
                </div>
                
                <TextInput placeholder="Position" ref={stuffMemberPosition}/>
            </div>

            <div className='add-stuff-members-container-buttons'>
                <div className='add-stuff-members-container-buttons-cancel' onClick={()=>{showAddStaff()}}>CANCEL</div>
                <div className='add-stuff-members-container-buttons-add' onClick={()=>{handleAddStaffMember()}}>ADD</div>
            </div>
        </div>
    )
}
