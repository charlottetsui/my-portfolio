import Image from "next/image";

type CaseStudyBannerProps = {
  src: string;
  alt: string;
  imageClassName?: string;
};

export default function CaseStudyBanner({
  src,
  alt,
  imageClassName = "object-cover",
}: CaseStudyBannerProps) {
  return (
    <div className="case-study-banner relative w-full aspect-video overflow-hidden">
      <Image src={src} alt={alt} fill className={imageClassName} />
    </div>
  );
}
