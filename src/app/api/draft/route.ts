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
