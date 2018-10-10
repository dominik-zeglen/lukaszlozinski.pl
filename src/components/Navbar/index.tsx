import * as React from 'react';

import * as logo from '../../assets/images/logo.png';
import {isScrolledTo} from '../../utils';
import MenuItem, {IMenuItem} from './MenuItem';
import './style.scss';

interface INavbarProps {
  scrollPosition: number;
}

const menuItems: IMenuItem[] = [
  {
    id: 'aktualnosci',
    label: 'Aktualności',
  },
  {
    id: 'o-mnie',
    label: 'O mnie',
  },
  {
    id: 'oferta',
    label: 'Oferta',
  },
  {
    id: 'kontakt',
    label: 'Kontakt',
  },
];

export const Navbar: React.SFC<INavbarProps> = ({scrollPosition}) => (
  <div className="navbar">
    <div className="container navbar__container">
      {menuItems.slice(0, 2).map(menuItem => (
        <MenuItem
          active={isScrolledTo(menuItem.id, scrollPosition)}
          href={'#' + menuItem.id}>
          {menuItem.label}
        </MenuItem>
      ))}
      <a className="navbar__logo-container" href="#">
        <img className="navbar__logo" src={logo} />
      </a>
      {menuItems.slice(2, 4).map(menuItem => (
        <MenuItem
          active={isScrolledTo(menuItem.id, scrollPosition)}
          href={'#' + menuItem.id}>
          {menuItem.label}
        </MenuItem>
      ))}
    </div>
  </div>
);
export default Navbar;
