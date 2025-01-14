import "./page.css";

export default function RootLayout({ children }) {
  const profileNavigationUrls = ["./admin/profile", "./admin/team", "./admin/subscription","./admin/analytics"];
  const settingNavigationUrls = ["./admin/settings", "./admin/support"]
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
