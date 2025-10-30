import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export async function fetchData() {
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version: process.env.NODE_ENV === "development" ? "published" : "draft",
    //   // version: process.env.NODE_ENV === "development" ? "published" : "draft"
    resolve_relations: "recent_articles.articles" // Add this line
  });

  return response.data.story;
}

export default async function Home() {
  const data = await fetchData();

  // ?????
  // console.log("/////////// Fetched story:", story);
  // console.log("/////////// Fetched data:", data);

  return (
    <div>
      <StoryblokStory story={data} />
    </div>
  );
}
