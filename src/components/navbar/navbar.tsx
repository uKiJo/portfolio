import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";

import { FiLinkedin, FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import SwitchButton from "../switch/switch";

import "./navbar.scss";

interface NavbarProps {}

const getHeight = (open: boolean) => {
  return open ? "100vh" : "0vh";
};

const items = ["Home", "Projects", "Skills", "Contact"];

const Navbar: React.FC<NavbarProps> = (props) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 499px)" });
  const [isOpen, setIsOpen] = useState(false);
  const navHeight = getHeight(isOpen);
  const style = useSpring({ height: navHeight });

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="app-container sm:w-4/5 mx-auto bp:pt-12 pb:px-4 md:mb-24 xs:mb-12 relative">
      {isSmallScreen && (
        <div className="w-full flex justify-end p-6">
          <AiOutlineMenu size={40} onClick={toggleOpen} />
        </div>
      )}

      <animated.div
        style={isSmallScreen ? style : undefined}
        className={`flex bp:static xs:fixed xs:top-0 w-full xs:left-0 grow overflow-hidden md:flex-row xs:flex-col items-center md:justify-between xs:justify-start w-full z-10 bp:bg-[transparent] bp:dark:bg-[transparent] xs:bg-txt xs:dark:bg-lprimary`}
      >
        <ul className="relative bp:flex md:justify-start bp:justify-center font-poppins font-semibold text-primary dark:text-txt w-full bp:p-0 xs:p-12">
          {items.map((item, i) => (
            <li
              key={i}
              className="lg:first:pl-0 bp:p-4 xs:text-2xl bp:text-base xs:text-semibold xs:pb-4 text-center"
              onClick={toggleOpen}
            >
              <Link
                className=""
                to={`${item === "Home" ? "/" : `/${item.toLowerCase()}`} `}
              >
                {item}
              </Link>
            </li>
          ))}
          <li
            onClick={toggleOpen}
            className={`${
              isSmallScreen ? "block" : "hidden"
            } absolute right-0 top-0 p-4 fill-white`}
          >
            <RiCloseFill size={40} className="stroke-txt" />
          </li>
        </ul>
        <div className="flex items-center sm:grow ">
          <div className="p-2">
            <SwitchButton />
          </div>
          <a className="p-2 inline-block social-media" href="#">
            <FiFacebook size={20} />
          </a>

          <a className="p-2 inline-block social-media" href="#">
            <FiTwitter size={20} />
          </a>

          <a className="p-2 inline-block social-media" href="#">
            <FiLinkedin size={20} />
          </a>

          <a className="p-2 inline-block social-media" href="#">
            <FiGithub size={20} />
          </a>
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
