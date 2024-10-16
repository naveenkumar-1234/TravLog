import TravelPointImg from "./assets/TravelImg.png"
import Template from "./TravelComponent.jsx"
const travelpoint = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:mt-7">
      <div className="lg:col-span-1 lg:row-span-2"><img src={TravelPointImg} alt=""className="lg:w-full lg:h-auto md:h-auto h-auto md:w-full"/></div>
      <div className="lg:col-span-1 lg:row-span-1 "> <div>
      <div className="text-[#fa86b7] uppercase font-semibold mt-8 text-center tracking-widest 
       lg:text-2xl lg:text-left lg:px-18">
          TRAVEL POINT
        </div>
    <div className="font-normal py-5 text-3xl text-center px-2
        lg:text-left lg:font-bold lg:text-6xl lg:px-18">
          We helping you find your dream location 
        </div>
        <div className="text-center px-7 text-gray-400 font-thin
        lg:text-xl lg:py-4 lg:text-left lg:px-18
        ">
            Contrary to popular belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, porro?
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:px-20 lg:py-8
      md:flex-row md:flex-wrap md:items-center md:m-auto md:py-10 md:px-10
      ">
     <Template Amount="500+" Package="Holiday Package"/>
     <Template Amount="100" Package="Luxury Hotel"/>
     <Template Amount="7" Package="Premium Airlines"/>
     <Template Amount="2k+" Package="Happy Customer"/>
     </div>
    </div>
    </div>
  )
}

export default travelpoint