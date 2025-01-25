import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 " id="about">
        <SectionHeaders
          subHeader={"Our story"}
          mainHeader={"About us"}
        />
        <div className="text-gray-500  mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to HotelHive! We are a vibrant vegetarian restaurant committed to serving you delicious, healthy meals made from the freshest ingredients. Our menu features a variety of wholesome dishes that are designed to satisfy every palate, from classic favorites to innovative creations.
          </p>
          <p>
            We believe in the importance of hygiene and maintain the highest cleanliness standards throughout our kitchen and dining areas. This ensures that you can enjoy your meal in a safe and welcoming environment.
          </p>
          <p>
            Whether you&apos;re a vegetarian, a health enthusiast, or simply looking for a delightful dining experience, we invite you to join us at HotelHive. Come and taste the difference today.
          </p>
        </div>
      </section>
      <section className="" id="contact">
      <div className="col-span-2 sm:col-span-3  ">
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
            Never miss a delicious deal—subscribe now!            </h6>

            <div className="relative mt-16">
              <div className="absolute -inset-2">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <form action="#" method="POST" className="relative">
                <div className="flex" style={{gap:"20px"}}>
                  <div className="flex-1">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                      className="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 focus:ring-gray-900 focus:border-gray-900 rounded-l-xl font-pj caret-gray-900" style={{width:"100%",height:"50px",padding:"20px"}}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent sm:px-16 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-r-xl font-pj focus:outline-none" style={{width:"10px",height:"50px"}}
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 mt-16 gap-y-8 sm:grid-cols-2 sm:gap-x-16">
              <div>
                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                  Call us
                </h6>
                <p className="mt-2.5 text-xl font-pj text-gray-900 font-bold">
                  <a href="7310019508" title="">
                    {" "}
                    (731) 001-9508{" "}
                  </a>
                </p>
              </div>

              <div>
                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                  Email us
                </h6>
                <p className="mt-2.5 text-xl font-pj text-gray-900 font-bold">
                  <a href="info@hotelhive.com" title="">
                    {" "}
                    info@hotelhive.com{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
      </section> 
       
    </>
  );
}
