import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type WorkCardProps = {
  image: string | StaticImageData;
  alt?: string;
  title: string;
  description?: string;
  href?: string;
};

export default function WorkCard({
  image,
  alt = "",
  title,
  description = "",
  href = "#",
}: WorkCardProps) {
  return (
    <article className="flex flex-col w-full gap-4 text-gray-500">
      <Link href={href} className="block">
        <div className="relative w-full aspect-video rounded overflow-hidden">
          <Image src={image} alt={alt ?? title} fill className="object-cover" />
        </div>
      </Link>

      <div>
        <p className="font-bold text-xl text-black">{title}</p>
        {description && <p className="">{description}</p>}
      </div>
    </article>
  );
}

export type { WorkCardProps };
