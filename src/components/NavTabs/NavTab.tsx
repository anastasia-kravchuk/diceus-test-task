import { NavLink } from 'react-router-dom';
import './NavTabs.scss';

interface NavTabProps {
  label: string;
  to: string;
  icon: React.ReactNode;
}

export const NavTab = ({ label, to, icon }: NavTabProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
    >
      <span className="nav-tab__icon">{icon}</span>
      <span className="nav-tab__label">{label}</span>
    </NavLink>
  );
};
