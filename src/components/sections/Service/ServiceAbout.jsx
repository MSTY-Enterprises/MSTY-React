import React from 'react'
import { useParams } from 'react-router-dom';
import { contentImage, marketingImage, solutionImage, webdevImage } from '../../../assets';

const ServiceAbout = () => {

   const {service} = useParams();


   const content = {
    "Web Development": {
      "title": "Build Your Digital Presence with Custom Web Development",
      "description": "At MSTY, we specialize in creating visually stunning, highly functional websites that meet the unique needs of your business. Our team of developers works with you every step of the way, from design to launch, ensuring your website is perfectly aligned with your brand.",
      "image": webdevImage
    },
    "Content Writing": {
      "title": "Elevate Your Brand with Compelling Content",
      "description": "Our content writing services are designed to help you establish a strong online presence and engage with your audience. We create high-quality, SEO-optimized content that resonates with your target audience and drives results.",
      "image": contentImage
    },
    "Digital Marketing": {
      "title": "Maximize Your Online Presence with Our Digital Marketing Services",
      "description": "Our digital marketing services are designed to help you reach your target audience and achieve your business goals. We offer a range of services, including SEO, social media marketing, email marketing, and more.",
      "image": marketingImage
    },
    "Business Solutions": {
      "title": "Streamline Your Business with Our Comprehensive Business Solutions",
      "description": "Our business solutions are designed to help you streamline your operations, increase efficiency, and improve your bottom line. We offer a range of services, including accounting, bookkeeping, and more.",
      "image": solutionImage
    }
   }




  return (
    <section>
        <div className="container mx-auto py-8 flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">{content[service]['title']}</h2>
            <p className="text-base mb-4">{content[service]['description']}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={content[service]['image']} alt="Msty Enterprises service, delhi" className="w-full scale-75 rounded-3xl" />
          </div>
          
        </div>
    </section>
  )
}

export default ServiceAbout

// Headline:
// "Build Your Digital Presence with Custom Web Development"

// Content:
// At [Your Company Name], we specialize in creating visually stunning, highly functional websites that meet the unique needs of your business. Our team of developers works with you every step of the way, from design to launch, ensuring your website is perfectly aligned with your brand.



// Headline:
// "Drive Results with Targeted Digital Marketing Strategies"

// Content:
// [Your Company Name] offers comprehensive digital marketing solutions designed to grow your brand and reach your audience effectively. We take a data-driven approach to ensure that your marketing campaigns are measurable, optimized, and aligned with your business goals.






// Headline:
// "Engage Your Audience with High-Quality Content"

// Content:
// At [Your Company Name], we believe in the power of words to inspire, inform, and drive action. Our expert writers create compelling, SEO-optimized content that speaks to your audience while aligning with your business objectives. Whether you're looking to enhance your website, blog, or marketing materials, we deliver content that resonates.




// Headline:
// "Streamline Your Business with Customized Solutions"

// Content:
// At [Your Company Name], we provide innovative business solutions designed to optimize your operations, increase efficiency, and reduce costs. Whether you need strategic consulting, process optimization, or technology implementation, we offer tailored solutions to meet your business needs and goals.
