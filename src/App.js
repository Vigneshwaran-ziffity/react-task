import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HamburgerMenu from './MyComponents/Header';
import CustomMenu from './MyComponents/Header'
import GallerySection from './MyComponents/Gallery';
import ProductCustomisation from './MyComponents/ProductInfo';
import CustomizeFooter from './MyComponents/Footer';
import CustomFrame from './MyComponents/ProductInfo/customFrame'; // Create a Home component
import TopMat from './MyComponents/ProductInfo/topMat'; // Create a TopMat component
import BottomMat from './MyComponents/ProductInfo/bottomMat'; // Create a BottomMat component
import Liner from './MyComponents/ProductInfo/liner'; // Create a Liner component
import Artwork from './MyComponents/ProductInfo/artWork'; // Create an Artwork component
import Summary from './MyComponents/ProductInfo/summary'; // Create a Summary component

function App() {
    return (
        <Router>
            <div>
                <div className="App md:h-screen overflow-hidden md:overflow-auto">
                    <div className="main-header flex leading-none border-y border-gray-300 border-l-0 w-[100%] h-[72px]">
                        {/* <HamburgerMenu /> */}
                        <CustomMenu />
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 h-full max-h-[calc(100%-100px)]">
                        <GallerySection />
                        <div className="product-info">
							<div className="product-info-top border-l-2 border-gray-300 h-full">
								<ProductCustomisation />
								<div className="feature-change md:p-5 md:pt-2 px-3 py-5 pb-28 md:pb-5 float-left w-full">
									<Routes>
										<Route path="/" element={<CustomFrame />} />
										<Route path="/topmat" element={<TopMat />} />
										<Route path="/bottommat" element={<BottomMat />} />
										<Route path="/liner" element={<Liner />} />
										<Route path="/artwork" element={<Artwork />} />
										<Route path="/summary" element={<Summary />} />
									</Routes>
								</div>
							</div>
                            <CustomizeFooter />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;