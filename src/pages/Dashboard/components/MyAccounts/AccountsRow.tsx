import { ActionButton } from '../../../../components/ActionButton/ActionButton';
import type { Account } from '../../../../types/dashboard/myAccount';
import { formatDate } from '../../../../utils/formatDate';
import { WinnabilityDots } from './WinnabilityDots';

interface AccountsRowProps {
  item: Account;
}

export const AccountsRow = ({ item }: AccountsRowProps) => {
  let lossRatioBgcolor;

  if (item.appetite === 'Cautious') {
    lossRatioBgcolor = '#BE3D3B';
  } else if (item.appetite === 'High') {
    lossRatioBgcolor = '#3BB979';
  } else {
    lossRatioBgcolor = '#FDD261';
  }

  return (
    <tr className="accounts-row">
      <td>
        <div className="accounts-row__name">
          <p>{item.name}</p>
          <p>{item.segment}</p>
        </div>
      </td>

      <td className="accounts-row__client-line">{item.line}</td>

      <td className="accounts-row__broker">{item.broker}</td>

      <td className="accounts-row__renewal-date">
        {formatDate(item.renewalDate)}
      </td>

      <td className="accounts-row__premium">{item.premium}</td>

      <td className="accounts-row__rated-premium">{item.ratedPremium}</td>

      <td>
        <span
          className="accounts-row__loss-ratio"
          style={{ backgroundColor: lossRatioBgcolor }}
        >
          {item.lossRatio}
        </span>
      </td>

      <td>
        <div className="accounts-row__appetite">{item.appetite}</div>
      </td>

      <td className="accounts-row__status">
        <span
          className={`accounts-row__status-dot accounts-row__status--${item.status
            .replace(' ', '-')
            .toLowerCase()}`}
          aria-hidden
        />
        <span className="accounts-row__status-text">{item.status}</span>
      </td>

      <td className="accounts-row__triage">
        <span className="accounts-row__triage-score">{item.triageScore}</span>
      </td>

      <td>
        <div className="accounts-row__winnability">
          <div className="accounts-row__winnability-score">
            <WinnabilityDots score={item.winnability.score} />
          </div>
          <p className="accounts-row__winnability-label">
            {item.winnability.label}
          </p>
        </div>
      </td>

      <td className="actions">
        <ActionButton />
      </td>
    </tr>
  );
};
