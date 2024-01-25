import React from 'react';

import './TitleBar.css';
import PrevNext from '../../../components/PrevNext/PrevNext';
import Menu from '../../../components/Menu/Menu';
import MenuUser from '../../../components/MenuUser/MenuUser';

import { VscClose, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';

function TitleBar() {
  return(
    <section className="titleBar">
      <article className="group-1">
        {/* Prev-Next Pages */}
        <PrevNext angle="arrow prev" id="prevPage" />
        <PrevNext angle="arrow next" id="nextPage" />
        {/* Menu List */}
        <Menu />
      </article>
      
      <article className="group-2">
        {/* Menu User */}
        <MenuUser />
        {/* Help/View/Minimaize/Close */}
        <section className="closeMenu-area">
          <article className="closeMenu-item">Help</article>
          <article className="closeMenu-item">View
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
