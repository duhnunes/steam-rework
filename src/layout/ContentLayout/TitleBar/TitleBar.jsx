import './TitleBar.css';

// Icons & Images
import { VscClose, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';


// Imports Components
import PrevNext from '../../../components/PrevNext/PrevNext';
import Menu from '../../../components/Menu/Menu';
import MenuUser from '../../../components/MenuUser/MenuUser';
import DropdownList, { DropdownListItem } from '../../../components/DropdownList/DropdownList';
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

      <List css="">
        <ListItem css="__helper-item">Help
          <section className="dropdown-area">
            <article className="dropdown-area-inside">
              <DropdownList css="">
                <DropdownListItem link="./#" css="disabled" value="Steam Support" />
                <DropdownListItem link="./#" css="disabled" value="Privacy Policy" />
                <DropdownListItem link="./#" css="disabled" value="Legal Information" />
                <DropdownListItem link="./#" css="disabled" value="Steam Subscriber Agreement" />
                <DropdownListItem link="./#" css="disabled" value="System Information" />
                <DropdownListItem link="./#" css="disabled" value="About Steam" />
              </DropdownList>
            </article>
          </section>
        </ListItem>
        <ListItem css="__helper-item">View
          <section className="dropdown-area">
            <div className="dropdown-area-inside">
              <DropdownList css="">
                <DropdownListItem link="./#" css="disabled" value="Small Mode" />
                <DropdownListItem link="./#" css="disabled" value="Players" />
                <DropdownListItem link="./#" css="disabled" value="Update News" />
              </DropdownList>
            </div>
          </section>
        </ListItem>

        <article className="helperMenu-area">
          <ListItem css="__helperMenu">
            <span className="icon-minimize">
              <VscChromeMinimize />
            </span>
          </ListItem>
          <ListItem css="__helperMenu">
            <span className="icon-maximize">
              <VscChromeRestore />
            </span>
          </ListItem>
          <ListItem css="__helperMenu">
            <span className="icon-close">
              <VscClose />
            </span>
          </ListItem>
        </article>
      </List>

    </Navbar>
  );
}

