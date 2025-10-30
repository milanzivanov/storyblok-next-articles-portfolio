import { storyblokEditable } from "@storyblok/react";

interface HeroParams {
  blok: {
    headline: string;
    content: string;
  };
}

function Hero(params: HeroParams) {
  // console.log("Hero component params:", params);

  return (
    <section
      {...storyblokEditable(params.blok)}
      className="h-[calc(100vh-150px)] flex flex-col justify-center items-center
     px-4 w-full"
    >
      <h1 className="text-center text-5xl md:text-6xl font-extrabold">
        {params.blok.headline}
      </h1>
      <p className="max-w-md mx-auto text-center text-md mt-4 font-medium">
        {params.blok.content}
      </p>
    </section>
  );
}
export default Hero;
