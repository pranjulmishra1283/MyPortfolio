import React from "react";
import Image from "../assets/avatar.jpg";
import cf from "../assets/codeforces.svg";
import interviewbit from "../assets/interviewbit.svg";
import leetcode from "../assets/leetcode.svg";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center mt-11"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] mb-4 font-bold leading-[0.8] lg:text-[95px]"
            >
              Pranjul <span>Mishra</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Exp. Full Stack Dev",
                  2000,
                  "Competitve Coder",
                  2000,
                  "Back-end Dev",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >Hi, I'm Pranjul Mishra, an accomplished MNNIT Allahabad graduate and an experienced developer.
              Welcome to my portfolio, where innovation meets expertise.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <a
                  href="mailto:pranjulmishra1283@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex">
                    <FaEnvelope className="mt-1 mr-2" />
                    Contact me
                  </div>
                </a>
              </button>
              <a
                href="https://www.linkedin.com/in/pranjul-mishra-005856184/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex">
                  <FaLinkedin className="mt-1.5 mr-2" />
                  LinkedIn
                </div>
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max ml-16"
            >
              {/* <a
                href="https://github.com/pranjulmishra1283"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a> */}
              {/* <a
                href="https://codeforces.com/profile/zestypratyush"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-6 mb-4" src={cf} alt="" />
              </a> */}

              {/* <a
                href="https://leetcode.com/desmond_miles_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-6 mb-4" src={leetcode} alt="" />
              </a> */}

              {/* <a
                href="https://www.interviewbit.com/profile/desmond_miles_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-6 mb-4" src={interviewbit} alt="" />
              </a> */}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img
              className="h-[400px] mb-24 ml-52" // Adjust the height and margin-left as needed
              src={Image}
              alt="My Pic"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
