"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
// import { IconContext } from "react-icons";
import { AiOutlineFullscreen, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiMessageRoundedCheck } from "react-icons/bi";

// function IconWrapper({ children }: any) {
//   return (
//     <>
//       <IconContext.Provider value={{ size: "64px" }}>
//         {children}
//       </IconContext.Provider>
//     </>
//   );
// }

function ShiningsCard(props: {
  title: string;
  content: string;
  children: any;
}) {
  return (
    <Card isHoverable className="flex-1 mb-3 mr-3">
      <CardHeader>
        {/* <IconWrapper>{props.children}</IconWrapper> */}
        <h4 className="font-bold text-3xl m-0">{props.title}</h4>
      </CardHeader>
      <CardBody>
        <p className="m-0 w-[90%]">{props.content}</p>
      </CardBody>
    </Card>
  );
}

export function Shinings() {
  return (
    <div className="flex flex-col lg:flex-row mt-7">
      <ShiningsCard
        content="服务器玩法多样, 生存、建筑、小游戏……应有尽有"
        title="多元"
      >
        <AiOutlineAppstoreAdd />
      </ShiningsCard>
      <ShiningsCard content="服务器开放, 欢迎各位腐竹联合开服" title="开放">
        <AiOutlineFullscreen />
      </ShiningsCard>
      <ShiningsCard
        content="服务器支持跨服聊天, 随处与另一个服务器的玩家畅快交流, 服务器之间不再有隔阂"
        title="共生"
      >
        <BiMessageRoundedCheck />
      </ShiningsCard>
    </div>
  );
}
