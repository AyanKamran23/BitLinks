"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  // const [buttontext, setbuttontext] = useState("Generated URL");

  // useEffect(() => {
  //  const storedcode = localStorage.getItem("savedShortCode")
  //  if (storedcode) {
  //   setbuttontext(storedcode);
  //  }
  // }, [])
   const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className='w-full'>
    //   <nav className='bg-green-700 text-white h-10 flex items-center justify-between px-3 w-full'>
    //     <span className='font-bold text-green-50 shadow-lg'>BitLinks</span>
    //     <ul className='hidden md:flex justify-center gap-0  text-sm font-semibold text-green-50'>
    //         <Link className='hover:bg-green-900 focus:bg-green-900 hover:text-green-200 p-2.5 ' href={"/"} ><li>Home</li></Link>
    //         <Link className='hover:bg-green-900 focus:bg-green-900 hover:text-green-200 p-2.5 ' href={"/about"} ><li>About</li></Link>
    //         <Link className='hover:bg-green-900 focus:bg-green-900 hover:text-green-200 p-2.5 ' href={"/shorten"} ><li>Shortner</li></Link>
    //         <Link className='hover:bg-green-900 focus:bg-green-900 hover:text-green-200 p-2.5 ' href={"/contact"} ><li>Contact</li></Link>
    //     </ul>
    //     <span className='flex gap-3'>
    //         <Link href={"/shorten"} ><button className='bg-green-900 py-1 px-4 rounded-full font-semibold text-sm text-green-50 hover:bg-green-950 cursor-pointer '>Try it</button></Link>
    //         <Link href={"/github"} ><button className='bg-green-900 py-1 px-4 rounded-full font-semibold text-sm text-green-50 hover:bg-green-950 cursor-pointer '>Github</button></Link>
    //     </span>
    //   </nav>
    // </div>
 <div className="w-full">
      <nav className="bg-green-700 text-white h-16 md:h-10 flex items-center justify-between px-4 md:px-6 w-full">
        {/* Logo */}
        <span className="font-bold text-green-50 shadow-lg text-lg">BitLinks</span>

        {/* Desktop Links (Hidden on mobile, visible on md screens and up) */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-green-50">
          <Link href="/" className="hover:text-green-200 py-1">Home</Link>
          <Link href="/about" className="hover:text-green-200 py-1">About</Link>
          <Link href="/shortner" className="hover:text-green-200 py-1">Shortner</Link>
          <Link href="/contact" className="hover:text-green-200 py-1">Contact</Link>
        </ul>

        {/* Action Buttons (Hidden or stacked gracefully on mobile) */}
        <div className="hidden sm:flex gap-3">
          <Link href="/shorten">
            <button className="bg-green-900 py-1 px-3 rounded-full font-semibold text-xs md:text-sm text-green-50 hover:bg-green-950">
             Try it
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-green-900 py-1 px-3 rounded-full font-semibold text-xs md:text-sm text-green-50 hover:bg-green-950">
              Github
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button (Shows only on mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-green-50 focus:outline-none"
        >
          {/* Simple SVG Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu (Opens when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden bg-green-800 text-white flex flex-col px-4 py-4 space-y-3 shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-200">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-200">About</Link>
          <Link href="/shortner" onClick={() => setIsOpen(false)} className="hover:text-green-200">Shortner</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-200">Contact</Link>
          <div className="flex flex-col gap-2 pt-2 border-t border-green-700">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-green-900 py-2 rounded-full font-semibold text-sm text-green-50">
               try it
              </button>
            </Link>
            <Link href="/github" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-green-900 py-2 rounded-full font-semibold text-sm text-green-50">
                Github
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  
    
  ) 
}

export default Navbar
// 'use client'
// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'

// const Navbar = () => {
//   const [buttontext, setbuttontext] = useState("Generated URL");
//   // State to toggle mobile menu dropdown if you want to add one later
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const storedcode = localStorage.getItem("savedShortCode")
//     if (storedcode) {
//       setbuttontext(storedcode);
//     }
//   }, [])

//   return (
//     <div className="w-full">
//       <nav className="bg-green-700 text-white h-16 md:h-10 flex items-center justify-between px-4 md:px-6 w-full">
//         {/* Logo */}
//         <span className="font-bold text-green-50 shadow-lg text-lg">BitLinks</span>

//         {/* Desktop Links (Hidden on mobile, visible on md screens and up) */}
//         <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-green-50">
//           <Link href="/" className="hover:text-green-200 py-1">Home</Link>
//           <Link href="/about" className="hover:text-green-200 py-1">About</Link>
//           <Link href="/shortner" className="hover:text-green-200 py-1">Shortner</Link>
//           <Link href="/contact" className="hover:text-green-200 py-1">Contact</Link>
//         </ul>

//         {/* Action Buttons (Hidden or stacked gracefully on mobile) */}
//         <div className="hidden sm:flex gap-3">
//           <Link href="/shorten">
//             <button className="bg-green-900 py-1 px-3 rounded-full font-semibold text-xs md:text-sm text-green-50 hover:bg-green-950">
//               {buttontext}
//             </button>
//           </Link>
//           <Link href="/github">
//             <button className="bg-green-900 py-1 px-3 rounded-full font-semibold text-xs md:text-sm text-green-50 hover:bg-green-950">
//               Github
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Hamburger Button (Shows only on mobile) */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)} 
//           className="md:hidden text-green-50 focus:outline-none"
//         >
//           {/* Simple SVG Hamburger Icon */}
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Dropdown Menu (Opens when hamburger is clicked) */}
//       {isOpen && (
//         <div className="md:hidden bg-green-800 text-white flex flex-col px-4 py-4 space-y-3 shadow-lg">
//           <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-200">Home</Link>
//           <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-200">About</Link>
//           <Link href="/shortner" onClick={() => setIsOpen(false)} className="hover:text-green-200">Shortner</Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-200">Contact</Link>
//           <div className="flex flex-col gap-2 pt-2 border-t border-green-700">
//             <Link href="/shorten" onClick={() => setIsOpen(false)}>
//               <button className="w-full bg-green-900 py-2 rounded-full font-semibold text-sm text-green-50">
//                 {buttontext}
//               </button>
//             </Link>
//             <Link href="/github" onClick={() => setIsOpen(false)}>
//               <button className="w-full bg-green-900 py-2 rounded-full font-semibold text-sm text-green-50">
//                 Github
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Navbar