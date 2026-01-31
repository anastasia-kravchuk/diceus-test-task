import './SearchInput.scss';

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  width?: string;
  height?: string; 
}

export const SearchInput = ({
  value = '',
  onChange,
  placeholder = 'Search',
  width = '100%',
  height = '40px',
}: SearchInputProps) => {
  return (
    <div
      className="search-input"
      style={{ width, height }}
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