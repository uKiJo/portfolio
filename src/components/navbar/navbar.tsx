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
        className={`flex bp:static xs:fixed xs:top-0 w-full xs:left-0 grow overflow-hidden md:flex-row xs:flex-col items-center md:justify-between xs:justify-start z-10 bp:bg-[transparent] bp:dark:bg-[transparent] xs:bg-txt xs:dark:bg-lprimary`}
      >
        <div className="relative flex bp:flex-row xs:flex-col md:justify-start bp:justify-center font-poppins font-semibold text-primary dark:text-txt w-full bp:p-0 xs:p-12">
          {items.map((item, i) => (
            <Link
              onClick={toggleOpen}
              key={i}
              className="lg:first:pl-0 bp:p-4 xs:text-2xl bp:text-base xs:text-semibold xs:pb-4 text-center"
              to={`${item === "Home" ? "/" : `/${item.toLowerCase()}`} `}
            >
              {item}
            </Link>
          ))}
          <div
            onClick={toggleOpen}
            className={`${
              isSmallScreen ? "block" : "hidden"
            } absolute right-0 top-0 p-4 fill-white`}
          >
            <RiCloseFill size={40} className="stroke-txt" />
          </div>
        </div>
        <div className="flex items-center sm:grow ">
          <div className="p-2">
            <SwitchButton />
          </div>
          <a
            className="p-2 inline-block social-media"
            href="#"
            aria-label="Facebook account"
          >
            <FiFacebook size={20} />
          </a>

          <a
            className="p-2 inline-block social-media"
            href="#"
            aria-label="Twitter account"
          >
            <FiTwitter size={20} />
          </a>

          <a
            className="p-2 inline-block social-media"
            href="#"
            aria-label="Linkedin account"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            className="p-2 inline-block social-media"
            href="#"
            aria-label="Github account"
          >
            <FiGithub size={20} />
          </a>
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
