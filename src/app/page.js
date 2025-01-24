import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to HotelHive! We are a vibrant vegetarian restaurant committed to serving you delicious, healthy meals made from the freshest ingredients. Our menu features a variety of wholesome dishes that are designed to satisfy every palate, from classic favorites to innovative creations.
          </p>
          <p>We believe in the importance of hygiene and maintain the highest cleanliness standards throughout our kitchen and dining areas. This ensures that you can enjoy your meal in a safe and welcoming environment. </p>
          <p>Whether you're a vegetarian, a health enthusiast, or simply looking for a delightful dining experience, we invite you to join us at HotelHive. Come and taste the difference today</p>
        </div>
      </section>
<section className="text-center my-8" id="contact">
  <SectionHeaders
    subHeader={"Don't hesitate"}
    mainHeader={'Contact us'}
  />
  <div className="mt-3">
    
    <p className="text-lg">Mobile: <a className="text-gray-500 underline" href="tel:+7310019508">+7310019508</a></p>
    <p className="text-lg">Email: <a className="text-gray-500 underline" href="mailto:abhinavmishranit1234@gmail.com">abhinavmishranit1234@gmail.com</a></p>
    <p className="text-lg">Address: Prayagraj, India</p>
  </div>
</section>



    </>
  )
}
