import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default  function LatestNewsPage() {
  const newsItems =  getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList newsItems={newsItems} />
    </>
  );
}
