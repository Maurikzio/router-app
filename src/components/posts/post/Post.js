import React from 'react';
import Avatar from '../avatar/Avatar';
import PostContent from '../postContent/PostContent';
import './post.css'

function Post({author, content, image, date}){
    const header = {
        name: author.name,
        nickname: author.nickname,
        date
    };
    const body = {content, image };

    return(
        <div className="post">
            <Avatar photo={author.photo}/>
            <PostContent 
                {...header} 
                {...body}
            />
        </div>
    )
}

export default Post;