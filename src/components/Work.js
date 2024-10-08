import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mt-52 mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Projects.
              </h2>
              <p className="max-w-sm mb-10">
              Showcasing my full-stack development expertise through projects that 
              blend intuitive front-end design with robust back-end architecture, 
              delivering seamless user experiences and efficient, scalable 
              solutions using modern web technologies.
              </p>
              <button
                onClick={() => {
                  window.open("https://github.com/pranjulmishra1283");
                }}
                className="btn btn-sm"
              >
                View all projects
              </button>
            </div>
            {/* image */}
            <motion.div
              onClick={() => {
                window.open("https://github.com/pranjulmishra1283/Fling");
                // window.open("https://github.com/Khaliq-786/Minder-backend/");
              }}
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-32 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">Fling</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  MNNIT’s very own dating-cum-social media platform
                </span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10 lg:mb-0">
            {/* image */}
            <motion.div
              onClick={() => {
                window.open("https://github.com/pranjulmishra1283/Expense-Tracker");
              }}
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl hover:cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-32 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">Expense Tracker</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                Finance Was Never This Easy | Earn | Spend | Save.
                </span>
              </div>
            </motion.div>
            {/* image */}
            <motion.div
              onClick={() => {
                window.open("https://github.com/pranjulmishra1283/PintrestClone");
              }}
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-7 hover:cursor-pointer"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-40 transition-all duration-500 z-50">
                <span className="text-gradient text-3xl">Pinterest Clone</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  Explore the Best of the Ideas.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
