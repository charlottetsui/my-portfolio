import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function SASPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Banner Image */}
        <div className="relative w-full h-screen aspect-video overflow-hidden">
          <Image
            src="/images/SAS_BANNER.png"
            alt="SAS Filament UI System"
            fill
            className="object-cover object-top"
          />
        </div>
        {/* Summary */}
        <div className="my-8 mb-12">
          <p className="font-bold text-3xl mb-8">Filament UI Intern</p>
          <p className="leading-10">
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
        <div className="flex flex-col mb-12">
          <p className="font-bold text-3xl mb-8">
            SCOUT - Source Code Usage Tracker
          </p>
          <div className="flex flex-row justify-between mb-4 bg-gray-100 p-10">
            <div>
              <p className="font-bold text-xl mb-2">Roles & Responsibilities</p>
              <p>UX Design: Wireframing, Prototyping</p>
              <p>UX Research: User interviews, Data analysis and synthesis</p>
              <p>Full-Stack Developer</p>
            </div>

            <div className="max-w-xs">
              <p className="font-bold text-xl mb-2">Tools Used</p>
              <p className="break-words">
                JSCodeShift, MongoDB, TypeScript, Next.js, React, Tailwind CSS,
                Git, Github
              </p>
            </div>

            <div>
              <p className="font-bold text-xl mb-2">Duration</p>
              <p>12 weeks</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 my-4">
            <p className="font-bold text-xl">The Problem</p>
            <p className="leading-10">
              We identified a significant challenge faced by the Filament team:
              managing and maintaining a vast codebase of over 50 consumer
              applications. As the codebase grew, it became increasingly
              difficult to track component usage across consumers, leading to
              issues such as figuring out where and how various components,
              props, and features were being utilized.
            </p>
          </div>
          <div className="flex flex-col gap-4 my-4">
            <p className="font-bold text-xl">The Goal</p>
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
          <div className="flex flex-col gap-4 my-4">
            <p className="font-bold text-2xl">Design Process</p>
            <p className="leading-10">
              The process of building SCOUT began with conducting thorough user
              research to understand stakeholder needs. We then identified key
              data points and target consumers, and designed a wire-framed
              prototype to visualize the tool's core functionality and workflow.
            </p>
          </div>
          <div className="flex flex-row gap-4 my-4 leading-10">
            <div className="flex flex-col gap-4 my-4">
              <p className="font-bold text-xl">Research</p>
              <p className="max-w-screen">
                We conducted surveyed 60+ people including Front-End developers,
                UX designers, Test Engineers, and other Internal Team members to
                gather insights on their pain points and needs regarding
                component usage tracking.
              </p>
              <p>We asked questions such as:</p>
              <p>
                Through this research, we identified key data points that would
                be most valuable to track such as component usage frequency,
                props used, and feature adoption.
              </p>
            </div>
            <div className="relative w-full h-screen flex justify-center">
              <Image
                src="/images/SAS_BANNER.png"
                alt="Me!"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
