import Image from "next/image";

export default function CentiblePage() {
  return (
    <div className="min-h-screen">
      {/* Banner Image */}
      <div className="relative w-full h-screen aspect-video overflow-hidden">
        <Image
          src="/images/CENTIBLE_BANNER.png"
          alt="SAS Filament UI System"
          fill
          className="object-cover"
        />
      </div>
      {/* Summary */}
      <div className="my-8 mb-12">
        <p className="font-bold text-3xl mb-8">Centible</p>
        <div className="flex flex-col gap-4 leading-10">
          <p>
            Centible is a student-built startup app developed and launched by
            App Team Carolina, a student organization dedicated to creating
            innovative startup apps and technical solutions to clients. Launched
            in December 2023, Centible is continuously evolving with new
            features being regularly added.
          </p>
          <p>
            As an iOS developer on the Centible team, I work on developing new
            iOS features for the app and mantaining existing features,
            brainstorming new ideas on a agile team of 20+ designers,
            developers, and product managers. From joining App Team Carolina in
            Jan 2024 as an iOS Academy member learning the basics of Swift and
            iOS development, to becoming a full-fledged iOS developer on the
            Centible team in Jan 2025, I have grown tremendously as a developer
            and team member.
          </p>
          <p>
            Learn more about the work we are doing at Centible *here* and
            download our app on the App Store today!
          </p>
        </div>
      </div>
      {/* Description S.C.O.U.T.*/}
      <div className="flex flex-col my-24 bg-gray-100 p-10">
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-bold text-xl mb-2">Roles & Responsibilities</p>
            <p>iOS Developer</p>
          </div>

          <div className="max-w-xs">
            <p className="font-bold text-xl mb-2">Tools Used</p>
            <p className="break-words">
              Swift, SwiftUI, Xcode, Figma, Git, GitHub
            </p>
          </div>

          <div>
            <p className="font-bold text-xl mb-2">Duration</p>
            <p>Jan 2025 - Present</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-8 leading-10 mb-8">
          <p className="font-bold mb-4 text-2xl">
            Category to Filtered Transactions
          </p>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl">Objective</p>
            <p>
              We want to enable users to see their transactions filtered by
              category if a user clicks on the category’s bar graph on the home
              page. For example, if the user clicks on the &quot;Eating Out&quot; bar on
              the home page, they will be taken to the screen with the
              week/month’s transactions filtered by the &quot;Eating Out&quot; category.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl">Development</p>
            <p>
              I used Swift and SwiftUI to develop this feature. I created a new
              view controller for the filtered transactions screen, designed the
              user interface using SwiftUI components, and implemented the logic
              to filter transactions based on the selected category. I also
              ensured that the navigation from the home page to the filtered
              transactions screen was smooth and provided an intuiative user
              experience.
            </p>
            <div className="relative w-full h-screen aspect-video overflow-hidden mb-12">
              <Image
                src="/images/CENTIBLE_BANNER.png"
                alt="Centible"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 leading-10">
          <p className="font-bold mb-4 text-2xl">
            Filtered Transactions Front-End
          </p>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl">Objective</p>
            <p>
              We want to enable users to see their transactions filtered by
              category if a user clicks on the category’s bar graph on the home
              page. For example, if the user clicks on “eating out” on the home
              page (within a certain radius), they will be taken to the screen
              with the week/month’s transactions filtered by the “eating out”
              category.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl">Development</p>
            <p>
              I used Swift and SwiftUI to develop this feature. I created a new
              view controller for the filtered transactions screen, designed the
              user interface using SwiftUI components, and implemented the logic
              to filter transactions based on the selected category. I also
              ensured that the navigation from the home page to the filtered
              transactions screen was smooth and provided an intuiative user
              experience.
            </p>
            <div className="relative w-full h-screen aspect-video overflow-hidden">
              <Image
                src="/images/CENTIBLE_BANNER.png"
                alt="SAS Filament UI System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
