import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://pengzhendong.github.io",

  author: {
    name: "彭震东",
    url: "https://pengzhendong.github.io",
  },

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f",
  },

  fullscreen: true,
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "pengzhendong/pengzhendong.github.io",
  docsDir: "docs",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      BiliBili: "https://space.bilibili.com/45821525",
      Email: "275331498@qq.com",
      GitHub: "https://github.com/pengzhendong",
      Rss: "https://example.com",
      Weibo: "https://weibo.com/u/2407094233",
      Zhihu: "https://www.zhihu.com/people/pengzhendong",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      displayFooter: false,
      blog: {
        description: "语音工程师",
        intro: "/intro.html",
      },
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      provider: "Giscus",
      repo: "pengzhendong/giscus",
      repoId: "R_kgDOIa2zDQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIa2zDc4CSgjr",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
