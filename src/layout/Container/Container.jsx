import './Container.css';

import Featured from '../ContentLayout/Featured/Featured';
import SpecialOffers from '../ContentLayout/SectionCards/SpecialOffers/SpecialOffers';
import BrowseSteam from '../ContentLayout/SectionCards/BrowseSteam/BrowseSteam';
import FreeToPlay from '../ContentLayout/SectionCards/FreeToPlay/FreeToPlay';
import RecentlyUpdated from '../ContentLayout/SectionCards/RecentlyUpdated/RecentlyUpdated';
import NewTrading from '../ContentLayout/SectionCards/NewTrading/NewTrading';
import TopSeller from '../ContentLayout/SectionCards/TopSeller/TopSeller';
import Under5 from '../ContentLayout/SectionCards/Under5/Under5';
import GamesStreaming from '../ContentLayout/SectionCards/GamesStreaming/GamesStreaming';

export default function IndexContent() {
  return(
    <main className="container">
      <Featured />
      <SpecialOffers headerTitle="Special Offers" />
      <BrowseSteam headerTitle="Browse Steam" />
      <FreeToPlay headerTitle="Free To Play Games" />
      <RecentlyUpdated headerTitle="Recently Updated" />
      <NewTrading headerTitle="New and Trading" />
      <TopSeller headerTitle="Top Sellers" />
      <Under5 headerTitle="Under $5" />
      <GamesStreaming headerTitle="Games Streaming Now" />
    </main>
  );
}
