import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo-1.png";
import MainMenu from "./header-menu";
import { useState } from "react";
import SideBar from "./offcanvas";
import MobileMenuOne from "./menu_sidebar/menu-one";

const HeaderOne = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  return (
    <>
      <div className="header__area">
        <div className="custom_container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left one">
              <div
                className="header__area-menubar-left-logo"
                style={{ marginLeft: "30px" }} // Added margin to move logo right
              >
                <Link to="/">
                  <img src={logo1} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-sidebar">
                <div
                  className="header__area-menubar-right-sidebar-icon"
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className="flaticon-menu-6"></i>
                </div>
              </div>
              <div className="header__area-menubar-right-responsive-menu menu__bar">
                <i
                  className="flaticon-menu-3"
                  onClick={() => setMenuSidebar(true)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuOne isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
    </>
  );
};

export default HeaderOne;
