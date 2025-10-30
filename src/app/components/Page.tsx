/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoryblokHomeContent } from "@/src/interface";
import {
  storyblokEditable,
  StoryblokServerComponent
} from "@storyblok/react/rsc";

export default function Page(params: StoryblokHomeContent) {
  console.log("///////// 222 Page component received blocks:", params);

  return (
    <main {...storyblokEditable(params.blok)} className="w-full">
      {params.blok.blocks.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
