import React from 'react'
import { useParams } from 'react-router-dom'

const Offers = () => {
    const {service} = useParams()

// 3. Our Digital Marketing Services
// Search Engine Optimization (SEO):
// Boost your website’s visibility and organic traffic with advanced keyword strategies, on-page optimization, and link building.

// Pay-Per-Click Advertising (PPC):
// Get instant visibility and targeted traffic with cost-effective paid campaigns on Google, Bing, and social media.

// Social Media Marketing (SMM):
// Engage your audience, build your brand, and increase conversions with powerful social media campaigns.

// Email Marketing:
// Turn leads into loyal customers with personalized, high-converting email campaigns.

// Content Marketing:
// Build authority and trust with valuable, relevant, and engaging content tailored to your audience.

// Analytics and Performance Tracking:
// Leverage data insights to refine campaigns and maximize ROI.
    const content = {
      "Web Development": {
        offers: [
          {
            title: "Custom Web Design",
            description: "Tailor-made layouts reflecting your brand identity.",
          },
          {
            title: "Responsive Design",
            description: "Our designs are optimized for all devices, ensuring a seamless user experience.",
          },
          {
            title: "Cross-Browser Compatibility",
            description: "We ensure your website works flawlessly across different browsers and platforms.",
          },
          {
            title: "Performance Optimization",
            description: "We optimize your website for speed and performance, enhancing user satisfaction.",
          },
          {
            title: "SEO-Friendly Design",
            description: "Our designs are optimized for search engines, improving your website's visibility.",
          }
        ]
      },
      
        "Digital Marketing": {
          offers: [
            {
              title: "Search Engine Optimization (SEO)",
              description: "Boost your website’s visibility and organic traffic with advanced keyword strategies, on-page optimization, and link building.",
            },
            {
              title: "Social Media Marketing (SMM)",
              description: " Engage your audience, build your brand, and increase conversions with powerful social media campaigns.",
            },
            {
              title: "Email Marketing",
              description: "Turn leads into loyal customers with personalized, high-converting email campaigns.",
            },
            {
              title: "Content Marketing",
              description: "Build authority and trust with valuable, relevant, and engaging content tailored to your audience.",
            },
            {
              title: "Analytics and Performance Tracking",
              description: "Leverage data insights to refine campaigns and maximize ROI.",
            },
           
          ]
        },
        "Content Writing": {
          offers: [
            {
              title: "Blog Writing",
              description: "Engaging and informative blog posts that keep your audience informed and engaged.",
            },
            {
              title: "Article Writing",
              description: "Well-researched and SEO-optimized articles for your website or blog.",
            },
            {
              title: "Copywriting",
              description: "Professional copywriting services for your website, marketing materials, and more.",
            },
            {
              title: "SEO-Friendly Content",
              description: "Content optimized for search engines to improve visibility and ranking.",
            },
            {
              title: "Social Media Content",
              description: "Engaging and shareable content for social media platforms.",
            },
          ]
        },
        "Business Solutions": {
          offers: [
            {
              title: "Strategic Consulting",
              description: "Develop actionable plans that align with your business vision and objectives.",
            },
            {
              title: "Process Optimization",
              description: "Streamline workflows to enhance productivity and reduce costs.",
            },
            {
              title: "Technology Integration",
              description: "Implement cutting-edge tools and systems to simplify operations and improve performance.",
            },
            {
              title: "Digital Transformation",
              description: "Adopt modern technologies to stay competitive and future-proof your business.",
            },
            {
              title: "Custom Business Solutions",
              description: "Tailored services for specific challenges, including supply chain management, customer engagement, and more.",
            },
          ]
        }
      
      
    }





  return (
    <section>
      <div className="container mx-auto py-8">
       <div className="text-center">
       <h2 className="text-4xl font-semibold mb-2">Services We Offer</h2>
      <p className="text-sm text-gray-600 max-w-[600px] mx-auto">
         Discover our comprehensive range of professional services designed to elevate your business to new heights.
         We deliver innovative solutions tailored to your unique needs, ensuring sustainable growth and success.
        </p>  
       </div>
       <div className="flex py-8 gap-4 ">
        {
          content[service]?.offers?.map((offer, index) => (
            <div key={index} className="w-1/5 p-4 border rounded-2xl bg-white">
          <span className='text-5xl font-bold' >{index+1}.</span>
          <h4 className='text-xl font-semibold' >{offer.title}</h4>
          <p className='text-base text-neutral-600' >{offer.description}</p>
        </div>
          ))
        }

       </div>
      </div>
    </section>
  )
}

export default Offers

