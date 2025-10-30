import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@/src/app/components/Page";
import Feature from "@/src/app/components/Feature";
import Grid from "@/src/app/components/Grid";
import Article from "../app/components/Article";
import Hero from "../app/components/Hero";
import RecentArticles from "../app/components/RecentArticles";
import Testimonial from "../app/components/Testimonial";
import About from "../app/components/About";

// const cachedFetch = (
//   input: RequestInfo | URL,
//   init?: RequestInit
// ): Promise<Response> => {
//   return fetch(input, {
//     ...init,
//     cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache"
//   });
// };

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN || "",
  use: [apiPlugin],
  components: {
    // Register your components here if needed
    page: Page,
    hero: Hero,
    about: About,
    article: Article,
    feature: Feature,
    grid: Grid,
    recent_articles: RecentArticles,
    testimonial: Testimonial
  },
  enableFallbackComponent: true,
  apiOptions: {
    region: "eu"
    // fetch: cachedFetch
  }
});
