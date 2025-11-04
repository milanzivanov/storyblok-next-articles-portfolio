import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokAsset } from "@/src/interface";
import Image from "next/image";

interface TestimonialProps {
  blok: SbBlokData & {
    name: string;
    comment?: string;
    testimonial_image?: StoryblokAsset;
  };
}

export default function Testimonial({ blok }: TestimonialProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <div className="flex items-center gap-3">
        <Image
          src={blok.testimonial_image?.filename ?? "/globe.svg"}
          alt={blok.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h4 className="text-md leading-relaxed font-bold text-gray-700">
          {blok.name}
        </h4>
      </div>
      {blok.comment && <p className="text-sm mt-6">{blok.comment}</p>}
    </div>
  );
}
