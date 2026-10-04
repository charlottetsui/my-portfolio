import CaseStudy from "@/features/work/components/CaseStudy";
import CaseStudyBanner from "@/features/work/components/CaseStudyBanner";
import Image from "next/image";

export default function CentibleCaseStudy() {
  return (
    <CaseStudy
      title="Centible"
      product="centible"
      hero={
        <CaseStudyBanner
          src="/images/CENTIBLE_BANNER.png"
          alt="SAS Filament UI System"
        />
      }
    >
      {/* Summary */}
      <div className="case-summary">
        <div className="case-stack">
          <p>
            Centible is a student-built startup app developed and launched by
            App Team Carolina, a student organization dedicated to creating
            innovative startup apps and technical solutions to clients.
            Launched in December 2023, Centible is continuously evolving with
            new features being regularly added.
          </p>
          <p>
            As an iOS developer on the Centible team, I work on developing new
            iOS features for the app and mantaining existing features,
            brainstorming new ideas on a agile team of 20+ designers,
            developers, and product managers. From joining App Team Carolina
            in Jan 2024 as an iOS Academy member learning the basics of Swift
            and iOS development, to becoming a full-fledged iOS developer on
            the Centible team in Jan 2025, I have grown tremendously as a
            developer and team member.
          </p>
          <p>
            Learn more about the work we are doing at Centible *here* and
            download our app on the App Store today!
          </p>
        </div>
      </div>
      {/* Description S.C.O.U.T.*/}
      <div className="case-details">
        <div className="case-details-grid">
          <div>
            <p className="case-detail-label">Roles & Responsibilities</p>
            <p>iOS Developer</p>
          </div>

          <div className="case-detail-column">
            <p className="case-detail-label">Tools Used</p>
            <p className="break-words">
              Swift, SwiftUI, Xcode, Figma, Git, GitHub
            </p>
          </div>

          <div>
            <p className="case-detail-label">Duration</p>
            <p>Jan 2025 - Present</p>
          </div>
        </div>
      </div>
      <div>
        <div className="case-section">
          <h2 className="case-heading">
            Category to Filtered Transactions
          </h2>
          <div className="case-stack">
            <h3 className="case-subheading">Objective</h3>
            <p>
              We want to enable users to see their transactions filtered by
              category if a user clicks on the category’s bar graph on the
              home page. For example, if the user clicks on the &quot;Eating
              Out&quot; bar on the home page, they will be taken to the screen
              with the week/month’s transactions filtered by the &quot;Eating
              Out&quot; category.
            </p>
          </div>
          <div className="case-stack">
            <h3 className="case-subheading">Development</h3>
            <p>
              I used Swift and SwiftUI to develop this feature. I created a
              new view controller for the filtered transactions screen,
              designed the user interface using SwiftUI components, and
              implemented the logic to filter transactions based on the
              selected category. I also ensured that the navigation from the
              home page to the filtered transactions screen was smooth and
              provided an intuiative user experience.
            </p>
            <div className="case-media relative">
              <Image
                src="/images/CENTIBLE_I1.gif"
                alt="Centible"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="case-section">
          <h2 className="case-heading">
            Filtered Transactions Front-End
          </h2>
          <div className="case-stack">
            <h3 className="case-subheading">Objective</h3>
            <p>
              Currently, the transactions page just shows a list of all
              transactions sorted by date. We want to give users the ability
              to filter their transactions by category so they can easily see
              how much they are spending in each area.
            </p>
          </div>
          <div className="case-stack">
            <h3 className="case-subheading">Development</h3>
            <p>
              This feature is currently under development. I am using Swift
              and SwiftUI to update the current user interface so that it
              allows users to select categories from a dropdown menu or a set
              of buttons. Once a category is selected, the transactions list
              will update to show only the transactions that belong to that
              category. I am also working on ensuring that the filtering
              process is efficient and provides a smooth user experience.
            </p>
            <p>
              Shown below is a mockup of the updated transactions page with
              the category filter feature created on Figma.
            </p>
            <div className="case-media relative">
              <Image
                src="/images/CENTIBLE_I2.png"
                alt="SAS Filament UI System"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </CaseStudy>
  );
}
