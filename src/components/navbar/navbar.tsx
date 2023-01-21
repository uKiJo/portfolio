import React from 'react';
import { Link } from 'react-router-dom';

import { FiLinkedin, FiFacebook, FiTwitter, FiGithub } from 'react-icons/fi';
import SwitchButton from '../switch/switch';

import './navbar.scss';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="app-container pt-12 mb-24 ">
      <div className="flex items-center justify-between">
        <ul className="flex font-poppins font-semibold text-primary dark:text-txt">
          <li className="py-2 pr-6">
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
        <div className="flex items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
