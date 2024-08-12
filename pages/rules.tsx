import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";

export default function JoinPage() {
  return (
    <DefaultLayout>
      <section className="max-w-6xl mx-auto px-10 py-5 my-8">
        <h2 className="text-lg font-bold">服务器规则</h2>
        <p>最后更新：2024 年 8 月 12 日</p>
        <Card className="gap-4 mt-5 p-8">
          <h2 className="text-lg font-bold">hjfunnyMC 用户协议</h2>
          <p>
            1.
            您充分了解并同意，您必须为自己游戏账号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。
          </p>
          <p>
            2. <span className="font-bold">hjfunnyMC</span> 服务器提供的服务
            的规则依据中华人民共和国宪法理论上适用人群不包括 14
            岁以下的青少年以及儿童，若您已知晓以上规定，且在此年龄阶段的，如发生重大刑事案件，您必须对所发表的任何内容以及由此产生的任何后果负责。
          </p>
          <p>
            3. 您在使用 <span className="font-bold">hjfunnyMC</span>{" "}
            服务时须遵守法律法规，不得利用{" "}
            <span className="font-bold">hjfunnyMC</span> 服务
            从事违法违规行为，包括但不限于以下行为：
          </p>
          <p>
            违反中华人民共和国宪法确定的基本原则的。
            <br />
            危害国家统一、主权和领土完整的。
            <br />
            泄露国家秘密、危害国家安全或者损害国家荣誉和利益的。
            <br />
            煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的。
            <br />
            宣扬邪教、迷信的。
            <br />
            散布谣言，扰乱社会秩序，破坏社会稳定的。
            <br />
            宣扬淫秽、色情、赌博、暴力，或者教唆犯罪的。
            <br />
            侮辱、诽谤他人，侵害他人合法权益的。
            <br />
            违背社会公德的。
            <br />
            有法律、行政法规和国家规定禁止的其他内容的。
          </p>

          <p>
            4. 您在使用 <span className="font-bold">hjfunnyMC</span>
            服务过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。
          </p>

          <p>
            5. 您应避免因使用 <span className="font-bold">hjfunnyMC</span>{" "}
            服务而使 <span className="font-bold">hjfunnyMC</span>{" "}
            卷入政治和公共事件，否则{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            有权暂停或终止对您的服务的服务。
          </p>

          <p>
            6. 您在使用 <span className="font-bold">hjfunnyMC</span>{" "}
            服务过程中如有以下任何行为之一的，
            <span className="font-bold">hjfunnyMC</span>{" "}
            有权视情节严重程度，对您采取一种或多种处理措施，并可公告处理结果：
          </p>

          <p>
            6.1. 在 <span className="font-bold">hjfunnyMC</span>{" "}
            中使用、上传违法或不当词语、字符及其他内容的行为，包括用于角色命名，网络名设置，聊天，宣传其他服务器信息等。
          </p>

          <p>
            6.2. 以任何方式破坏 <span className="font-bold">hjfunnyMC</span>{" "}
            或影响 <span className="font-bold">hjfunnyMC</span>{" "}
            的正常进行，包括但不限于：
          </p>

          <p>
            6.2.1.
            在未经管理团队允许的情况下，使用假人压测、卡服机等手段或利用服务器漏洞导致游戏服务器宕机、卡顿，
            或导致其他游戏玩家掉线、延迟等无法正常游戏的行为对服务器造成任何形式的破坏，或导致服务器发生本不应发生的异常卡顿
          </p>

          <p>6.2.2. 利用游戏漏洞破坏游戏环境或给其他玩家造成不良影响的行为</p>

          <p>
            6.2.3.
            消极游戏破坏其他用户游戏体验的行为。包括但不限于恶意伤害或者语言攻击以及其他消极游戏破坏用户游戏体验的行为
          </p>

          <p>6.2.4. 游戏数据表现异常，影响游戏公平的其他行为</p>

          <p>
            6.3.
            对于任何形式的直接影响服务器玩家正常与游玩的操作，经查证后一旦证据确凿，{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            保留在未经警告的情况下对违规者进行处理的权利。若有必要，将会同时保留在发现违法违规行为后将相关证据提交至公安机关或有关部门的权利。
          </p>

          <p>
            构成影响服务器玩家正常与{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            正常运营的操作包括但不限于:
          </p>

          <p>6.3.1. 一切服务器外的货币交流（包括但不限于人民币 ¥）</p>

          <p>6.3.2. 群内或服务器内辱骂他人</p>

          <p>
            6.3.3. 使用外挂或者第三方工具影响他人正常游戏或影响服务器运行
            <span className="font-bold">
              【使用辅助类外挂（如矿透，ESP，杀戮光环，飞行等）在本服默认禁止，您可通过申请外挂测试，在单独的测试账号中获得临时权限】
            </span>
          </p>

          <p>6.3.4. 传播非法言论或不当信息</p>

          <p>6.3.5. 盗取他人游戏账号</p>

          <p>
            6.3.6. 以某种方式暗示或伪称{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            组织内部人员或某种特殊身份，企图得到不正当利益或影响其他用户权益的行为
          </p>

          <p>
            6.3.7.
            在未经过允许的情况下，以任何手段破坏、抹杀其他玩家的劳动成果（包括但不限于生电器械、建筑结构，饲养的村民与动物等）
          </p>

          <p>6.3.8. 在未经允许的情况下夺取、窃取、破坏其他玩家的资源</p>

          <p>6.3.9. 对集体或公共所有的资源进行过度取用、大量浪费或恶意破坏</p>

          <p>6.3.10. 在游戏内刷屏，影响到其他玩家正常交流</p>

          <p>
            6.3.11.
            以任何手段，恶意制造大量噪音、造成卡顿、造成生物无法生成（伪和平不包含在内，是服务器允许的）、造成生物或珍贵物品灭绝，影响其他玩家正常进行游戏
          </p>

          <p>
            6.3.12.
            以作弊手段（如外挂程序）获得非官方发放与正常游戏不能获取的特殊能力或物品（包括但不限于：在生存服务器中获得创造能力，或者获得管理员未经授权的权限等)。
          </p>

          <p>6.3.13. 违反本协议任何规定，或违反国家法律法规任何规定的行为</p>

          <p>6.4. 前款规定的处理措施包括但不限于：</p>

          <p>
            警告。
            <br />
            账户存档重置，包括但不限于重置或强制修改您提供或上传的非法昵称、账户存档等非法信息或内容等。
            <br />
            暂时或永久性地禁止您游戏账号登录{" "}
            <span className="font-bold">hjfunnyMC</span>。
            <br />
            暂停或终止您使用 <span className="font-bold">hjfunnyMC</span>{" "}
            相关服务。
          </p>

          <p>
            6.5.
            请您知悉并同意，由于外挂等作弊工具具有隐蔽性或用完后即消失等特点，{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            有权根据您的游戏数据和表现异常判断您有无使用严令禁止的作弊行为，如
            <span className="font-bold">hjfunnyMC</span>{" "}
            依据本协议对您的游戏账号内容进行检查，您有义务积极配合{" "}
            <span className="font-bold">hjfunnyMC</span> 管理人员的检查。如{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            依据本协议对您的游戏账号采取封号处理措施的，具体封号期间由{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            根据您违规行为情节而定。
          </p>

          <p>
            7. <span className="font-bold">hjfunnyMC</span> 团队将保证{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            所有服务正常运行，您可以在{" "}
            <Link href={"https://status.hjfunny.site"}>状态页面</Link>{" "}
            查看有关服务的运行状况。我们有权利对服务器进行例行维护，
            并在维护前提前告知用户。
          </p>

          <p>
            8. 在游戏过程中应同时遵守 Minecraft EULA
            中的相关规定，若您违反相关规定从而给您带来的损失{" "}
            <span className="font-bold">hjfunnyMC</span>
            将不承担任何责任。
          </p>

          <p>
            9. <span className="font-bold">hjfunnyMC</span>{" "}
            有权在必要时变更本协议条款，您可以在{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            的相关页面查阅最新版本的协议条款。本协议条款变更后，如果您继续使用{" "}
            <span className="font-bold">hjfunnyMC</span>{" "}
            服务，即视为您已接受变更后的协议。
          </p>
        </Card>
        <Card className="gap-4 mt-5 p-8">
          <h2 className="text-lg font-bold">hjfunnyMC 隐私协议</h2>
          <p>1. hjfunnyMC 在合理范围内收集以下与用户关联的数据：</p>

          <p>
            用户的 Minecraft 档案名、邮箱地址。
            <br />
            用户的 IP。
            <br />
            用户的登录信息、数据。
            <br />
            用户在服务器内的所有操作记录。
          </p>

          <p>2. hjfunnyMC 在合理范围内收集以下与用户无关的数据：</p>

          <p>用户访问服务的日志。</p>

          <p>
            3. 在必要情况下，hjfunnyMC
            有权利对用户数据进行跨境传输，您的数据将在被加密后通过网络传输。
          </p>

          <p>4. hjfunnyMC 与以下第三方服务共享与用户无关的用户数据：</p>

          <p>
            WordPress（wordpress.com）。
            <br />
            Minecraft（www.minecraft.net）。
            <br />
            SpigotMC（www.spigotmc.org）。
            <br />
            PaperMC（papermc.io）。
          </p>

          <p>
            5. hjfunnyMC
            使用以下第三方服务处理已加密的用户数据（第三方服务无法直接读取这些被加密的数据）：
          </p>

          <p>雨云（www.rainyun.com）。</p>

          <p>
            6. hjfunnyMC
            承诺将对用户的数据进行保密，除非取得用户的同意，否则不会将数据主动传输给第三方。
          </p>

          <p>
            7.
            如用户因自身原因（如密码过弱、无意泄露密码）而导致用户数据泄露，hjfunnyMC
            不负任何责任。
          </p>

          <p>
            8.
            用户有权利申请完全删除自己的用户数据，如希望这样做，可以联系任何的管理员，操作将在7个工作日内完成。
          </p>
        </Card>
        <Card className="gap-4 mt-5 p-8">
          <h2 className="text-lg font-bold">
            <Link href="https://www.minecraft.net/zh-hans/eula">
              Minecraft EULA
            </Link>
          </h2>
        </Card>
      </section>
    </DefaultLayout>
  );
}
