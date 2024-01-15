import React from 'react';

import './TitleBar.css';
import PrevNext from '../../components/PrevNext/PrevNext';
import Menu from '../../components/Menu/Menu';
import MenuUser from '../../components/MenuUser/MenuUser';

import { VscClose, VscChromeRestore, VscChromeMinimize } from 'react-icons/vsc';

function TitleBar() {
  return(
    <section className="titleBar">
      {/* Prev-Next Pages */}
      <PrevNext />
      <Menu />
      <MenuUser />
      {/* Help/View/Minimaize/Close */}
      <section className="closeMenu-area">
        <article className="closeMenu-item">1</article>
        <article className="closeMenu-item">2</article>
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
    </section>
  );
}

export default TitleBar;
