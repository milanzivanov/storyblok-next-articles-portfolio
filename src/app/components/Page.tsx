/* eslint-disable @typescript-eslint/no-explicit-any */
// import { StoryblokComponent } from "@storyblok/react";
import { StoryblokHomeContent } from "@/src/interface";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
// import { StoryblokStoriesResponse } from "@/src/interface";

export default function Page({ blok }: { blok: StoryblokHomeContent }) {
  // console.log("///////// 222 Page component received blocks:", blok);

  return (
    <main>
      {blok.blocks.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
