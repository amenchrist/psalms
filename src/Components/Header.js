import React from 'react';

const Header = ({toggleDisplay}) => {
    return (
        <div id='headerDiv' className='ba flex flex-column' onClick={toggleDisplay}>
            <p id='header1' className='ba f4 ma0 tc'>THE BOOK OF</p>
            <p id='psalms' className='ba f1 ma0 tc' onClick={window.reload}>PSALMS</p>
            <p id='header3' className='ba f4 ma0 tc'>...CONTINUED...</p>
        </div>
    );
}

export default Header;