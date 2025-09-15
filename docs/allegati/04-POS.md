# Project Overview Statement

## Opportunità
Una breve analisi di mercato ha riscontrato l'esistenza di uno spazio per un simulatore di match calcistici focalizzati su Serie A e Serie B, capace di trasformare dati e formazioni in scenari probabilistici rapidi e utili a tifosi, creator e match analyst.
Il perimetro è coerente con i vincoli accademici di tempo e tecnologia, rendendo realistico un rilascio iniziale credibile e utile.

## Scopo del progetto
Rilasciare in 2 mesi una prima versione funzionante che permetta di simulare partite di Serie A/B con output probabilistici chiari su statistiche selezionate e garantendo una esperienza d'uso semplice, fluida e immediata.

## Obiettivi
- Organizzare e configurare i workspace con build tool adeguato e pipeline CI attiva: build, test e analisi automatizzati su ogni commit; generazione jar e automatic release su tag
- Implementare il core in Scala in stile funzionale, adottando immutabilità, funzioni pure e composizione; integrare una componente Prolog per la logica dedicata, con test di integrazione
- Fornire simulazione del match con esiti 1X2, formazione, modulo, condizione, fattore campo e dataset aggiornato settimanalmente.
- Garantire prestazioni percepite fluide e comprensione massima dei risultati

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
