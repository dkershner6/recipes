// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Kershner Recipes",
    tagline: "Kershner Family Recipes",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://recipes.dkershner.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                blog: {
                    blogTitle: "Kershner Recipes",
                    blogDescription:
                        "Kershner Family Recipes, almost always keto",
                    blogSidebarCount: 10,
                    blogSidebarTitle: "Recent Recipes",
                    routeBasePath: "recipes",
                    path: "./recipes",
                    showReadingTime: true,
                    editUrl: "https://github.com/dkershner6/recipes",
                },
                docs: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Kershner Recipes",
                logo: {
                    alt: "Recipes",
                    src: "img/pot.png",
                },
                items: [
                    {
                        position: "left",
                        label: "Recipes",
                        items: [
                            {
                                label: "All Recipes",
                                to: "/recipes",
                            },
                        ],
                    },
                    {
                        href: "https://github.com/dkershner6/recipes",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Recipes",
                        items: [
                            {
                                label: "All Recipes",
                                to: "/recipes",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} The Kershners`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    plugins: [
        [
            "@cmfcmf/docusaurus-search-local",
            {
                indexBlog: true,
                indexDocs: false,
            },
        ],
    ],
};

module.exports = config;
