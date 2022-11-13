import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/posts/" },
  { text: "书单", icon: "read", link: "/books/" },
  {
    text: "文档",
    icon: "edit",
    prefix: "https://pengzhendong.github.io/docs/",
    children: [
      { text: "语音识别", link: "" },
      { text: "语音合成", link: "" },
    ],
  },
]);
