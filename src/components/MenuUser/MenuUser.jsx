import './MenuUser.css';
import avatar from '../../assets/img/logao.jpg';
import { useState } from 'react';
import DropdownList, { DropdownListItem } from '../DropdownList/DropdownList';


// Icons
import { FaUserGroup, FaBell, FaEnvelopeCircleCheck, FaGear } from 'react-icons/fa6';
import { IoMegaphone } from 'react-icons/io5';
import { MdOutlineMonitor } from 'react-icons/md';
import Arrows from '../Arrows/Arrows';

const MenuUser = () => {

  const [openNotification, setOpenNotification] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  
  return(
    <section className="menuUser-area">
      {/* Friends */}
      <article className="btn btn-dark">
        <FaUserGroup />
      </article>

      <article className="btn btn-dark">
        <IoMegaphone />
      </article>
      {/* Notifications */}
      <article className="notifications-area btn btn-dark" onClick={() => {setOpenNotification(!openNotification);}}>
        <FaBell />
        <span className="notif-circle">1</span>

        <section className={`dropdown-area ${openNotification? 'active' : ''}`}>
          <div className="dropdown-area-inside">
            <article className="dropdown-header">
              <h3 className="title-h2">Notifications</h3>
              <div className="dp-header-icons-area">
                <FaEnvelopeCircleCheck className="btn btn-dark btn-func" />
                <FaGear className="btn btn-dark btn-func" />
              </div>
            </article>
            <article className="dropdown-body">
              <section className="dp-body-title">
                <FaUserGroup className="text-dim" />
                <h3 className="title-h3">Notifications</h3>
                <span className="notif-circle"></span>
              </section>

              <section className="dp-body-text">
                <p className="dp-body-p">
                  <a href="./#" className="dp-body-link">Name Friend</a>
                  <span>left a comment on your profile.</span>
                </p>
              </section>
              
            </article>
          </div>
        </section>
      </article>

      {/* Menu User */}
      <article className="menuUser btn btn-dark" onClick={() => {setOpenUserMenu(!openUserMenu);}}>
        {/* Avatar */}
        <img className="avatar" src={avatar} alt="Avatar User" />
        {/* User Name */}
        <h2 className="userName">DuH Nunes</h2>
        {/* Balance Wallet */}
        <p className="balance-wallet">$5.25</p>
        {/* Arrow Down */}
        <Arrows />

        <section className={`dropdown-area userMenu ${openUserMenu? 'active' : ''}`}>
          <div className="dropdown-area-inside">
            <DropdownList>
              <DropdownListItem value="Account Details" />
              <DropdownListItem value="Wallet" />
              <DropdownListItem value="Settings" />
              <DropdownListItem value="Client Updates" />
              <DropdownListItem value="Go Offline" />
              <DropdownListItem value="Change Account" />
              <DropdownListItem value="Sign Out" />
              <DropdownListItem value="Exit" />
            </DropdownList>
          </div>
        </section>
      </article>

      <article className="btn btn-dark">
        <MdOutlineMonitor />
      </article>
      
    </section>
  );
};

export default MenuUser;
