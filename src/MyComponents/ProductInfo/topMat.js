// import React, {useState, useEffect} from 'react';
// import topMatAPI from '../../API/mat.json';

// const TopMat = () => {

// 	const [colorFrames, setColorFrames] = useState([]);
// 	const [frameTypes, setFrameTypes] = useState([]);
// 	const [statuses, setStatuses] = useState([]);
// 	const productsArray = Object.values(topMatAPI);
  
// 	useEffect(() => {

// 	  const colors = [...new Set(productsArray.map(product => product.m_color_mat))];
// 	  const types = [...new Set(productsArray.map(product => product.m_mat_type))];
// 	  const statusList = [...new Set(productsArray.map(product => product.m_status))];	  
  
// 	  setColorFrames(colors);
// 	  setFrameTypes(types);
// 	  setStatuses(statusList);

// 	}, []);
  
// 	return (
// 	  <div className="">
// 		<form className="flex md:space-x-4 flex-row flex-wrap md:flex-nowrap w-full justify-between md:justify-normal">
// 			<select className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
// 				<option value="">Select Color</option>
// 				{colorFrames.map((color, index) => (
// 					<option key={index} value={color}>
// 					{color}
// 					</option>
// 				))}
// 			</select>
	
// 			<select className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0">
// 				<option value="">Select Type</option>
// 				{frameTypes.map((types, index) => (
// 					<option key={index} value={types}>
// 					{types}
// 					</option>
// 				))}
// 			</select>
	
// 			<select className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0">
// 				<option value="">Stock</option>
// 				{statuses.map((status, index) => (
// 					<option key={index} value={status}>
// 					 {status === "1" ? "In Stock" : "Out of Stock"}
// 					</option>
// 				))}
// 			</select>
//             <div className="flex-1"></div>
// 		</form>
// 		<div className="flex flex-wrap md:gap-6 gap-2 py-4">
// 			{productsArray.map((product) => (
// 				<div key={product.m_sku} className="border border-gray-300 flex flex-row items-center p-2 rounded md:basis-[31.4%] basis-[48%] max-w-[48%] md:max-w-[31.4%] cursor-pointer box-border">
// 					<div className='frame-image w-[30%]'>
//                     <img
// 							src={
// 								product.rendererImage
// 								  ? product.rendererImage.replace(
// 									  "https://prod.wendoverart.com",
// 									  "https://qa.wendoverdemo.com"
// 									)
// 								  : "default-image-url" // fallback URL if needed
// 							  }
// 							alt={product.m_name}
// 							className="md:w-full w-[50%] object-cover"
// 						/>
// 					</div>
// 					<div className="flex flex-col pl-2 text-xs">
// 						<p className="text-gray-700 mb-1">
// 							{product.m_sku}
// 						</p>
// 						<p className="mb-1">{product.m_color_mat}</p>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	  </div>
// 	);
//   };

// export default TopMat;


import React, { useState, useEffect } from 'react';
import topMatAPI from '../../API/mat.json';

const TopMat = () => {
  const [colorFrames, setColorFrames] = useState([]);
  const [frameTypes, setFrameTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const productsArray = Object.values(topMatAPI);

  useEffect(() => {
    const colors = [...new Set(productsArray.map(product => product.m_color_mat))];
    const types = [...new Set(productsArray.map(product => product.m_mat_type))];
    const statusList = [...new Set(productsArray.map(product => product.m_status))];

    setColorFrames(colors);
    setFrameTypes(types);
    setStatuses(statusList);
  }, []);

  const handleColorChange = (e) => setSelectedColor(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);

  const filteredProducts = productsArray.filter(product => {
    return (
      (selectedColor === '' || product.m_color_mat === selectedColor) &&
      (selectedType === '' || product.m_mat_type === selectedType) &&
      (selectedStatus === '' || product.m_status === selectedStatus)
    );
  });

  return (
    <div>
      <form className="flex md:space-x-4 flex-row flex-wrap md:flex-nowrap w-full justify-between md:justify-normal">
        <select value={selectedColor} onChange={handleColorChange} className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
          <option value="">Select Color</option>
          {colorFrames.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select value={selectedType} onChange={handleTypeChange} className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0">
          <option value="">Select Type</option>
          {frameTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select value={selectedStatus} onChange={handleStatusChange} className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0">
          <option value="">Stock</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status === "1" ? "In Stock" : "Out of Stock"}
            </option>
          ))}
        </select>
      </form>

      <div className="flex flex-wrap md:gap-6 gap-2 py-4">
        {filteredProducts.map((product) => (
          <div key={product.m_sku} className="border border-gray-300 flex flex-row items-center p-2 rounded md:basis-[31.4%] basis-[48%] max-w-[48%] md:max-w-[31.4%] cursor-pointer box-border">
            <div className='frame-image w-[30%]'>
              <img
                src={
                  product.rendererImage
                    ? product.rendererImage.replace(
                        "https://prod.wendoverart.com",
                        "https://qa.wendoverdemo.com"
                      )
                    : "default-image-url"
                }
                alt={product.m_name}
                className="md:w-full w-[50%] object-cover"
              />
            </div>
            <div className="flex flex-col pl-2 text-xs">
              <p className="text-gray-700 mb-1">
                {product.m_sku}
              </p>
              <p className="mb-1">{product.m_color_mat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMat;
