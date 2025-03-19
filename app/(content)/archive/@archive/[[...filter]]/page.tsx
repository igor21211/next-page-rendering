import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";
import { NewsItem } from "@/app/(content)/news/types";
type Props = {
  params: Promise<{ filter: string[] }>;
};

export default async function ArchiveYearPage({ params }: Props) {
  const { filter } = await params;

  const selectedYear = filter ? parseInt(filter[0]) : undefined;
  const selectedMonth = filter ? parseInt(filter[1]) : undefined;

  let newsItems: NewsItem[] = [];
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    newsItems = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    newsItems = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found</p>;
  if (newsItems && newsItems.length > 0) {
    newsContent = <NewsList newsItems={newsItems} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear as number).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
