import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-10 md:gap-20"
    >
      {/* Company Achievements Section */}
      <div className="w-full md:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Company Achievements
          </h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-6">
          {/* Achievement 1: Product Launch */}
          <ResumeCard
            title="Led a Successful Product Launch"
            subTitle="Spearheaded the development and launch of a major feature for a SaaS platform, resulting in a 35% increase in user engagement. The project involved managing cross-functional teams, implementing Agile methodologies, and ensuring on-time delivery with full product feature testing."
            result="Success - 35% Increase in Engagement"
            des="This project focused on enhancing user retention and experience by introducing a game-changing feature that integrated seamlessly with the existing platform, receiving positive feedback from both customers and stakeholders."
          />
          {/* Achievement 2: Performance Optimization */}
          <ResumeCard
            title="Optimized Application Performance"
            subTitle="Refactored critical areas of an e-commerce platform, reducing server response times and optimizing front-end rendering, leading to a 50% decrease in page load times. This improvement directly contributed to a 20% boost in customer retention and satisfaction."
            result="Success - 50% Faster Load Times"
            des="Leveraged caching mechanisms and improved database efficiency by optimizing queries, resulting in a more responsive and user-friendly website, especially during peak traffic periods."
          />
          {/* Achievement 3: Automation and CI/CD */}
          <ResumeCard
            title="Automated Testing & CI/CD Pipeline"
            subTitle="Built a comprehensive automated testing framework using Jest and Cypress, and implemented a robust CI/CD pipeline using Jenkins, which reduced manual testing time by 70% and deployment time by 80%."
            result="Success - 80% Reduction in Deployment Time"
            des="This automation effort ensured faster delivery of new features while maintaining high product stability, empowering the team to release updates with confidence and minimizing downtime during deployments."
          />
        </div>
      </div>

      {/* Job Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-6">
          {/* Job 1: Senior Software Engineer */}
          <ResumeCard
            title="Senior Software Engineer"
            subTitle="XYZ Corporation (2017 - Present)"
            result="Success"
            des="Worked on the full software development lifecycle, from gathering requirements and system architecture design to coding and deployment. Led a team of developers to build scalable web applications that enhanced user experience and contributed to business growth."
          />
          {/* Job 2: Front-End Developer */}
          <ResumeCard
            title="Front-End Developer"
            subTitle="ABC Tech Solutions (2012 - 2017)"
            result="Success"
            des="Developed responsive and accessible user interfaces using React.js and modern JavaScript frameworks. Collaborated closely with UX/UI designers to translate wireframes and mockups into high-quality, performant web applications."
          />
          {/* Job 3: Web Developer */}
          <ResumeCard
            title="Web Developer"
            subTitle="DEF Media (2010 - 2012)"
            result="Success"
            des="Maintained and improved legacy websites by implementing performance optimizations and design updates. Managed website SEO strategies, which resulted in a noticeable increase in site traffic."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
