import { NavTab } from './NavTab';
import './NavTabs.scss';
import { House, Database } from 'lucide-react';

export const NavTabs = () => {
  return (
    <nav
      className="nav-tabs"
      aria-label="Main navigation"
    >
      <div className="nav-tabs__container">
        <NavTab
          to="/"
          label="Dashboard"
          icon={<House />}
        />
        <NavTab
          to="/accounts"
          label="Accounts"
          icon={<Database />}
        />
      </div>
    </nav>
  );
};
