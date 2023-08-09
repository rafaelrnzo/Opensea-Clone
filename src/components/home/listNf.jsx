import NfCard from "./nfCard";


const ListNFT = (props) => {
  return (
    <div className='container mx-auto'>
      <p className='text-2xl text-black font-semibold tracking-normal pb-6'>{props.header}</p>
      <cardList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          props.data?.map((item, key) => {
            return (
              <NfCard key={key} item={item} />
            )
          })
        }
      </cardList>
    </div>

  );
}

export default ListNFT;  