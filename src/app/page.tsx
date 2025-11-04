import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export async function fetchHomeData() {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  
  const response = await client.getStory("home", {
    version: isEnabled ? "draft" : "published",
    resolve_relations: "recent_articles.articles",
  });

  return response.data.story;
}

export default async function HomePage() {
  const story = await fetchHomeData();

  return (
    <div>
      <StoryblokStory
        story={story}
        bridgeOptions={{ resolve_relations: ["recent_articles.articles"] }}
      />
    </div>
  );
}
