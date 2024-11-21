import React from 'react'

function Card({user,handleRemove,index}) {
  return (
    <div   className='w-52 h-full bg-white rounded-lg flex flex-col items-center p-4'>
<div className='image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden '>
  <img className='w-full h-full object-cover overflow-hidden' src={user.image} alt='Card Image' />
</div>
<h1 className="mt-1 text-xl font-semibold leading-none text-center">
    {user.name}
  </h1>
  <h4 className="opacity-60 text-xs font-semibold"> {user.email}</h4>
  <p className="mt-1 text-center text-xs leading-1 tracking-tight font-semibold">
    Lorem ipsum dolor sit amet consectetur.lorem ipsum dolor sit amet
  </p>
  <button onClick={()=>handleRemove(index)}
    className="px-3 py-1 bg-red-500 text-xs rounded-lg font-semibold text-white mt-4"
  >
    Remove it
  </button>
</div>
  )
}

export default Card