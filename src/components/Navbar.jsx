import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // pastikan path sesuai

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-3">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Kalbe Logo"
            className="h-12 w-auto object-contain" // bisa disesuaikan tinggi logo-nya
          />
        </NavLink>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm md:text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/information"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"
            }
          >
            Information
          </NavLink>
          <NavLink
            to="/all-data"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"
            }
          >
            All Data
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
