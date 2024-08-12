export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "hjfunnyMC | 官方网站",
  description: "这里是 hjfunnyMC 官网，提供服务器介绍、账号管理等功能。",
  navItems: [
    {
      label: "主页",
      href: "/",
    },
    {
      label: "服务器规则",
      href: "/rules",
    },
    {
      label: "游玩游戏",
      href: "/join",
    },
  ],
  links: {
    github: "https://github.com/HJFunnyMinecraft/hjfunnyMC-Site",
  },
};
