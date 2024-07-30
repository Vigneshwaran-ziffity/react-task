import React from 'react'

const ArtWork = () => {
  return (
    <div className="flex justify-between items-center w-full">
        <div className="feature-title w-full">
            <span className="font-semibold flex">
                Artwork Color
            </span>
            <form className="relative">
                <label className="inline-flex text-[#181C24] my-4 cursor-pointer">
                    <input type="checkbox" id="customize-color" className="h-6 w-6 border-[#91959C]"/>
                    <span className="pl-3">Customize Image Color</span>
                </label>
                <textarea placeholder="Color Instructions" className="h-[100px] w-full border border-[#D2D2D7] rounded-lg p-3" />
            </form>
        </div>
    </div>
  )
}
export default ArtWork
