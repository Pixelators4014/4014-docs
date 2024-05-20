import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "4014 Docs",
  description: "Documentation for The Pixelators",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Fabrication", link: "/fabrication/overview" },
      { text: "Design", link: "/design/overview" },
      { text: "Programming", link: "/programming/overview" },
      { text: "Electrical", link: "/electrical/overview" },
      { text: "Outreach", link: "/outreach/overview" },
    ],

    sidebar: [
      {
        text: "Fabrication",
        items: [
          { text: "Overview", link: "/fabrication/overview" },
          { text: "Milling", link: "/fabrication/milling" },
          { text: "Drills", link: "/fabrication/drills" },
          { text: "Cutting Fluids", link: "/fabrication/cutting_fluids" },
          { text: "Fits", link: "/fabrication/fits" },
        ],
      },
      {
        text: "Design",
        items: [{ text: "Overview", link: "/design/overview" }],
      },
      {
        text: "Programming",
        items: [
          { text: "Overview", link: "/programming/overview" },
          { text: "Setup", link: "/programming/setup" },
          { text: "WPILib", link: "/programming/wpilib" },
          { text: "Orin", link: "/programming/orin" },
          { text: "Useful Tools", link: "/programming/useful-tools" },
        ],
      },
      {
        text: "Electrical",
        items: [{ text: "Overview", link: "/electrical/overview" }],
      },
      {
        text: "Outreach",
        items: [{ text: "Overview", link: "/outreach/overview" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Pixelators4014/docs" },
    ],

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
  },
  markdown: {
    math: true,
  },
});
