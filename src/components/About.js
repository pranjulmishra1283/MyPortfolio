import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-atuo ml-24">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a coder, FullStack developer with Backend Heavy !
            </h3>
            <p className="mb-6">
            A creative tech enthusiast and MNNIT Allahabad grad, 
            I transform ideas into dynamic digital experiences. 
            With a full-stack arsenal from React to Node.js, MongoDB to MySQL, 
            I craft seamless solutions that bridge innovation and functionality. 
            Always curious, always building—let's create something extraordinary!.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1000} duration={1} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Problems <br />
                  Solved
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetcs <br />
                  Created
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={2} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Current <br />
                  Achievements
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a
                href="https://github.com/pranjulmishra1283"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-lg">
                  <div className="flex justify-center items-center">
                    <FaGithub className="mr-2" />
                    View Github
                  </div>
                </button>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1_kut4TtP0xWN_2_93Uv3a8UOZjHm4VDJ?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient btn-link"
              >
                View Certificates
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
