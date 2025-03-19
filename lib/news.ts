import { NewsItem } from "@/app/(content)/news/types";
import { DUMMY_NEWS } from "@/dummy-news";

export function getAllNews(): NewsItem[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): NewsItem[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  const yearsSet = new Set<number>();
  DUMMY_NEWS.forEach((news) => {
    yearsSet.add(new Date(news.date).getFullYear());
  });
  return Array.from(yearsSet).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  const months: number[] = [];
  DUMMY_NEWS.forEach((news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
  });
  return months.sort((a, b) => b - a);
}

export function getNewsForYear(year: number): NewsItem[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(
  year: number,
  month: number
): NewsItem[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
