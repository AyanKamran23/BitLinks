import Link from "next/link";
import shorten from "./shorten/page";
export default function Home() {
  return (
    <>
      {/* <main className="bg-green-50">
        <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh]  ">
          <div className="bg-green-50 flex flex-col gap-1 items-center justify-center ">
            <p className="font-extrabold text-xl">The best URL shortener in the market</p>
            <p className="text-xs px-25 text-center ">we are the most straightforward URL shortener in the world. Most of the url shortener will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.  </p>
          <span className='flex gap-3 pt-3'>
            <Link href={"/shorten"} ><button className='bg-green-700 py-1 px-4 rounded-full font-semibold text-sm text-green-50 hover:bg-green-950 cursor-pointer '>Try it</button></Link>
            <Link href={"/github"} ><button className='bg-green-700 py-1 px-4 rounded-full font-semibold text-sm text-green-50 hover:bg-green-950 cursor-pointer '>Github</button></Link>
        </span>
          </div>
          <div className="flex justify-center relative">
            <img  src="/group.gif" alt="group image" />
          </div>
        </section>
      </main> */}

      <main className="bg-green-50">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center px-6 md:px-16 py-12">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="font-extrabold text-2xl md:text-5xl text-neutral-800">
            The best URL shortener in the market
          </p>
          <hr className="md:hidden"/>
          <p className="text-xs md:text-sm text-neutral-600">
            We are the most straightforward URL shortener in the world.  Most of the url shortener will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener. 
          </p>
          
          <div className="flex gap-3 pt-3">
            <Link 
              href="/shorten" 
              className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full font-semibold text-sm transition-colors"
            >
              Try Now
            </Link>
            <Link 
              href="/github" 
              className="bg-green-200 hover:bg-green-300 text-green-800 py-2 px-6 rounded-full font-semibold text-sm transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Image / GIF */}
        <div className="flex justify-center relative mt-8 md:mt-0">
          <img src="/group.gif" alt="group image" className="max-w-full h-auto" />
        </div>

      </section>
    </main>
    </>
  );
}

// import Link from "next/link";

// export default function Home() {
//   return (
    // <main className="bg-green-50">
    //   <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center px-6 md:px-16 py-12">
        
    //     {/* Left Column: Text & Buttons */}
    //     <div className="flex flex-col gap-4 items-start justify-center">
    //       <p className="font-extrabold text-4xl md:text-5xl text-neutral-800">
    //         The best URL shortener in the market
    //       </p>
    //       <p className="text-xs md:text-sm text-neutral-600">
    //         We are the most straightforward URL shortener in the world. Most of the url...
    //       </p>
          
    //       <div className="flex gap-3 pt-3">
    //         <Link 
    //           href="/shorten" 
    //           className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full font-semibold text-sm transition-colors"
    //         >
    //           Try Now
    //         </Link>
    //         <Link 
    //           href="/github" 
    //           className="bg-green-200 hover:bg-green-300 text-green-800 py-2 px-6 rounded-full font-semibold text-sm transition-colors"
    //         >
    //           GitHub
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Right Column: Hero Image / GIF */}
    //     <div className="flex justify-center relative mt-8 md:mt-0">
    //       <img src="/group.gif" alt="group image" className="max-w-full h-auto" />
    //     </div>

    //   </section>
    // </main>
//   );
// }