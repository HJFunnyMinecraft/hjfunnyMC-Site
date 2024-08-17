"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export function Passage(props: {
  title: string;
  description: string;
  url: string;
  publishtime: string;
}) {
  let publishtime = props.publishtime.replace("T", " ").replace("Z", "");

  return (
    <Card className="mt-5 p-1">
      <CardHeader>
        <Link href={props.url}>
          <h2
            dangerouslySetInnerHTML={{ __html: props.title }}
            className="font-bold"
          />
        </Link>
      </CardHeader>
      <CardBody>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </CardBody>
      <Divider />
      <CardFooter>
        <p>{publishtime}</p>
      </CardFooter>
    </Card>
  );
}
