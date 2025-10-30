import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export async function fetchData() {
  // draft mode
  const { isEnabled } = await draftMode();

  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "published"
        : "draft",
    resolve_relations: "recent_articles.articles"
  });

  return response.data.story;
}

export default async function Home() {
  console.log(
    "Draft mode is",
    (await draftMode()).isEnabled ? "enabled" : "disabled"
  );

  const data = await fetchData();

  // ?????
  // console.log("/////////// Fetched story:", story);
  // console.log("/////////// Fetched data:", data);

  return (
    <div>
      <StoryblokStory
        bridgeOptions={{ resolve_relations: "recent_articles.articles" }}
        story={data}
      />
    </div>
  );
}
