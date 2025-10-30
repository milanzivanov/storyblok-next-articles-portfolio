/* eslint-disable @typescript-eslint/no-explicit-any */
// import { SbBlokData } from "@storyblok/react";

export interface StoryblokStoriesResponse {
  stories: StoryblokStorySummary[];
  cv: number;
  rels: any[];
  links: any[];
}

export interface StoryblokStorySummary {
  name: string;
  created_at: string;
  published_at: string | null;
  updated_at: string;
  id: number;
  uuid: string;
  content: StoryblokHomeContent;
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number | null;
  meta_data: any | null;
  group_id: string;
  first_published_at: string | null;
  release_id: number | null;
  lang: string;
  path: string | null;
  alternates: any[];
  default_full_slug: string | null;
  translated_slugs: any | null;
}

// --- Home page content structure ---

export interface StoryblokHomeContent {
  ref?: string;
  blok: {
    _uid: string;
    blocks: StoryblokBlock[];
    component: "page";
    _editable: string;
  };
}

// --- Union type for all possible block components on the home page ---

export type StoryblokBlock =
  | StoryblokHero
  | StoryblokGrid
  | RecentArticlesBlok
  | AboutBlokProps;

// --- HERO section ---

export interface StoryblokHero {
  _uid: string;
  headline: string;
  content: string;
  component: "hero";
  _editable: string;
}

// ABOUT
export interface AboutBlokProps {
  ref?: any;
  blok: {
    _uid: string;
    body: string;
    headline: string;
    component: "about";
    about_image: {
      id: number;
      alt: string;
      name: string;
      focus: string;
      title: string;
      source: string;
      filename: string;
      copyright: string;
      fieldtype: "asset";
      meta_data: Record<string, any>;
      is_external_url: boolean;
    };
    _editable: string;
  };
}

// --- GRID section (used for features or testimonials) ---

export interface StoryblokGrid {
  _uid: string;
  headline: string;
  component: "grid";
  _editable: string;
  items?: (StoryblokFeature | StoryblokTestimonial)[];
}

// --- FEATURE item ---

export interface StoryblokFeature {
  _uid: string;
  blok: {
    _uid: string;
    headline: string;
    content: string;
    component: "feature";
    _editable: string;
  };
}

// --- TESTIMONIAL item ---

export interface StoryblokTestimonial {
  _uid: string;
  blok: {
    _uid: string;
    name: string;
    comment: string;
    component: "testimonial";
    _editable: string;
    testimonial_image: {
      id: number;
      filename: string;
    };
  };
}

// --- RECENT ARTICLES block ---

export interface RecentArticlesBlok {
  _uid: string;
  component: "recent_articles";
  headline: string;
  articles: StoryblokArticle[];
  _editable?: string;
}

export interface StoryblokArticle {
  name: string;
  created_at: string;
  published_at: string | null;
  updated_at: string;
  id: number;
  uuid: string;
  content: Record<string, any>; // or a specific ArticleContent type if defined elsewhere
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number | null;
  meta_data: Record<string, any> | null;
  group_id: string;
  first_published_at: string | null;
  release_id: string | null;
  lang: string;
  path: string | null;
  alternates: any[];
  default_full_slug: string | null;
  translated_slugs: string | null;
  _stopResolving?: boolean;
}

// --- ARTICLE component ---
export interface StoryblokArticleProps {
  ref?: any;
  blok: StoryblokArticle;
}

export interface StoryblokArticle {
  _uid: string;
  component: "article";
  name: string;
  category: string;
  body: StoryblokRichText;
  link: StoryblokLink;
  main_image: StoryblokAsset;
}

// --- Richtext field (Tiptap-style structure) ---
export interface StoryblokRichText {
  type: string;
  content?: StoryblokRichTextNode[];
}

export interface StoryblokRichTextNode {
  type: string;
  text?: string;
  marks?: { type: string }[];
  content?: StoryblokRichTextNode[];
}

// --- Link field ---
export interface StoryblokLink {
  id: string;
  url: string;
  linktype: "url" | "story" | "asset";
  fieldtype: "multilink";
  cached_url?: string;
}

// --- Asset field ---
export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data?: Record<string, any>;
  is_external_url: boolean;
}
