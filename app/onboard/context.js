'use client'
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";
export const OnboardingContext = createContext();

export const OnboardProvider = ({ children }) => {

    const router = useRouter();

    //const onboardingState = { onboardingStep, moveToNextOnboardingStep, moveToPreviousOnboardingStep };
    //const staffManagement = { staff, addNewActiveStaff, updateStaffMember, deleteStaffMember };

    //State for holding active onboarding step
    const [onboardingStep, setOnboardingStep] = useState(0);  

    //Method for turning to the next onboarding step
    const moveToNextOnboardingStep = () => {
      setOnboardingStep((prevNumber) => prevNumber + 1);  
    };
    //Method for turning to the previois onboarding step
    const moveToPreviousOnboardingStep = () => {
      setOnboardingStep((prevNumber) => prevNumber - 1);  
    };
    
    //State for holding staff members when creating account
    const [staff, setStaff] = useState([]);

    //Method for adding staff member
    const addNewStaffMember = (newStaffMember) => {
      setStaff((prevStaff)=>[...prevStaff, newStaffMember]);
    }
    //Method for editing existing staff member
    const updateStaffMember = (index, updatedData) => {
      setStaff((prevStaff) => {
          const newStaff = [...prevStaff];
          newStaff[index] = updatedData; // Override the old data
          return newStaff;
      });  
    }
    
    //Method for deleting exisitng staff member
    const deleteStaffMember = (index) => {
      setStaff((prevStaff) => prevStaff.filter((_, i) => i !== index));
    };
    
    //State for holding all working days
    const [workingDays, setWorkingDays] = useState([
      { isChecked: true, day: "Monday", open: "7:00", close: "18:00"},
      { isChecked: true, day: "Tuesday", open: "7:00", close: "18:00"},
      { isChecked: true, day: "Wednesday", open: "7:00", close: "18:00"},
      { isChecked: true, day: "Thursday", open: "7:00", close: "18:00"},
      { isChecked: true, day: "Friday", open: "7:00", close: "18:00"},
      { isChecked: false, day: "Saturday", open: "7:00", close: "18:00"},
      { isChecked: false, day: "Sunday", open: "7:00", close: "18:00"}
    ]);


    //Method for changing the state of checkbox relating to specific  working day
    const toogleIsChecked = (index) =>{
        setWorkingDays((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    }

    //Method for changing the opening hours for specific day
    const changeOpeningHours = (dayIndex, updatedOpeningHour, updatedClosingHour) => {
      setWorkingDays((prevDays) => {
        const newDays = [...prevDays];
        newDays[dayIndex] = { 
          ...newDays[dayIndex], 
          open: updatedOpeningHour, 
          close: updatedClosingHour 
        };
        return newDays;
      });
    };    


    //state for holding bussines services
    const [services, setServices] = useState([]);

    //method for adding new service
    const AddNewService = (newService) => {
      setServices((prevServices)=>[...prevServices, newService]);
    }

    //method for updating new service
    const updateNewService = (index, updatedData) => {
      setServices((prevServices)=>{
        const newService = [...prevServices];
        newService[index] = updatedData;
        return newService;
      })
    } 

    //method for deleting new service
    const deleteService = (index) => {
      setServices((prevServices)=>prevServices.filter((_, i) => i !== index));
    }


    //state for managing email and password data
    const [loginData, setLoginData] = useState({userEmail: '', userPassword: ''});

    const logInUser = (email, password) => {
      setLoginData({userEmail: email, userPassword: password})
      moveToNextOnboardingStep();
    }

    //state for managing category of business
    const [businessCategory, setBusinessCategory] = useState({category: ""});

    const chooseBusinessCategory = (categoryValue) =>{
      setBusinessCategory({category: categoryValue});
      moveToNextOnboardingStep();
    }

    //state for managing business information
    const [businessInformation, setBusinessInformation] = useState({businessName: "", businessOwnerName: "", businessNumber: "", businessPolicyAgreements: false})

    //setting data from Bussines Information form
    const settingBusinessInformation = (businessName, businessOwnerName, businessNumber, businessPolicyAgreements) =>{
      setBusinessInformation({businessName: businessName, businessOwnerName: businessOwnerName, businessNumber: businessNumber, businessPolicyAgreements: businessPolicyAgreements});
      moveToNextOnboardingStep();
    }

    //state for holding data about business address
    const [businessAddres, setBusinessAddres] = useState({businessAddressStreet: "", businessAddressCity: "", businessAddresZipcode: ""});

    const settingBusinessAddress = (addressStreet, addressCity, addressZipcode) =>{
      setBusinessAddres({businessAddressStreet: addressStreet, businessAddressCity: addressCity, businessAddresZipcode: addressZipcode})
      moveToNextOnboardingStep();
    }

    //state for holding team number state
    const [teamSize, setTeamSize] = useState({teamSize: ""});

    const settingTeamSize = (teamSizeValue) =>{
      setTeamSize({teamSize: teamSizeValue});
      moveToNextOnboardingStep();
    }

    const handleRegisteringBusiness = async (e) => {
      const businessData = {
        userEmail : loginData.userEmail,
        userPassword : loginData.userPassword,
        businessCategory : businessCategory.category,
        businessName : businessInformation.businessName,
        businessOwnerName : businessInformation.businessOwnerName,
        businessNumber : businessInformation.businessNumber,
        businessPolicyAgreements : businessInformation.businessPolicyAgreements,
        businessAddressStreet : businessAddres.businessAddressStreet,
        businessAddressCity : businessAddres.businessAddressCity,
        businessAddresZipcode : businessAddres.businessAddresZipcode,
        teamSize : teamSize.teamSize,
        staff: staff,
        workingDays : workingDays,
        services : services
      }

      try{
        const response = await fetch('/api/finishOnboardingProcess', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({...businessData}),
        });
        
        if (response.ok){
          router.push('/admin');
        } 
      }catch(error){
        console.log("ERROR PROCESSING YOUR DATA:", error)
      }
    };

    return (
      <OnboardingContext.Provider value={{ 
        onboardingStep, 
        moveToNextOnboardingStep, 
        moveToPreviousOnboardingStep,
        staff, 
        addNewStaffMember, 
        updateStaffMember, 
        deleteStaffMember,
        workingDays,
        toogleIsChecked,
        changeOpeningHours,
        services,
        AddNewService,
        updateNewService,
        deleteService,
        loginData,
        logInUser,
        businessCategory,
        chooseBusinessCategory,
        businessInformation,
        settingBusinessInformation,
        businessAddres,
        settingBusinessAddress,
        teamSize,
        settingTeamSize,
        handleRegisteringBusiness
        }
      }>
        {children}
      </OnboardingContext.Provider>
    );
};