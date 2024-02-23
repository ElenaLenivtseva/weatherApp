import React from "react";

const Temperature = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between">
        <input
          type="text"
          className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:border-slate-400"
          placeholder="Enter Your City Name"
          onChange={handleChange}
          
        />
        <div className="flex justify-center mt-8">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-yellow-300 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-slate-200 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </div>
      </div>
      
      
      <div className="flex justify-center items-center text-slate-200 mt-8 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <p className="font-semibold tet-[55px]">23 </p><span className="text-[33px]">^C</span> 
      </div>
      <div className="flex justify-center items-center text-slate-300 mt-8 text-[25px]text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        mist
      </div>
      <div className="flex justify-center items-center text-slate-400 mt-5 text-[15px]">
        Today 23/02/2024 0:00|Tomsk
      </div>
    </>
  );
};

export default Temperature;