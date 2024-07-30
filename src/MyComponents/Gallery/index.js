import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const GallerySection = () => {
const [isSpecExpanded, setIsSpecExpanded] = useState(false);
  return (
    <div className="product-media-top grid h-full relative pb-16 md:pb-0">
		<div className="product-gallery-wrap my-auto py-4 md:p-0">
			<div className="product-gallery-section md:w-1/2 m-auto md:py-[3%] relative md:top-7">
				<Zoom>
					<img 
						className="md:!w-full !w-[60%] m-auto relative" 
						src="./frame.png" alt="Product Image" 
						style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
				</Zoom>
			</div>
		</div>
        <div className={`${isSpecExpanded ? '' : 'original-specification'} default-specification flex flex-row w-full p-2 absolute md:bottom-[50px] bottom-0 top-auto bg-white border-t-2 border-b-2 md:border-b-0`}>
            <div className="default-image basis-1/12 md:p-2 p-0">
                <img className="w-full" src="./mini-frame.png" alt="" />
            </div>
            <div className="default-section basis-11/12 md:p-2 pt-0 pl-2 md:pr-8 text-gray-600">
				<div className="default-show flex md:flex-row flex-col justify-between text-sm pb-3">
					<h3><strong>Original Specifications</strong></h3>
					<div className=""><strong>Original Price: <span>$244</span></strong></div>
				</div>
				<div className="default-hide flex flex-row flex-wrap text-xs">
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Medium:</strong>
						<span className="pl-1">Photo Paper</span>
					</span>
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Size:</strong>
						<span className="pl-1">21.75"w x 21.75"h</span>
					</span>
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Top Mat:</strong>
						<span className="pl-1">B97</span>
					</span>
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Liner:</strong>
						<span className="pl-1">None</span>
					</span>
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Treatment:</strong>
						<span className="pl-1">Double Mats</span>
					</span>
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Frame:</strong>
						<span className="pl-1">M0467</span>
					</span>
					<span className="spec-feature pr-2 md:flex-[25%] flex-[50%] md:max-w-[25%] pb-2">
						<strong>Bottom Mat:</strong>
						<span className="pl-1">B97</span>
					</span>
				</div>
            </div>
            <button
                onClick={() => setIsSpecExpanded(!isSpecExpanded)}
                className="spec-trigger mt-2 hover:text-blue-500 absolute bottom-0 right-0 flex justify-center items-center"
                >
                {isSpecExpanded ? '-' : '+'}
            </button>
        </div>
		{/* <div className="bg-white flex mt-auto md:h-[80px] items-center justify-end px-4 border-t-2"></div> */}
    </div>
  )
}

export default GallerySection;
