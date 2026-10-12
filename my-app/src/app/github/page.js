import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-2 mt-[15%]'>
      <p>Cannot Need any login!
        </p>
      <Link href={"/"} ><button className='bg-green-700 py-1 px-4 rounded-lg font-semibold text-sm text-green-50 hover:bg-green-950 cursor-pointer '>Homepage</button></Link>
       </div>
  )
}

export default page
