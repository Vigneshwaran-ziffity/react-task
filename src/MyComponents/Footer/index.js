import React from 'react'
import { useNavigate } from 'react-router-dom';



const CustomizeFooter = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/summary');
  };

  // Define an array of routes corresponding to each step
  const steps = ['/', '/topmat', '/bottommat', '/liner', '/artwork', '/summary'];

  // Function to navigate to the next step
  const handleNext = () => {
    const currentPath = window.location.pathname;
    alert(currentPath);
    const currentIndex = steps.indexOf(currentPath);

    if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1]);
    }
  };

  // Function to navigate to the previous step
  const handlePrev = () => {
    const currentPath = window.location.pathname;
    const currentIndex = steps.indexOf(currentPath);
    alert(currentPath);

    if (currentIndex > 0) {
      navigate(steps[currentIndex - 1]);
    }
  };

  return (
    <div className="text-nowrap bg-white flex mt-auto h-[80px] items-center justify-end px-4 py-2 border-t-2 text-[#3B3B3B] fixed right-0 w-full bottom-0">
        <button 
          className="action border-gray-300 hover:border-[#F04E2F] md:px-5 md:py-3 px-4 py-2 border-2 hover:bg-[#F04E2F] hover:text-white rounded-md cusact-summary md:text-sm text-xs font-semibold"
          onClick={handleRedirect}
        >
          PROCEED TO SUMMARY
        </button>
        <button 
          className="action border-gray-300 hover:border-black md:px-5 md:py-3 px-4 py-2 border-2 md:ml-4 ml-2 primary hover:text-white hover:bg-black rounded-md cusact-prev font-medium md:text-sm text-xs"
          onClick={handlePrev}
          disabled={window.location.pathname === '/'} // Disable if at the first step
        >
          PREV
        </button>
        <button 
          className="action border-gray-300 hover:border-black md:px-5 md:py-3 px-4 py-2 border-2 md:ml-4 ml-2 primary hover:text-white hover:bg-black rounded-md cusact-nxt font-medium md:text-sm text-xs"
          onClick={handleNext}
          disabled={window.location.pathname === '/summary'} // Disable if at the last step
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