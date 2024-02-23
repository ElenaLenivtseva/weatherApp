import React from "react";

const Highlights = () => {
  return (
    <div className="bg-slate--600 p-2 text-slate-200 flex fle-col justify-start items-center">
      <h2 className="text-sm mt-2">Wind Status</h2>
      <div className="mt-2">
        <span className="text-4xl font-bold">2.2</span>
        <span className="text-2xl">mph</span>
      </div>
      <div className="mt-2 flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-slate-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        <div className="ms-2 text-slate-200">E</div>
      </div>
    </div>
  );
};

export default Highlights;
