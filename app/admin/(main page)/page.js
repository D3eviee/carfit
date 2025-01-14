import Calendar from "@/Components/AdminUIComponents/MainPage/Calendar/Calendar/Calendar";
import { inter } from '@/Assets/fonts';
import { EventProvider } from "../context";

export default function Home() {
  return (
    <EventProvider>
    <div className={inter.className}>
      <Calendar/>
    </div>
    </EventProvider>
  );
}
