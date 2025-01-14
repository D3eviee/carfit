import Navbar from "@/Components/LayoutComponents/Navbar/Navbar";
import "./page.css";



export default function RootLayout({ children }) {
  const profileNavigationUrls = ["./profile", "./team", "./subscribtion","./analytics"];
  const settingNavigationUrls = ["./settings", "./support"]
  return (
    <html lang="en">
      <body>
        <Navbar profileNavigationUrls={profileNavigationUrls} settingNavigationUrls={settingNavigationUrls} logoutNavigation={"./logout"}/>
        {children}
      </body>
    </html>
  );
}
