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
                    { text: "Scoping", link: "/01-scoping" },
                    { text: "Planning", link: "/02-planning" },
                    { text: "Launching/Execution", link: "/03-launching-execution" },
                    { text: "Monitoring e Controlling", link: "/04-monitoring-controlling" },
                    { text: "Closing", link: "/05-closing" }
                ]
            },
            {
                text: "Allegati",
                items: [
                    { text: "Market Analysis", link: "/allegati/01-MarketAnalysis" },
                    { text: "CoS", link: "/allegati/02-CoS" },
                ]
            }    
        ]
    }
})