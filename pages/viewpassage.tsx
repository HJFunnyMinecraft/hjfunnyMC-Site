import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./viewpassage.module.css";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function ViewPassagePage() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);
  const [loadStat, setLoadStat] = useState("loading");

  useEffect(() => {
    if (id) {
      fetch(`https://mc.hjfunny.site/wp-json/wp/v2/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          setLoadStat("loaded");
          if (post) {
            document.title = `${post["title"]["rendered"]} - ${siteConfig.name}`;
          }
        })
        .catch(() => {
          setLoadStat("error");
        });
    }
  }, [id]);

  return (
    <DefaultLayout
      title={
        loadStat == "loaded" && post ? post["title"]["rendered"] : "查看文章"
      }
    >
      <section className="max-w-6xl mx-auto px-10 py-5 my-8">
        {loadStat == "loading" ? (
          <>
            <Skeleton className="rounded-lg mb-2">
              <h1 className="text-lg font-bold">Skeleton</h1>
            </Skeleton>
            <Card className="mt-5 p-5">
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
          </>
        ) : loadStat == "loaded" && post ? (
          <>
            <h1 className="text-lg font-bold mb-2">
              {post["title"]["rendered"]}
            </h1>
            <p>{String(post["date"]).replace("T", " ")}</p>
            <Card className="mt-5 p-5">
              <div
                dangerouslySetInnerHTML={{
                  __html: post["content"]["rendered"],
                }}
                className={styles.content}
              />
            </Card>
          </>
        ) : (
          <></>
        )}
      </section>
    </DefaultLayout>
  );
}
