import React from 'react'
import TextInput from './TextInput'
import HomePost from './HomePost'

const MiddleHomePart = ({setCurrPost}) => {
  return (
    <div className='w-1/2 h-full '>
        <TextInput />
        <div className='mt-5 flex flex-col gap-6'>
            <HomePost choosePost={setCurrPost} postId={"dummy"}/>
            <HomePost choosePost={setCurrPost} postId={"dummy"}/>
        </div>
    </div>
  )
}

export default MiddleHomePart