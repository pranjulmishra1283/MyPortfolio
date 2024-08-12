import React from "react";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container mt-52 mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div>
            <h2 className="h2 leading-tight text-accent">My Experience</h2>
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
            <button
              onClick={() => {
                window.open("https://github.com/Khaliq-786?tab=repositories");
              }}
              className="btn btn-sm"
            >
              View Internship Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;