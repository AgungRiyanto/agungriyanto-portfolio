import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "PT Dagangan Karya Indonesia (Dagangan)",
    sub: "Mobile Engineer (Sep 2022 - Okt 2023)",
    image: "/companies/dagangan.jpeg",
    link: "https://www.dagangan.com/",
  },
  {
    name: "PT Erloom Digital Venture (Erloom | CODR)",
    sub: "Mobile Engineer (May 2020 - Sep 2022)",
    image: "/companies/erloom.jpeg",
    link: "https://www.erloom.id",
  },
  {
    name: "PT Sinergi Mitra Groserindo (Pasar20)",
    sub: "Freelance Mobile Engineer (Jul 2020 - Dec 2021)",
    image: "/companies/pasar20.jpeg",
    link: "https://pasar20.com/",
  },
  {
    name: "PT Marlin Wisata Putranusa (Marlin Booking)",
    sub: "Web & Mobile Engineer (Feb 2018 - Mar 2020)",
    image: "/companies/marlin.jpg",
    link: "#",
  },
  {
    name: "AmtekLab",
    sub: "Full Stack Developer (Jun 2016 - Jan 2018)",
    image: "/companies/amteklab.jpg",
    link: "#",
  },
]

const WorkExperienceSection = () => {
  return (
    <section id="work-experience">
      <div className="md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Work Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/4">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-3/4">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.sub}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            )
          })}
          
        </div>
      </div>
      
    </section>
  )
}

export default WorkExperienceSection
