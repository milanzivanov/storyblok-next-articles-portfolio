import { RecentArticlesBlok } from "@/src/interface";
import RecentArticle from "./RecentArticle";

function RecentArticles({ blok }: { blok: RecentArticlesBlok }) {
  // console.log("///////// RecentArticles component received blok:", blok);

  return (
    <section className="max-w-4xl mx-auto w-full bg-blue-100 pt-16 pb-5 px-4 rounded-md shadow my-5">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        {blok.headline}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {blok.articles.map((article) => (
          <RecentArticle story={article} key={article.content._uid} />
        ))}
      </div>
    </section>
  );
}
export default RecentArticles;
