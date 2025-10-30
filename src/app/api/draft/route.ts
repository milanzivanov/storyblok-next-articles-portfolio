import { draftMode } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "/";

  if (!slug) {
    redirect("/");
  }

  (await draftMode()).enable();
  redirect(`/${slug}?${searchParams.toString()}`);
};

//
// import { draftMode } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const slug = searchParams.get("slug");

//   // Enable draft mode
//   (await draftMode()).enable();

//   // Validate slug
//   if (!slug) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Remove leading and trailing slashes
//   const cleanSlug = slug.replace(/^\/+|\/+$/g, "");

//   // Redirect to the path
//   return NextResponse.redirect(new URL(`/${cleanSlug}`, request.url));
// }
