import React from 'react'
import Navbar from '../home/navbar'
import './app.css'
import VerifiedIcon from '@mui/icons-material/Verified';


const Profile = () => {
  return (
    <main className='w-screen h-auto'>
      <content className="flex flex-col">
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
                {/* <GlassCard time='days' count='3'/>
                <GlassCard time='hrs' count='13'/>
                <GlassCard time='mins' count='50'/>
                <GlassCard time='secs' count='1 '/> */}
              </div>
            </div>
          </section>
        </thumbnail>
      </content>
    </main>
  )
}

const GlassCard = (time, count) => {
  return (
    <div className='glass-card p-[0.6rem] px-[1.9rem] rounded-xl w-14 flex items-center flex-col'>
      <p className='text-white font-bold'>{count}</p>
      <p className='text-white font-semibold text-[0.7rem] tracking-wide'>{time}</p>
    </div>
  )
}

export default Profile