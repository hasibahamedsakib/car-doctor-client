import { Outlet } from "react-router-dom";
import NavbarCompo from "../../Components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <NavbarCompo />
      <div className="container">
        <Outlet />
      </div>
      {/* <FooterCompo /> */}
    </>
  );
};

export default Main;
