import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/*Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know about my background and passion
        </p>
        {/* Image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* images */}
          <div className="md:1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="profile"
            />
          </div>
          {/* content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 "
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-300 mb-2">
                I’m Aradhya Singh, a passionate Full-Stack Developer who loves
                turning ideas into fast, scalable, and user-friendly digital
                experiences. With a strong foundation in frontend technologies
                like React, Tailwind CSS, and modern JavaScript, combined with
                backend expertise in APIs, databases, and server-side logic, I
                enjoy building complete products from concept to deployment.
              </p>
              <p className="text-gray-300 mb-2">
                What drives me most is solving real-world problems through
                technology and continuously learning new tools and frameworks to
                stay ahead in the industry. Whether it’s building a responsive
                web application, designing RESTful APIs, or optimizing backend
                systems, I bring dedication, curiosity, and a growth mindset to
                every project I work on.
              </p>
              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-1">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold  mb-1">
                      {data.title}
                    </h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
