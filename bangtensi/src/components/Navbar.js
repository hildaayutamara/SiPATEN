import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import { SidebarData } from './SidebarData';
import './App.css';
import { IconContext } from 'react-icons';
import corpu from './corpu.png';

const Navbar = (item) => {
  
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={corpu} alt="avatar" className='avatar' />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars />
              </Link>
            </li>
            <div>
            <img src={corpu} alt="Corpu" className='Corpu' />
            <h2 className='nav-text-corpu'>Corporate University <br></br> Kantor Wilayah Kementerian <br></br> Hukum dan HAM <br></br> Sumatera Utara</h2>
            </div>
            {item.dataNav.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar