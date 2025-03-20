import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

type NewsDetailPageProps = {
  params: { slug: string };
};

export const generateMetadata = async ({ params }: NewsDetailPageProps) => {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);
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

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);
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
