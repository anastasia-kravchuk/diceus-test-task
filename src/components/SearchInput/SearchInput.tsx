import './SearchInput.scss';

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SearchInput = ({
  value = '',
  onChange,
  className,
}: SearchInputProps) => {
  return (
    <div
      className={`search-input ${className ?? ''}`}
    >
      <input
        type="text"
        value={value}
        placeholder='Search'
        onChange={(e) => onChange?.(e.target.value)}
        aria-label="Search"
      />
    </div>
  );
};