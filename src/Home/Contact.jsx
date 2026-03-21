import { useState } from 'react';
import toast from 'react-hot-toast';
import ContactCards from './ContactCards';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone_number: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const result = await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        phone_number: formData.phone_number,
      },
      "YOUR_PUBLIC_KEY"
    );

    console.log(result.text);
    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone_number: "",
    });

  } catch (error) {
    console.log(error);
    toast.error("Failed to send message");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section id="contact" className=" text-black py-20 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#eea02b] max-w-xl mx-auto uppercase">
              Get in touch
            </p>
            {/* <h2 className="text-indigo-600 uppercase text-3xl lg:text-4xl font-bold mb-3">Get in Touch</h2> */}
            <h2 className="text-black uppercase text-3xl lg:text-4xl font-bold mb-3">Contact Us
            </h2>
            <p className="text-[#000000] max-w-xl mx-auto">
              We'd love to hear from you. Visit us, give us a call, or send us a message.

            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}

            <ContactCards />
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-semibold text-left">First Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold text-left">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-left">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-left">Your Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your message *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                    required
                  ></textarea>
                </div>

                {/* Optional Phone Field */}
                <div>
                  <label className="block mb-1 font-semibold text-left">Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="py-3 send flex justify-center items-center mx-auto"
                >
                  {loading ? <>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2">Sending...</span>
                  </> : <>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2">Send Message</span>
                  </>}
                </button>
              </form>
            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
