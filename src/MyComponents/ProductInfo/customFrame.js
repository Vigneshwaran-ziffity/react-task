// import React, {useState, useEffect} from 'react';
// import frameData from '../../API/frame.json';

// const CustomFrame = () => {

// 	const [colorFrames, setColorFrames] = useState([]);
// 	const [frameWidths, setFrameWidths] = useState([]);
// 	const [frameTypes, setFrameTypes] = useState([]);
// 	const [statuses, setStatuses] = useState([]);
// 	const productsArray = Object.values(frameData);
  
// 	useEffect(() => {

// 	  const colors = [...new Set(productsArray.map(product => product.m_color_family))];
// 	  const widths = [...new Set(productsArray.map(product => product.m_frame_width))];
// 	  const types = [...new Set(productsArray.map(product => product.m_frame_type))];
// 	  const statusList = [...new Set(productsArray.map(product => product.m_status))];	  

// 	  const sortedFrameWidths = [...widths].sort((a, b) => a - b);
  
// 	  setColorFrames(colors);
// 	  setFrameWidths(sortedFrameWidths);
// 	  setFrameTypes(types);
// 	  setStatuses(statusList);

// 	}, []);
  
// 	return (
// 	  <div className="">
// 		<form className="flex md:space-x-4 flex-row flex-wrap md:flex-nowrap w-full justify-between md:justify-normal">
// 			<select className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
// 				<option value="">Select Color</option>
// 				{colorFrames.map((color, index) => (
// 					<option key={index} value={color}>
// 					{color}
// 					</option>
// 				))}
// 			</select>
	
// 			<select className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
// 				<option value="">Select Width</option>
// 				{frameWidths.map((width, index) => (
// 					<option key={index} value={width}>
// 					{width}
// 					</option>
// 				))}
// 			</select>
	
// 			<select className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
// 				<option value="">Select Type</option>
// 				{frameTypes.map((type, index) => (
// 					<option key={index} value={type}>
// 					{type}
// 					</option>
// 				))}
// 			</select>
	
// 			<select className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
// 				<option value="">Stock</option>
// 				{statuses.map((status, index) => (
// 					<option key={index} value={status}>
// 					 {status === "1" ? "In Stock" : "Out of Stock"}
// 					</option>
// 				))}
// 			</select>
// 		</form>
// 		<div className="grid gap-4 md:grid-cols-3 grid-cols-2 py-4">
// 			{productsArray.map((product) => (
// 				<div key={product.m_sku} className="border border-gray-300  items-center p-2 rounded cursor-pointer box-border flex flex-row w-full hover:border-[#28A745] hover:bg-[#F0FFF4]">
// 					<div className='frame-image w-[30%]'>
// 						<img
// 							src={
// 								product.thumbnail
// 								  ? product.thumbnail.replace(
// 									  "https://prod.wendoverart.com",
// 									  "https://qa.wendoverdemo.com"
// 									)
// 								  : "default-image-url" // fallback URL if needed
// 							  }
// 							alt={product.m_name}
// 							className="w-full object-cover rounded-md"
// 						/>
// 					</div>
// 					<div className="flex flex-col pl-2 text-sm w-[70%]">
// 						<p className="mb-1">{product.m_sku}</p>
// 						<p className="text-gray-700 mb-1 font-semibold">
// 							{product.m_frame_width}"
// 						</p>
// 						<p className="text-gray-700">
// 							{product.m_color_family}
// 						</p>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	  </div>
// 	);
//   };

// export default CustomFrame;



import React, { useState, useEffect } from 'react';
import frameData from '../../API/frame.json';

const CustomFrame = () => {
  const [colorFrames, setColorFrames] = useState([]);
  const [frameWidths, setFrameWidths] = useState([]);
  const [frameTypes, setFrameTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedWidth, setSelectedWidth] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const productsArray = Object.values(frameData);

  useEffect(() => {
    const colors = [...new Set(productsArray.map(product => product.m_color_family))];
    const widths = [...new Set(productsArray.map(product => product.m_frame_width))];
    const types = [...new Set(productsArray.map(product => product.m_frame_type))];
    const statusList = [...new Set(productsArray.map(product => product.m_status))];
    
    const sortedFrameWidths = [...widths].sort((a, b) => a - b);

    setColorFrames(colors);
    setFrameWidths(sortedFrameWidths);
    setFrameTypes(types);
    setStatuses(statusList);
  }, []);

  const handleColorChange = (e) => setSelectedColor(e.target.value);
  const handleWidthChange = (e) => setSelectedWidth(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);

  const filteredProducts = productsArray.filter(product => {
    return (
      (selectedColor === '' || product.m_color_family === selectedColor) &&
      (selectedWidth === '' || product.m_frame_width === selectedWidth) &&
      (selectedType === '' || product.m_frame_type === selectedType) &&
      (selectedStatus === '' || product.m_status === selectedStatus)
    );
  });

  return (
    <div>
      <form className="flex md:space-x-4 flex-row flex-wrap md:flex-nowrap w-full justify-between md:justify-normal">
        <select value={selectedColor} onChange={handleColorChange} className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
          <option value="">Select Color</option>
          {colorFrames.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select value={selectedWidth} onChange={handleWidthChange} className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
          <option value="">Select Width</option>
          {frameWidths.map((width, index) => (
            <option key={index} value={width}>
              {width}
            </option>
          ))}
        </select>

        <select value={selectedType} onChange={handleTypeChange} className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
          <option value="">Select Type</option>
          {frameTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select value={selectedStatus} onChange={handleStatusChange} className="md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
          <option value="">Stock</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status === "1" ? "In Stock" : "Out of Stock"}
            </option>
          ))}
        </select>
      </form>

      <div className="grid gap-4 md:grid-cols-3 grid-cols-2 py-4">
        {filteredProducts.map((product) => (
          <div key={product.m_sku} className="border border-gray-300 items-center p-2 rounded cursor-pointer box-border flex flex-row w-full hover:border-[#28A745] hover:bg-[#F0FFF4]">
            <div className='frame-image w-[30%]'>
              <img
                src={
                  product.thumbnail
                    ? product.thumbnail.replace(
                        "https://prod.wendoverart.com",
                        "https://qa.wendoverdemo.com"
                      )
                    : "default-image-url"
                }
                alt={product.m_name}
                className="w-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col pl-2 text-sm w-[70%]">
              <p className="mb-1">{product.m_sku}</p>
              <p className="text-gray-700 mb-1 font-semibold">
                {product.m_frame_width}"
              </p>
              <p className="text-gray-700">
                {product.m_color_family}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomFrame;