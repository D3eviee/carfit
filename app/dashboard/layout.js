import "./page.css";
import Navbar from '@/Components/LayoutComponents/Navbar/Navbar';
import Sidebar from '@/Components/LayoutComponents/Sidebar/Sidebar';

export default function RootLayout({ children }) {
  const profileNavigationUrls = ["./admin/profile"];
  const settingNavigationUrls = ["./admin/settings", "./admin/support"]
  return (
    <html lang="en">
      <body>
          <Navbar profileNavigationUrls={profileNavigationUrls} settingNavigationUrls={settingNavigationUrls}/>
          <div className="content-container">
            <Sidebar/>
            {children}
          </div>
      </body>
    </html>
  );
}
