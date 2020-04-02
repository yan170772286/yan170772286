module.exports = {
  title: "YanYan",
  description: "Yan's blog",
  editLinks: true,
  sidebarDepth: 3,
  markdown: {
    linkify: true
  },
  themeConfig: {
    editLinks: true,
    docsDir: "docs",
    sidebar: [
      {
        title: "HTML",
        collapsable: true,
        path: '/html/script', 
        children: [
          {
            title: "abc",
            collapsable: false,
            children: [
              { title: "Japanese", path: "/html/script2" }
            ]
          }
        ]
      },
      {
        title: "Setup",
        collapsable: false,
        children: [
          "/highlighting",
          "/snippet",
          "/emmet",
          "/linting-error",
          "/formatting",
          "/intellisense",
          "/debugging",
          "/framework",
          "/interpolation",
          "/vti"
        ]
      },
      "/FAQ",
      "/CONTRIBUTING",
      "/roadmap",
      "/CHANGELOG",
      "/credits"
    ]
  }
};
