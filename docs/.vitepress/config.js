import { defineConfig, DefaultTheme } from "vitepress";

import { themeConfig } from "../.vuepress/config";

/**
 * @type {DefaultTheme.NavItem[]}
 */
const NavConfig = [
  { text: "主页", link: "/" },
  // { text: '开发指南', link: '/guide/', activeMatch: '^/guide/' },
  {
    text: "在线体验",
    // target: "_self",
    link: "https://console.lafyun.com/",
  },
];

/**
 * @type {DefaultTheme.MultiSideBarConfig}
 */
// console.log("themeConfig", themeConfig);

const sidebarList = themeConfig.sidebar;

const guideSiderbarConfig = () => {
  return sidebarList.map((item) => {
    return {
      text: item.title,
      items: item.children.map((childItem) => {
        return { text: childItem[1], link: "/" + childItem[0] };
      }),
    };
  });
};

export default defineConfig({
  base:'/interview/',
  lang: "zh-CN",
  title: "web前端面试",
  description: "web前端面试 - 面试官系列",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "iarjian/web-interview",
    docsBranch: "main",
    docsDir: "docs",
    footer: {
      message: "Apache License V2.0",
      copyright:
        "Copyright © 2022-present iarjian/web-interview forked from febobo/web-interview",
    },
    editLink: {
      pattern:
        "https://github.com/iarjian/web-interview/tree/master/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: "更新于",
    nav: NavConfig,
    socialLinks: [
      { icon: "github", link: "https://github.com/iarjian/web-interview" },
    ],
    sidebar: {
      "/": [
        {
          text: "介绍",
          items: [{ text: "概览", link: "/readme" }],
        },
        ...guideSiderbarConfig(),
      ],
    },
  },
});
