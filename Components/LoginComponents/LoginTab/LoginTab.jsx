import {FormTitle} from '../LoginUIComponents/LoginUIComponents';
import './LoginTab.css';
import { useContext, useState } from 'react';
import { OnboardingContext } from '@/app/onboard/context';

export default function LoginTab() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState({messageStatus: false, message: ""});
    const {logInUser} = useContext(OnboardingContext); 

    const handleFocus = () => {
        if(message.messageStatus){
            setMessage({messageStatus: false, message: ""})
        }
    }

    function validatePassword(password) {
        const passwordValidationRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordValidationRegex.test(password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            setMessage({ messageStatus: true, message: "Your password needs to contain one big letter and number!" });
            console.log(password)
            return;
        }

        try {
            const response = await fetch('/api/verifyOnboardingProcess', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            if (response.ok) {
                logInUser(email, password);
                setMessage({ messageStatus: false, message: "" });
                setEmail("");
                setPassword("");
            } else {
                setMessage({ messageStatus: true, message: "Account with this email already exists." });
            }
        } catch (error) {
            setMessage({ messageStatus: true, message: "An unexpected error occurred. Please try again." });
            console.error(error);
        }
    };

    return(
        <div className='login-tab-container'>
            <FormTitle title="Welcome to CarFit " subtitle="Create an account"/>

            <form className='login-tab-container-form'>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleFocus}/>
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    onFocus={handleFocus}/>

                    {message.messageStatus ? <p>{message.message} </p>: <></>}

                    <button className="login-tab-container-form-button" onClick={handleSubmit}>CREATE ACCOUNT</button>  
            </form>
        </div>
    );
}
