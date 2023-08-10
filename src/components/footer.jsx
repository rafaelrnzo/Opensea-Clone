

const FooterNav = () => {
  return (
    <footer className='foot-sea'>
      <div className='mx-8 h-full  '>
        <div className=' grid grid-cols-2 p-12 px-0 gap-10 border-b border-slate-300'>
          <div className='flex flex-col'>
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
        <div className=' flex flex-row mt-14 '>
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

        <div className='border-t mt-14 border-slate-300  '>
          <div className='mt-8 flex flex-row justify-between'>
            <p className='text-white text-xs tracking-normal '>© 2018 - 2023 Ozone Networks, Inc</p>
            <div className='flex flex-row gap-4'>
              <p className='text-white text-xs tracking-normal'>Privacy policy</p>
              <p className='text-white text-xs tracking-normal'>Terms of service</p>

            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default FooterNav