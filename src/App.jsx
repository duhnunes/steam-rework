import GeneralMenu from './layout/GeneralMenu/GeneralMenu';
import Header from './layout/ContentLayout/Header/Header';
import TitleBar from './layout/ContentLayout/Title Bar/TitleBar';
import IndexContent from './layout/IndexContent/IndexContent';

import headerImg from './assets/img/header-steam-summer-sale.gif';
import Footer from './layout/Footer/Footer';

export default function App() {
  return (
    <>
      <TitleBar />
      <GeneralMenu />
      <Header src={headerImg} alt="Steam summer sale Banner" />
      <IndexContent />
      <Footer />
    </>
  );
}
