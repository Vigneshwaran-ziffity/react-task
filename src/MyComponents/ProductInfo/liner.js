import React, {useState, useEffect} from 'react';
import linerAPI from '../../API/liner.json';

const Liner = () => {

	const [colorFrames, setColorFrames] = useState([]);
	const productsArray = Object.values(linerAPI);
  
	useEffect(() => {

	  const colors = [...new Set(productsArray.map(product => product.m_color_family))];
	  setColorFrames(colors);

	}, []);
  
	return (
	  <div className="">
		<form className="flex md:space-x-4 flex-row flex-wrap md:flex-nowrap w-full justify-between md:justify-normal">
			<select className="flex-1 md:w-full w-[48%] border border-gray-300 rounded px-2 py-3 bg-white mb-2 md:mb-0 cursor-pointer">
				<option value="">Select Color</option>
				{colorFrames.map((color, index) => (
					<option key={index} value={color}>
					{color}
					</option>
				))}
			</select>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
		</form>
		<div className="flex flex-wrap md:gap-6 gap-2 py-4">
			{productsArray.map((product) => (
				<div key={product.m_sku} className="border border-gray-300 flex flex-row items-center p-2 rounded md:basis-[31.4%] basis-[48%] max-w-[48%] md:max-w-[31.4%] cursor-pointer box-border">
					<div className='frame-image w-[30%]'>
                    <img
							src={
								product.renderCornerImage
								  ? product.renderCornerImage.replace(
									  "https://prod.wendoverart.com",
									  "https://qa.wendoverdemo.com"
									)
								  : "default-image-url" // fallback URL if needed
							  }
							alt={product.m_name}
							className="md:w-full w-[50%] object-cover"
						/>
					</div>
					<div className="flex flex-col pl-2 text-xs">
						<p className="mb-1">{product.m_liner_type}</p>
					</div>
				</div>
			))}
		</div>
	  </div>
	);
  };

export default Liner;
