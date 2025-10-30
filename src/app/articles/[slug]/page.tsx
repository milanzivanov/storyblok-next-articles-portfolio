import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/src/lib/storyblok";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    version: process.env.NODE_ENV === "development" ? "published" : "draft",
    content_type: "article"
  });

  return response.data.stories.map((story) => ({
    slug: story.slug as string
  }));
};

const fetchArticlePage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`articles/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "published" : "draft"
  });

  return response.data.story;
};

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const story = await fetchArticlePage((await params).slug);

  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
}
