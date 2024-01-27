import GeneralMenu from '../layout/GeneralMenu/GeneralMenu';
import Header from '../layout/ContentLayout/Header/Header';
import IndexContent from '../layout/Container/Container';
import Footer from '../layout/Footer/Footer';

import headerImg from '../assets/img/header/header-steam-summer-sale.gif';

export default function Store() {
  return (
    <>
      <GeneralMenu />
      <Header>
        <img src={headerImg} alt="Summer Sale" />
      </Header>
      <IndexContent />
      <Footer />
    </>
  );
}
