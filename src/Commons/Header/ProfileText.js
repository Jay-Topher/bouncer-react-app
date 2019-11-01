import React from 'react';

function ProfileText ({uniqueClass, text}) {
    return (
        <span className='ml-2'>
        <i>{uniqueClass}</i><span>{text}</span>
        </span>
    )
}

export default ProfileText;
// "far fa-user"