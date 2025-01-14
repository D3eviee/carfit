import '../AddressInformation/AddressInformation.css'
import { ConfirmButton, FormTitle, TextInput, TopBar } from '../LoginUIComponents/LoginUIComponents'
import { useRef, useContext } from 'react'
import { OnboardingContext } from '@/app/onboard/context'

export function AddressInformation() {
    const {businessAddres, settingBusinessAddress} = useContext(OnboardingContext);

    const addressStreet = useRef();
    const addressCity = useRef();
    const addressZipcode = useRef();

    const handleBusinessAdress = () =>{
        settingBusinessAddress(addressStreet.current.value, addressCity.current.value, addressZipcode.current.value);
    }

    return(
        <div className='address-information-container'>
            <TopBar/>
            <FormTitle title="Address" subtitle="Where your business is located?"/>

            <div className='address-information-container-form'>
                <TextInput placeholder="Street address" ref={addressStreet} defaultValue={businessAddres.businessAddressStreet}/>
                <TextInput placeholder="City"ref={addressCity} defaultValue={businessAddres.businessAddressCity}/>
                <TextInput placeholder="Zip code" ref={addressZipcode} defaultValue={businessAddres.businessAddresZipcode}/>
            </div>

            <ConfirmButton click={()=>handleBusinessAdress()}/>
        </div>
    )
}
