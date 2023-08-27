import { Link } from "react-router-dom";

const NfCard = (props) => {
  return (
    <Link
      to="/collection"
      className="bg-white shadow-lg shadow-gray-200 rounded-xl h-[19rem] flex flex-col card-nf transition-all duration-300 hover:shadow-xl"
    >
      <div
        className="h-2/3 bg-cover rounded-t-xl mb-3 bg-center"
        style={{ backgroundImage: `url(${props.item.image})` }} // Use the prop for the background image
      ></div>
      <div className="card-list h-1/3 px-4 font-semibold justify-between flex flex-col pb-4 w-full">
        <div className="flex justify-start">
          <p className="truncate">{props.item.title}</p>
        </div>
        <div className="flex justify-between mr-8">
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm font-thin">Floor</p>
            <p>{props.item.floor}</p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm font-thin">Volume</p>
            <p>{props.item.volume}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NfCard;
