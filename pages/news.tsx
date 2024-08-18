"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/card";

import DefaultLayout from "@/layouts/default";
import { Passage } from "@/components/wppassage";

export default function NewsPage() {
  const [passages, setPassages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mc.hjfunny.site/wp-json/wp/v2/posts?per_page=20")
      .then((response) => response.json())
      .then((data) => {
        setPassages(data);
        setLoading(false);
      });
  }, []);

  return (
    <DefaultLayout title="最近新闻">
      <section className="max-w-6xl mx-auto px-10 py-5 my-8">
        <h1 className="text-lg font-bold">最近新闻</h1>
        {loading ? (
          <Card className="mt-5 p-8">
            <Skeleton className="rounded-lg mb-2">
              <h2>Skeleton</h2>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <h2>
                Skeleton
                <br />
                Skeleton
                <br />
                Skeleton
                <br />
                Skeleton
              </h2>
            </Skeleton>
          </Card>
        ) : (
          passages.map((passage) => (
            <Passage
              key={passage["id"]}
              description={passage["excerpt"]["rendered"]}
              publishtime={passage["date"]}
              title={passage["title"]["rendered"]}
              url={`/post/${passage["slug"]}`}
            />
          ))
        )}
      </section>
    </DefaultLayout>
  );
}
