import React, { useState } from 'react';
import './Autocomplete.css';

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleSend = (event) => {{
    if (event.key === 'Enter') {
      console.log('Отправленный текст:', inputValue);
      setInputValue('');
    }}};

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
    }, 100);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setHighlightedIndex(-1);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (event) => {
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
    <div className={`autocomplete-container `}>
      <input
        className={`autocomplete-input ${filteredSuggestions.length ? 'active' : '' }`}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleSend}
        placeholder="Найти товар"
      />
      {inputFocused && filteredSuggestions.length > 0 && (
        <ul className={`autocomplete-suggestions `}>
          {filteredSuggestions.map((suggestion, index) => (
            <li 
              key={index} 
              className={`autocomplete-suggestion ${highlightedIndex === index ? 'highlighted' : ''}`}
              onClick={() => handleSelect(suggestion)}>
              {suggestion}  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
