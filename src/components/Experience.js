
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section className="section" id="experience" ref={ref}>
            <div className="container mx-atuo ml-24">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    {/* img */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-experience bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"

                    >
                        <h2 className="h2 mb-6">
                            <span className="text-gradient"> Proffesional </span> <br />
                            <span className="font-semibold">Experience</span>
                        </h2>
                        <h3 className="h3 max-w-[455px] mb-16">
                            This is my current Proffesional Experience.
                        </h3>
                    </motion.div>

                    {/* text */}
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        {/* <h2 className="h2 text-accent"> My Experience.</h2> */}
                        {/* <h2 className="h2 leading-tight text-accent">My Experience</h2> */}
                        <h3 className="h3 leading-tight text-[#3db013]">1. Proactive for Her (SDE-Intern)</h3>
                        <p className="mb-10 text-xl">
                            <ul type="square">
                                <li>
                                    i. Verified order pending conversions and executed cron job
                                    services for task scheduling.
                                </li>
                                <br></br>
                                <li>
                                    ii. Implemented doctor profiles by fetching data from JotForm and
                                    mapping doctor details.
                                </li>
                                <br></br>
                                <li>
                                    iii. Designed and implemented a patient feedback mechanism,
                                    handling various SQL operations in the database.
                                </li>
                                <br></br>
                                <li>
                                    iv. Implemented a Slack notification feature for doctor creation
                                    using API, notifying with the specific email or number.
                                </li>
                                <br></br>
                                <li>
                                    v. Tech Stack : Node.js, Express.js, Nest.js, Objection.js, Knex
                                    Query Builder, MongoDB
                                </li>
                            </ul>
                        </p>
                        {/* stats */}
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={25} duration={1} suffix="%" /> : null}

                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Increased <br />
                                    Customer
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={20} duration={3} suffix="%" /> : null}+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Enrolled <br />
                                    Doctors
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={30} duration={2} suffix="%" /> : null}+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Increased <br />
                                    Sales
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            {/* <a
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
              </a> */}
                            <a
                                href="https://drive.google.com/drive/folders/1_kut4TtP0xWN_2_93Uv3a8UOZjHm4VDJ?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gradient btn-link"
                            >
                                <button className="btn btn-lg">
                                    <div className="flex justify-center items-center">
                                        {/* <FaGithub className="mr-2" /> */}
                                        View Internship Certificate
                                    </div>
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
