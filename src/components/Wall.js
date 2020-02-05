import React from 'react'
import Post from './Post/Post'

export default function Wall() {
    const users = [
        {id:1,   userUrl: "https://www.laravelnigeria.com/img/chris.jpg", userImg: "https://i.pravatar.cc/150?img=9"},
    ];
    return (
        <div>
            {users.map(o => <Post props={o} />)}
        </div>
    )
}
