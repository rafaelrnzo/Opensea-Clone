import React from 'react'
import OrNavbar from '../home/orNavbar'
import './app.css'
import { BaseButton } from '../home/button'

function Collection() {
  return (
    <>
      <main className="w-screen h-screen">
        <div className="w-full h-auto flex-col flex relative">
          <OrNavbar />
          <div className="max-w-full h-screen relative">
            <div className="thumbnail-collection mt-[72px] relative">
              <div className='w-44 h-44 bg-white p-1.5 rounded-xl shadow-xl left-9 -bottom-6 absolute '>
                <img src='https://i.seadn.io/gcs/files/076759abbc078315cd77b947fba66b87.png?auto=format&dpr=1&w=256' className='rounded-xl' />
              </div>
            </div>
            <div className="mt-12 mx-8 ">
              <div className="h-auto gap-3 flex flex-col">
                <div className='flex flex-row justtify-between items-center '>
                  <p className="text-3xl tracking-wide font-extrabold font-[poppins]">
                    San FranTokyo Genesis Pass
                  </p>
                  <div>
                    
                  </div>
                </div>
                <p className="text-base tracking-wider font-[inter]">
                  By <span className='font-bold'>SFTStudios</span>
                </p>
                <div className='flex'>
                  <p className="text-base tracking-wider font-[inter]">
                    Items <span className='font-bold'>2,000</span>
                  </p>
                  <span className='mx-3'>  ·  </span>
                  <p className="text-base tracking-wider font-[inter]">
                    Created <span className='font-bold'>Aug 2023</span>
                  </p>
                  <span className='mx-3'>  ·  </span>
                  <p className="text-base tracking-wider font-[inter]">
                    Creator earnings <span className='font-bold'>5%</span>
                  </p>
                  <span className='mx-3'>  ·  </span>
                  <p className="text-base tracking-wider font-[inter]">
                    Chain <span className='font-bold'>Ethereum</span>
                  </p>
                  <span className='mx-3'>  ·  </span>
                  <p className="text-base tracking-wider font-[inter]">
                    Category <span className='font-bold'>Membership</span>
                  </p>
                </div>

                <p className="text-base tracking-wide font-[inter]">
                  An all access pass into San FranTokyo, The City of Convergence. SFT Studios starts with a collection of 2,000...
                </p>
                <p className="text-base tracking-wide font-[inter]">
                  See more ▼
                </p>

                <div className="flex flex-row mt-3 gap-10">
                  <div className="flex flex-col justify-start items-start">
                    <p className='font-extrabold text-lg'>123 ETH</p>
                    <p className='font-normal text-sm tracking-wide'>total volume</p>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className='font-extrabold text-lg'>0.0878 ETH</p>
                    <p className='font-normal text-sm tracking-wide'>floor price</p>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className='font-extrabold text-lg'>0.0753 WETH</p>
                    <p className='font-normal text-sm tracking-wide'>best offer</p>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className='font-extrabold text-lg'>8%</p>
                    <p className='font-normal text-sm tracking-wide'>listed</p>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className='font-extrabold text-lg'>1,335</p>
                    <p className='font-normal text-sm tracking-wide'>owners</p>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className='font-extrabold text-lg'>67%</p>
                    <p className='font-normal text-sm tracking-wide'>unique owners</p>
                  </div>
                </div>

                <div className="flex-row flex justify-start mt-4 gap-4 ">

                </div>
              </div>

            </div>
          </div>
          {/* <div className="h-screen bg-slate-200"></div> */}
        </div>
      </main>
    </>
  )
}

export default Collection
