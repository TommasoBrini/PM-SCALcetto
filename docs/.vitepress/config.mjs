import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "PM-SCALcetto",
    description: "",
    base: "/PM-SCALcetto/",
    themeConfig: {
        sidebar: [
            { 
                text: "Report", 
                items: [
                    { text: "Contesto", link: "/introduzione" },
                    { text: "Scoping", link: "/introduzione" },
                    { text: "Planning", link: "/introduzione" },
                    { text: "Launching/Execution", link: "/introduzione" },
                    { text: "Monitoring e Controlling", link: "/introduzione" },
                    { text: "Closing", link: "/introduzione" }
                ]
            },
            {
                text: "Allegati",
                items: [
                ]
            }    
        ]
    }
})