import React from 'react';
import "./Autocomplete.css"

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [inputFocused, setInputFocused] = React.useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState<number>(-1);

  const handleSend = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(' ', inputValue);
      setInputValue('');
    }
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
    }, 100);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);

    if (filtered.length === 0) {
      setFilteredSuggestions(['Результатов по вашему запросу нет!']);
    }

    setHighlightedIndex(-1);
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex(prevIndex =>
        Math.min(prevIndex + 1, filteredSuggestions.length - 1)
      );
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex(prevIndex =>
        Math.max(prevIndex - 1, 0)
      );
    } else if (event.key === 'Enter') {
      if (highlightedIndex >= 0) {
        handleSelect(filteredSuggestions[highlightedIndex]);
      }
    }
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        className={`search-bar ${inputFocused &&  filteredSuggestions.length > 0 ? 'with-suggestions' : ''}`}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder="Найти товар"
      />
      {inputFocused && filteredSuggestions.length > 0 && (
        <ul className={filteredSuggestions.length < 1 ? "suggestions-list empty" : "suggestions-list"}>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={index === highlightedIndex ? 'highlighted' : ''}
              onClick={() => handleSelect(suggestion)}
              onMouseOver={() => setHighlightedIndex(index)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

