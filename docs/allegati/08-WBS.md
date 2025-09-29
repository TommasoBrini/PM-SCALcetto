# Work Breakdown Structure

A partire dalla [RBS](./05-RBS.md), i requisiti di sistema vengono qui scomposti nelle attività necessarie per soddisfarli, secondo una Work Breakdown Structure. 

1. **Sviluppare un'interfaccia web facilmente utilizzabile, con focus su user experience.**
    - 1.1 Mockup e implementazione delle interfacce utente
        - 1.1.1 Implementazione schermata configurazione parametri di input
        - 1.1.2 Implementazione schermata simulazione con stato e progressi
        - 1.1.3 Implementazione schermata visualizzazione output e recap   
    - 1.2 Il sistema deve permettere di registrarsi e autenticarsi al sistema.
        - 1.2.1 Configurazione DB utenti e schema credenziali
        - 1.2.2 Implementazione API auth: registrazione, login, refresh/rotazione token
        - 1.2.3 Implementazione token di autenticazione (es. JWT) e scadenze
        - 1.2.4 Definizione regole di controllo accessi (aree pubbliche/private)
        - 1.2.5 Realizzazione dell'interfaccia grafica: form, validazioni, messaggi di errore
    - 1.3 Il sistema deve mantenere le informazioni sulle preferenza dell'utente (tattica/modulo/stile ecc..) 
        - 1.3.1 Estensione schema DB per preferenze (tattica/modulo/stile)
        - 1.3.2 Implementare persistenza e caricamento automatico ultimo contesto
        - 1.3.3 UI gestione preferenze e selezione preset
    - 1.4 Tutorial guidato alla prima simulazione
        - 1.4.1 Sviluppare contenuti tutorial: testi/video micro‑step
        - 1.4.2 Implementazione percorso guidato ala prima simulazione
        - 1.4.3 Implementazione sezione guidata con video o spiegazioni
    - 1.5 Accessibilità basilare
        - 1.5.1 Seguire le basilari direttive di UX
        - 1.5.2 Verifica contrasto e palette con color checker
        - 1.5.3 Implementazione focus states, label/aria per controlli, lettura screen reader

2. **Sviluppare un simulatore che valuti moduli e tattiche in diverse situazioni di gioco, configurando formazione, ruoli e principi.**
    - 2.1 Motore di simulazione per fasi di gioco
        - 2.1.1 Implementazione ciclo sense-decide-act della simulazione (tick engine, scheduler, gestione stato) 
        - 2.1.2 Valutazione scelte per giocatore/situazione
        - 2.1.3 Implementazione calcolo della scelta a ogni step 
        - 2.1.4 Implementazione Motore probabilistico
        - 2.1.5 Aggiunta di variabili non-deterministiche
    - 2.2 Catalogo moduli base e varianti dinamiche
        - 2.2.1 Definizione DB moduli base (4‑4‑2, 4‑3‑3, 4‑2‑3‑1, 3‑5‑2, …)
        - 2.2.2 Fornire preset di principi per modulo (ampiezza, linee, pressing)
        - 2.2.3 Implementazione Editor posizioni e zone di competenza (modellazione grafica)
    - 2.3 Ruoli, compiti e relazioni tra giocatori
        - 2.3.1 Definizione ruoli dei giocatori (P-D-C-A)
        - 2.3.2 Definizione stati di squadre (squadra in possesso, squadra in difesa)
        - 2.3.3 Definizione possibili azioni del giocatore in possesso
            <br> ■ Tiro
            <br> ■  Passaggio
            <br> ■ Dribbling
            <br> ■ Corsa
        - 2.3.4 Definizione possibili azioni dei giocatori della squadra in possesso
            <br> ■  Smarcamento
            <br> ■ Marcature preventive
            <br> ■ Manovra offensiva coordinata
            <br> ■ Corsa
        - 2.3.5 Definizione possibili azioni dei giocatori della squadra in difesa
            <br> ■ Pressing su portatore palla
            <br> ■ Tackle
            <br> ■ Intercetto
            <br> ■ Manovra difensiva coordinata
        - 2.3.6 Definizione delle marcature
        - 2.3.7 Definizione di possibili triangoli e linee di passaggio migliori
    - 2.4 Parametri scenario e contesto avversario
        - 2.4.1 Definizione Parametri squadra: intensità pressing, ampiezza/verticalità, modalità di costruzione, velocità circolazione.
        - 2.4.2 Definizione variazioni situazionali: minuto, punteggio, calcio piazzato, stanchezza.
        - 2.4.3 Definizione situazioni di default: 
            <br> ■ calcio d'angolo
            <br> ■ calcio di punizione 
            <br> ■ calcio d'inizio
            <br> ■ calcio di rigore
            <br> ■ rimessa laterale
            <br> ■ rimessa dal fondo
            <br> ■ dinamiche offensive (2vs2, 2vs1, 1vs1, ecc...)
            <br> ■ dinamiche difensive (2vs2, 1vs2, 1vs1, ecc...)
        - 2.4.4 Implementazione situazioni parametrizzabili (posizione giocatori impostabili graficamente)
        - 2.4.5 Definizione parametri avversari: modulo, altezza blocco, pressione, densità centrale/laterale, punti di forza/deboli
        - 2.4.6 Definizione condizioni esterne: fattore campo (tifo), meteo, qualità campo, grandezza campo
    - 2.5 Output tattici
        - 2.5.1 Definizione indicatori di efficacia per scenario
        - 2.5.2 raccolta eventi e sequenze chiave
        - 2.5.3 Implementazione heat/map di occupazione
    - 2.6 Confronto e reportistica
        - 2.6.1 Predisporre il confronto tra varianti tattiche con differenze percentuali
        - 2.6.2 Fornire Template di report
        - 2.6.3 Implementare l'export di PDF o immagini

