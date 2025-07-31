import React from 'react'
import { Button } from './ui/button'


export default function hero() {
  return (
    <div className="flex items-center justify-center p-20 bg-gray-100   "> 
        <div className="  flex flex-col justify-center items-center mt-20   ">
            
       <h1 className=" text-5xl font-semibold  w-full  max-w-2xl text-center text-cyan-900 ">The Future of Manufacturing with latest Technology</h1>
       <p className=" text-90 mt-4 w-full  max-w-lg text-center ">
           Expert tech elevate your manufacturing let&apos;s take your business further.
        </p>
       
       <div className="flex items-center justify-center space-x-4 p-6">
        <Button className="px-6 py-2 bg-cyan-900 text-white rounded-full">Get Started</Button>
       <Button className="px-6 py-2 bg-white text-cyan-900 rounded-full hover:text-white">Try demo</Button>
  
</div>
      </div>
      </div>
  )
}
