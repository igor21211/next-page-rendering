import { NewsItem } from "@/app/(content)/news/types";
import Link from "next/link";
import Image from "next/image";

export default function NewsList({ newsItems }: { newsItems: NewsItem[] }) {
  return (
    <ul className="news-list">
      {newsItems.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={300}
              height={300}
            />
            <h2>{newsItem.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
