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
                image: 'https://i.seadn.io/gcs/files/20d243b2d04be331e23b9f7f36216de4.png?auto=format&dpr=1&h=500&fr=1 1x, https://i.seadn.io/gcs/files/20d243b2d04be331e23b9f7f36216de4.png?auto=format&dpr=1&h=500&fr=1 2x',
                title: 'Persons, Places & Thi...',
                floor: '< 0.01 ETH',
                volume: '8 ETH',
              },
              {
                image: 'https://i.seadn.io/gcs/files/20d243b2d04be331e23b9f7f36216de4.png?auto=format&dpr=1&h=500&fr=1 1x, https://i.seadn.io/gcs/files/20d243b2d04be331e23b9f7f36216de4.png?auto=format&dpr=1&h=500&fr=1 2x',
                title: 'Persons, Places & Things - Dustin Yellin x Nouns x FWB',
                floor: '< 0.01 ETH',
                volume: '8 ETH',
              },
            ]}
          />
        </main>
      </content >
    </main >
  )
}

export default App
