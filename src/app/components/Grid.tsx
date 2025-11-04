import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

interface GridProps {
  blok: SbBlokData & {
    headline: string;
    items?: SbBlokData[];
  };
}

export default function Grid({ blok }: GridProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="max-w-4xl mx-auto w-full bg-blue-100 pt-16 pb-5 px-4 rounded-md shadow my-20"
    >
      <h2 className="text-3xl text-center md:text-3xl font-bold">
        {blok.headline}
      </h2>
      <div className="grid md:grid-flow-col auto-cols-fr mt-6 gap-8">
        {blok.items?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
}
