import { Outlet } from 'react-router-dom';
import { AppHeader } from '../../components/layout/AppHeader/AppHeader';
import { NavTabs } from '../NavTabs/NavTabs';
import './AppLayout.scss';

export const AppLayout = () => {
  return (
    <div className="app-layout">
      <AppHeader />

      <NavTabs />

      <main className="app-layout__main">
        <div className="app-layout__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
