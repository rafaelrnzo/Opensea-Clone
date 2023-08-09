import { ButtonCate, GlassButton, BaseButton } from './button'


const MainContent = () => {
  return (
    <content className=" w-96 flex flex-col">
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
        <carousel className="my-7 rounded-3xl flex h-full bg-caro">
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
      <trend className='px-8 w-screen flex flex-col '>
        <div className='flex flex-row'>
          <div className='bg-gray-100 p-0.5 rounded-lg'>
            <div className='flex flex-row '>
              <button className='bg-white rounded-lg p-2.5 px-6 shadow-md'>
                <p className='font-semibold tracking-wider font-base'>Trending</p>
              </button>
              <button className=' rounded-lg p-2.5 px-10'>
                <p className='font-semibold tracking-wider font-base opacity-75'>Top</p>
              </button>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className='bg-gray-100 p-0.5 rounded-lg flex items-center'>
              <div className='flex flex-row gap-1'>
                <BaseButton>
                  1h
                </BaseButton>
                <BaseButton>
                  6h
                </BaseButton>
                <button className='bg-white rounded-lg p-2'>
                  <p className=' tracking-wider font-semibold'>24h</p>
                </button>
                <BaseButton>
                  7d
                </BaseButton>
              </div>
            </div>
            <div className=''>
              <button className='rounded-lg p-3 px-6 bg-gray-100'>
                <p className='text-base text-black font-semibold'>
                  All chains

                </p>
              </button>
            </div>
            <div className=''>
              <button className='rounded-lg p-3 px-6 bg-gray-100'>
                <p className='text-base text-black font-semibold'>
                  View all
                </p>
              </button>
            </div>
          </div>
        </div>
        <rank className="h-screen">



        </rank>
      </trend>

    </content>
  )
}

export default MainContent