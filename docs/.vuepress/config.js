module.exports = {
  title: "Shuming ZHANG",
  description: "Personal homepage for mingmingisme",
  head: [["link", { rel: "icon", href: `/profile.jpg` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "GitHub", link: "https://github.com/mingmingisme" },
    ],
  }
};
