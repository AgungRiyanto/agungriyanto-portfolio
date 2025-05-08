'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import supabase from "@/utils/supabase";

const AboutSection = () => {
  const [data, setData] = useState<Skill[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data: skills, error } = await supabase
      .from('skills')
      .select('*')
      .order('id', {ascending: true})
      
    if (skills) {
      setData(skills);
    }
  }
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
            Hi, I'm Agung Riyanto — a Software Engineer passionate about crafting intuitive and scalable mobile and web applications. With hands-on experience in React Native, Flutter, and modern frontend technologies like React.js and Next.js, I love turning ideas into
impactful digital products.
 
            </p>
            <br />
            <p>
            I also have experience in backend development using Node.js, Express, Nest.js, Laravel, and working with databases like MySQL, PostgreSQL, and SQLite, enabling me to build complete end-to-end solutions.
            </p>
            <br />
            <p>
            I’m familiar with Agile methodology and enjoy collaborating with cross-functional teams to deliver high-quality products
efficiently.
            </p>
            <br/>
            <p>
              I believe that you should{" "}
              <span className="font-bold text-blue-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br/>
            <p>
            I'm always eager to learn, grow, and build great things together!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {data.map((skill, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {skill.skill_name}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
