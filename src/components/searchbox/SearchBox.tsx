import * as React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void 
};

const SearchBox = ( {searchChange}: ISearchBoxProps ): JSX.Element => {
  return (
    <div className='pa2'>
      <input
        aria-label="Search robots"
        className='pa3 ba b--green bg-lightest-blue'
        id="robo-search"
        onChange={searchChange}
        placeholder='search robots'
        type='search'
      />
    </div>
  );
}

export default SearchBox;