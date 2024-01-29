import './TitleBar.css';

// Icons & Images
import { VscClose, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';


// Imports Components
import PrevNext from '../../../components/PrevNext/PrevNext';
import Menu from '../../../components/Menu/Menu';
import MenuUser from '../../../components/MenuUser/MenuUser';
import DropdownList from '../../../components/DropdownList/DropdownList';
import DropdownListItem from '../../../components/DropdownList/DropdownListItem/DropdownListItem';
import Navbar from '../../Navbar/Navbar';
import { List, ListItem } from '../../../components/List/List';

export default function TitleBar() {
  
  return(
    <Navbar css="__nav-TitleBar">
      <article className="menu-general">
        <PrevNext angle="arrow prev" id="prevPage" />
        <PrevNext angle="arrow next" id="nextPage" />
        <Menu />
      </article>
      
      <MenuUser />

      <article className="closeMenu-area">
        <article className="closeMenu-item">
          <List css="menu-area">
            <ListItem css="__closeMenu">
              <span className="menu-link">Help</span>
              
              <section className="dropdown-area userMenu">
                <article className="dropdown-area-inside">
                  <DropdownList>
                    <DropdownListItem value="Steam Support" />
                    <DropdownListItem value="Privacy Policy" />
                    <DropdownListItem value="Legal Information" />
                    <DropdownListItem value="Steam Subscriber Agreement" />
                    <DropdownListItem value="System Information" />
                    <DropdownListItem value="About Steam" />
                  </DropdownList>
                </article>
              </section>
            </ListItem>
            <ListItem css="__closeMenu">
              <span className="menu-link">
                View
                <span className="arrow down"></span>
              </span>
              
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
            </ListItem>
          </List>
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
      </article>

    </Navbar>
  );
}

