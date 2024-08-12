import { Snippet } from "@nextui-org/snippet";

import DefaultLayout from "@/layouts/default";
import { Shinings } from "@/components/shinings";
import Banner from "@/components/banner";
import { Servers } from "@/components/servers";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Banner />
      <section className="mx-auto max-w-6xl pt-16 px-10 space-y-5 mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-3">服务器地址</h2>
          <Snippet
            className="text-2xl"
            color="secondary"
            symbol=""
            variant="shadow"
          >
            <span style={{ fontFamily: "Mojangles" }}>mc.hjfunny.site</span>
          </Snippet>
        </div>
        <Shinings />
        <Servers />
        {/* <div className="flex flex-row justify-center mt-5 text-3xl font-extrabold">
          现在加入&nbsp;
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 text-transparent bg-clip-text">
            hjfunnyMC
          </span>
          ！
        </div> */}
      </section>
    </DefaultLayout>
  );
}
