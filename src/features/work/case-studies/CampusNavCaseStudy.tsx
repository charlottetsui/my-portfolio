import CaseStudy from "@/features/work/components/CaseStudy";
import CaseStudyBanner from "@/features/work/components/CaseStudyBanner";
import Image from "next/image";

export default function CampusNavCaseStudy() {
  return (
    <CaseStudy
      title="CampusNav"
      product="campusnav"
      hero={
        <CaseStudyBanner
          src="/images/campusnav_banner.png"
          alt="CampusNav"
        />
      }
    >
      {/* Summary */}
      <div className="case-summary">
        <div className="case-stack">
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
      <div className="case-details">
        <div className="case-details-grid">
          <div>
            <p className="case-detail-label">Roles & Responsibilities</p>
            <p>UI/UX Design</p>
            <p>iOS Developement</p>
            <p>Backend Integration</p>
          </div>

          <div className="case-detail-column">
            <p className="case-detail-label">Tools Used</p>
            <p className="break-words">
              Swift, SwiftUI, Python, MapKit, Firebase, Figma, Github
            </p>
          </div>

          <div>
            <p className="case-detail-label">Duration</p>
            <p>5 weeks</p>
          </div>
        </div>
      </div>
      <div className="case-section">
        <h2 className="case-heading">Background</h2>
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
      <div className="case-section">
        <h3 className="case-subheading">The Problem</h3>
        <p>
          As a student, navigating a large and complex campus can be
          challenging, especially for new students who may not be familiar
          with the layout of the campus. Finding the most efficient routes
          between classes can be time-consuming and stressful, particularly
          during peak hours when foot traffic is high. This led me to the
          question:
        </p>
        <p className="case-quote">
          &quot;How can I make scheduling and navigating classes on campus
          easier and more efficient for students?&quot;
        </p>
      </div>
      <div className="case-section">
        <h3 className="case-subheading">The Goal</h3>
        <p>
          Design a innovative mobile app that simplifies campus navigation for
          students by integrating class schedules with interactive maps,
          enabling users to efficiently plan routes between classes.
        </p>
      </div>
      <div className="case-section">
        <h3 className="case-subheading">Research and Design</h3>
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
      <div className="case-section">
        <h2 className="case-heading">Development</h2>
        <p>
          Before beginning development, I needed a reliable way to integrate
          course schedule data into the app. I chose Firebase as the backend
          to manage user data and course schedules. To populate the database,
          I developed a Python script that scraped course information from the
          university’s course catalog, converted it into JSON, and imported it
          into my app.
        </p>
      </div>
      <div className="case-split">
        <div className="case-stack">
          <h3 className="case-subheading">Map Feature</h3>
          <p>
            I used MapKit to implement the map scheduling feature which allows
            users to view their class locations on an interactive map. I
            created custom map annotations that pin where the class is located
            when users search and select a course. They can then press the
            green button to map their route from class to class or use the red
            button to clear the route.
          </p>
        </div>

        <div className="case-media relative">
          <Image
            src="/images/CAMPUSNAV_MAP.gif"
            alt="CampusNav"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="case-split">
        <div className="case-media relative">
          <Image
            src="/images/campusnav_schedule.gif"
            alt="CampusNav"
            fill
            className="object-contain"
          />
        </div>

        <div className="case-stack">
          <h3 className="case-subheading">Map Feature</h3>
          <p>
            I used MapKit to implement the map scheduling feature which allows
            users to view their class locations on an interactive map. I
            created custom map annotations that pin where the class is located
            when users search and select a course. They can then press the
            green button to map their route from class to class or use the red
            button to clear the route.
          </p>
        </div>
      </div>
      <div className="case-split">
        <div className="case-stack">
          <h3 className="case-subheading">Authentication</h3>
          <p>
            I implemented user authentication using Firebase Authentication,
            allowing users to securely sign up and log in to the app using
            their email and password. This ensures that each user&apos;s
            course schedule and preferences are personalized and protected.
          </p>
        </div>
        <div className="case-media relative">
          <Image
            src="/images/campusnav_login.png"
            alt="CampusNav"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="case-section">
        <h2 className="case-heading">Outcomes</h2>
        <p>
          After final iterations were made, I presented my app at our annual
          gala where I received compliments on the app&apos;s concept and design. I
          also received recognition from the App Team Carolina community and
          was awarded the &quot;Best Designed User Interface&quot; for my work
          on CampusNav. Throughout this project, I honed my skills in iOS
          development, UI/UX design, and backend integration.
        </p>
        <p>
          Looking toward the future, I hope to be able to improve and expand
          upon the current app and add more features such as:
        </p>
        <div className="case-stack">
          <p>
            💡 Automating the process of querying and updating course data
            from the university’s course catalog
          </p>
          <p>
            💡 Implementing secure user authentication restricted to verified
            college email addresses
          </p>
          <p>
            💡 Integrating real-time navigation with walking directions
            between classes
          </p>
        </div>
      </div>
    </CaseStudy>
  );
}
