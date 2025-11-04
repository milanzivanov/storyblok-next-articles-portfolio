//
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slugParam = searchParams.get("slug");

  // console.log(" ///////////// Full request URL:", request.url);
  // console.log(" ///////////// Raw slug param:", slugParam);

  // Enable draft mode
  (await draftMode()).enable();

  // Validate slug
  if (!slugParam) {
    // console.warn("⚠️ Missing slug param — redirecting to home");
    return NextResponse.redirect(new URL("/", request.url));
  }

  let cleanSlug = slugParam;

  // Remove full origin if Storyblok includes it
  cleanSlug = cleanSlug.replace(/^https?:\/\/[^/]+/, "");

  // Remove leading and trailing slashes
  cleanSlug = cleanSlug.replace(/^\/+|\/+$/g, "");

  // console.log("✅ Cleaned slug:", cleanSlug);

  // --- Redirect to cleaned path ---
  const redirectUrl = new URL(`/${cleanSlug}`, request.url);
  // console.log("➡️ Redirecting to:", redirectUrl.toString());

// TODO: Uncomment this when we have a way to test the redirect
  // return NextResponse.json({
  //   rawSlug: slugParam,
  //   cleanSlug,
  //   redirectTo: `/${cleanSlug}`
  // });

  return NextResponse.redirect(redirectUrl);
}
