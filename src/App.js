import React from 'react';
import './App.css';
// import HamburgerMenu from './MyComponents/Header';
import CustomMenu from './MyComponents/Header'
import GallerySection from './MyComponents/Gallery';
import ProductCustomisation from './MyComponents/ProductInfo';
import CustomizeFooter from './MyComponents/Footer';

function App() {
  	return (
    	<div>
      		<div className="App md:h-screen md:border-2 overflow-hidden md:overflow-auto">
        		<div className="main-header flex leading-none border-2 border-gray-300 border-l-0 w-[100%] h-[72px]">
            		{/* <HamburgerMenu /> */}
          			<CustomMenu />
        		</div>
				<div className="grid md:grid-cols-2 grid-cols-1 h-full max-h-[calc(100%-100px)]">
					<GallerySection />
					<div className="product-info">
						<ProductCustomisation />
						<CustomizeFooter />
					</div>
				</div>
      		</div>
    	</div>
  	);
}

export default App;
