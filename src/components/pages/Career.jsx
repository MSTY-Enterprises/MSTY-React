import React from 'react'
import Banner from '../sections/About/Banner'

const Career = () => {



  return (
    <>
      <Banner />
      <section>
        <div className="container mx-auto p-8">
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Job Openings</h2>
            <p className="mb-4">We are currently looking for talented individuals to join our team. Check out our current job openings below:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-white p-4 px-6  rounded-2xl shadow">
                <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                <p className="mb-2">Location: Kirti Nagar, Delhi 110015</p>
                <p className="mb-2">Job Type: Full-time</p>
                <p className="mb-2">Experience: 2+ years</p>
                <p className="mb-2">Description: We are seeking a skilled software engineer to join our team and contribute to the development of innovative software solutions.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">Apply Now</button>
              </div>

              <div className="bg-white p-4 px-6  rounded-2xl shadow">
                <h3 className="text-xl font-bold mb-2">Marketing Manager</h3>
                <p className="mb-2">Location: Kirti Nagar, Delhi 110015</p>
                <p className="mb-2">Job Type: Full-time</p>
                <p className="mb-2">Experience: 3+ years</p>
                <p className="mb-2">Description: We are looking for a talented marketing manager to lead our marketing efforts and drive growth for our company.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl ">Apply Now</button>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Career
