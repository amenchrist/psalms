import React from 'react';

const AddSong = () => {
    return (
        <div>
            <form>
                <input type="text" className='f3' placeholder="Title"></input><br/>
                <input type="text" className='f3' placeholder="Artist"></input><br/>
                <input type="text" className='f3' placeholder="Lyrics"></input><br/>
            </form>
        </div>
    );
}

export default AddSong;