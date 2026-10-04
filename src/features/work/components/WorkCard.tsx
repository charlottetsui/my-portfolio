"use client";

import Image, { StaticImageData } from "next/image";
import { Link } from "next-view-transitions";
import { motion, useReducedMotion } from "framer-motion";

type WorkCardProps = {
  image: string | StaticImageData;
  alt?: string;
  title: string;
  description?: string;
  href?: string;
  index?: number;
};

export default function WorkCard({
  image,
  alt = "",
  title,
  description = "",
  href = "#",
  index = 0,
}: WorkCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="work-card w-full"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : Math.min(index, 3) * 0.08 }}
    >
      <Link href={href} className="work-card-link">
        <div className="work-card-image relative w-full aspect-video overflow-hidden">
          <Image src={image} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="work-card-caption">
          <h3>{title}</h3>
        </div>
        {description && <p className="mt-2 text-gray-500">{description}</p>}
      </Link>
    </motion.article>
  );
}

export type { WorkCardProps };
