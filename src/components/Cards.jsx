import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <div className='w-full max-h-96 p-4 flex justify-center items-center gap-4 flex-wrap overflow-auto'>
    {users.map((item,index)=>{
     return <Card key={index} user={item} handleRemove={handleRemove} index={index}/>
    })
    }
    </div>
  )
}

export default Cards