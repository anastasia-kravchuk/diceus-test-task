import { SearchInput } from '../../../../components/SearchInput/SearchInput';
const FILTERS = [
  { id: 1, label: 'Filter' },
  { id: 2, label: 'Sort' },
  { id: 3, label: 'Group' },
  { id: 4, label: '+New' },
];

export const AccountsFilters = () => {
  return (
    <div className="accounts-filters">
      <SearchInput
        width="200px"
        height="30px"
        backgroundColor="#222737"
      />

      {FILTERS.map((item, index) => (
        <button
          key={item.id}
          className={`accounts-filters__filter accounts-filters__filter--${index}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
