import React from 'react'

const CustomizeFooter = () => {
  return (
    <div className="text-nowrap bg-white flex mt-auto h-[80px] items-center justify-end px-4 py-2 border-t-2 text-[#3B3B3B] fixed right-0 w-full bottom-0">
        <button 
          className="action border-gray-300 hover:border-[#F04E2F] md:px-5 md:py-3 px-4 py-2 border-2 hover:bg-[#F04E2F] hover:text-white rounded-md cusact-summary font-medium md:text-sm text-xs"
        >
          PROCEED TO SUMMARY
        </button>
        <button 
          className="action border-gray-300 hover:border-black md:px-5 md:py-3 px-4 py-2 border-2 md:ml-4 ml-2 primary hover:text-white hover:bg-black rounded-md cusact-prev font-medium md:text-sm text-xs" 
          disabled=""
        >
          PREV
        </button>
        <button 
          className="action border-gray-300 hover:border-black md:px-5 md:py-3 px-4 py-2 border-2 md:ml-4 ml-2 primary hover:text-white hover:bg-black rounded-md cusact-nxt font-medium md:text-sm text-xs"
        >
          NEXT
        </button>
        <button 
          className="action border-gray-300 hover:border-black md:px-5 md:py-3 px-4 py-2 border-2 md:ml-4 ml-2 primary hover:text-white hover:bg-black rounded-md cusact-finish font-medium md:text-sm text-xs"
          style={{display: 'none'}}
        >
          FINISH
        </button>
    </div>
  )
}

export default CustomizeFooter;