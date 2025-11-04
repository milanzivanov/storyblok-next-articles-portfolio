import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slugParam = searchParams.get("slug");


  // Enable draft mode
  (await draftMode()).enable();

  // Validate slug
  if (!slugParam) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  let cleanSlug = slugParam;

  // Remove full origin if Storyblok includes it
  cleanSlug = cleanSlug.replace(/^https?:\/\/[^/]+/, "");

  // Remove leading and trailing slashes
  cleanSlug = cleanSlug.replace(/^\/+|\/+$/g, "");

  // --- Redirect to cleaned path ---
  const redirectUrl = new URL(`/${cleanSlug}`, request.url);

// TODO: Uncomment this when we have a way to test the redirect
  // return NextResponse.json({
  //   rawSlug: slugParam,
  //   cleanSlug,
  //   redirectTo: `/${cleanSlug}`
  // });

  return NextResponse.redirect(redirectUrl);
}
