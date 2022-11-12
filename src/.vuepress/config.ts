import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "个人博客",
      description: "彭震东的个人博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
