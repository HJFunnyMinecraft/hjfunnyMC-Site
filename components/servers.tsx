"use client";
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

function ServerCard(props: {
  title: string;
  content: string;
  image: string;
  color: string;
}) {
  return (
    <Card>
      <CardHeader
        className="flex flex-col absolute z-10 top-1 items-start"
        style={{ color: props.color, textShadow: "0 0 5px #999999" }}
      >
        <h4 className="font-bold text-lg">{props.title}</h4>
        <p>{props.content}</p>
      </CardHeader>
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover"
        height={340}
        src={props.image}
      />
    </Card>
  );
}

export function Servers() {
  return (
    <>
      <ServerCard
        color="#EEEEEE"
        content="hjfunnyMC 群组服务器的核心。它是 hjfunnyMC 群组服务器中活跃玩家最多、开服历史最久的服务器，拥有相对完善的生电设施。"
        image="http://static.mc.hjfunny.site/imgs/hjmc3-railsys.png"
        title="hjMC 生电服务器"
      />
      <ServerCard
        color="#333333"
        content="在这个 1.8.9 版本的小游戏中，你将保护自己的床，同时破坏敌人的床。策略、技巧和团队合作缺一不可。收集资源，购买装备，升级能力，成为最后的胜者！"
        image="http://static.mc.hjfunny.site/imgs/bedwars-rushmode.png"
        title="Bedwars 起床战争服务器"
      />
      <ServerCard
        color="#333333"
        content="这个服务器拥有独特主世界地图——一幅巨大的平面投影世界地图，真实还原了世界的地形地貌。从壮丽的喜马拉雅山脉到广袤的亚马逊雨林，从繁华的都市到遥远的海岛，探索这个熟悉又陌生的世界。在这里，你可以选择在世界上任何一个地区进行建设，甚至是……学习地理！"
        image="http://static.mc.hjfunny.site/imgs/earth-beijing.png"
        title="Earth 世界服务器"
      />
      <ServerCard
        color="#EEEEEE"
        content="这里有各种精彩纷呈的小游戏等你体验。在刺激的密室杀手中，你可能是神秘的杀手、机智的侦探或是谨慎的平民。跑酷挑战则考验你的跑酷技巧。我们会不定期推出新的小游戏，带来源源不断的乐趣。"
        image="http://static.mc.hjfunny.site/imgs/minigames-towerfall.png"
        title="Minigames 小游戏服"
      />
    </>
  );
}
