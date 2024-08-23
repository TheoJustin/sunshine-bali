import React, { useEffect, useState } from 'react'
import blank from '../assets/logo/blankprofpic.png'
import { ss_backend } from '../../../declarations/ss_backend';


const Comment = ({comment}) => {
    const [name, setName] = useState("");
    useEffect(() => {
        const user = ss_backend.getUserById(comment.sender);
        if(user.ok){
            setName(user.ok.name);
        }
    }, [comment])
    return (
        <div className='  h-20 flex items-center gap-5'>
            {/* assdsadas */}
            <img src={blank} className='h-[60%] rounded-full' alt="" />
            <div className='flex-grow'>
                <h1 className='text-lg font-medium'>{name}</h1>
                <p className='text-base '>{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment