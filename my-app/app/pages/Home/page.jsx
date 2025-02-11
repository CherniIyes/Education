import React from "react"
import Hero from "@/components/hero/Hero"
import AboutCard from "@/components/aboutcard/AboutCard"
import HAbout from "@/components/homeComponents/HAbout"
import Testimonal from "@/components/testimonal/Testimonal"
import Hblog from "@/components/homeComponents/Hblog"
import Hprice from "@/components/homeComponents/Hprice"
import Faq from "@/components/faq/Faq"
import Footer from "@/components/footer/Footer"


const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      <Faq />
      <Footer />

    </>

  )
}

export default Home
