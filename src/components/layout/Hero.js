import Right from "@/components/icons/Right";
import Image from "next/image";
import HomeMenu from "./HomeMenu";
import SectionHeaders from "./SectionHeaders";

export default function Hero() {
  return (
    <section className="hero md:mt-4 lg:mt-20" >
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 top-[320px] text-left -z-10 hidden md:block">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute top-[320px] right-0 -z-10 hidden md:block">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div> 
      <div className="py-8 pt-[70px] md:py-12">
        <h1 className="text-4xl font-semibold">
          Turning Meals into<br />
          Memories<br />
          with&nbsp;
          <span className="text-primary">
            HotelHive
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
        Where great food and genuine hospitality meet. Our menu offers a variety of delicious dishes made with fresh ingredients. Whether for a casual lunch or a special dinner, we guarantee a memorable dining experience. 
        <br />
        Come for the Food, Stay for the warmth
        </p>
        <div className="flex gap-4 text-sm ">
          <button className="flex justify-center bg-primary  flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now 
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold p-0">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/Hotel.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
      
    </section>
  );
}


 