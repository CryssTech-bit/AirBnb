import AirLogo from "../../../assets/icons/Full-logo.svg";
import Home from "../../../assets/icons/Home.png";
import Experience from "../../../assets/icons/Experience.png";
import Services from "../../../assets/icons/imgi_209_3d67e9a9-520a-49ee-b439-7b3a75ea814d.png";
import browser from "../../../assets/icons/worldwide.svg";
import Menu from "../../../assets/icons/Hamburger.svg";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 pt-2 pb-0.5 md:hidden bg-white">
        <div
          className="  w-[70%] h-10 m-auto border rounded-2xl flex justify-center items-center 
        mb-5"
        >
          Search
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between  px-5   bg-white w-full">
        {/* Logo */}
        <img className="hidden md:block" src={AirLogo} alt="Airbnb logo" />

        {/* navlist */}
        <div className="m-auto items-center">
          <ul className="flex  h-full items-cente gap-8 md:gap-3">
            <li className="  flex items-center flex-col md:flex-row">
              <img
                className=" w-10
               "
                src={Home}
                alt=""
              />
              Home
            </li>
            <li className="flex items-center flex-col md:flex-row">
              {" "}
              <img className="w-10" src={Experience} alt="" />
              Experience
            </li>
            <li className="flex items-center flex-col md:flex-row">
              <img className="w-10" src={Services} alt="" />
              Services
            </li>
          </ul>
        </div>
        {/* menu */}
        <div className=" hidden md:flex  p-2  gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-black/10 p-1 flex items-center justify-center">
            <img className="w-6" src={browser} alt="worldwide" />
          </div>
          <div className="w-10 h-10 rounded-full bg-black/10 p-1 flex items-center justify-center">
            <img className="w-6" src={Menu} alt="Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
