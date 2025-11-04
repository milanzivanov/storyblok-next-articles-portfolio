/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStoryblokApi } from "@/src/lib/storyblok";
import { storyblokEditable, StoryblokServerStory } from "@storyblok/react/rsc";
import RecentArticle from "../components/RecentArticle";

import { draftMode } from "next/headers";

export async function fetchArticlesPage() {

  const { isEnabled } = await draftMode();

  const client = getStoryblokApi();
  const response = await client.getStory(`articles`, {
    version: isEnabled ? "draft" : "published"
  });

  return response.data;
}

export async function fetchAllArticles() {

  const { isEnabled } = await draftMode();

  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "article",
    version: isEnabled ? "draft" : "published"
  });

  return response.data.stories;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArticlesPage() {
  const story = await fetchArticlesPage();
  const articles = await fetchAllArticles();

  // console.log("/////////// Fetched articles PAGE data:", story);
  // console.log("/////////// Fetched ALL articles data:", articles);

  return (
    <>
      <StoryblokServerStory story={story.story} />
      <section
        {...storyblokEditable(story.story.content)}
        className="pt-16 pb-5 max-w-4xl mx-auto w-full px-4 bg-blue-100 rounded-md shadow my-5"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          My articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {articles.map((article) => (
            <RecentArticle story={article as any} key={article.content._uid} />
          ))}
        </div>
      </section>
    </>
  );
}
