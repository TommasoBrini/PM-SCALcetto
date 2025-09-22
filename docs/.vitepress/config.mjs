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
                    { text: "Stato Progetto", link: "/allegati/02-StatoProgetto" },
                    { text: "Conditions of Satisfaction", link: "/allegati/03-CoS" },
                    { text: "POS", link: "/allegati/04-POS" },
                    { text: "RBS", link: "/allegati/05-RBS" },
                    { text: "SWOT", link: "/allegati/06-SWOT" },
                    { text: "Risk Analysis", link: "/allegati/07-RiskAnalysis" },
                    { text: "WBS", link: "/allegati/08-WBS" },
                    { text: "Stima dei costi", link: "/allegati/09-StimaCosti" },
                    { text: "PND", link: "/allegati/10-PND" },
                    { text: "Gantt", link: "/allegati/11-Gantt" },
                ]
            }    
        ]
    }
})