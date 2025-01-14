import '@/Components/AdminUIComponents/MainPage/Calendar/AddAppointmentButton/AddAppointmentButton.css'

export default function AddAppointmentButton({openAppointmentTab=f=>f}) {
  return (
    <button className="appointment-button" onClick={()=>openAppointmentTab()}>+ Add appointment</button>
  );
}
