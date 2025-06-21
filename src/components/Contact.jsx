import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

export default function Contact() {
  return (
     <section className="py-12 bg-gray-100" id="contact">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4">Let’s Connect</h3>
        <p className="mb-8">Send me a message or reach out on GitHub/LinkedIn!</p>

        <motion.form
          action="https://formspree.io/f/your-form-id" // <-- replace with your Formspree ID
          method="POST"
          className="space-y-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center bg-white border rounded p-3">
            <FaUser className="mr-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center bg-white border rounded p-3">
            <FaEnvelope className="mr-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full focus:outline-none"
            />
          </div>

          <div className="flex bg-white border rounded p-3">
            <MdMessage className="mr-3 text-gray-400 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full focus:outline-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="flex items-center bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-8 text-sm text-gray-600">
          Or contact me directly:<br />
          <a className="text-blue-600" href="mailto:ylee153@uottawa.ca">ylee153@uottawa.ca</a><br />
          <a className="text-blue-600" href="https://github.com/rennylee" target="_blank">GitHub</a> | 
          <a className="text-blue-600 ml-2" href="https://linkedin.com/in/renny-lee1102" target="_blank">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}