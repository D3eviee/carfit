import '../LoginUIComponents/LoginUIComponents.css'
import Image from 'next/image'
import React, { useContext } from 'react'
import { OnboardingContext } from '@/app/onboard/context'

export function TopBar() {
    const {openTab, moveToNextOnboardingStep, moveToPreviousOnboardingStep} = useContext(OnboardingContext);

    return(
        <div className='topbar-container'>
                {openTab != 0 ?<h2 onClick={()=>{moveToPreviousOnboardingStep()}}>{"<-"}</h2> : <></>}
        </div>
    )
}

export function FormTitle({title, subtitle}) {
    return(
        <div className='form-title-container'>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </div>
    )
}
    
export const TextInput = React.forwardRef(({placeholder, value, defaultValue}, ref)=>{
    return(
        <input type="text" placeholder={placeholder} ref={ref} defaultValue={defaultValue}/>
    )
})

export function ConfirmButton({click = f => f}) {
    return(
        <div className='button-container' onClick={()=>{click()}}>CONTINUE</div>
    )
}

export function EndRegisteringButton({click}){
    return(
        <div className='button-container' onClick={()=>{click()}}>FINISH</div>
    )
}

export function CategoryTab({categoryTitle, categoryImage, value}){

    const {chooseBusinessCategory} = useContext(OnboardingContext);


    const handleChoosingCategory = (categoryValue)=> {
        chooseBusinessCategory(categoryValue);
    }

    return(
        <div className='category-tab-container' onClick={()=>{handleChoosingCategory(value)}}>
            <div className='category-tab-container-content'>
                <Image src={categoryImage} height={50} width={50}/>
                <h3>{categoryTitle}</h3>
            </div>
            <h2>{">"}</h2>
        </div>
    )
}