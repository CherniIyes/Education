import React from "react"
import Hero from "../hero/Hero"
import AboutCard from "../about/AboutCard"
import HAbout from "./homeComponents/HAbout"
import Testimonal from "../testimonal/Testimonal"
import Hblog from "./homeComponents/Hblog"
import Hprice from "./homeComponents/Hprice"
import Faq from "../pricing/Faq"


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

    </>

  )
}

export default Home
