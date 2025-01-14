import Image from 'next/image'
import { TextInput } from '../../LoginUIComponents/LoginUIComponents'
import '../EditNewService/EditNewService.css'
import { useRef } from 'react';
import { useContext } from 'react';
import { OnboardingContext } from '@/app/onboard/context';

export function EditNewService({data, showAddNewService=f=>f}) {

    const {updateNewService} = useContext(OnboardingContext);

    const serviceName = useRef("");
    const serviceCategory = useRef("");
    const servicePrice = useRef("");
    const serviceHours = useRef(""); 
    const serviceMinutes = useRef(""); 

    function handleSave(){
        const serviceDuration = `${serviceHours.current.value}h ${ serviceMinutes.current.value}min`;
        const updatedServiceData = {
            serviceName: serviceName.current.value, 
            serviceCategory: serviceCategory.current.value, 
            serviceHours: serviceHours.current.value, 
            serviceDuration: serviceDuration,
            servicePrice: servicePrice.current.value
        };
        updateNewService(data.index, updatedServiceData);
        showAddNewService();
        }

    return(
        <div className='add-new-service-container'>
            <div className='add-new-service-container-title'>
                <h4>Add new service</h4>
            </div>

            <div className='add-new-service-container-form'>
                <TextInput placeholder="Service name" ref={serviceName} defaultValue={data.serviceName}/>
                <TextInput placeholder="Service category" ref={serviceCategory} defaultValue={data.serviceCategory}/>

                <div className='add-new-service-container-form-time'>
                    <h3>Estimated time</h3>
                    <div className='add-new-service-container-form-time-inputs'>
                        <div className='add-new-service-container-form-time-inputs-hours'>
                           <TextInput ref={serviceHours} defaultValue={data.serviceHours}/>
                        </div>
                        <div className='add-new-service-container-form-time-inputs-minutes'>
                            <TextInput type="text" ref={serviceMinutes} defaultValue={data.serviceMinutes}/>
                        </div>
                    </div>
                    
                </div>

                <div className='add-new-service-container-form-price'>
                    <h3>Price</h3>
                    <div className="add-new-service-container-form-price-input">
                        <TextInput type="text" ref={servicePrice} defaultValue={data.servicePrice}/>
                    </div>
                    
                </div>

            </div>

            <div className='add-new-service-container-buttons'>
                <div className='add-new-service-container-buttons-cancel' onClick={()=>{showAddNewService()}}>CANCEL</div>
                <div className='add-new-service-container-buttons-add' onClick={()=>{handleSave()}}>SAVE</div>
            </div>
        </div>
    )
}
