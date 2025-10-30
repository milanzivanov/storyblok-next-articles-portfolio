import { StoryblokArticle } from "@/src/interface";
import Image from "next/image";
import Link from "next/link";

interface RecentArticleProps {
  story: StoryblokArticle;
}

function RecentArticle({ story }: RecentArticleProps) {
  return (
    <article className="max-w-5xl mx-auto bg-white rounded-sm shadow">
      <Image
        className="aspect-video object-cover w-full rounded-md p-2"
        src={story.content.main_image.filename}
        width={600}
        height={338}
        alt={story.content.main_image.alt || "Article Image"}
        loading="lazy"
        quality={70}
      />

      <div className="p-5">
        <div className="flex gap-2 justify-between text-lg font-bold">
          <h3>{story.content.name}</h3>
        </div>
        <Link
          className="font-bold text-xs mt-2 block underline"
          href={`/${story.full_slug}`}
        >
          View article
        </Link>
      </div>
    </article>
  );
}

export default RecentArticle;
