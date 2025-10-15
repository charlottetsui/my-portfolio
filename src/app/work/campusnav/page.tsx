import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function CampusNavPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Banner Image */}
        <div className="relative w-full h-screen aspect-video overflow-hidden">
          <Image
            src="/images/CAMPUSNAV_BANNER.png"
            alt="CampusNav"
            fill
            className="object-cover"
          />
        </div>
        {/* Summary */}
        <div className="my-8 mb-12">
          <p className="font-bold text-3xl mb-8">CampusNav</p>
          <div className="flex flex-col gap-4 leading-10">
            <p>
              CampusNav is a campus navigation app that helps students easily
              find their way around campus by visualizing their class schedules
              on an interactive map. The app enhances the student experience
              through intuitive route planning and real-time navigation
              features. As the lead developer, I was responsible for designing
              and building the app from start to finish, including creating the
              user interface, implementing map functionalities, and integrating
              course schedule data.
            </p>
            <p>
              This app was developed as my final project for App Team
              Carolina&apos;s iOS Apprenticeship program.
            </p>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col bg-gray-100 p-10 mb-12">
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-bold text-xl mb-2">Roles & Responsibilities</p>
              <p>UI/UX Design</p>
              <p>iOS Developement</p>
              <p>Backend Integration</p>
            </div>

            <div className="max-w-xs">
              <p className="font-bold text-xl mb-2">Tools Used</p>
              <p className="break-words">
                Swift, SwiftUI, Python, MapKit, Firebase, Figma, Github
              </p>
            </div>

            <div>
              <p className="font-bold text-xl mb-2">Duration</p>
              <p>5 weeks</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-8 leading-10 mb-4">
          <p className="font-bold text-xl">Inspiration</p>
          <p>
            When brainstorming ideas for my final project, I knew I wanted to
            create an app that could solve a real problem for students on
            campus. This final project was announced around the same time as
            when course registration was opening up for the next semester. As my
            friends and I were trying to figure out our class schedules for the
            upcoming semester, I realized that many of us had trouble figuring
            out where our classes were located on campus and how long it would
            take to get from class to class, crucial considerations when
            planning out a schedule.
          </p>
          <p>
            While class schedulers such as Coursicle allow you to view and
            schedule your classes in a calendar-style format. I wanted to create
            an app that could help students navigate the campus more efficiently
            by visualizing their class schedules on an interactive map, allowing
            students to save time and reduce stress, improving the overall
            student experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-8 leading-10 mb-4">
          <p className="font-bold text-xl">The Problem</p>
          <p>
            As a student, navigating a large and complex campus can be
            challenging, especially for new students who may not be familiar
            with the layout of the campus. Finding the most efficient routes
            between classes can be time-consuming and stressful, particularly
            during peak hours when foot traffic is high. This led me to the
            question:
          </p>
          <p className="text-center italic my-4 text-[#6599c2]">
            &quot;How can I make scheduling and navigating classes on campus
            easier and more efficient for students?&quot;
          </p>
        </div>
        <div className="flex flex-col gap-4 my-8 leading-10 mb-4">
          <p className="font-bold text-xl">The Goal</p>
          <p>
            Design a innovative mobile app that simplifies campus navigation for
            students by integrating class schedules with interactive maps,
            enabling users to efficiently plan routes between classes.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-8 leading-10 mb-4">
          <p className="font-bold text-xl">Research and Design</p>
          <p>
            To better understand the needs and pain points of students regarding
            campus navigation, I interviewed students, surveying them about
            their experience with course registration. I gathered insights on
            their experiences navigating campus, the challenges they faced, and
            the features they would find most useful in a navigation +
            scheduling app.
          </p>
          <p>
            I also studied how existing navigation apps like Google Maps and
            Apple Maps design their user interfaces for easy interaction and how
            popular scheduling apps like Coursicle present information to users.
            I drew inspiration from these apps to design a user-friendly and
            intuitive interface for CampusNav.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-8 leading-10 mb-4">
          <p className="font-bold text-xl">Development</p>
          <p>
            Before beginning development, I needed a reliable way to integrate
            course schedule data into the app. I chose Firebase as the backend
            to manage user data and course schedules. To populate the database,
            I developed a Python script that scraped course information from the
            university’s course catalog, converted it into JSON, and imported it
            into my app.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
