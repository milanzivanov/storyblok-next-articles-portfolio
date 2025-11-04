// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { StoryblokHomeContent } from "@/src/interface";
import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

interface PageProps {
  blok: SbBlokData & {
    body?: SbBlokData[];
    blocks?: SbBlokData[];
  };
}

export default function Page({ blok }: PageProps) {
  const blocks = blok.body || blok.blocks || [];
  
  return (
    <main {...storyblokEditable(blok)} className="w-full">
      {blocks.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}

// old way
// export default function Page(params: StoryblokHomeContent) {
//   // console.log("///////// 222 Page component received blocks:", params);

//   return (
//     <main {...storyblokEditable(params.blok)} className="w-full">
//       {params.blok.blocks.map((nestedBlok: any) => (
//         <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
//       ))}
//     </main>
//   );
// }
