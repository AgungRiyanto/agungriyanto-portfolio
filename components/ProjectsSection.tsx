import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Pasar20",
    description:
      "Pasar20 is an online grocery marketplace with thousands of varieties of meat, vegetables, fruit and more for you to choose from.",
    image: "/projects/pasar20.png",
    link: "https://play.google.com/store/apps/details?id=com.pasar20app",
  },
  {
    name: "FDC Dental Clinic",
    description:
      "The FDC Dental Clinic application helps make it easier for you to schedule dental care with professional dentists anytime & anywhere. Get a free consultation with a trusted doctor & various treatment options at affordable prices.",
    image: "/projects/fdc.png",
    link: "https://play.google.com/store/apps/details?id=id.co.fdcdentalclinic",
  },
  {
    name: "Cititrans",
    description:
      "Cititrans Booking has been completely redesigned for your convenience! Picking route, departure schedule and seat directly from our apps. You can even check seat availability in real time. Various payment options available for booking now or your advance reservation. Hassle free experience in managing your booking, refund or reschedule.",
    image: "/projects/cititrans.png",
    link: "https://play.google.com/store/apps/details?id=air.com.cititrans.birdev02",
  },
  {
    name: "Djuragan Kamar",
    description: "Djurkam is an application that makes it easy for people to search for rooms easily, find rooms with the nearest location point, recommend nearby rooms and users can make boarding room reservations daily, weekly, monthly.",
    image: "/projects/djurkam.png",
    link: "https://play.google.com/store/apps/details?id=com.djuragankamar.ids",
  },
  {
    name: "Djuragan Voucher",
    description: "Djuragan Voucher is an online voucher exchange application service used by tenants affiliated with Djuragan Voucher, so that members can easily exchange vouchers via the application.",
    image: "/projects/djurvoc.png",
    link: "https://play.google.com/store/apps/details?id=com.djuraganvoucher.member",
  },
  {
    name: "Marlin Booking",
    description:
      "Marlin Booking makes it easier to book ferry tickets and attraction vouchers. From Batam to Malaysia or Singapore, sail with our top ferry partners conveniently. Also, get amazing world attraction vouchers at reasonable prices.",
    image: "/projects/marlin-booking.png",
    link: "https://play.google.com/store/apps/details?id=com.marlinbooking.app",
  },
  {
    name: "Cakep",
    description:
      "Cakep is an application for manage / monitoring your monthly expense with simple & very helpfull features.",
    image: "/projects/cakep.png",
    link: "https://play.google.com/store/apps/details?id=com.apacakep",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
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
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        {/* <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link> */}
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

export default ProjectsSection
