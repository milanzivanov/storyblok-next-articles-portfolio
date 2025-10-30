import { AboutBlokProps } from "@/src/interface";
import Image from "next/image";

function About({ blok }: AboutBlokProps) {
  // console.log("About component params:", blok);

  return (
    <section className="max-w-4xl mx-auto w-full bg-blue-100 pt-16 pb-5 px-4 rounded-md shadow my-20">
      <h2 className="text-3xl text-center md:text-3xl font-bold">
        {blok.headline}
      </h2>
      <div className="flex justify-center mt-6">
        <Image
          className="rounded-full"
          src={blok.about_image.filename}
          alt={blok.about_image.alt}
          width={200}
          height={200}
        />
      </div>
      <div className="grid md:grid-flow-col auto-cols-fr mt-6 gap-8">
        <p className="text-sm text-center font-md">{blok.body}</p>
      </div>
    </section>
  );
}
export default About;
