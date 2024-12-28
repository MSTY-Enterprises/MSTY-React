import React from 'react'
import { MdBlurOn } from 'react-icons/md'
import { useParams } from 'react-router-dom'

const KeyFeature = () => {

  const {service} = useParams()

  const content = {
    "Web Development": {
      feature: [
        {
          title: "Custom Design Solutions",
          description: "We create unique and visually appealing designs tailored to your brand identity.",
          
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
      feature: [
        {
          title: "Targeted Audience Reach",
          description: "We target your ideal audience with precision, ensuring your message reaches the right people at the right time.",

        },
        {
          title: "Custom Strategies",
          description: "We design strategies that align with your industry, goals, and audience, ensuring maximum impact.",

        },
        {
          title: "Brand Consistency",
          description: "We ensure a unified messaging across all platforms, enhancing your brand identity.",

        },
        {
          title: "Conversion Focused",
          description: "Our campaigns are designed to turn clicks into customers, driving tangible results.",

        },
        {
          title: "Ongoing Optimization",
          description: "We continuously monitor and refine your campaigns to ensure maximum results.",
        }
      ]
    },
    "Content Writing": {
      feature: [
        {
          title: "Blogs & Articles",
          description: "We create fresh, insightful, and well-researched content to establish your authority in the industry.",
        },
        {
          title: "Website Content",
          description: "We craft persuasive and clear copy that reflects your brand voice and drives conversions.",
        },
        {
          title: "Social Media Posts",
          description: "We create creative and engaging posts designed to boost your social media presence.",
        },
        {
          title: "Product Descriptions",
          description: "We highlight features and benefits with detailed yet concise descriptions.",
        },
        {
          title: "Email Campaigns",
          description: "We create high-converting emails to nurture leads and maintain customer relationships.",
        }
      ]
    },
    "Business Solutions": {
      feature: [
        {
          title: "Scalable Solutions",
          description: "Our solutions are designed to grow with your business, ensuring your success.",
        },
        {
          title: "Industry-Specific Expertise",
          description: "We offer insights and strategies tailored to your industry, ensuring you stay ahead.",
        },
        {
          title: "End-to-End Implementation",
          description: "From planning to execution, we handle it all, ensuring a seamless experience.",
        },
        {
          title: "Result-Oriented",
          description: "Our focus is on measurable improvements and ROI, ensuring your investment pays off.",
        },
        {
          title: "Collaborative Approach",
          description: "We work closely with your team to ensure the best outcomes.",
        }
      ]
    }

  }



  return (
    <section>
      <div className="container mx-auto py-8 flex gap-16 justify-center">
       <div className="">
        <h2 className='text-5xl'> 
          <span className='text-blue-600'>Key Features</span> of <br /> Our {service}
        </h2>
        <p className="text-sm text-gray-600 max-w-[500px] mt-2">
          Discover the key features that make our {service} stand out.
          From cutting-edge technology to exceptional customer support, we've got you covered.
        </p>
       </div>
       <div className="">
         {
          content[service]?.feature?.map((feature, index) => (
            <div key={index} className="mb-6 flex gap-2">
              <span>
                <MdBlurOn className='text-orange-600 text-4xl' /> 
              </span>
              <div className="">
                <h3 className='text-2xl font-semibold'>{feature.title}</h3>
                <p className='text-sm text-gray-600'>{feature.description}</p>
                </div>
            </div>
          ))
         }
       </div>
      </div>
    </section>
  )
}

export default KeyFeature


// Key Features of Our Business Solutions
// Scalable Solutions: Designed to grow with your business.
// Industry-Specific Expertise: Insights and strategies tailored to your sector.
// End-to-End Implementation: From planning to execution, we handle it all.
// Result-Oriented: Focused on measurable improvements and ROI.
// Collaborative Approach: We work closely with your team for the best outcomes.




// 4. Key Features of Our Digital Marketing Approach
// Targeted Audience Reach: Precise targeting ensures your message reaches the right people at the right time.
// Custom Strategies: We design plans that align with your industry, goals, and audience.
// Brand Consistency: Unified messaging across all platforms to enhance brand identity.
// Conversion Focused: Campaigns are optimized to turn clicks into customers.
// Ongoing Optimization: Constant monitoring and refinement to ensure your campaigns deliver maximum results.





// Key Features of Our Content Writing Services
// Blogs & Articles: Fresh, insightful, and well-researched content to establish your authority in the industry.
// Website Content: Persuasive and clear copy that reflects your brand voice and drives conversions.
// Social Media Posts: Creative and engaging posts designed to boost your social media presence.
// Product Descriptions: Highlight features and benefits with detailed yet concise descriptions.
// Email Campaigns: High-converting emails to nurture leads and maintain customer relationships.




// Key Features of Our Web Development Services
// Custom Design Solutions
// Tailored website designs that align with your brand identity and business goals.
// Responsive and Mobile-First Design
// Websites that provide a seamless user experience across all devices and screen sizes.
// SEO-Optimized Development
// Built with search engine best practices to ensure better visibility and ranking.
// High Performance & Speed
// Lightning-fast websites optimized for superior performance and loading times.
// Scalable Architecture
// Websites designed to grow with your business and handle increasing traffic seamlessly.
// E-Commerce Integration
// Custom online stores with secure payment gateways, product management, and user-friendly shopping experiences.
// Robust Security Features
// Advanced security protocols, including SSL encryption, firewalls, and regular updates, to protect your site.