import Navbar from './navbar'
import '../../App.css'
import FooterNav from '../footer'
import NFTs from '../../model/dataCard'
import { TrendRank } from './trend'
import { ButtonCate, GlassButton } from './button'

const Home = () => {
  return (
    <main className='max-h-screen max-w-screen '>

      <content className="  flex flex-col ">
        <thumbnail className=" gradient-box w-screen flex-col flex">
          <Navbar />
          <div className="px-8 p-6 -mb-3 mt-20">

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
                <div className='bg-white h-16 w-16 rounded-xl p-0.5'>
                  <img src='https://i.seadn.io/gcs/files/33965e456423190852002039a8f31081.png?auto=format&dpr=1&w=256' className='rounded-lg'/>
                </div>
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
          </div>
        </thumbnail>
        <TrendRank />
        <NFTs />
      </content >

      <FooterNav />
    </main >
  )
}

export default Home;