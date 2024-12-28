import React from 'react'

const ContactForm = () => {

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
      <div className="container mx-auto flex flex-col lg:flex-row px-8 lg:px-16 py-6 bg-orange-100 rounded-3xl  ">
        <div className="w-full lg:w-2/3 py-8 lg:py-16">
          <div className="flex flex-col gap-4">
            <h2 className='text-4xl font-semibold'>Get in touch</h2>
            <p className='text-base text-neutral-800 max-w-[500px]'>We’re here to assist you with any questions, comments, or concerns you may have. Whether you're looking for support, have a query about our services, or just want to say hello, we’d love to hear from you!</p>
            <p className='text-sm text-neutral-500 max-w-[500px]'>Please fill out the contact form and a member of our team will get back to you as soon as possible. We strive to respond to all inquiries within 24 hours.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-slate-50 p-8 shadow-xl rounded-3xl border">
            <div className="flex flex-col gap-1">
              <label className='ml-1 text-base' htmlFor="name">Name</label>
              <input id='name' className='border p-2 rounded-xl' name='name' value={formData.name} onChange={handleInputChange} type="text" placeholder="Name" />
            </div>
            <div className="flex flex-col gap-1">
              <label className='ml-1 text-base' htmlFor="email">Email</label>
              <input id='email' className='border p-2 rounded-xl' name='email' value={formData.email} onChange={handleInputChange} type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-1">
              <label className='ml-1 text-base' htmlFor="Mobile">Mobile</label>
              <input id='Mobile' className='border p-2 rounded-xl' name='mobile' value={formData.mobile} onChange={handleInputChange} type="text" placeholder="Mobile" />
            </div>
            <div className="flex flex-col gap-1">
              <label className='ml-1 text-base' htmlFor="message">Message</label>
              <textarea name="message" className='border p-2 rounded-xl' id="message" cols="30" rows="5" value={formData.message} onChange={handleInputChange} placeholder="Message"></textarea>
            </div>
            <div className="">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full block mx-auto">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


export default ContactForm
