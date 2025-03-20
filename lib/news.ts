import sql from "better-sqlite3";

import { NewsItem } from "@/app/(content)/news/types";

const db = sql("data.db");

export async function getAllNews(): Promise<NewsItem[]> {
  const news = db.prepare("SELECT * FROM news").all();
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsItem[];
}

export async function getNewsItem(slug: string): Promise<NewsItem | null> {
  const news = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsItem;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  const news = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsItem[];
}

export async function getAvailableNewsYears() {
  const yearsSet = new Set<number>();
  const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  news.forEach((item) => {
    yearsSet.add(new Date(item.date).getFullYear());
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Array.from(yearsSet).sort((a, b) => b - a);
}

export async function getAvailableNewsMonths(year: number): Promise<number[]> {
  const months: number[] = [];
  const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  news.forEach((item) => {
    const newsYear = new Date(item.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(item.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return months.sort((a, b) => b - a);
}

export async function getNewsForYear(year: number): Promise<NewsItem[]> {
  const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news.filter((item) => new Date(item.date).getFullYear() === +year);
}

export async function getNewsForYearAndMonth(
  year: number,
  month: number
): Promise<NewsItem[]> {
  const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
  if (!news) {
    throw new Error("Failed to fetch news");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news.filter((item) => {
    const newsYear = new Date(item.date).getFullYear();
    const newsMonth = new Date(item.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
