// import { draftMode } from "next/headers";
// import { NextRequest } from "next/server";
// import { redirect } from "next/navigation";

// export const GET = async (request: NextRequest) => {
//   const { searchParams } = new URL(request.url);
//   const slug = searchParams.get("slug") || "/";

//   if (!slug) {
//     redirect("/");
//   }

//   (await draftMode()).enable();
//   redirect(`/${slug}?${searchParams.toString()}`);
// };

//
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slugParam = searchParams.get("slug");

  console.log(" ///////////// Full request URL:", request.url);
  console.log(" ///////////// Raw slug param:", slugParam);

  // Enable draft mode
  (await draftMode()).enable();

  // Validate slug
  if (!slugParam) {
    console.warn("⚠️ Missing slug param — redirecting to home");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // --- 🧩 Clean up the slug ---
  // Handles cases like:
  // - /articles/portfolio-next-2024
  // - https://storyblok-next-articles-portfolio.vercel.app/articles/portfolio-next-2024
  // - articles/portfolio-next-2024/
  let cleanSlug = slugParam;

  // Remove full origin if Storyblok includes it
  cleanSlug = cleanSlug.replace(/^https?:\/\/[^/]+/, "");

  // Remove leading and trailing slashes
  cleanSlug = cleanSlug.replace(/^\/+|\/+$/g, "");

  console.log("✅ Cleaned slug:", cleanSlug);

  // --- Redirect to cleaned path ---
  const redirectUrl = new URL(`/${cleanSlug}`, request.url);
  console.log("➡️ Redirecting to:", redirectUrl.toString());

  // --- For debugging: return JSON response ---
  // return NextResponse.json({
  //   rawSlug: slugParam,
  //   cleanSlug,
  //   redirectTo: `/${cleanSlug}`,
  // });

  return NextResponse.redirect(redirectUrl);
}
