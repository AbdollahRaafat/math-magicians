import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const menuLinks = [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      name: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      name: 'Quote',
    },
  ];

  return (
    <nav id="navigation" className="navbar">
      <h1>Math Magician</h1>
      <ul id="menu" className="navmenu">
        {menuLinks.map((item) => (
          <li key={item.id}>
            <Link to={item.path} activeClassName="active-link" exact>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
