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
                    { text: "Scoping", link: "/scoping" },
                    { text: "Planning", link: "/planning" },
                    { text: "Launching/Execution", link: "/launching-execution" },
                    { text: "Monitoring e Controlling", link: "/monitoring-controlling" },
                    { text: "Closing", link: "/closing" }
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