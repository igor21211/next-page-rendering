import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem?.image}`}
        alt={newsItem?.title ?? ""}
        width={1920}
        height={1080}
        className="object-cover"
      />
    </div>
  );
}
