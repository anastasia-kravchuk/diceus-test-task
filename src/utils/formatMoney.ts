export const formatMoney = (value: number) => {
  const millions = value / 1_000_000;

  return Number.isInteger(millions)
    ? `$${millions}M`
    : `$${millions.toFixed(1)}M`;
};