"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem?.image}`}
            alt={newsItem?.title ?? ""}
            width={1920}
            height={1080}
          />
        </div>
      </dialog>
    </>
  );
}
