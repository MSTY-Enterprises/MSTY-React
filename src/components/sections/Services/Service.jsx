import React from 'react'
import { content, hosting, marketing, solution, web } from '../../../assets'
import { Link } from 'react-router-dom';

const Service = () => {
    const services = [
        {
          title: 'Web Development',
          description: 'We create responsive and user-friendly websites that help businesses establish a strong online presence.',
          image: web,
        },
        {
          title: 'Content Writing',
          description: 'Our team of skilled content creators produces high-quality content that engages and informs your audience.',
          image: content,
        },
        {
          title: 'Digital Marketing',
          description: 'We help businesses grow their online presence through effective digital marketing strategies.',
          image: marketing,
        },
        {
          title: 'Business Solutions', 
          description: 'We offer customized business solutions to help businesses streamline their operations and achieve their goals.',
          image: solution,
        }
      ];
    return (
        <section>
            <div className="container mx-auto py-8">
                <div className="">
                    <div className="flex-1 text-center">
                        <h2 className="text-4xl font-semibold mb-4">
                            What We Offer ?
                        </h2>
                        <p className="mb-8 text-sm max-w-[600px] mx-auto text-neutral-600">
                            We offer a wide range of services to meet your needs. Whether you need web development, mobile app development, or digital marketing, we have the expertise to deliver top-notch solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-6 justify-around">
                    {
              services.map((service, index) => (
                <Link to={`/service/${service.title}`} key={index}>
                <div  className="bg-white border rounded-3xl p-6 flex flex-col cursor-pointer">
                  <div className="w-full h-28 flex justify-center items-center">
                  <img src={service.image} alt={service.title} className="w-40 hover:scale-125 transition-all  mx-auto rounded-t-3xl" />
                  </div>
                  <div className="   ">
                  <h4 className="text-2xl font-semibold  mt-4">{service.title}</h4>
                  <p className="text-xs text-black/60">{service.description}</p>
                  </div>
                </div>
                </Link>
              ))
             }
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Service
