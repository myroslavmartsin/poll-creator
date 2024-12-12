import React from 'react';
import './Navbar.css';

import { BaseButton } from '../buttons/BaseButton/BaseButton';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar grid grid-flow-col auto-cols-max items-center gap-x-6 px-10">
        <NavLink to="/create-poll">
          {({ isActive }) => (
            <BaseButton className={isActive ? 'text-primary' : 'text-black'}>
              Create Poll
            </BaseButton>
          )}
        </NavLink>

        <NavLink to="/view-polls">
          {({ isActive }) => (
            <BaseButton className={isActive ? 'text-primary' : 'text-black'}>View Polls</BaseButton>
          )}
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
