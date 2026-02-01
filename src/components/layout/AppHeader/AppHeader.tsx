import { SearchInput } from '../../SearchInput/SearchInput';
import './AppHeader.scss';

export const AppHeader = () => {
  return (
    <>
      <header className="app-header">
        <div className="app-header__container">
          <div className="app-header__left">
            <h1>
              Hi Arthur, welcome! <br className="app-header__brake" /> You have
              12 open tasks.
            </h1>
          </div>

          <div className="app-header__right">
            <SearchInput width="280px" />
            <div className="app-header__logo">AR</div>
          </div>
        </div>
      </header>
    </>
  );
};
