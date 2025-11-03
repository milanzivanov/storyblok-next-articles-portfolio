/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoryblokFeature } from "@/src/interface";
import { storyblokEditable } from "@storyblok/react";

const Feature = (params: StoryblokFeature) => {
  // console.log("Feature component params:", params);

  return (
    <div
      {...storyblokEditable(params.blok as any)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <h3 className="font-bold text-xl">{params.blok.headline}</h3>
      <p className="mt-6 text-sm">{params.blok.content}</p>
    </div>
  );
};

export default Feature;
