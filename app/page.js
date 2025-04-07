// import Image from "next/image";
// import Head from "next/head";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Welcome to Our Blog</title>
//         <meta name="description" content="Join our waitlist to stay updated!" />
//       </Head>

//       <div className="h-screen max-h-screen flex justify-center items-center">
//         <Image
//           src="/bg.jpg"
//           alt=""
//           fill
//           className="object-cover mix-blend-overlay"
//           priority
//         />

//         <div
//           className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md
//           lg:max-w-lg xl:max-w-xl bg-transparent shadow-lg shadow-blue-500/50 rounded-xl overflow-hidden
//           border-2 border-transparent px-5 py-8 md:px-14 md:py-6 h-[500px]"
//         >
//           {/* Moving Border Effect */}
//           <div className="absolute inset-0 w-full h-full border-2 border-transparent rounded-xl
//           animate-moving-border">

//             {/* Inner Content */}
//             <div className="relative z-10 text-white text-lg font-semibold">
//               <div className="text-center">
//                 <h3 className="text-[#D32F2F] font-bold text-2xl md:text-white md:text-4xl
//                  md:font-black mt-5 ">
//                   Join our waitlist
//                 </h3>
//                 <p className="mt-3 text-[#0d97e7]  font-normal text-base md:text-2xl md:font-bold ">
//                   Sign up for our newletter to recieve the latest updates and
//                   insights straight to your inbox.
//                 </p>
//               </div>

//               {/* <div className="mt-5 space-x-4 flex justify-center">
//                 <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
//                   <FaGoogle className="text-white w-6 h-6" />
//                 </div>
//                 <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
//                   <FaApple className="text-white w-6 h-6" />
//                 </div>
//               </div> */}

//               <p className="text-center mt-6 font-bold lg:font-black">OR</p>

//               <div className="mt-6 flex flex-col justify-center">
//                 <input type="" placeholder="Enter your Email" />

//                 <button >
//                   <a
//                     href="#_"
//                     className="relative inline-flex items-center px-12 py-3 overflow-hidden
//                   text-lg font-medium text-white border-2 border-[#D32F2F] rounded-full
//                   hover:text-white group hover:bg-gray-50"
//                   >
//                     <span
//                       className="absolute left-0 block w-full h-0 transition-all bg-[#D32F2F]
//                       opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
//                     ></span>
//                     <span
//                       className="absolute right-0 flex items-center justify-start w-10 h-10
//                       duration-300 transform translate-x-full group-hover:translate-x-0 ease"
//                     >
//                       <svg
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         ></path>
//                       </svg>
//                     </span>
//                     <span className="relative">Join WaitList</span>
//                   </a>
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </>
//   );
// }

import Image from "next/image";
import Head from "next/head";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Our Blog</title>
        <meta name="description" content="Join our waitlist to stay updated!" />
      </Head>

      <div
        className="h-screen max-h-screen flex justify-center items-center bg-gradient-to-r 
      from-blue-900 to-blue-600"
      >
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />

        <div
          className="relative flex items-center justify-center w-full max-w-lg bg-transparent shadow-lg shadow-blue-500/50 rounded-xl overflow-hidden 
          border-2 border-transparent p-8 h-auto sm:h-[500px] md:h-[550px]"
        >
          {/* Moving Border Effect */}
          <div className="absolute inset-0 w-full h-full border-2 border-transparent rounded-xl animate-moving-border" />

          {/* Inner Content */}
          <div className="relative z-10 text-white text-lg font-semibold px-6 md:px-8">
            <div className="text-center">
              <h3 className="text-[#AC1754] font-bold text-2xl md:text-5xl md:font-black ">
                Join our waitlist
              </h3>
              <p className="mt-3 text-[#ffffff] font-normal text-base md:text-xl md:font-bold">
                Sign up for our newsletter to receive the latest updates and
                insights straight to your inbox.
              </p>
            </div>

            <div className="mt-5 space-x-4 flex justify-center">
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 
              transition duration-300 cursor-pointer">
                <FaGoogle className="text-[#F7A8C4] w-6 h-6" />
              </div>
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 
              transition duration-300 cursor-pointer">
                <FaApple className="text-[#F7A8C4] w-6 h-6" />
              </div>
            </div>

            <p className="text-center mt-6 font-bold lg:font-black">OR</p>

            <div className="mt-6 flex flex-col items-center space-y-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full max-w-xs p-3 rounded-lg border-2 border-[#AC1754] bg-transparent 
                text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#007FFF] "
              />
              <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg 
              font-medium text-[#AC1754] border-2 border-[#ffffff] rounded-full hover:text-[#AC1754]
              group hover:bg-gray-50 hover:border-[#000] transition duration-300">
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#007FFF] opacity-100 
                group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 
                transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Join WaitList</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
