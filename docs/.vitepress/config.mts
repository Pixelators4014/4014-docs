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
          { text: "Drill Size", link: "/fabrication/drill_size" },
          { text: "Hole Size", link: "/fabrication/hole_size" },
          { text: "Screw Size", link: "/fabrication/screw_size" },
          { text: "Drilling Fluid", link: "/fabrication/drilling_fluid" },
          { text: "Milling Fluid", link: "/fabrication/milling_fluid" },
          { text: "Fits", link: "/fabrication/fits" },
          { text: "Workholding", link: "/fabrication/workholding" },
        ],
      },
      {
        text: "Design",
        items: [
          { text: "Overview", link: "/design/overview" },
          { text: "Fusion Basics - Design", link: "/design/fusion_basics" },
          { text: "Parts We Use", link: "/design/parts_to_use" },
          { text: "Useful CAD Models", link: "/design/ez_cad_things" },
        ],
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
  // markdown: {
  //   math: true,
  // },
});
