# Project Overview Statement

## Opportunità
Una breve analisi di mercato ha riscontrato l'esistenza di uno spazio per un simulatore che consenta di analizzare partite di calcio o singoli scenari di esse, utile a tifosi, creator e match analyst. Un simulatore simile può essere molto valido per pianificare la propria strategia di gioco.
Il perimetro è coerente con i vincoli accademici di tempo e tecnologia, rendendo realistico un rilascio iniziale credibile e utile.

## Scopo del progetto
Rilasciare in 2 mesi una prima versione funzionante che consenta di valutare moduli, principi di gioco e varianti tattiche in specifiche situazioni, configurando formazione, ruoli e contesto avversario, con visualizzazioni chiare e interattive. Per ogni situazione di gioco, il simulatore aiuta a individuare la giocata/azione che ha più probabilità di raggiungere il proprio obiettivo (fare gol se squadra in attacco, recuperare palla se squadra in difesa). 
<br>(**Premium**) Simulazione rapida: possibilità di simulare partite di Serie A e di Serie B reali selezionando le squadre dal database aggiornato, con esito 1X2.

## Obiettivi
- Sviluppare un'interfaccia web facilmente utilizzabile, con focus su user experience.
- Sviluppare un simulatore che fornisca analisi tattica per fasi e situazioni, configurando formazione e modulo.
- Fornire un layer grafico per visualizzare la simulazione divertente e interattivo.
- Organizzare e configurare i workspace con build tool adeguato e pipeline CI attiva: build e test automatizzati su ogni commit; generazione jar e semantic release su tag
- Implementare il core in Scala in stile funzionale, adottando immutabilità, funzioni pure e composizione; integrare una componente Prolog per la logica dedicata, con test di integrazione
- Garantire prestazioni percepite fluide e comprensione massima degli output
- (**Premium**) Mantenere dataset aggiornato settimanalmente, con periodo di forma e storico recente delle squadre.

## Acceptance Criteria
- Release installabile e valida entro 17/07/2025
- Copertura dei test di almeno 80%
- I costi del progetto trascurabili nella fase iniziale
- Voto massimo per il corso universitario (30, con possibile lode)
- Il tempo delle simulazioni automatiche non deve sforare i 2 minuti

## Rischi
- Il team non ha esperienza nella progettazione e sviluppo di progetti in linguaggio Scala e funzionali
- Il team ha limitata esperienza riguardo l'utilizzo di tecnologie e strumenti per la continuous integration.
 Altri possibili rischi sono trattati meglio nell'allegato [Risk Analysis](07-RiskAnalysis.md)
