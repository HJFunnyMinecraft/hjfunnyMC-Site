"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    async function fetchData() {
      fetch("/login-check", { mode: "no-cors", method: "get" })
        .then((response) => response.json())
        .then((data: { login: boolean }) => {
          setLogin(data.login);
          // console.log("用户登陆状态", data);
        });
      // .catch((e) => {
      // console.error(e);
      // console.warn("Navbar可能无法正常工作!");
      // });
    }
    fetchData();
  });

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">hjfunnyMC</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-2">
          <Link className="hidden sm:inline-flex" href="/2anniversary">
            <span className="font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              两周年庆
            </span>
          </Link>
          <Link
            isExternal
            aria-label="Github"
            className="hidden sm:inline-flex"
            href={siteConfig.links.github}
          >
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          {isLogin ? (
            <Button
              color="primary"
              variant="ghost"
              onClick={() => (window.location.href = "/me")}
            >
              用户中心
            </Button>
          ) : (
            <>
              <Button
                color="primary"
                variant="ghost"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                登录
              </Button>
              <Button
                color="success"
                variant="ghost"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                注册
              </Button>
            </>
          )}
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
