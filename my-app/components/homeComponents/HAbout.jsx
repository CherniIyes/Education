import React from "react"
import "@/components/onlinecourses/courses.css"
import { coursesCard } from "@/data/index"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Heading from "@/components/heading/Heading";
import OnlineCourses from "@/components/onlinecourses/OnlineCourses";

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>



                  <div className='content flex'>
                    {/* this is for the image(icon to the left)
                    and the text(under and right to the icon ) */}
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>

                    <div className='text'>
                      <h1>{val.coursesName}</h1>

                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>

                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* price and enroll button */}
                  <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>

                  <button className='outline-btn'>ENROLL NOW !</button>

                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
