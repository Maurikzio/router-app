import React from 'react';

import images from './images';
import './pictures-styles.css';

export default function Pictures(){
    return (
        <div className="pictures-container">
            {
                images.map(image => (
                    <img src={image.src} key={image.id}/>
                ))
            }
        </div>
    )
}