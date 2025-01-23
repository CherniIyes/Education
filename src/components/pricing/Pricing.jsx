import React from "react"
import Back from "../back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import "@/app/globals.css"

import Faq from "./Faq"

const Pricing = () => {
  return (
    <div>
      {/* <Back title='Choose The Right Plan' /> */}
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </div>
  )
}

export default Pricing
