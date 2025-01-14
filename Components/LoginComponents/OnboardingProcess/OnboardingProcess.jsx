'use client'
import { useContext } from 'react';
import { OnboardingContext } from '@/app/onboard/context';
import LoginTab from '../LoginTab/LoginTab';
import {BusinessCategory} from '../BusinessCategory/BusinessCategory';
import {BusinessInformation} from '../BusinessInformation/BusinessInformation';
import {AddressInformation} from '../AddressInformation/AddressInformation';
import {TeamSizeInformation} from '../TeamSizeInformation/TeamSizeInformation';
import {WorkingDays} from '../WorkingDays/WorkingDays';
import { AddServices } from '../AddServices/AddServices';
import { StaffMembers } from '../StaffMembers/StaffMembers';

export default function OnboardingProcess() {

  const {onboardingStep} = useContext(OnboardingContext);

  const showTab = (value) =>{
    switch (value) {
        case 0:
            return <LoginTab/>
            break;
        case 1:
          return <BusinessCategory/>
          break;
        case 2:
          return <BusinessInformation/>
          break;
        case 3:
          return <AddressInformation/>
          break;
        case 4:
          return <TeamSizeInformation/>
          break;
        case 5:
          return <StaffMembers/>
          break;
        case 6:
            return <WorkingDays/>
          break;
        case 7:
          return <AddServices/>
          break;
      default:
        return <></>
        break;
    }
  }
    
  return (
      <div>
        {showTab(onboardingStep)}
      </div>
  );
}
