import { RankTable } from "../../service/rank"
import { BaseButton } from "./button"
import VerifiedIcon from '@mui/icons-material/Verified';

export const TrendRank = () => {
  return (
    <trend className='px-8 w-screen flex flex-col pr-12'>
      <div className='flex flex-row justify-between'>
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
      <rank className=" my-8 flex-row flex justify-between gap-16">
        <div className='w-1/2'>
          <table class="table-fixed text-base w-full">
            <thead className="border-b-[1.5px] h-12 border-b-slate-200">
              <tr className="text-sm text-black font-light text-opacity-60 tracking-normal">
                <th className='w-1/12 text-start'>Rank</th>
                <th className='w-2/12 text-start'>Collection</th>
                <th className='w-7/12'></th>
                <th className='w-2/12'>Floor price</th>
                <th className='w-2/12'>Volume</th>
              </tr>
            </thead>
            <tbody className='gap-4'>
             <RankTable 
              id='1'
              image='https://i.seadn.io/gcs/files/9e2b5b11eb00c4346791c752a2b2d933.jpg?auto=format&dpr=1&w=256'
              title='frENS'
              floor='0.02 ETH'
              total='25 ETH'
             />
             <RankTable 
              id='2'
              image='https://i.seadn.io/gcs/files/f4a830994b74222390702590a4303cf3.png?auto=format&dpr=1&w=256'
              title='Yue Minjun'
              floor='0.75 ETH'
              total='265 ETH'
             />
             <RankTable 
              id='3'
              image='https://i.seadn.io/gcs/files/01600e2a6d3aaf59b49617b7342946be.png?auto=format&dpr=1&w=256'
              title='Punks2023'
              floor='0.06  ETH'
              total='40 ETH'
             />
             <RankTable 
              id='4'
              image='https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&dpr=1&w=256'
              title='Parrarel Alpha'
              floor='0.30 ETH'
              total='18 ETH'
             />
             <RankTable 
              id='5'
              image='https://i.seadn.io/gcs/files/a35d1e2ec55edc9322dac21283906cfc.gif?auto=format&dpr=1&w=256'
              title='Dorkz'
              floor='0.01 ETH'
              total='7 ETH'
             />
              
            </tbody>
          </table>
        </div>
        <div className='w-1/2'>
          <table class="table-fixed text-base w-full">
            <thead className="border-b-[1.5px] h-12 border-b-slate-200 ">
              <tr className="text-sm text-black font-light text-opacity-60">
                <th className='w-1/12 text-start'>Rank</th>
                <th className='w-2/12 text-start'>Collection</th>
                <th className='w-7/12'></th>
                <th className='w-2/12'>Floor price</th>
                <th className='w-2/12'>Volume</th>
              </tr>
            </thead>
            <tbody className='gap-4'>
            <RankTable 
              id='6'
              image='https://i.seadn.io/gcs/files/3d4c5fa22275a354e1c2f56fd90b38b2.png?auto=format&dpr=1&w=256'
              title='Threads by Professor Jun'
              floor='0.023 ETH'
              total='71 ETH'
             />
             <RankTable 
              id='7'
              image='https://i.seadn.io/gcs/files/1619b033c453fe36c5d9e2ac451379a7.png?auto=format&dpr=1&w=256'
              title='Nakamigos'
              floor='0.37 ETH'
              total='103 ETH'
             />
             <RankTable 
              id='8'
              image='https://i.seadn.io/gcs/files/929601545052b74cfa6779dd016ad527.png?auto=format&dpr=1&w=256'
              title='Fold by Rudxane'
              floor='0.25  ETH'
              total='83 ETH'
             />
             <RankTable 
              id='9'
              image='https://i.seadn.io/gcs/files/b322219c1d7f9baa2e62f2c7eca04fbe.png?auto=format&dpr=1&w=256'
              title='Himalaya'
              floor='0.01 ETH'
              total='6 ETH'
             />
             <RankTable 
              id='10'
              image='https://i.seadn.io/gcs/files/1eb8d685d4e404c9b1177dfe14c2c9e0.png?auto=format&dpr=1&w=256'
              title='Genuine Undead '
              floor='0.15 ETH'
              total='25 ETH'
             />
             
            </tbody>
          </table>
        </div>
      </rank>
    </trend>
  )
}













