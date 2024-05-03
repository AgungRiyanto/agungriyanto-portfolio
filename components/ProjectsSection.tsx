'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"
import supabase from "@/utils/supabase"

const ProjectsSection = () => {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', {ascending: false})
      
    if (projects) {
      setData(projects);
    }
  }

  return (
    <section id="projects">
      <div className="md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {data.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.project_link}>
                        <Image
                          src={project.project_image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.project_name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.project_description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        {/* <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link> */}
                        <Link href={project.project_link} target="_blank">
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

export default ProjectsSection
