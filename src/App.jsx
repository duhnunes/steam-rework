import { Outlet } from 'react-router-dom';
import TitleBar from './layout/ContentLayout/TitleBar/TitleBar';

export default function App() {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  );
}
