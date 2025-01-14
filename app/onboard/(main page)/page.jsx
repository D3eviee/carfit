'use client'
import { inter } from '@/Assets/fonts';
import { OnboardProvider } from '../context';
import OnboardingProcess from '@/Components/LoginComponents/OnboardingProcess/OnBoardingProcess';

export default function Home() {  
  return (
    <OnboardProvider>
      <div className={`${inter.className}`}>
        <OnboardingProcess/>
      </div>
    </OnboardProvider>
  );
}
