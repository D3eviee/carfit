import Image from 'next/image'
import { TextInput } from '../../LoginUIComponents/LoginUIComponents'
import '../AddNewService/AddNewService.css'
import { useRef } from 'react';
import { useContext } from 'react';
import { OnboardingContext } from '@/app/onboard/context';

export function AddNewService({showAddNewService=f=>f}) {

    const {AddNewService} = useContext(OnboardingContext)

    const serviceName = useRef("");
    const serviceCategory = useRef("");
    const servicePrice = useRef("");
    const serviceHours = useRef(""); 
    const serviceMinutes = useRef(""); 

    function handleAddNewService(){
        const serviceDuration = `${serviceHours.current.value}h ${ serviceMinutes.current.value}min`

        const newServiceData = {
            serviceName: serviceName.current.value, 
            serviceCategory: serviceCategory.current.value, 
            serviceHours: serviceHours.current.value, 
            serviceDuration: serviceDuration,
            servicePrice: servicePrice.current.value
        };
        AddNewService(newServiceData);
        showAddNewService();
    }

    return(
        <div className='add-new-service-container'>
            <div className='add-new-service-container-title'>
                <h4>Add new service</h4>
            </div>

            <div className='add-new-service-container-form'>
                <TextInput placeholder="Service name" ref={serviceName}/>
                <TextInput placeholder="Service category" ref={serviceCategory}/>

                <div className='add-new-service-container-form-time'>
                    <h3>Estimated time</h3>
                    <div className='add-new-service-container-form-time-inputs'>
                        <div className='add-new-service-container-form-time-inputs-hours'>
                           <TextInput ref={serviceHours}/>
                        </div>
                        <div className='add-new-service-container-form-time-inputs-minutes'>
                            <TextInput type="text" ref={serviceMinutes}/>
                        </div>
                    </div>
                    
                </div>

                <div className='add-new-service-container-form-price'>
                    <h3>Price</h3>
                    <div className="add-new-service-container-form-price-input">
                        <TextInput type="text" ref={servicePrice}/>
                    </div>
                    
                </div>

            </div>

            <div className='add-new-service-container-buttons'>
                <div className='add-new-service-container-buttons-cancel'>CANCEL</div>
                <div className='add-new-service-container-buttons-add' onClick={()=>{handleAddNewService()}}>ADD</div>
            </div>
        </div>
    )
}
