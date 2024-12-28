import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { MdMailOutline } from 'react-icons/md'

const Contact = () => {

  const [formData, setFormData] = React.useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const sendData = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert('Form Submitted Successfully');
      setFormData({
        name: "",
        mobile: '',
        email: '',
        message: ''
      })
    } else {
      alert('Something went wrong');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    sendData(data);
    

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <section>
      <div className="container mx-auto px-2 py-16 bg-gradient-to-bl from-violet-300 to-violet-200 rounded-3xl my-8 ">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 p-4 flex flex-col ">
            <h2 className='text-4xl font-semibold'>Your Next Step Starts Here</h2>
            <p className='p-2  text-neutral-600 mt-2 max-w-[600px]'>
              We’d love to hear from you! Share your ideas, ask questions, or simply say hello. Let’s connect and explore how we can make your vision a reality.
            </p>
            <div className="flex flex-col gap-3 my-2">
              <p><BiPhoneCall className='text-3xl inline-block text-blue-500' /> - +91 99107 41417 </p>
              <p><BsWhatsapp className='text-3xl inline-block text-green-500' /> - +91 99107 41417</p>
              <p><MdMailOutline className='text-3xl inline text-orange-500 ' /> - info@mstyenterprises.com</p>

            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 lg:p-0">
            <form onSubmit={handleSubmit} className='w-full lg:w-1/2 border shadow-lg mx-auto bg-white p-4 rounded-2xl'>
              <div className="">
                <label className='text-lg block mt-1 ' htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className='w-full border border-neutral-300  font-light rounded-md px-2 p-1 text-sm' />
              </div>
              <div className="">
                <label className='text-lg block mt-1 ' htmlFor="Mobile">Mobile</label>
                <input 
                type="number" 
                name="mobile" 
                id="Mobile" 
                value={formData.mobile} 
                onChange={handleInputChange}
                className='w-full border border-neutral-300  font-light rounded-md px-2 p-1 text-sm' />
              </div>
              <div className="">
                <label className='text-lg block mt-1 ' htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className='w-full border border-neutral-300  font-light rounded-md px-2 p-1 text-sm' />
              </div>
              <div className="">
                <label className='text-lg block mt-1 ' htmlFor="message">Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleInputChange}  cols="30" rows="5" className='w-full border border-neutral-300  font-light rounded-md px-2 p-1 text-sm'></textarea>
              </div>
              <button className='text-white bg-red-600 py-2 px-6 rounded-full mx-auto block mt-2'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
