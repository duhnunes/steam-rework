
import './TitleBar.css';
import PrevNext from '../../../components/PrevNext/PrevNext';
import Menu from '../../../components/Menu/Menu';
import MenuUser from '../../../components/MenuUser/MenuUser';
import DropdownList from '../../../components/DropdownList/DropdownList';
import DropdownListItem from '../../../components/DropdownList/DropdownListItem/DropdownListItem';

import { VscClose, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';

function TitleBar() {
  
  return(
    <section className="titleBar">
      <article className="group-1">
        <PrevNext angle="arrow prev" id="prevPage" />
        <PrevNext angle="arrow next" id="nextPage" />
        <Menu />
      </article>
      
      <article className="group-2">
        <MenuUser />
      </article>

      <article className="group-3">

        <section className="closeMenu-area">
          <article className="closeMenu-item">
            <ul className="menu-area">
              <li className="menu-item">
                <a href="./#" className="menu-link">Help</a>

                <section className="dropdown-area userMenu">
                  <div className="dropdown-area-inside">
                    <DropdownList>
                      <DropdownListItem value="Steam Support" />
                      <DropdownListItem value="Privacy Policy" />
                      <DropdownListItem value="Legal Information" />
                      <DropdownListItem value="Steam Subscriber Agreement" />
                      <DropdownListItem value="System Information" />
                      <DropdownListItem value="About Steam" />
                    </DropdownList>
                  </div>
                </section>
              </li>
              <li className="menu-item">
                <a href="./#" className="menu-link">
                  View
                  <span className="arrow down"></span>
                </a>

                <section className="dropdown-area userMenu">
                  <div className="dropdown-area-inside">
                    <DropdownList>
                      <DropdownListItem value="Small Mode" />
                      <DropdownListItem value="Players" />
                      <DropdownListItem value="Game Servers" />
                      <DropdownListItem value="Update News" />
                    </DropdownList>
                  </div>
                </section>
              </li>
            </ul>
          </article>

          <article className="closeMenu-box">
            <span className="icon-minimize">
              <VscChromeMinimize />
            </span>
            <span className="icon-maximize">
              <VscChromeRestore />
            </span>
            <span className="icon-close">
              <VscClose />
            </span>
          </article>
        </section>
      </article>

    </section>
  );
}

export default TitleBar;
