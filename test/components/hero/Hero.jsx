import React from "react"
import Heading from "@/components/heading/Heading"
import "./Hero.css"
import Header from "@/components/header/Header"

const Hero = () => {
  return (
    <>
      <div className=' bg'>
        <Header />
        <section className='hero bg'>
          <div className='container'>
            <div className='row'>
              <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className='button'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                  VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='margin'></div>
    </>
  )
}

export default Hero
