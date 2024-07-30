import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomFrame from './customFrame';
import TopMat from './topMat'
import BottomMat from './bottomMat';
import Liner from './liner';
import ArtWork from './artWork';

// Including modal for default and clear button
import DefaultModal from '../Modal/DefaultModal';
import ClearModal from '../Modal/ClearModal';

function ProductCustomisation() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="product-info-top border-l-2 border-gray-300 h-full">
            <div className="border-b-2 md:px-5 px-3 pb-4">
                <h1 className="product-title text-3xl font-serif pb-2 md:pt-0 pt-2 font-medium">
                    Sepia Elephants
                </h1>
                <div className="flex flex-col md:flex-row justify-between text-sm items-center font-semibold">
                    <div className="product-details md:w-[70%] w-full flex justify-between md:justify-start">
                        <span>SKU: 11249</span>
                        <span>Price as Configured: $244.00</span>
                    </div>
                    <div className="config-buttons md:w-[30%] w-full flex justify-end pt-3 md:pt-0">
                    <DefaultModal />
                    <ClearModal />
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-sm items-center w-full">
                <div className="feature-title flex items-center justify-between w-full md:p-5 py-5 px-3 border-b-2">
                    <span className="font-semibold">
                        Frame
                    </span>
                    <form className="max-w-lg relative">
                        <input type="search" id="search-item" className="
                        block p-2.5 w-full z-20 text-sm text-gray-900 border-s-2 border border-l-1 border-l-gray-300 rounded-l-2 
                        border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                        placeholder="Locate by Number" required />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="feature-desc w-full">
                <div className='relative md:p-5 px-3 py-5'>
                    <div className="">
                        <i className="fas fa-info-circle text-blue-500 cursor-pointer"></i>
                        <div className="relative group-hover:block">
                            <p className={`${isExpanded ? '' : 'line-clamp-2'}`}>
                                Made Of High Quality Synthetic Wood, Unbreakable Plexi Glass And Mdf Back for long lasting. The Plexi Front Is Clear,
                                Non-Toxic. Designed To Protect Your Photo Frames. Made Of High Quality Synthetic Wood, Unbreakable Plexi Glass And Mdf 
                                Back for long lasting. The Plexi Front Is Clear,
                                Non-Toxic. 
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-2 text-blue-300 hover:text-[#2997FF] font-semibold absolute bottom-0 right-0 bg-white"
                                >
                                {isExpanded ? 'Show Less' : '....Show More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-change md:p-5 md:pt-2 px-3 py-5 pb-28 md:pb-5">
                <Router>
                    <Routes>
                        <Route path="/" element={<CustomFrame />} />
                        <Route path="/topmat" element={<TopMat />} />
                        <Route path="/bottommat" element={<BottomMat />} />
                        <Route path="/liner" element={<Liner />} />
                        <Route path="/artwork" element={<ArtWork />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default ProductCustomisation;
