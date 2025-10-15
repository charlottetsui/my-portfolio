import PageTransition from "@/components/PageTransition";
import WorkSection from "@/components/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen text-gray-900">
        {/* Header Section */}
        <section>
          <div className="flex flex-row justify-between mb-50">
            <div className="flex flex-col max-w-2xl">
              <p className="text-5xl font-bold mb-4">
                Hi there, I'm Charlotte!
              </p>
              <p className="text-gray-600 mb-8 leading-12 text-2xl">
                A student and software developer at the University of North
                Carolina at Chapel Hill. I am passionate about building
                impactful software solutions that create seamless user
                experiences, bridging the gap between design and engineering.
              </p>
            </div>

            <div className="relative w-full h-150 flex justify-center">
              <Image
                src="/images/me.jpeg"
                alt="Me!"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>
        </section>
        {/* Work Section */}
        <p className="text-3xl font-bold">Selected works</p>
        <WorkSection />
      </main>
    </PageTransition>
  );
}
