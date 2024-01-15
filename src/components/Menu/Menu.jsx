import './Menu.css';

function Menu () {
  return(
    <>
      <ul className="menu-area">
        <li className="menu-item">
          <a className="menu-link" href="./">
            <i className="logo"></i>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            store
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            community
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            DuH Nunes
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            library
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="./#">
            downloads
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
