import React from "react"
import AboutCard from "@/components/about/AboutCard"
import Hblog from "./homeComponents/Hblog"
import HAbout from "./homeComponents/HAbout"
import Hero from "./hero/Hero"
import Hprice from "./homeComponents/Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
