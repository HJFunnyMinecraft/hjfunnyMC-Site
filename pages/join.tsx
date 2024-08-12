import NextLink from "next/link";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Snippet } from "@nextui-org/snippet";

import DefaultLayout from "@/layouts/default";

export default function JoinPage() {
  return (
    <DefaultLayout>
      <section className="max-w-6xl mx-auto px-10 py-5 my-8">
        <h2 className="text-lg font-bold">游玩游戏</h2>
        <Card className="container gap-4 mt-5 p-8">
          <p>首先, 您需要点击下方链接注册账号并加入QQ群。</p>
          <div>
            <NextLink href={"/register"}>
              <Button className="mr-3" color="primary" variant="ghost">
                注册账号
              </Button>
            </NextLink>
            <NextLink
              href={
                "https://qm.qq.com/cgi-bin/qm/qr?k=-l6F_4v1HU1Xyk01Gu_kD7d2mc2eKO1L&jump_from=webapi&authKey=wgXsOUYz0lvwCzcHc7FWBSgCbGx4rIeW8Gd4EcxcrPOiI6isHRm3kGVvuZWzpwOE"
              }
            >
              <Button className="mr-3" color="primary" variant="ghost">
                加入 QQ 群
              </Button>
            </NextLink>
          </div>
          <p>（或使用群号：799512425）</p>
          <p>注意：</p>
          <p>
            1. 用户名即为 Minecraft 档案名
            <br />
            2. 注册后不可修改用户名，如需删除账户请联系管理员
            <br />
            3. 同一 IP 只能注册 3 个账户
          </p>
        </Card>
        <Tabs aria-label="Options" className="mt-5">
          <Tab key="java" title="Java 版">
            <Card className="p-8 gap-4">
              <p>请使用如下地址，并尝试连接：</p>
              <Snippet symbol="">mc.hjfunny.site</Snippet>
              <p>无法连接？尝试上方“备用方式”。</p>
            </Card>
          </Tab>
          <Tab key="java-back" title="Java 版（备用方式）">
            <Card className="p-8 gap-4">
              <p>
                如果您无法使用普通方式连接到服务器，可能是您的网络不支持 SRV
                记录。
              </p>
              <p>请尝试直接连接服务器：</p>
              <Snippet symbol="">play.hjfunny.site:20038</Snippet>
              <p>如果您仍然无法使用该地址连接，请联系管理员。</p>
            </Card>
          </Tab>
          <Tab key="bedrock" title="基岩版">
            <Card className="p-8 gap-4">
              <Card className="p-4 gap-2 ">
                <p className="font-bold">提示：</p>
                <p>
                  我们使用 Geyser 将 Java
                  服务器转为基岩版可连接的服务器，因此服务器内所有机制均为 Java
                  版而不是基岩版。
                </p>
                <p>Geyser 服务可能不稳定，如无法连接请联系管理员。</p>
              </Card>
              <p>请使用如下连接信息：</p>
              <section className="flex space-x-2">
                <Snippet symbol="地址">mcbe.hjfunny.site</Snippet>
                <Snippet symbol="端口">15036</Snippet>
              </section>
            </Card>
          </Tab>
        </Tabs>
        <h2 className="text-lg font-bold">申请白名单</h2>
        <Card className="container gap-4 mt-5 p-8">
          <p>为了防止服务器内被恶意破坏，hjMC 子服务器已开启白名单机制。</p>
          <p>如需要申请白名单请加入上方 QQ 群并联系管理员了解详情。</p>
        </Card>
      </section>
    </DefaultLayout>
  );
}
