import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const displayName = user?.displayName;
  const userPhoto = user?.photoURL;
  const [isOpen, setOpen] = useState(false);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("log out success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-black absolute right-0 left-0 top-0 border-b-2">
      <nav className=" container flex flex-col md:flex-row py-4 md:py-6 md:items-center justify-between">
        <div className="flex items-center justify-between">
          <Link>
            <h2 className="text-2xl md:text-4xl font-bold text-white font-serif">
              Testy Food
            </h2>
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            {user && (
              <p className="text-white">
                {user?.photoURL ? (
                  <img
                    title={displayName}
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <span className="text-white">
                   {displayName}
                  </span>
                )}
              </p>
            )}
            <button
              onClick={() => setOpen(!isOpen)}
              className="text-orange-500 border-2 "
            >
              <Hamburger></Hamburger>
            </button>
          </div>
        </div>
        <ul
          className={`flex flex-col z-50 md:flex-row absolute md:static items-center gap-4 md:h-auto h-screen md:bg-transparent bg-black duration-300 top-20 px-11 ${
            isOpen ? "left-0" : "-left-60"
          }`}
        >
          <li className="px-3 py-3">
            <NavLink to="/" className="text-xl text-white font-medium">
              Home
            </NavLink>
          </li>
          <li className="px-3 py-3">
            <NavLink to="/blog" className="text-xl text-white font-medium">
              Blog
            </NavLink>
          </li>
          {user?.photoURL && (
            <li className="hidden md:block">
             {user?.photoURL ? (
                  <img
                    title={displayName}
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <span className="text-white">
                   {displayName}
                  </span>
                )}
            </li>
          )}

          <li className="px-3 py-3">
            {user ? (
              <button className="btn primary-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="text-xl text-white font-medium">
                <button>Login</button>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
