import React from 'react'
import { useForm} from 'react-hook-form'
function Form({HandleOnSubmit}) {
  const {register,handleSubmit,reset}=useForm();
  const handle=((data)=>{HandleOnSubmit(data)
  reset()});
  return (
    <div className='mt-10 flex justify-center items-center '>
      <form className="flex justify-center items-center gap-10"action='' onSubmit={handleSubmit(handle)}>
        <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type='text' placeholder='name'></input>
        <input {...register('email')}className='rounded-md px-2 py-1 text-base font-semibold outline-none' type='text' placeholder='email'></input>
        <input {...register('image')}className='rounded-md px-2 py-1 text-base font-semibold outline-none'  type='text'placeholder='image url'></input>
        <input
          className="px-5 rounded-md py-1 bg-blue-500 text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  )
} 

export default Form