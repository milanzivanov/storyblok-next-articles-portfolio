import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export async function fetchHomeData() {
  // draft mode
  const { isEnabled } = await draftMode();
  console.log("Draft mode is", isEnabled ? "enabled" : "disabled");

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

export default async function HomePage() {
  const data = await fetchHomeData();

  return (
    <div>
      <StoryblokStory
        bridgeOptions={{ resolve_relations: ["recent_articles.articles"] }}
        story={data}
      />
    </div>
  );
}
