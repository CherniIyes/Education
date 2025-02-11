import React from "react"
import "./about.css"
import Back from "@/components/back/Back"
import AboutCard from "@/components/aboutcard/AboutCard"

const About = () => {
  return (
    <div>
      <Back title='About Us' />
      <AboutCard />
    </div>
  )
}

export default About
