import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface HeroProps {
  blok: SbBlokData & {
    headline: string;
    content: string;
  };
}

export default function Hero({ blok }: HeroProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="h-[calc(100vh-150px)] flex flex-col justify-center items-center px-4 w-full"
    >
      <h1 className="text-center text-5xl md:text-6xl font-extrabold">
        {blok.headline}
      </h1>
      <p className="max-w-md mx-auto text-center text-md mt-4 font-medium">
        {blok.content}
      </p>
    </section>
  );
}
