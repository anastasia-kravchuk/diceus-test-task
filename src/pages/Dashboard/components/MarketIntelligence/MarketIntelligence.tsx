import type { MarketIntelligenceItem } from '../../../../types/dashboard/marketIntelligence';
import './MarketIntelligence.scss';

interface MarketIntelligenceProps {
  data: MarketIntelligenceItem[];
}

export const MarketIntelligence = ({ data }: MarketIntelligenceProps) => {
  return (
    <section className="market-intelligence">
      <h2 className="market-intelligence__title">Market intelligence</h2>
      <div className="market-intelligence__items">
        {data.map((item) => (
          <div
            className="item"
            key={item.id}
          >
            <div
              className={`item__indicator item__indicator--${item.severity.toLocaleLowerCase()}`}
            ></div>
            <p className="item__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
