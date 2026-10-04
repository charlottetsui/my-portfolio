import CaseStudy from "@/features/work/components/CaseStudy";
import CaseStudyBanner from "@/features/work/components/CaseStudyBanner";
import Image from "next/image";

export default function SasCaseStudy() {
  return (
    <CaseStudy
      title="Filament UI Intern"
      product="sas"
      hero={
        <CaseStudyBanner
          src="/images/SAS_BANNER.png"
          alt="SAS Filament UI System"
          imageClassName="object-cover object-top"
        />
      }
    >
      {/* Summary */}
      <div className="case-summary">
        <p className="case-copy">
          During the Summer of 2025, I interned as a Software Engineer on the
          Filament UI team, where I contributed to two impactful projects:
          SCOUT and ZeroState. I was fortunate to work alongside a supportive
          and collaborative team that encouraged growth, giving me the
          confidence to take on new challenges. Through this experience, I
          strengthened my technical and design skills while making meaningful
          contributions to real production features, allowing me to grow as a
          designer and developer.
        </p>
      </div>
      {/* Description S.C.O.U.T.*/}
      <div className="case-chapter">
        <h2 className="case-title">
          SCOUT - Source Code Usage Tracker
        </h2>
        <div className="case-details case-details-grid">
          <div>
            <p className="case-detail-label">Roles & Responsibilities</p>
            <p>UX Design</p>
            <p>UX Research</p>
            <p>Full-Stack Developer</p>
          </div>

          <div className="case-detail-column">
            <p className="case-detail-label">Tools Used</p>
            <p className="break-words">
              JSCodeShift, MongoDB, TypeScript, Next.js, React, Tailwind CSS,
              Git, Github
            </p>
          </div>

          <div>
            <p className="case-detail-label">Duration</p>
            <p>12 weeks</p>
          </div>
        </div>

        <div className="case-section">
          <h3 className="case-subheading">The Problem</h3>
          <p className="case-copy">
            We identified a significant challenge faced by the Filament team:
            managing and maintaining a vast codebase of over 50 consumer
            applications. As the codebase grew, it became increasingly
            difficult to track component usage across consumers, leading to
            issues such as figuring out where and how various components,
            props, and features were being utilized.
          </p>
        </div>
        <div className="case-section">
          <h3 className="case-subheading">The Goal</h3>
          <p>
            📌 Identify which components, props, and features are most and
            least utilized across consumer codebases
          </p>
          <p>
            📌 Prioritize bug and enhancements based on actual usage and
            impact to allocate engineering effort based on real-world need
          </p>
          <p>
            📌 Ensure the tool is compatible across Nova, FUI, and other
            TypeScript/JavaScript projects
          </p>
        </div>
        <div className="case-section">
          <h2 className="case-heading">Design Process</h2>
          <p className="case-copy">
            The process of building SCOUT began with conducting thorough user
            research to understand stakeholder needs. We then identified key
            data points and target consumers, and designed a wire-framed
            prototype to visualize the tool&apos;s core functionality and
            workflow.
          </p>
        </div>
        <div className="case-split">
          <div className="case-section">
            <h3 className="case-subheading">Research</h3>
            <p className="case-copy">
              We conducted surveyed 60+ people including Front-End developers,
              UX designers, Test Engineers, and other Internal Team members to
              gather insights on their pain points and needs regarding
              component usage tracking.
            </p>
            <p>
              We then synthesized this data to identify key data points that
              would be most valuable to track such as component usage
              frequency, props used, and feature adoption.
            </p>
          </div>
          <div className="case-figure">
            <div className="case-media case-media-research relative">
              <Image
                src="/images/scout_research.png"
                alt="Me!"
                fill
                className="object-contain object-top rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500">
              Sample of S.C.O.U.T. research data
            </p>
          </div>
        </div>
        <div className="case-section">
          <div className="case-stack">
            <h3 className="case-subheading">Wireframing</h3>
            <p className="case-copy">
              I created low-fidelity wireframes using to visualize the
              tool&apos;s core functionality and workflow. This helped us
              settle on core components of the tool&apos;s design and quickly
              gather feedback.
            </p>
          </div>
          <div className="case-media case-media-wireframe relative">
            <Image
              src="/images/sas_wireframing.JPG"
              alt="Me!"
              fill
              className="object-contain object-top"
            />
          </div>
          <p className="case-copy">
            We settled on creating a web-based dashboard that would allow
            users to view how components were being used across different
            consumer applications/repositories. The dashboard would include a
            bar graph to visualize component usage frequency, a table to
            display detailed information about each component, and filters to
            allow users to sort and view.
          </p>
        </div>
        <div className="case-section">
          <h2 className="case-heading">Development</h2>
          <p>
            Using JSCodeShift to analyze the Abstract Syntax Tree (AST) of
            JavaScript/TypeScript code, we built a custom parser that could
            accurately identify and extract component usage data from consumer
            repositories, counting import declarations and their specifiers to
            gather structural insight about components.
          </p>
          <p>
            We stored our parsed data in a MongoDB database, which allowed for
            efficient querying and retrieval of component usage information.
            Finally, we built a web-based dashboard using Next.js and React to
            visualize the data, incorporating interactive elements such as
            graphs, tables, and filters to allow users to explore and analyze
            component usage across different consumer applications.
          </p>
        </div>
      </div>
    </CaseStudy>
  );
}
