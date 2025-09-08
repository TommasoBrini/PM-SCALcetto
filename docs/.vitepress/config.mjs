import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "PM-SCALcetto",
    description: "",
    base: "/PM-SCALcetto/",
    themeConfig: {
        sidebar: [
            { text: "Introduzione", link: "/introduzione" },
            { text: "Report", link: "/report" }
        ]
    }
})