"use client";

import { getStoryblokApi } from "@/src/lib/storyblok";

export default function StoryblokProvider({
  children
}: {
  children: React.ReactNode;
}) {
  getStoryblokApi();
  return <>{children}</>;
}
