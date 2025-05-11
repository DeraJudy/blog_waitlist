'use client'
import Image from "next/image";
import Head from "next/head";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {

  const [email, setEmail ] = useState("");
  const [status, setStatus ] = useState("");

  const handleSubmit = async () => {
    if (!email) return;
  
    setStatus("Submitting...");
  
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    const data = await res.json();
    if (res.ok) {
      setStatus("You're on the waitlist!");
      setEmail(""); // clear input
    } else {
      setStatus(data.message || data.error || "Something went wrong.");
    }
  };
  

  return (
    <>
      <Head>
        <title>Welcome to Ozioma Pov</title>
        <meta name="description" content="Join our waitlist to stay updated!" />
      </Head>

      <div
        className="h-screen max-h-screen flex justify-center items-center bg-gradient-to-r 
      from-blue-900 to-blue-600 px-6 md:px-0"
      >
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />

        <div
          className="relative flex items-center justify-center w-full max-w-lg bg-transparent shadow-lg 
          shadow-blue-500/50 rounded-xl overflow-hidden 
          border-2 border-transparent py-2 px-8 h-auto sm:h-[500px] md:h-[450px]"
        >
          {/* Moving Border Effect */}
          <div className="absolute inset-0 w-full h-full border-2 border-transparent rounded-xl 
          animate-moving-border" />

          {/* Inner Content */}
          <div className="relative z-10 text-white text-lg font-semibold px-2 md:px-5">
            <div className="text-center">
              <h3 className="text-[#AC1754] font-primary font-bold text-2xl sm:text-3xl md:text-5xl 
              md:font-black ">
                Join our waitlist
              </h3>
              <p className="mt-9 text-[#ffffff] font-secondary font-normal text-base md:text-xl 
              md:font-bold leading-7">
                Sign up for our newsletter to receive the latest updates and
                insights straight to your inbox.
              </p>
            </div>

            {/* <div className="mt-5 space-x-4 flex justify-center">
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 
              transition duration-300 cursor-pointer">
                <FaGoogle className="text-[#F7A8C4] w-6 h-6" />
              </div>
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 
              transition duration-300 cursor-pointer">
                <FaApple className="text-[#F7A8C4] w-6 h-6" />
              </div>
            </div> */}

            {/* <p className="text-center mt-6 font-bold font-primary lg:font-black">OR</p> */}

            

            <div className="mt-6 flex flex-col items-center space-y-4">

            {status && (
              <div className="fixed top-5 right-5 z-50 shadow-lg rounded-md max-w-xs w-full">
                <div
                  className={`px-5 py-4 rounded-md text-base font-medium flex items-start gap-3 shadow-md transition-all duration-300
                    ${
                      status.includes("✅")
                        ? "bg-green-100 text-green-800"
                        : status.includes("❌") || status.toLowerCase().includes("wrong")
                        ? "bg-red-100 text-red-800"
                        : "bg-[#AC1754] text-white"
                    }`}
                >
                  <span className="text-xl">
                    {status.includes("✅")
                      ? "✅"
                      : status.includes("❌") || status.toLowerCase().includes("wrong")
                      ? "❌"
                      : "ℹ️"}
                  </span>
                  <p className="flex-1 mt-1">{status}</p>
                </div>
              </div>
            )}


              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full max-w-xs p-3 rounded-lg border-2 border-[#007FFF] bg-transparent 
                text-[#000000] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                onClick={handleSubmit}
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg 
                font-medium text-[#AC1754] border-2 border-[#ffffff] rounded-full hover:text-[#8AA8EE]
                group hover:bg-gray-50 hover:border-[#000] transition duration-300"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#AC1754] opacity-100 
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
                <span className="relative font-primary">Join WaitList</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
