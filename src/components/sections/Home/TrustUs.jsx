import React from 'react'
import { motion } from "motion/react"
import { client, Proven, reliable } from '../../../assets'

const TrustUs = () => {

  const content = [
    {
      title: "Proven Expertise",
      description: "Our team of experts has a proven track record of delivering successful projects for clients across various industries.",
      image: Proven
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize understanding our clients' needs and goals, ensuring that every project is tailored to their specific requirements and expectations.",
      image: client
    },
    {
      title: "Reliable Support",
      description: "Our dedicated support team is available to assist you throughout your project journey, providing timely solutions and maintaining clear communication.",
      image: reliable
    },

  ]
  return (
    <section>
      <div className="container mx-auto p-8 lg:p-16">
        <div className="">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            Why Our Clients Trust Us ?
          </h2>
          <p className="text-center text-xs lg:text-sm text-neutral-600 max-w-[600px] mx-auto my-2">
            We are proud to have a track record of satisfied clients who have entrusted us with their projects. Here are some reasons why our clients trust us:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {
            content.map((item, index) => (
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, ease: "linear" }}

                className="bg-white rounded-3xl p-4 flex flex-col justify-between hover:shadow-lg  cursor-pointer">
                <img src={item.image} alt="Proven Msty Enterprises" className="w-16 lg:w-24  mb-4 ml-4" />
                <div>
                  <h4 className='text-xl font-semibold'>{item.title}</h4>
                  <p className="text-xs text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))

          }


        </div>
      </div>
    </section>
  )
}

export default TrustUs
