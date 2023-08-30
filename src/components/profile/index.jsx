import React, {useState, useEffect} from 'react'
import Navbar from '../home/navbar'
import './app.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import Carousel from './components/carousel';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Import Video.js styles
import VideoPlayer from './components/video';
import ReactPlayer from 'react-player';


const Profile = () => {
  const [isBottom, setIsBottom] = useState()

  const handleScroll = () => {
    setIsBottom(window.scrollY >= 1200);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <main className='w-screen h-auto'>
        <content className="flex flex-col relative">
          <thumbnail className="thumbnail-profile">
            <Navbar />
            <section className='w-full h-full flex justify-end flex-col px-8 py-12 gap-8 '>
              <div className='bg-white p-[2.5px] w-[5.7rem] rounded-xl'>
                <img src='https://i.seadn.io/s/primary-drops/0x35373efc2fd7d852729cae869cc32acc979100bd/29026822:hero:partner_logo_url:0766722a-e131-4968-ba71-2473bf8ad29f.jpeg?auto=format&dpr=1&w=1920' className='rounded-xl' />
              </div>
              <div className='gap-4 flex flex-col'>
                <p className='font-[poppins] text-5xl text-white font-bold tracking-wide'>ZTX Genesis Homes <span><VerifiedIcon fontSize='large' /></span></p>
                <p className='font-[inter] text-sm text-white font-semibold tracking-wide flex gap-1 items-center'>By <span className='tracking-wide '>ZTX_Official</span><span><VerifiedIcon fontSize='small' /></span></p>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row gap-2'>
                  <GlassCard time='days' count='3' />
                  <GlassCard time='hrs' count='13' />
                  <GlassCard time='mins' count='50' />
                  <GlassCard time='secs' count='1 ' />
                </div>
              </div>
            </section>
          </thumbnail>
          <div className='mx-8 py-6 flex gap-3.5 border-b border-gray-200'>
            <button className='rounded-lg p-6 py-3 bg-gray-100' onClick={() => { }}>
              <p className='font-bold text-gray-600 tracking-wide font-base'>
                Mint
              </p>
            </button>
            <button className='rounded-lg p-5 py-3' onClick={() => { }}>
              <p className='font-semibold tracking-wide font-base text-gray-600'>
                Roadmap
              </p>
            </button>
            <button className='rounded-lg p-5 py-3' onClick={() => { }}>
              <p className='font-semibold tracking-wide font-base text-gray-600'>
                Team
              </p>
            </button>
            <button className='rounded-lg p-5 py-3' onClick={() => { }}>
              <p className='font-semibold tracking-wide font-base text-gray-600'>
                FAQ
              </p>
            </button>
          </div>
          <div className='w-full p-8 py-10 flex flex-row'>
            <div className="w-1/2 ">
              <Carousel />
            </div>
            <div className="w-1/2 ml-20 flex flex-col gap-3 pr-3">
              <p className='font-bold tracking-wide text-xl'> About this collection</p>
              <div className="flex flex-row gap-3 items-center">
                <img className='w-9 rounded-md' src="https://i.seadn.io/s/primary-drops/0x35373efc2fd7d852729cae869cc32acc979100bd/29026822:hero:partner_logo_url:0766722a-e131-4968-ba71-2473bf8ad29f.jpeg?auto=format&dpr=1&w=1920" alt="" />
                <p className='font-semibold tracking-wider'>ZTX Genesis Homes <span><VerifiedIcon fontSize='small' color='primary' /></span> </p>
                <div className='py-2 px-3 rounded-xl bg-gray-100 tracking-normal text-black'>Arbitrum</div>
                <div className='py-2 px-3 rounded-xl bg-gray-100 tracking-normal text-black'>ERC 721</div>
              </div>
              <div className='flex flex-col gap-6 mt-2 tracking-normal text-[16px] font-[inter] '>
                <p>
                  ZTX is a web3 virtual world empowering creators and communities. ZTX is building an immersive 3D open-world platform where users can enjoy social interactions, engage in games, and participate in governance and economics when creating and selling digital assets in the virtual realm.
                </p>
                <p>
                  The ZTX Genesis Home Mint is the first-ever NFT collection to be released by ZTX. Minting on Arbitrum, the collection consists of 4,000 bespoke 3D-rendered District Homes, immersive and multilayered in-game assets that will serve as your home in...
                </p>
                <p>
                  See more...
                </p>
              </div>
              <div className=' flex flex-col mt-8 gap-6'>
                <div className="flex flex-row justify-between">
                  <p className='font-black tracking-wider text-black'>Available items</p>
                  <p className='font-medium tracking-wider '>4,000</p>
                </div>
                <div className='w-full bg-gray-100 h-2 rounded-full'></div>
                <div className='w-full bg-white shadow-lg h-auto rounded-xl p-6 shadow-gray-200 flex flex-col gap-6'>
                  <p className='font-bold tracking-wider text-black text-xl'>Mint starts August 31 at 3:00 AM GMT+7</p>
                  <div className="flex flex-row gap-3">
                    <button className='w-1/2 p-4 rounded-xl bg-gray-100 font-black'>
                      Add to cal
                    </button>
                    <button className='w-1/2 p-4 rounded-xl bg-blue-500 text-white font-black'>
                      Set a reminder
                    </button>
                  </div>
                </div>
                <p className='font-bold tracking-wider text-black text-lg'>Mint schedule</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-auto w-full p-8 py-10 mt-24">
            <div className="w-1/2">
              <div className='w-[87%] rounded-video rounded-xl'>
                <ReactPlayer

                  url="https://stream.mux.com/y2c5LsNSpwqz1dMQek4KwzYyljV01Fw9VO8zeVe012Nfo.m3u8"
                  controls={true}
                  playing={true}
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-start pl-20 flex-col gap-3">
              <p className='font-bold tracking-wide text-black text-2xl font-[inter]'>Introducing ZTX Genesis Homes</p>
              <p className='font-normal tracking-wide text-black text-base font-[inter]'>4,000 bespoke 3D-rendered District Homes, immersive and multilayered in-game assets that will serve as your home in ZTX.</p>
            </div>
          </div>
          <div className='thumbnail-content w-full mt-24'></div>

          <div className="w-full flex-row flex justify-center items-start px-8 my-10 pb-10 gap-3">
            <div className="w-1/2">
              <p className='font-black tracking-wide text-black text-2xl font-[inter]'>The Districts</p>
            </div>
            <div className="w-1/2 pl-14">
              <p className='font-medium tracking-wide text-black text-base font-[inter]'>Each District Home will have a set of unique traits, with the most important one being its District. Each ZTX District will offer its own aesthetics and economy. We will initially have four Districts (Financial, Fashion, Arts and Games) and each District will be assigned 1,000 District Homes that provide holders access to their respective District governance.</p>
            </div>
          </div>

          <div className={`sticky bottom-0 w-full justify-between h-24 border-t border-gray-200 p-8 py-6 flex-row items-center flex transform transition-all duration-500 ease-in-out bg-white ${isBottom ? 'transition-y-100  bottom-0  ' : ' translate-y-0 -bottom-24'}`}>
            <div className="flex flex-row gap-3 items-center">
              <img className='w-9 rounded-md' src="https://i.seadn.io/s/primary-drops/0x35373efc2fd7d852729cae869cc32acc979100bd/29026822:hero:partner_logo_url:0766722a-e131-4968-ba71-2473bf8ad29f.jpeg?auto=format&dpr=1&w=1920" alt="" />
              <p className='font-semibold tracking-wider'>ZTX Genesis Homes <span><VerifiedIcon fontSize='small' color='primary' /></span> </p>
            </div>
            <div className="flex gap-3 mr-3">
              <button className='p-3 px-6 rounded-xl bg-gray-100 font-semibold text-sm tracking-wider'>
                Add to cal
              </button>
              <button className='p-3 px-6 rounded-xl bg-blue-500 text-white font-semibold text-sm tracking-wider'>
                Set a reminder
              </button>
            </div>
          </div>

        </content>
      </main>
    </>
  )
}

const GlassCard = ({ count, time }) => {
  return (
    <div className='glass-card p-[0.6rem] px-[1.9rem] rounded-xl w-14 flex items-center flex-col'>
      <p className='text-white font-bold'>{count}</p>
      <p className='text-white font-semibold text-[0.7rem] tracking-wide'>{time}</p>
    </div>
  )
}

export default Profile