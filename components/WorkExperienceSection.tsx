'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import supabase from "@/utils/supabase"
import dayjs from "dayjs"

const WorkExperienceSection = () => {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data: experiences, error } = await supabase
      .from('experiences')
      .select('*')
      .order('id', {ascending: false})
      
    if (experiences) {
      setData(experiences);
    }
  }

  return (
    <section id="work-experience">
      <div className="md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Work Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {data.map((experience, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/4">
                      <Link href={experience.company_url ?? ''}>
                        <Image
                          src={experience.company_logo}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-3/4">
                      <h1 className="text-4xl font-bold mb-6">{experience.company_name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {experience.position} ({dayjs(experience?.start_date).format('MMM YYYY')} - {experience?.end_date ? dayjs(experience?.end_date).format('MMM YYYY'):'Current'})
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={experience.company_url ?? ''} target="_blank">
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
