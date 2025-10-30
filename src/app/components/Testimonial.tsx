import { StoryblokTestimonial } from "@/src/interface";
import Image from "next/image";

function Testimonial(params: StoryblokTestimonial) {
  // console.log("Testimonial component params:", params);

  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <div className="flex items-center gap-3">
        <Image
          src={params.blok.testimonial_image.filename ?? "/globe.svg"}
          alt={params.blok.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h4 className="text-md leading-relaxed font-bold text-gray-700">
          {params.blok.name}
        </h4>
      </div>
      <p className="text-sm mt-6">{params.blok.comment}</p>
    </div>
  );
}
export default Testimonial;
