import { Outlet, useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../components/ui/appbar/ResponsiveAppBar";
import ScrollTop from "../../components/ui/scroll-top/ScrollTop";

export default function RootLayout() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith("/admin") && <ResponsiveAppBar />}
      <main>
        <Outlet />
        <ScrollTop />
      </main>
    </>
  );
}
