import React from "react"
import Back from "@/components/back/Back"
import CoursesCard from "@/components/coursescard/CoursesCard"
import OnlineCourses from "@/components/onlinecourses/OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
