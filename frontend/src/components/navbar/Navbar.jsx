
function Navbar() {
  return (
    <div className="flex items-center justify-between h-[100%] px-4 py-2 bg-[#212121] text-white border-b border-[#2f2f2f]">
      
      {/* Left - Logo + Title */}
      <div className="flex items-center gap-3">
        <div className=" rounded-full p-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
          </svg>
        </div>
        <h1 className="text-sm font-medium">CodeX</h1>
      </div>

      {/* Model name */}
      <div className="hidden md:flex items-center gap-1 text-sm text-gray-300 cursor-pointer hover:text-white">
        <span>CodeX-llama-3.3</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        
        {/* Upgrade Button */}
        <button className="hidden md:block text-xs bg-[#303030] hover:bg-[#3a3a3a] px-3 py-1.5 rounded-md">
          Upgrade
        </button>

        {/* Profile */}
        <div className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center text-sm cursor-pointer hover:bg-[#4a4a4a]">
          U
        </div>
      </div>
    </div>
  );
}

export default Navbar;