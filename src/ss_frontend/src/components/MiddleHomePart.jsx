import React from 'react'
import TextInput from './TextInput'
import HomePost from './HomePost'

const MiddleHomePart = () => {
  return (
    <div className='w-1/2 h-full '>
        <TextInput />
        <div className='mt-5'>
            <HomePost/>
            <HomePost/>
        </div>
    </div>
  )
}

export default MiddleHomePart