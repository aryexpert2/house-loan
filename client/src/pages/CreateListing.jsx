import React from 'react'

export default function CreateListing() {
  return (
    <div className="max-w-4xl mx-auto p-3">
      <h1 className='font-semibold text-3xl text-center my-7'>Create a list</h1>
      <form className='flex sm:flex-row flex-col justify-center rounded-md gap-4'>
        <div className='flex flex-col  w-full gap-4'>
          <input className='rounded-lg p-3' type="text" placeholder="Name" id='name' />
          <textarea className='rounded-lg p-3' type="text" placeholder="Description" 
            id='description' 
            required
          />
          <input className='rounded-lg p-3' type="text" placeholder="Address" id='address'/>
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2">
              <input type="checkbox" id='sale' className='w-5' />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='rent' className='w-5' />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='parking' className='w-5' />
              <span>Parkink</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='furnished' className='w-5' />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id='offer' className='w-5' />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input type="number" id='bedrooms' min="1" max="10" required 
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" id='bathrooms' min="1" max="10" required 
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>Baths</p>
            </div>
              <div className="flex items-center gap-2">
              <input type="number" id='regularPrice' min="1" max="10" required 
                className='p-3 border border-gray-300 rounded-lg'
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" id='discountPrice' min="1" max="10" required 
                className='p-3 border border-gray-300 rounded-lg'
              />
              <div className="flex flex-col items-center">
              <p>Discounted Price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-4'>
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max-6)</span>
          </p>
          <div className="flex gap-4">
            <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple='true' />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">Upload</button>
          </div>
          <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 diabled:opacity-80'>Create listing</button>
        </div>
      </form>
    </div>
  )
}
