import Image from 'next/image'
import { TextInput } from '../../LoginUIComponents/LoginUIComponents'
import '../EditStaffMember/EditStaffMember.css'
import us_flag_icon from '@/Assets/icons/us_flag_icon.png'
import { useRef } from 'react'
import { useContext } from 'react'
import { OnboardingContext } from '@/app/onboard/context'

export function EditStaffMember({data, showAddStaff=f=>f}) {

    const {deleteStaffMember, updateStaffMember} = useContext(OnboardingContext);

    const stuffMemberName = useRef();
    const stuffMemberEmail = useRef();
    const stuffMemberPhone = useRef();
    const stuffMemberPosition = useRef(); 

    function handleSave(){
        const newMemberData = [stuffMemberName.current.value, stuffMemberEmail.current.value, stuffMemberPhone.current.value, stuffMemberPosition.current.value];
        updateStaffMember(data[0], newMemberData);
        showAddStaff();
    }

    function handleDelete(){
        deleteStaffMember(data[0]);
        showAddStaff();
    }
    
    return(
        <div className='add-stuff-members-container'>
            <div className='add-stuff-members-container-title'>
                <h4>Add member</h4>
            </div>

            <div className='add-stuff-members-container-form'>
                <TextInput type="text" placeholder="Name" ref={stuffMemberName} defaultValue={data[1]}/>
                <TextInput placeholder="Email" ref={stuffMemberEmail} defaultValue={data[2]}/>

                <div className="add-stuff-members-container-form-phone">
                    <div className="add-stuff-members-container-form-phone-prefix">
                        <Image src={us_flag_icon} height={20} width={20}/>
                        <select disabled>
                            <option>+1</option>
                            <option>+48</option>
                            <option>+22</option>
                        </select>
                    </div>
                    <TextInput placeholder="Phone number" ref={stuffMemberPhone} defaultValue={data[3]}/>
                </div>
                
                <TextInput placeholder="Position" ref={stuffMemberPosition} defaultValue={data[4]}/>
            </div>

            <div className='add-stuff-members-container-buttons'>
                <div className='add-stuff-members-container-buttons-cancel' onClick={()=>{handleDelete()}}>DELETE</div>
                <div className='add-stuff-members-container-buttons-add' onClick={()=>{handleSave()}}>SAVE</div>
            </div>
        </div>
    )
}