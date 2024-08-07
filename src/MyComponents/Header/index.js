import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';


export default function CustomMenu() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <div className="custom-menu w-[100%]">
            <Box sx={{ bgcolor: 'background.paper' }} className="h-full">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example disabled"
                    className="option-group-tab items-center h-full p-x-4 !w-full"
                    sx={{
                        '& .MuiTabs-indicator': {
                            height: '0px', // Change indicator height
                        },
                        '& .MuiTabs-scroller': {
                            // Custom CSS for the scroller
                            height: '100%',
                        },
                        '& .MuiTabs-flexContainer': {
                            height: '100%',
                        },
                        '& .Mui-selected': {
                            color: '#6B7280 !important',
                        },
                    }}
                >
                        <Tab  className="tablinks md:!min-w-[20%] !md:px-9 !px-5 !flex !flex-col  h-full" label={
                            <span className="custom-header inline-flex items-center font-semibold flex-wrap text-left capitalize h-full active">
                                <span className="w-full flex">
                                    <span className="tablinks-copy flex relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-transparent after:absolute after:bottom-[-37px] text-gray-500">
                                        1. Frame
                                        <svg className="ml-1" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16a34a">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
                                            <g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                        </svg>
                                    </span>
                                </span>
                                <span className="selected-item text-xs pt-1 w-full">Photo Paper/Doube Mats</span>
                            </span>
                        
                        } to={"/"} />
                        <Tab className="tablinks md:!min-w-[20%] !md:px-9 !px-5 !flex !flex-col" label={
                            <span className="custom-header inline-flex items-center font-semibold flex-wrap text-left capitalize h-full">
                                <span className="w-full flex">
                                    <span className="tablinks-copy flex relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-transparent after:absolute after:bottom-[-37px] text-gray-500">
                                        2. Top Mat
                                        <svg className="ml-1" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16a34a">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
                                            <g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                        </svg>
                                    </span>
                                </span>
                                <span className="selected-item  text-xs pt-1 w-full">Photo Paper/Doube Mats</span>
                            </span>
                        
                        } />
                        <Tab className="tablinks md:!min-w-[20%] !md:px-9 !px-5 !flex !flex-col " label={
                            <span className="custom-header inline-flex items-center font-semibold flex-wrap text-left capitalize h-full">
                                <span className="w-full flex">
                                    <span className="tablinks-copy flex relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-transparent after:absolute after:bottom-[-37px] text-gray-500">
                                        3. Bottom Mat
                                        <svg className="ml-1" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16a34a">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
                                            <g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                        </svg>
                                    </span>
                                </span>
                                <span className="selected-item  text-xs pt-1 w-full">Photo Paper/Doube Mats</span>
                            </span>
                        
                        } />
                        <Tab className="tablinks md:!min-w-[20%] !md:px-9 !px-5 !flex !flex-col " label={
                            <span className="custom-header inline-flex items-center font-semibold flex-wrap text-left capitalize h-full">
                                <span className="w-full flex">
                                    <span className="tablinks-copy flex relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-transparent after:absolute after:bottom-[-37px] text-gray-500">
                                        4. Liner
                                        <svg className="ml-1" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16a34a">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
                                            <g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                        </svg>
                                    </span>
                                </span>
                                <span className="selected-item  text-xs pt-1 w-full">Photo Paper/Doube Mats</span>
                            </span>
                        
                        } />
                        <Tab className="tablinks md:!min-w-[20%] !md:px-9 !px-5 !flex !flex-col " label={
                            <span className="custom-header inline-flex items-center font-semibold flex-wrap text-left capitalize h-full">
                                <span className="w-full flex">
                                    <span className="tablinks-copy flex relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-transparent after:absolute after:bottom-[-37px] text-gray-500">
                                        5. Artwork Color
                                    </span>
                                    <svg className="ml-1" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16a34a">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
                                        <g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                    </svg>
                                </span>
                                <span className="selected-item  text-xs pt-1 w-full">Photo Paper/Doube Mats</span>
                            </span>
                        
                        } />
                        <Tab className="tablinks md:!min-w-[20%] !md:px-9 !px-5 !flex !flex-col" label={
                            <span className="custom-header inline-flex items-center font-semibold flex-wrap text-left capitalize h-full">
                                <span className="w-full flex">
                                    <span className="tablinks-copy flex relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-transparent after:absolute after:bottom-[-37px] text-gray-500">
                                        6. Summary
                                    </span>
                                    <svg className="ml-1" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16a34a">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"/>
                                        <g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                                    </svg>
                                </span>
                                <span className="selected-item  text-xs pt-1 w-full">Photo Paper/Doube Mats</span>
                            </span>
                        
                        } />
                </Tabs>
            </Box>
        </div>
    );
};
