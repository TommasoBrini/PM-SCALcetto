# Work Breakdown Structure

A partire dalla [RBS](./05-RBS.md), i requisiti di sistema vengono qui scomposti nelle attività necessarie per soddisfarli, secondo una Work Breakdown Structure. 

1. **Sviluppare un'interfaccia web facilmente utilizzabile, con focus su user experience.**
    - Mockup delle interfacce utente
        - Schermata configurazione parametri di input
        - Schermata simulazione con stato e progressi
        - Schermata visualizzazione output e recap   
    - Il sistema deve permettere di registrarsi e autenticarsi al sistema.
        - Configurazione DB utenti e schema credenziali
        - API auth: registrazione, login, refresh/rotazione token
        - Implementazione token di autenticazione (es. JWT) e scadenze
        - Regole di controllo accessi (aree pubbliche/private)
        - Realizzazione dell'interfaccia grafica: form, validazioni, messaggi di errore
    - Il sistema deve mantenere le informazioni sulle preferenza dell'utente (tattica/modulo/stile ecc..) 
        - Estensione schema DB per preferenze (tattica/modulo/stile)
        - Persistenza e caricamento automatico ultimo contesto
        - UI gestione preferenze e selezione preset
    - Tutorial guidato alla prima simulazione
        - Contenuti tutorial: testi/video micro‑step
        - Implementazione percorso guidato ala prima simulazione
        - Sezione guidata con video o spiegazioni
    - Accessibilità basilare
        - seguire le basilari direttive di UX
        - Verifica contrasto e palette con color checker
        - Focus states, label/aria per controlli, lettura screen reader

2. **Sviluppare un simulatore che valuti moduli e tattiche in diverse situazioni di gioco, configurando formazione, ruoli e principi.**
    - Motore di simulazione per fasi di gioco
        - Ciclo sense-decide-act della simulazione (tick engine, scheduler, gestione stato) 
        - Valutazione scelte per giocatore/situazione
        - Calcolo della scelta a ogni step 
        - Motore probabilistico
        - Aggiunta di variabili non-deterministiche
    - Catalogo moduli base e varianti dinamiche
        - DB moduli base (4‑4‑2, 4‑3‑3, 4‑2‑3‑1, 3‑5‑2, …)
        - Preset di principi per modulo (ampiezza, linee, pressing)
        - Editor posizioni e zone di competenza (modellazione grafica)
    - Ruoli, compiti e relazioni tra giocatori
        - Definizione ruoli dei giocatori (P-D-C-A)
        - Definizione stati di squadre (squadra in possesso, squadra in difesa)
        - Definizioni possibili azioni del giocatore in possesso
            - Tiro
            - Passaggio
            - Dribbling
            - Corsa
        - Definizione possibili azioni dei giocatori della squadra in possesso
            - Smarcamento
            - Marcature preventive
            - Manovra offensiva coordinata
            - Corsa
        - Definizione possibili azioni dei giocatori della squadra in difesa
            - Pressing su portatore palla
            - Tackle
            - Intercetto
            - Manovra difensiva coordinata
        - Definizione delle marcature
        - Definizione di possibili triangoli e linee di passaggio migliori
    - Parametri scenario e contesto avversario
        - Parametri squadra: intensità pressing, ampiezza/verticalità, modalità di costruzione, velocità circolazione.
        - Variazioni situazionali: minuto, punteggio, calcio piazzato, stanchezza.
        - Parametri avversari: modulo, altezza blocco, pressione, densità centrale/laterale, punti di forza/deboli
        - Condizioni esterne: fattore campo (tifo), meteo, qualità campo, grandezza campo
    - Output tattici
        - indicatori di efficacia per scenario
        - raccolta eventi e sequenze chiave
        - heat/map di occupazione
    - Confronto e reportistica
        - confronto tra varianti tattiche con differenze percentuali
        - Spiegabilità
        - Template di report
        - Export di PDF o immagini

3. **(PREMIUM) Funzionalità premium, simulazioni rapide**
    - Simulazioni rapide di squadre di Serie A e B, con molteplici run
    - Esito 1X2
    - Mantenere più fonti per squadre e formazioni

4. **Fornire un layer grafico per visualizzare la simulazione divertente e interattivo.**
    - Componenti grafici per visualizzazione partita
        - Mappa campo con posizioni e movimenti
        - Aggiornamento posizione giocatori e palla step per step
        - Controlli play/pause/restart 
    - Risultato aggiornato in tempo reale
        - Stato punteggio e cronometro
        - Notifiche evento (gol, recupero, occasione creata)
    - Sezione statistiche con possesso palla, corner, falli ecc...
        - Pannello statistiche live per scenario
        - Heatmap di occupazione
        - Riepilogo finale
    - Componenti grafici per visualizzare i risultati della simulazione        

5. **Organizzare e configurare i workspace con build tool adeguato e pipeline CI attiva.**
    - Build e Test automatizzati in CI
        - Configurazione DVCS e repository
            - Inizializzazione repo
            - policy, review obbligatorie
        - Scelta e setup build tool
            - Configurazione build (Scala)
            - Gestione dipendenze
        - Strategia gitflow 
            - Naming branch e conventional commit
        - Configurazione workflow per build & test
            - pipeline su PR e main
        - Configurazione coverage
            - Scelta soglie minime (75%)
            - configurazione codeCov e commenti su PR
        - Configurazione githooks
            - Pre-commit: format & check stile
            - Pre-push: test rapidi e controllo messaggi commit
    - Semantic release a ogni push sul branch main.
        - Configurazione workflow per release.
        - Configurazione bot di release.
        - Notifiche e badge nel README

6. **Implementare il core in Scala in stile funzionale; integrare una componente Prolog**
    <br> 6.1. Approfondire e implementare funzionalità avanzate del linguaggio (monadi, mixin, ecc..)
    <br> 6.2. Integrare una parte in Prolog
    <br> 6.3. Clean code