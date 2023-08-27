import React from 'react'
// import ThumbnailTop from '../home/thumbnail'
import { GlassButton, ButtonCate, BaseButton } from '../home/button'
import Navbar from '../home/navbar'
import './app.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VerifiedIcon from '@mui/icons-material/Verified';
import ListNFT from '../home/listNf';
import { Link } from 'react-router-dom';

function Drops() {
  return (
    <main className='max-h-screen max-w-screen'>
      <content className="flex flex-col ">
        <thumbnail className=" gradient-box-drops w-screen flex-col flex">
          <Navbar />
          <div className='px-8 p-6 -mb-3 mt-20'>
            <div className='m-4 mx-0 h-1/12'>
              <p className='text-[2.75rem] text-white font-extrabold font-[poppins]'>Drops</p>
            </div>
            <Link to={'/profile'} className=" mt-10 rounded-3xl flex  bg-caro-drops mr-6">
              <div className='w-full h-92 mx-10  flex-col justify-end flex gap-6 pb-10 pt-20'>
                <div className='bg-white h-16 w-16 rounded-xl p-0.5'>
                  <img src="https://i.seadn.io/s/primary-drops/0x35373efc2fd7d852729cae869cc32acc979100bd/29026822:hero:partner_logo_url:0766722a-e131-4968-ba71-2473bf8ad29f.jpeg?auto=format&dpr=1&w=1920" className='rounded-xl' alt="" />
                </div>
                <div className='gap-1 flex flex-col'>
                  <h1 className='text-[2rem] font-semibold text-white font-[poppins]'>ZTX Genesis Homes<span className='ml-2'><VerifiedIcon /></span></h1>
                  <h1 className='text-sm font-semibold text-white'>By <span className='font-bold'>ZTX_Official</span><span className='ml-2 '><VerifiedIcon fontSize='small' /></span></h1>
                  <h1 className='text-sm font-semibold text-white'>4000 items <span> . </span> <span>0.06 ETH</span></h1>
                </div>
                <div className='flex justify-between'>
                  <GlassButton>
                    Minting Now!
                  </GlassButton>
                  <div className="gap-3 flex">
                    <GlassButton>
                      <NotificationsNoneIcon />
                    </GlassButton>
                    <GlassButton>
                      View drop
                    </GlassButton>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </thumbnail>
        <div className='mx-8 py-4 flex gap-3 border-b border-gray-200'>
          <button className='rounded-lg p-5 py-3 bg-gray-100' onClick={() => { }}>
            <p className='font-bold tracking-wide font-base'>
              Active & upcoming
            </p>
          </button>
          <button className='rounded-lg p-5 py-3' onClick={() => { }}>
            <p className='font-bold tracking-wide font-base text-gray-500'>
              Past
            </p>
          </button>
        </div>
        <div className='h-auto mb-12 w-full px-8 flex gap-3 flex-col'>
          <ListNFT
            // header='Noteable Collections'
            data={[
              {
                image: 'https://i.seadn.io/gcs/files/9cd1ef6863f9d11acd68dc1b5eb5e02a.gif?auto=format&dpr=1&w=400&fr=1',
                title: 'Street Turtle Puddle CLub',
                floor: 'Now',
                volume: '0.0003 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/63bbf5b110df06d6b7b139f7b00a1da2.gif?auto=format&dpr=1&w=400&fr=1 ',
                title: 'Seoul City',
                floor: 'Now',
                volume: '8 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/e909c969266f59301a428c4e920dd099.png?auto=format&dpr=1&w=400&fr=1 ',
                title: 'The 10k collection: Pass',
                floor: 'Now',
                volume: '0.31 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/127213190eb40888a81c90905b212e3a.jpg?auto=format&dpr=1&w=400&fr=1 ',
                title: 'Hands by king overman',
                floor: 'None',
                volume: '0.05 ETH'
              },
              {
                image: 'https://i.seadn.io/gcs/files/cd90781fa9f77eec601e3316d5470987.gif?auto=format&dpr=1&w=400&fr=1',
                title: 'WonderPals',
                floor: '0.05 ETH',
                volume: '14K ETH'
              },


            ]}
          />
          <ListNFT
            // header='Noteable Collections'
            data={[
              {
                image: 'https://i.seadn.io/gcs/files/c3bbb24904650fb887e484d6d1c9ab59.png?auto=format&dpr=1&w=400&fr=1',
                title: 'Wild Flowers',
                floor: 'Sep 7',
                volume: '0.03312 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/cd0888964831caad9894667d2591897d.png?auto=format&dpr=1&w=400&fr=1',
                title: 'DEDEGEYS GENESIS',
                floor: 'Sep 21',
                volume: '0.0008 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/49324cad8fdd68ec50c7c1a4b8a1879b.gif?auto=format&dpr=1&w=400&fr=1',
                title: 'GIFTS',
                floor: 'oct 22',
                volume: '1.27 ETH',
              },
            ]}
          />
        </div>
      </content>
    </main>
  )
}

export default Drops
