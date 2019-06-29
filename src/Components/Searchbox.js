import React from 'react';

const SearchBox = ({searchLyrics, display}) => {
  const style = {
    display: display
}
  return (
    <div style={style} className='ba'>
      <form>
        <input type="text" 
        className='f3' 
        placeholder='Search lyrics'
        onChange={searchLyrics}
        autoFocus
        ></input>
      </form>
    </div>
  );
}

export default SearchBox;