import React from 'react'

const TextInput = () => {
  return (
    <div className='flex justify-center items-center'>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs p-8"
      />
    </div>
  );
}

export default TextInput
