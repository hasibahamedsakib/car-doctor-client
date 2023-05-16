import { Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/logo.svg";
const NavbarCompo = () => {
  const { user, userLogOut } = useContext(AuthContext);
  return (
    <Navbar className="container py-5" fluid={true} rounded={true}>
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-8 md:h-20 md:w-20 " alt="Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex space-x-3 items-center">
          <BiShoppingBag className="w-6 h-6 cursor-pointer" />
          <BiSearch className="w-6 h-6 cursor-pointer" />
          <button className="text-orange-500 border-2 font-semibold border-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white duration-200">
            Appointment
          </button>
          {user && (
            <>
              <p className="text-sm font-bold text-orange-500">
                {user?.displayName}
              </p>
              <Button
                color="gray"
                pill={true}
                onClick={() => {
                  userLogOut();
                }}
              >
                logout
              </Button>
            </>
          )}
        </div>
        <Navbar.Toggle className="hover:bg-transparent hover:text-orange-500 border-none outline-none ml-3" />
      </div>
      <Navbar.Collapse>
        <NavLink
          className=" py-2 pl-3 pr-4 text-gray-900 bg-orange-600 rounded md:bg-transparent md:hover:text-orange-600 "
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 py-2 pl-3 pr-4"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 py-2 pl-3 pr-4"
          to="/bookings"
        >
          Bookings
        </NavLink>
        <NavLink
          className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 py-2 pl-3 pr-4"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 py-2 pl-3 pr-4"
          to="/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 py-2 pl-3 pr-4"
          to="/user/login"
        >
          Login
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCompo;
