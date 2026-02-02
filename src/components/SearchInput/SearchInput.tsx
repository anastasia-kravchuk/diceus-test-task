import './SearchInput.scss';

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export const SearchInput = ({
  value = '',
  onChange,
  placeholder = 'Search',
  width = '100%',
  height = '50px',
  backgroundColor,
}: SearchInputProps) => {
  return (
    <div
      className="search-input"
      style={{ width, height, backgroundColor }}
    >
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        aria-label="Search"
      />
    </div>
  );
};