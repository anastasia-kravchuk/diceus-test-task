import type { AccountDetails as AccountDetailsType } from '../../../../types/accounts/accountDetails';
import './AccountsDetail.scss';
import logo from '../../../../assets/logo.png';

interface AccountDetailsProps {
  data: AccountDetailsType;
}

export const AccountDetails = ({ data }: AccountDetailsProps) => {
  return (
    <section className="accounts-details">
      <img
        className="accounts-details__logo"
        width={100}
        height={100}
        src={logo}
        alt="Logo"
      />
      <div className="accounts-details__content">
        <h2 className="accounts-details__name">{data.name}</h2>

        <div className="accounts-details__info">
          <p className="accounts-details__address">{data.address}</p>

          <div className="accounts-details__item">
            <p className="accounts-details__label">Existing account</p>
            <p className="accounts-details__value">{data.existingAccountNo}</p>
          </div>

          <div className="accounts-details__item">
            <p className="accounts-details__label">Broker</p>
            <p className="accounts-details__value">{data.broker}</p>
          </div>

          <div className="accounts-details__item">
            <p className="accounts-details__label">Underwriter</p>
            <p className="accounts-details__value">{data.underwriter}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
