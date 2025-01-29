import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Math and Physics",
  description: "College level cheatsheets",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Cheetsheets", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Precalculus", link: "/precalculus" },
          { text: "Calculus", link: "/calculus" },
          { text: "Physics", link: "/physics" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/apmcx" }],
  },
  markdown: {
    math: true,
  },
});
