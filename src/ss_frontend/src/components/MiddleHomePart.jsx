import React from 'react'
import TextInput from './TextInput'
import HomePost from './HomePost'
import { useAuth } from '../hooks/UseAuth'

const MiddleHomePart = ({ setCurrPost }) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className='w-1/2 h-full flex flex-col justify-start'>
      {
        isAuthenticated && <TextInput />
      }
      <div className=' flex flex-col gap-6'>
        <HomePost choosePost={setCurrPost} postId={"dummy"} />
        <HomePost choosePost={setCurrPost} postId={"dummy"} />
      </div>
    </div>
  )
}

export default MiddleHomePart