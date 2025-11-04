import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { renderRichText, StoryblokRichTextNode } from "@storyblok/react";
import { StoryblokAsset, StoryblokLink, StoryblokRichText } from "@/src/interface";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  blok: SbBlokData & {
    name: string;
    category?: string;
    body?: StoryblokRichText;
    link?: StoryblokLink;
    main_image?: StoryblokAsset;
  };
}

function getImageDimensions(filename: string): { width: number; height: number } {
  try {
    const dimensions = filename.split("/")[5]?.split("x") || [];
    return {
      width: parseInt(dimensions[0]) || 1504,
      height: parseInt(dimensions[1]) || 0,
    };
  } catch {
    return { width: 1504, height: 0 };
  }
}

export default function Article({ blok }: ArticleProps) {
  if (!blok.main_image || !blok.link) {
    return null;
  }

  const { width, height } = getImageDimensions(blok.main_image.filename);

  return (
    <main {...storyblokEditable(blok)} className="max-w-4xl mx-auto px-4 w-full pt-6 pb-12">
      <h3 className="text-3xl font-bold">
        {blok.name}
        {blok.category && <span className="text-blue-700">({blok.category})</span>}
      </h3>

      <Link href={blok.link.url}>View it</Link>
      <Image
        className="mt-2 rounded-md object-cover w-full shadow-md"
        src={blok.main_image.filename}
        alt={blok.main_image.alt}
        width={width}
        height={height}
        sizes="(max-width: 1538px) 100vw, 1504px"
        priority={true}
      />
      {blok.body && (
        <div
          className="prose md:prose-md prose-ul:m-0 prose-ul:p-0 prose-ul:list-none prose-li:m-0 prose-p:m-0 prose-img:my-2 mt-8 max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              renderRichText(blok.body as StoryblokRichTextNode, {
                resolvers: {
                  image: (node) => {
                    const attrs = node.attrs || {};
                    const imageDimensions = attrs.src
                      ? getImageDimensions(attrs.src as string)
                      : { width: 1504, height: 0 };
                    return `
                      <Image
                        src="${attrs.src}/m/1504x0/filters:quality(75)"
                        alt="${attrs.alt || ""}"
                        loading="lazy"
                        width="${imageDimensions.width}"
                        height="${imageDimensions.height}"
                      />
                    `;
                  },
                },
              }) ?? "",
          }}
        />
      )}
    </main>
  );
}
