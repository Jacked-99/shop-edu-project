import { Outlet } from "react-router-dom";
import MainNav from "../Navbar/MainNavabar";

const RootPage = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
