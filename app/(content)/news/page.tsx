import { NewsItem } from "./types";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  const newsItems: NewsItem[] = DUMMY_NEWS;
  return (
    <>
      <h1>The News Page</h1>
      <NewsList newsItems={newsItems} />
    </>
  );
}
