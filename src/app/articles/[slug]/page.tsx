import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: "published",
    content_type: "article",
  });

  return response.data.stories.map((story) => ({
    slug: story.slug,
  }));
};

async function fetchArticlePage(slug: string) {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  
  const response = await client.getStory(`articles/${slug}`, {
    version: isEnabled ? "draft" : "published",
  });

  return response.data.story;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const story = await fetchArticlePage((await params).slug);

  return (
    <div>
      <StoryblokStory
        story={story}
        bridgeOptions={{ resolve_relations: ["recent_articles.articles"] }}
      />
    </div>
  );
}
