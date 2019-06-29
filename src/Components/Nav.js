import React from 'react';

const Nav = ({toggleDisplay}) => {
    return (
        <div>
            <nav className='flex justify-around'>
                <button id='addSong' onClick={toggleDisplay}>Add Song</button>
                <button id='signIn' onClick={toggleDisplay}>Sign In</button>
                <button id='dashBoard' onClick={toggleDisplay}>Dashboard</button>                
            </nav>
        </div>
    )
}

export default Nav;