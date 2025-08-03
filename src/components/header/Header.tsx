import { useState } from "react";
import { CgSearch, CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from "../Button";
import SearchBox from "./SearchBox";
import Input from "../Input";
import { useCombinedStore } from "../../zustand/useCombinedStore";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [inpval, setInputValue] = useState<string>("");
  const { signUp, logIn, logout } = useCombinedStore();
  return (
    <div className="w-full  h-[50px]  bg-[#444444] px-[18px] text-white">
      <div className="mobile-size lg:hidden w-full  h-full flex flex-row justify-between items-center ">
        <div
          className=" w-[30px] h-[30px] hover:cursor-pointer "
          onClick={() => setIsSearchOpen(true)}
        >
          <CgSearch className="w-full h-full" />
        </div>
        <Link to={"/"}>
          <div className="w-[30px] h-[30px] hover:cursor-pointer ">
            <img
              src="/image/logo.jpg"
              alt="Brand logo"
              className="w-full h-full"
              aria-label="logo image"
            />
          </div>
        </Link>
        <Button className="w-[30px] h-[30px] hover:cursor-pointer">
          <CgProfile className="w-full h-full" />
        </Button>
      </div>
      <div className="desktop-size hidden w-full  h-full lg:flex flex-row justify-between items-center  ">
        <div className="  flex-1" onClick={() => setIsSearchOpen(true)}>
          <Input
            valueState={inpval}
            onChangeHandler={(e) => setInputValue(e.target.value)}
            placeholder="Enter your form name..."
            className=" w-[426px] h-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:outline-none focus:border-none"
            ariaLabel="input"
          />
        </div>
        <Link to={"/"} className="flex justify-between items-center flex-1">
          <div className="w-[30px] h-[30px] hover:cursor-pointer ">
            <img
              src="/image/logo.jpg"
              alt="Brand logo"
              className="w-full h-full"
              aria-label="logo image"
            />
          </div>
          <div className="dropdown relative inline-block group">
            <Button className="dropbtn w-[30px] h-[30px] hover:cursor-pointer">
              <CgProfile className="w-full h-full" />
            </Button>
            <div className="dropdown-content hidden absolute group-hover:block">
              <Button onClickHandler={logout} className="text-black bg-white">Exit</Button>
            </div>
          </div>
        </Link>
      </div>
      {isSearchOpen && (
        <SearchBox
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}
    </div>
  );
};
export default Header;
