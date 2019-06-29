import React from 'react';

const AddSong = ({display}) => {
    const style = {
        display: display
    }
    return (
        <div style={style}>
            <form>
                <input type="text" className='f3' placeholder="Title"></input><br/>
                <input type="text" className='f3' placeholder="Artist"></input><br/>
                <input type="text" className='f3' placeholder="Lyrics"></input><br/>
            </form>
        </div>
    );
}

export default AddSong;