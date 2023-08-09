import { useState } from 'react'
import './App.css'
import Navbar from './components/home/navbar'
import MainContent from './components/home/mainContent'
// import ButtonCate from './components/home/buttonCategory'
// import GlassButton from './components/home/glassButton'
import { ButtonCate, GlassButton, BaseButton } from './components/home/button'
import { TrendRank } from './components/home/trend'
import ListNFT from './components/home/listNf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='max-h-screen max-w-screen '>
      <Navbar />

      <content className="  flex flex-col ">
        <thumbnail className="px-8 p-6 -mb-3 -mr-12 gradient-box w-screen flex-col flex">
          <div className='flex gap-2 flex-row h-1/12'>
            <button className='rounded-xl p-[0.55rem] px-[1.1rem] font-semibold focus:outline-none glass-effect' >
              <p className='text-white tracking-wide'>
                All
              </p>
            </button>
            <ButtonCate>
              Art
            </ButtonCate>
            <ButtonCate>
              Gaming
            </ButtonCate>
            <ButtonCate>
              Memberships
            </ButtonCate>
            <ButtonCate>
              PFPs
            </ButtonCate>
            <ButtonCate>
              Photography
            </ButtonCate>
            <ButtonCate>
              Music
            </ButtonCate>
          </div>
          <carousel className="my-7 rounded-3xl flex h-full bg-caro mr-6">
            <div className='w-full h-full mx-10  flex-col justify-end flex gap-8 pb-10'>
              <div className='bg-white h-16 w-16 rounded-xl'></div>
              <div className='gap-2 flex flex-col'>
                <h1 className='text-3xl font-semibold text-white'>Persons, Places & Things - Dustin Yellin x Nouns x FWB</h1>
                <h1 className='text-sm font-semibold text-white'>By DustinYellinDeployer</h1>
                <h1 className='text-sm font-semibold text-white'>Open edition 0.00269 ETH</h1>
              </div>
              <div className='flex justify-between'>
                <GlassButton>
                  Minting Now!
                </GlassButton>
                <GlassButton>
                  View drop
                </GlassButton>
              </div>
            </div>
          </carousel>
        </thumbnail>

        <TrendRank />

        <main className='w-screen h-screen px-8 p-4'>
          <ListNFT
            header='Noteable Collections'
            data={[
              {
                image: 'https://i.seadn.io/gcs/files/ac716dd8eb1e068239fb70ab98fc77a9.png?auto=format&dpr=1&h=500',
                title: 'The Evolution Of Flowers II',
                floor: '0.03 ETH',
                volume: '0.03 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/20d243b2d04be331e23b9f7f36216de4.png?auto=format&dpr=1&h=500&fr=1 1x, https://i.seadn.io/gcs/files/20d243b2d04be331e23b9f7f36216de4.png?auto=format&dpr=1&h=500&fr=1 2x',
                title: 'Persons, Places & Things - Dustin Yellin x Nouns x FWB',
                floor: '< 0.01 ETH',
                volume: '8 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/de3f8301550c3f5aeae37b6217978d9d.png?auto=format&dpr=1&h=500',
                title: 'Haas x RENGA Racing',
                floor: '0.07 ETH',
                volume: '87 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/c3e23f87e1f8cb30837ec3ac3d9db808.png?auto=format&dpr=1&h=500',
                title: 'HV-MTL',
                floor: '0.58 ETH',
                volume: '35K ETH'
              },
              {
                image: '',
                title: '',
                floor: '',
                volume: ''
              },
              {
                image: '',
                title: '',
                floor: '',
                volume: ''
              },
              {
                image: '',
                title: '',
                floor: '',
                volume: ''
              },

            ]}
          />
        </main>
      </content >

      <footer className='foot-sea'>
        <div className='mx-8 h-full  '>
          <div className=' grid grid-cols-2 p-12 px-0 gap-10 border-b border-slate-300'>
            <div className='flex fl  ex-col'>
              <p className='text-white text-xl font-bold tracking-wider'>Stay in the loop</p>
              <p className='text-white text-base font-normal tracking-wide mt-2 mr-3'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
              <div className='flex flex-row mt-2'>
                <input
                  className="w-3/5  rounded-xl py-3 px-4 mr-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500 mt-2"
                  type="text"
                  placeholder="Your email address"
                />
                <button
                  className="w-1/5 rounded-xl py-3 px-2 bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-blue-500 mt-2"
                >
                  <p className='text-white'>Sign Up</p>
                </button>
              </div>
            </div>
            <div className='flex ml-8 '>
              <p className='text-white text-xl font-bold tracking-wider '>Join the community</p>

            </div>
          </div>
          <div className='h-4/6 flex flex-row mt-14 '>
            <div className='w-1/4'>
              <img src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png' className='w-11' />
              <p className='text-xl text-white font-bold mt-2'>OpenSea</p>
              <p className='text-base text-white tracking-normal font-base mt-2 mr-3'>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
              </p>
            </div>
            <div className='w-3/4 pl-20 grid grid-cols-4'>
              <div className='flex flex-col'>
                <p className='text-white text-base font-semibold'>Marketplace</p>
                <div className="flex-col flex gap-3 mt-5">
                  <a href='' className='text-white text-sm font-base'>All NFT</a>
                  <a href='' className='text-white text-sm font-base'>Art</a>
                  <a href='' className='text-white text-sm font-base'>Gaming</a>
                  <a href='' className='text-white text-sm font-base'>Memberships</a>
                  <a href='' className='text-white text-sm font-base'>PFPs</a>
                  <a href='' className='text-white text-sm font-base'>Photography</a>
                  <a href='' className='text-white text-sm font-base'>Music</a>
                </div>
              </div>
              <div>
                <div className='flex flex-col'>
                  <p className='text-white text-base font-semibold'>My Account</p>
                  <div className="flex-col flex gap-3 mt-5">
                    <a href='' className='text-white text-sm font-base'>Profile</a>
                    <a href='' className='text-white text-sm font-base'>Favorites</a>
                    <a href='' className='text-white text-sm font-base'>Watchlist</a>
                    <a href='' className='text-white text-sm font-base'>My Collections</a>
                    <a href='' className='text-white text-sm font-base'>Create</a>
                    <a href='' className='text-white text-sm font-base'>Opensea Pro</a>
                    <a href='' className='text-white text-sm font-base'>Settings</a>
                  </div>
                </div>
                <div className='flex flex-col mt-10'>
                  <p className='text-white text-base font-semibold'>Stats</p>
                  <div className="flex-col flex gap-3 mt-5">
                    <a href='' className='text-white text-sm font-base'>Rankings</a>
                    <a href='' className='text-white text-sm font-base'>Activity</a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <p className='text-white text-base font-semibold'>Resources</p>
                <div className="flex-col flex gap-3 mt-5">
                  <a href='' className='text-white text-sm font-base'>Blog</a>
                  <a href='' className='text-white text-sm font-base'>Learn</a>
                  <a href='' className='text-white text-sm font-base'>Help center</a>
                  <a href='' className='text-white text-sm font-base'>Community standards</a>
                  <a href='' className='text-white text-sm font-base'>Taxes</a>
                  <a href='' className='text-white text-sm font-base'>Partners</a>
                  <a href='' className='text-white text-sm font-base'>Developer platform</a>
                  <a href='' className='text-white text-sm font-base'>Platform status</a>
                </div>
              </div>
              <div>
                <div className='flex flex-col'>
                  <p className='text-white text-base font-semibold'>Company</p>
                  <div className="flex-col flex gap-3 mt-5">
                    <a href='' className='text-white text-sm font-base'>About</a>
                    <a href='' className='text-white text-sm font-base'>Careers</a>
                    <a href='' className='text-white text-sm font-base'>Ventures</a>
                  </div>
                </div>
                <div className='flex flex-col mt-10'>
                  <p className='text-white text-base font-semibold'>Learn</p>
                  <div className="flex-col flex gap-3 mt-5">
                    <a href='' className='text-white text-sm font-base'>What is an NFT?</a>
                    <a href='' className='text-white text-sm font-base'>How to buy an NFT</a>
                    <a href='' className='text-white text-sm font-base'>What are NFT drops?</a>
                    <a href='' className='text-white text-sm font-base'>How to sell an NFT using OpenSea</a>
                    <a href='' className='text-white text-sm font-base'>How to create an NFT on OpenSea</a>
                    <a href='' className='text-white text-sm font-base'>What is a crypto wallet?</a>
                    <a href='' className='text-white text-sm font-base'>What is cryptocurrency?</a>
                    <a href='' className='text-white text-sm font-base'>What are blockchain gas fees? </a>
                    <a href='' className='text-white text-sm font-base'>What is a blockchain? </a>
                    <a href='' className='text-white text-sm font-base'>What is web3? </a>
                    <a href='' className='text-white text-sm font-base'>How to stay protected in web3 </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-slate-300 '>
            <div className='mt-8 flex flex-row justify-between'>
              <p className='text-white text-xs tracking-normal'>© 2018 - 2023 Ozone Networks, Inc</p>
              <div className='flex flex-row gap-4'>
                <p className='text-white text-xs tracking-normal'>Privacy policy</p>
                <p className='text-white text-xs tracking-normal'>Terms of service</p>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </main >
  )
}

export default App
