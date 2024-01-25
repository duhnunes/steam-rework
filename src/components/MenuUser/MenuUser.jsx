import Button from '../Button/Button';

import './MenuUser.css';
import avatar from '../../assets/img/logao.jpg';
// Icons
import { FaUserGroup, FaBell, FaEnvelopeCircleCheck, FaGear } from 'react-icons/fa6';
import { useState } from 'react';

const MenuUser = () => {

  const [open, setOpen] = useState(false);
  
  return(
    <section className="menuUser-area">
      {/* Friends */}
      <Button type="button" nameClass="btn btn-dark" value={<FaUserGroup />} />
      {/* Notifications */}
      <article className="notifications-area" onClick={() => {setOpen(!open);}}>
        <Button type="button" nameClass="btn btn-dark" value={<FaBell />} />
        <span className="notif-circle">1</span>

        <section className={`dropdown-area ${open? 'active' : ''}`}>
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
      <section className="menuUser">
        {/* Avatar */}
        <img className="avatar" src={avatar} alt="Avatar User" />
        {/* User Name */}
        <span className="userName">DuH Nunes</span>
        {/* Balance Wallet */}
        <span className="balance-wallet">$5.25</span>
        {/* Arrow Down */}
        <span className="arrowdown arrow down"></span>
      </section>
    </section>
  );
};

export default MenuUser;
