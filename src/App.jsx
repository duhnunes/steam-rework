import GeneralMenu from './layout/GeneralMenu/GeneralMenu';
import Header from './layout/Header/Header';
import TitleBar from './layout/Title Bar/TitleBar';

import headerImg from './assets/img/header-steam-summer-sale.gif';
import Featured from './layout/Featured/Featured';

export default function App() {
  return (
    <>
      <TitleBar />
      <GeneralMenu />
      <Header src={headerImg} alt="Steam summer sale Banner" />
      <Featured />
    </>
  );
}
