import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface FeatureProps {
  blok: SbBlokData & {
    headline: string;
    content?: string;
  };
}

export default function Feature({ blok }: FeatureProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <h3 className="font-bold text-xl">{blok.headline}</h3>
      {blok.content && <p className="mt-6 text-sm">{blok.content}</p>}
    </div>
  );
}
