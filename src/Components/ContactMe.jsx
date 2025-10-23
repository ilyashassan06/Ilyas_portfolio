import React from "react";
import { useForm } from "react-hook-form";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
  import { motion } from "framer-motion";
function ContactMe() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully ✅");
  };



  return (
    <div id="contact" className="flex gap-5 px-5  flex-col overflow-hidden items-center  mt-6  pb-8 w-[92%] md:w-[90%]" >

       <div className="w-full mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side - Form */}
        <motion.form
          initial={{ opacity: 0,  scale: 0.2 }}
        whileInView={{ opacity: 1,  scale: 1 }}
        transition={{ duration: 0.5,  }}
        viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 w-full"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="6"
              placeholder="How can I help?"
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition w-fit"
          >
            Get In Touch
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 p-3 rounded-md hover:bg-gray-100"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 p-3 rounded-md hover:bg-gray-100"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 p-3 rounded-md hover:bg-gray-100"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/917209765234"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 p-3 rounded-md hover:bg-gray-100"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </motion.form>

        {/* Right Side - Text */}
        <motion.div 
          initial={{ opacity: 0, x: 100, }}
        whileInView={{ opacity: 1, x: 0,  }}
        transition={{ duration: 1, delay:0.5}}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col h-full justify-center space-y-4 text-center md:text-left">
          <h2 className="text-5xl  font-bold">
            Say&apos;s <span className="text-black font-titlemain ">Hello </span>- Let's  <br />{" "}
            <span className="font-extrabold">Build Something Meaningful</span>
          </h2>
          <p className="text-gray-600 text-2xl ">
           Behind every great project is a great partnership. I work closely with clients to understand their vision, goals, and audience — then bring it all together in a web experience that’s memorable, modern, and effective. 
          </p>
          <p className="font-semibold text-black text-2xl ">
            iamilyashassan06@Gmail.com
          </p>
       <p className="font-bold text-4xl text-black hover:text-blue-600 transition duration-300 cursor-pointer">
  +91 7209765234
</p>



        </motion.div>
      </div>
    </div>
  )
}

export default ContactMe