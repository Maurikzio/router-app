import React from 'react';

import './post-content.css'

function PostContent({ name, nickname, date, content, image }){
    return(
        <section className='postContent'>
            <div className='postHeader'>
                <p className='authorName'>{name}</p>
                <p className='authorNickname'>{nickname}</p>
                <p className='postDate'>{date}</p>
            </div>
            <div className='postBody'>
                <p>{content}</p>
                <img src={image}/>
            </div>
        </section>
    )
}

export default PostContent;