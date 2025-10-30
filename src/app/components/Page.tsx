/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoryblokHomeContent } from "@/src/interface";
import {
  storyblokEditable,
  StoryblokServerComponent
} from "@storyblok/react/rsc";

export default function Page({ blok }: { blok: StoryblokHomeContent }) {
  console.log("///////// 222 Page component received blocks:", blok.blocks);

  return (
    <main {...storyblokEditable(blok as any)} className="w-full">
      {blok.blocks.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
