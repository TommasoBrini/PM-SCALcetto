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
                    { text: "Risk Analysis", link: "/allegati/06-RiskAnalysis" },
                ]
            }    
        ]
    }
})