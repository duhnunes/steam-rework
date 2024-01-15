import Button from '../Button/Button';

import './MenuUser.css';
import avatar from '../../assets/img/logao.jpg';
// Icons
import { FaUserGroup, FaBell } from 'react-icons/fa6';

const MenuUser = () => {
  return(
    <section className="menuUser-area">
      {/* Friends */}
      <Button type="button" nameClass="btn btn-dark" value={<FaUserGroup />} />
      {/* Notifications */}
      <article className="notifications-area">
        <Button type="button" nameClass="btn btn-dark" value={<FaBell />} />
        <span className="notif-circle">1</span>
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
