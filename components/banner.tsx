import { Button } from "@nextui-org/button";
import NextLink from "next/link";

export default function Banner() {
  return (
    <section
      className="flex justify-center items-center w-full h-svh"
      style={{
        backgroundImage:
          "url(http://static.mc.hjfunny.site/imgs/hjmc3-center.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="flex flex-col items-center bg-[#FFFFFF88] backdrop-blur-lg w-auto px-[8%] py-[4%] space-y-2 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 text-transparent bg-clip-text">
          hjfunnyMC 官方网站
        </h1>
        <h2 className="font-bold">这里是 hjfunnyMC 官网，我们欢迎您的到来！</h2>
        <NextLink href={"/join"}>
          <Button className="mt-2" color="primary" size="lg">
            立即游玩
          </Button>
        </NextLink>
      </section>
    </section>
  );
}