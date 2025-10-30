/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoryblokHomeContent } from "@/src/interface";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Page(params: StoryblokHomeContent) {
  console.log("///////// 222 Page component received blocks:", params);

  return (
    <main {...storyblokEditable(params.blok)} className="w-full">
      {params.blok.blocks.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
