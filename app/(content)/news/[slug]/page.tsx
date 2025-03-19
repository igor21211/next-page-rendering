import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type NewsDetailPageProps = {
  params: { slug: string };
};

export const generateMetadata = async ({ params }: NewsDetailPageProps) => {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) {
    return notFound();
  }
  return {
    title: newsItem.title,
    description: newsItem.content,
    openGraph: {
      images: [
        {
          url: `/images/news/${newsItem?.image}`,
        },
      ],
    },
  };
};

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem?.slug}/image`}>
          <Image
            src={`/images/news/${newsItem?.image}`}
            alt={newsItem?.title ?? ""}
            width={300}
            height={300}
          />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}
