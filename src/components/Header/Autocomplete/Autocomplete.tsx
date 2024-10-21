import { ReactSearchAutocomplete } from 'react-search-autocomplete'


function Autocomplete({ placeholder }: { placeholder: string }) {
    const items = [
        {
          id: 0,
          name: 'Cobol'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
      ]
    return (
        <ReactSearchAutocomplete
            items={items}
            placeholder={placeholder}
            autoFocus
        />
    );
}

export default Autocomplete;