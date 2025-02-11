import React from "react"
import Back from "../back/Back"
import PriceCard from "./PriceCard"

import "./price.css"

const Pricing = () => {
  return (
    <div>
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      {/* <Faq /> */}
    </div>
  )
}

export default Pricing
