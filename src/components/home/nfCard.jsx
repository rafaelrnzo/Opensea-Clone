

const NfCard = ( props ) => {
  return (
    <button className="bg-white shadow-lg shadow-gray-200 rounded-xl h-[19rem] flex flex-col card-nf transition-all duration-300 hover:shadow-xl">
      <div className='h-2/3'>
        <img src={props.item.image} className='rounded-t-xl' />
      </div>
      <div className='card-list h-1/3 px-4 font-semibold justify-between flex flex-col pb-4  w-full'>
        <div className='flex justify-start'>
          <p>{props.item.title}</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-start items-start'>
            <p className="text-sm font-thin">Floor</p>
            <p>{props.item.floor}</p>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className="text-sm font-thin">Volume</p>
            <p>{props.item.volume}</p>
          </div>
        </div>
      </div>
    </button>

  )
}

export default NfCard