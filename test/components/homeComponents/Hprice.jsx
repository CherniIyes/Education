import React from "react"
import "@/pages/pricing/price.css"
import "@/app/globals.css"

import Heading from "@/components/heading/Heading"
import PriceCard from "@/pages/pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
