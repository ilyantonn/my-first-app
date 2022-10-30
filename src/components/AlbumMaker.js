import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {
    render() {
        console.log(entries);

        return(

            <div className="flex-container" >
                {
                    entries.itemlist.map((photo) => {
                        return <PhotoEntry key={photo.src} src= {photo.src} name={photo.name} caption={photo.caption} />
                    }
                    )
                }
            </div>
        )
    }
}


export default AlbumMaker;