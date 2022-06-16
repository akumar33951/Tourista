// import React from 'react';
// import { SideBarData } from './SideBarData';
// import './SideBar.css';

// export default function SideBar() {
//     return (
//         <div className="sideBar">
//             <ul className="sideBarList">
//                 {SideBarData.map((val, key) => {
//                     return (
//                         <li
//                             key={key}
//                             className="row"
//                             id={window.location.pathname == val.link}
//                             onClick={() => {
//                                 window.location.pathname = val.link;
//                             }}
//                         >
//                             {/* <div id="icon">{val.icon}</div> */}
//                             <div id="title">{val.title}</div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }




import React from 'react';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import './SideBar.css';
import {IconContext} from "react-icons";
import { FaCalendar } from 'react-icons/fa'

export default function SideBar() {
  const [Sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!Sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}