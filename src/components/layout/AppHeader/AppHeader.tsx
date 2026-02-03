import { Avatar } from '../../Avatar/Avatar';
import { SearchInput } from '../../SearchInput/SearchInput';
import './AppHeader.scss';

export const AppHeader = () => {
  return (
    <>
      <header className="app-header">
        <div className="app-header__container">
          <div className="app-header__left">
            <h1>Hi Arthur, welcome! You have 12 open tasks.</h1>
          </div>

          <div className="app-header__right">
            <SearchInput className="search-input--header" />
            <Avatar text="AR" />
          </div>
        </div>
      </header>
    </>
  );
};
