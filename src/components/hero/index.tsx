import Navbar from "../navbar"
import bg1 from "../../assets/bg1.svg";

const Hero = () => {
  return (
    <div  className="bg-black min-h-screen"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 18%, rgba(0, 0, 0, 1) 100%), url(${bg1})`, // Apply gradient and image
      backgroundSize: "cover",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className=" py-5 sm:py-11">
      <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto pt-36 sm:pt-60 px-4 sm:px-20">
        <h1 className="font-choplinBold text-left sm:text-center text-[1.3rem] sm:text-7xl">Supplying Quality Goods for Your Business Needs</h1>
        <h3 className="text-left sm:text-center py-4 text-lg sm:text-2xl font-light">Offering wide range of premium products at competitive prices.</h3>
      </div>
    </div>
  )
}

export default Hero