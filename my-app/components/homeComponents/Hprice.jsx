import React from "react"
import "@/components/pricecard/price.css"
import "@/app/globals.css"
import Heading from "@/components/heading/Heading"
import PriceCard from "@/components/pricecard/PriceCard"

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
