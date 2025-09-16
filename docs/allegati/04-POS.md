# Project Overview Statement

## Opportunità
Una breve analisi di mercato ha riscontrato l'esistenza di uno spazio per un simulatore di match calcistici focalizzati su Serie A e Serie B, capace di trasformare dati e formazioni in scenari probabilistici rapidi e utili a tifosi, creator e match analyst.
Il perimetro è coerente con i vincoli accademici di tempo e tecnologia, rendendo realistico un rilascio iniziale credibile e utile.

## Scopo del progetto
Rilasciare in 2 mesi una prima versione funzionante che permetta di simulare partite di Serie A/B con output probabilistici chiari su statistiche selezionate e garantendo una esperienza d'uso semplice, fluida e immediata.

## Obiettivi
- Sviluppare un'interfaccia web facilmente utilizzabile, con focus su user experience.
- Sviluppare un simulatore che fornisca analisi del match con esito 1X2, configurando formazione e modulo.
- Mantenere dataset aggiornato settimanalmente, con periodo di forma e storico recente delle squadre.
- Fornire un layer grafico per visualizzare la simulazione divertente e interattivo.
- Organizzare e configurare i workspace con build tool adeguato e pipeline CI attiva: build e test automatizzati su ogni commit; generazione jar e automatic release su tag
- Implementare il core in Scala in stile funzionale, adottando immutabilità, funzioni pure e composizione; integrare una componente Prolog per la logica dedicata, con test di integrazione
- Garantire prestazioni percepite fluide e comprensione massima degli output

## Acceptance Criteria
- Release installabile e valida entro 17/07/2025
- Copertura dei test di almeno 80%
- I costi del progetto trascurabili nella fase iniziale
- Voto massimo per il corso universitario (30, con possibile lode)
- Il tempo delle simulazioni automatiche non deve sforare i 2 minuti

## Rischi
- Il team non ha esperienza nella progettazione e sviluppo di progetti in linguaggio Scala e funzionali
- Il team ha limitata esperienza riguardo l'utilizzo di tecnologie e strumenti per la continuous integration.
 Altri possibili rischi sono trattati meglio nell'allegato [Risk Analysis](06-RiskAnalysis.md)
