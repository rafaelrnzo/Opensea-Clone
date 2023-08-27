import { Link } from "react-router-dom";
import FooterNav from "../footer";
import Navbar from "../home/navbar";
// import Navbar from "../home/navbar"
import OrNavbar from "../home/orNavbar";

const NoPage = () => {
  return (
    <main className="h-screen w-screen ">
      <div className="h-full ">
        <div>
          <OrNavbar />
        </div>
        <div className="h-5/6 flex justify-center items-center flex-col ">
          <div className="flex gap-5 flex-row items-center">

            <div className="text-[11rem] font-bold text-gray-200">4</div>
            <img src="https://opensea.io/static/images/404-compass-full.gif" className="h-36" />
            <div className="text-[11rem] font-bold text-gray-200">4</div>
          </div>
          <div className="tracking-wider text-4xl font-bold">
            This page is lost.

          </div>
          <div className="tracking-wide text-xl mt-5 ">
            We've explored deep and wide,
          </div>
          <div className="tracking-wide text-xl ">
            but we can't find the page you were looking for.
          </div>
          <div className="mt-7">
            <Link to="/" className="bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold tracking-wide">
              Navigate back home
            </Link>
          </div>
        </div>
      </div>
      <FooterNav/>
    </main>
  )

}

export default NoPage;