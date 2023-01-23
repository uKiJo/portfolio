import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

import { FiLinkedin, FiFacebook, FiTwitter, FiGithub } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SwitchButton from '../switch/switch';

import './navbar.scss';

interface NavbarProps {}

const getHeight = (small: boolean, open: boolean) => {
  if (small) {
    return open ? 500 : 0;
  } else {
    return 'auto';
  }
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' });
  const [isOpen, setIsOpen] = useState(false);
  const navHeight = getHeight(isSmallScreen, isOpen);
  const style = useSpring({ height: navHeight });

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="app-container sm:w-4/5 mx-auto pt-12 pb:px-4 mb-24 relative">
      {isSmallScreen && (
        <div className="w-full flex justify-end p-2">
          {isOpen ? (
            <AiOutlineClose size={25} onClick={toggleOpen} />
          ) : (
            <AiOutlineMenu size={25} onClick={toggleOpen} />
          )}
        </div>
      )}

      <animated.div
        style={style}
        className={`flex bp:static xs:absolute xs:top-[98px] w-full xs:left-0 grow overflow-hidden md:flex-row xs:flex-col items-center md:justify-between xs:justify-start w-full overflow-hidden z-10 dark:bg-red-500`}
      >
        <ul className="bp:flex bp:justify-center font-poppins font-semibold text-primary dark:text-txt w-full">
          <li onClick={toggleOpen} className="py-2 md:pr-6 xs:px-6">
            <Link to="/">Home </Link>
          </li>
          <li className="py-2 px-6">
            <Link to="/projects">Projects </Link>
          </li>
          <li className="py-2 px-6">
            <Link to="/skills">Skills </Link>
          </li>
          <li className="py-2 px-6">
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <div className="flex items-center sm:grow md:mt-0 xs:mt-6">
          <div className="p-2">
            <SwitchButton />
          </div>
          <a className="p-2 inline-block" href="#">
            <FiFacebook size={20} />
          </a>

          <a className="p-2 inline-block" href="#">
            <FiTwitter size={20} />
          </a>

          <a className="p-2 inline-block" href="#">
            <FiLinkedin size={20} />
          </a>

          <a className="p-2 inline-block" href="#">
            <FiGithub size={20} />
          </a>
        </div>
      </animated.div>
    </nav>
  );
};

export default Navbar;
