/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Link from "next/link";
import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokServerStory } from "@storyblok/react/rsc";
import RecentArticle from "../components/RecentArticle";

export async function fetchArticlesPage() {
  const client = getStoryblokApi();
  const response = await client.getStory(`articles`, {
    version: "draft"
    // starts_with: "articles/"
  });

  return response.data;
}

export async function fetchAllArticles() {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "article",
    version: process.env.NODE_ENV === "development" ? "published" : "draft"
  });

  return response.data.stories;
}

export default async function ArticlesPage() {
  const story = await fetchArticlesPage();
  const articles = await fetchAllArticles();

  // console.log("/////////// Fetched articles PAGE data:", story);
  // console.log("/////////// Fetched ALL articles data:", articles);

  return (
    <>
      <StoryblokServerStory story={story.story} />
      <section className="pt-16 pb-5 max-w-4xl mx-auto w-full px-4 bg-blue-100 rounded-md shadow my-5">
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
