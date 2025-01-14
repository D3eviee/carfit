import '@/Components/LoginComponents/BusinessInformation/BusinessInformation.css'
import { inter } from '@/Assets/fonts';
import Image from 'next/image';
import { ConfirmButton, FormTitle, TextInput, TopBar } from '../LoginUIComponents/LoginUIComponents';
import { useRef, useContext } from 'react';
import { OnboardingContext } from '@/app/onboard/context';

export function BusinessInformation() {
    const {businessInformation, settingBusinessInformation} = useContext(OnboardingContext);

    const businessName = useRef();
    const businessOwnerName = useRef();
    const businessNumber = useRef();
    const businessPolicyAgreements = useRef();

    const handleBussinessInformation = () =>{
        settingBusinessInformation(
            businessName.current.value, 
            businessOwnerName.current.value, 
            businessNumber.current.value, 
            businessPolicyAgreements.current.checked)
    }

    return(
        <div className={`${inter.className} business-information-container`}>
            <TopBar/>

            <FormTitle title="Business Information" subtitle="Provide information about yourself and your business"/>

            <div className='business-information-container-form'>
                <TextInput placeholder="Business name" ref={businessName} defaultValue={businessInformation.businessName}/>
                <TextInput placeholder="Your name" ref={businessOwnerName} defaultValue={businessInformation.businessOwnerName}/>

                <div className='business-information-container-form-phone'>
                    <div className="business-information-container-form-phone-prefix">
                        <h2>🇺🇸</h2>
                        <p>+1</p>
                    </div>
                    <TextInput name="" placeholder="Business number" ref={businessNumber} defaultValue={businessInformation.businessNumber}/>
                </div>
                
            </div>

            <div className='business-information-container-agreements'>
                <input type="checkbox" id="agreements" ref={businessPolicyAgreements} defaultChecked={businessInformation.businessPolicyAgreements}/>
                
                <div for="agreements" className='business-information-container-agreements-text'>
                    <h3><label for="agreements">I accept the policy and confirm I read the list of rules</label></h3>
                    <p>Reqired</p>
                </div>
            </div>

            <ConfirmButton click={()=>{handleBussinessInformation()}}/>
        </div> 
    );
}