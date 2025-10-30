import { StoryblokArticle } from "@/src/interface";
import { renderRichText, StoryblokRichTextNode } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

function Article({ blok }: { blok: StoryblokArticle }) {
  // console.log("///////// article page ", blok);

  return (
    <main className="max-w-4xl mx-auto px-4 w-full pt-6 pb-12">
      <h3 className="text-3xl font-bold">
        {blok.name}
        <span className="text-blue-700">({blok.category})</span>
      </h3>

      <Link href={blok.link.url}>View it</Link>
      <Image
        className="mt-2 rounded-md object-cover w-full shadow-md"
        src={blok.main_image.filename}
        alt={blok.main_image.alt}
        width={+blok.main_image.filename.split("/")[5].split("x")[0]}
        height={+blok.main_image.filename.split("/")[5].split("x")[1]}
        sizes="(max-width: 1538px) 100vw, 1504px"
        priority={true}
      />
      <div
        className="prose md:prose-md prose-ul:m-0 prose-ul:p-0 prose-ul:list-none prose-li:m-0 prose-p:m-0 prose-img:my-2 mt-8 max-w-none"
        dangerouslySetInnerHTML={{
          __html:
            renderRichText(blok.body as StoryblokRichTextNode, {
              resolvers: {
                image: (node) => {
                  const attrs = node.attrs || {};
                  return `
                        <Image
                          src="${attrs.src}/m/1504x0/filters:quality(75)"
                          alt="${attrs.alt || ""}"
                          loading="lazy"
                          width="${attrs.src.split("/")[5].split("x")[0]}"
                          height="${attrs.src.split("/")[5].split("x")[1]}"
                        />
                      `;
                }
              }
            }) ?? ""
        }}
      ></div>
    </main>
  );
}
export default Article;