3. **(PREMIUM) Funzionalità premium, simulazioni rapide**
    - 3.1 Simulazioni rapide di squadre di Serie A e B, con molteplici run
    - 3.2 Esito 1X2
    - 3.3 Mantenere più fonti per squadre e formazioni

4. **Fornire un layer grafico per visualizzare la simulazione divertente e interattivo.**
    - 4.1 Componenti grafici per visualizzazione partita
        - 4.1.1 Implementazione mappa campo con posizioni e movimenti
        - 4.1.2 Aggiornamento posizione giocatori e palla step per step
        - 4.1.3 Implementazione controlli play/pause/restart 
    - 4.2 Risultato aggiornato in tempo reale
        - 4.2.1 Aggiornamento stato punteggio e cronometro
        - 4.2.2 Implementazione notifiche evento (gol, recupero, occasione creata)
    - 4.3 Sezione statistiche con possesso palla, corner, falli ecc...
        - 4.3.1 Implementazione pannello statistiche live per scenario
        - 4.3.2 Implementazione Heatmap di occupazione
    - 4.4 Componenti grafici per visualizzare i risultati della simulazione        

5. **Organizzare e configurare i workspace con build tool adeguato e pipeline CI attiva.**
    - 5.1 Build e Test automatizzati in CI
        - 5.1.1 Configurazione DVCS e repository
            - Inizializzazione repo
            - Definizione policy, review obbligatorie
        - 5.1.2 Scelta e setup build tool
            - Configurazione build (Scala)
            - Gestione dipendenze
        - 5.1.3 Scelta strategia gitflow 
            - Naming branch e conventional commit
        - 5.1.4 Configurazione workflow per build & test
            - pipeline su PR e main
        - 5.1.5 Configurazione coverage
            - Scelta soglie minime (75%)
            - configurazione codeCov e commenti su PR
        - 5.1.6 Configurazione githooks
            - Pre-commit: format & check stile
            - Pre-push: test rapidi e controllo messaggi commit
    - 5.2 Semantic release a ogni push sul branch main.
        - 5.2.1 Configurazione workflow per release.
        - 5.2.2 Configurazione bot di release.
        - 5.2.3 Setting notifiche e badge nel README

6. **Implementare il core in Scala in stile funzionale; integrare una componente Prolog**
    - 6.1 Approfondire e implementare funzionalità avanzate del linguaggio
        - 6.1.1 Studio pre-implementazione dello standard di stile e guide FP: immutabilità, purezza, pattern matching.
        - 6.1.2 Implementazione del modello di dominio immutabile: case class/enum.
        - 6.1.3 Implementazione di typeclass/trait/mixin per estendere comportamenti
    - 6.2 Integrare una parte in Prolog
        - 6.2.1 Studio del linguaggio
        - 6.2.2 Studio del contesto
        - 6.2.3 Implementazione di un DSL
        - 6.2.4 Test d'integrazione
    - 6.3 Clean code