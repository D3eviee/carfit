import '../TeamSizeInformation/TeamSizeInformation.css'
import { ConfirmButton, FormTitle, TextInput, TopBar } from '../LoginUIComponents/LoginUIComponents'
import { useRef, useContext } from 'react'
import { OnboardingContext } from '@/app/onboard/context'

export function TeamSizeInformation() {

    const {teamSize, settingTeamSize} = useContext(OnboardingContext);

    const onlymeRadio = useRef();
    const twothreeRadio = useRef();
    const fourfiveRadio = useRef();
    const moreRadio = useRef();

    const handleTeamSize = () =>{
        if(onlymeRadio.current.checked){
            settingTeamSize(onlymeRadio.current.id);
        }else if(twothreeRadio.current.checked){
            settingTeamSize(twothreeRadio.current.id);
        }else if(fourfiveRadio.current.checked){
            settingTeamSize(fourfiveRadio.current.id);
        }else if(moreRadio.current.checked){
            settingTeamSize(moreRadio.current.id);
        }
    }

    return(
        <div className='team-size-container'>
            <TopBar/>
            <FormTitle title="What’s your team size?"/>

            <div className='team-size-container-form'>
                <div className='team-size-container-form-radio'>
                    <input type="radio" name="team" id="onlyme" ref={onlymeRadio}/>
                    <label for="onlyme">Only me</label>
                </div>

                <div className='team-size-container-form-radio'>
                    <input type="radio" name="team" id="twothree"  ref={twothreeRadio}/>
                    <label for="twothree">2-3</label>
                </div>

                <div className='team-size-container-form-radio'>
                    <input type="radio" name="team" id="fourfive"  ref={fourfiveRadio}/>
                    <label for="fourfive">4-5</label>
                </div>

                <div className='team-size-container-form-radio'>
                    <input type="radio" name="team" id="more"  ref={moreRadio}/>
                    <label for="more">6 and more</label>
                </div>
            </div>

            <ConfirmButton click={()=>handleTeamSize()}/>
        </div>
    )
}
