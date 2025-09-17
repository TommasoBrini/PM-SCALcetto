# Requirements Breakdown Structure (RBS)

A partire dagli obiettivi definiti nel POS, vengono esplosi i requisiti del sistema nel formato di una Requirements Breakdown Structure.

1. **Sviluppare un'interfaccia web facilmente utilizzabile, con focus su user experience.**
  <br>  1.1. Mockup delle interfacce utente
  <br>  1.2. Il sistema deve permettere di registrarsi e autenticarsi al sistema.
  <br>  1.3. Il sistema deve mantenere le informazioni sull'utente riguardo i propri interessi salvati (squadra preferita/modulo ecc..) 
  <br>  1.4. Tutorial guidato alla prima simulazione
  <br>  1.5. Schermata unica per selezione match, formazione, modulo e fattore campo.
  <br>  1.6. Accessibilità basilare
  <br>  1.7. Preferenze utente: salvataggio preset scenario e ultimo contesto aperto

2. **Sviluppare un simulatore che fornisca analisi del match con esito 1X2, configurando formazione e modulo.**
    <br>  2.1. Selezione competizione e match (Serie A/B)
    <br>  2.2. Configurazione formazione titolare e panchina
    <br>  2.3. Scelta del modulo tattico
    <br>  2.4. Parametri scenario aggiuntivi: fattore campo, forma recente, assenze chiave
    <br>  2.5. Motore probabilistico 1X2 con numero di run configurabile

3. **Mantenere dataset aggiornato settimanalmente, con periodo di forma e storico recente delle squadre.**
    <br> 3.1. Mantenere più fonti per squadre e formazioni

4. **Fornire un layer grafico per visualizzare la simulazione divertente e interattivo.**
    <br> 4.1. Componenti grafici per visualizzazione partita
    <br> 4.2. Risultato aggiornato in tempo reale a ogni goal.
    <br> 4.3. Sezione statistiche con possesso palla, corner, falli ecc...
    <br> 4.4. Componenti grafici per visualizzare i risultati della simulazione

5. **Organizzare e configurare i workspace con build tool adeguato e pipeline CI attiva.**
    <br> 5.1. Build e Test automatizzati in CI
    <br> 5.2. Semantic release a ogni push sul branch main

6. **Implementare il core in Scala in stile funzionale; integrare una componente Prolog**
    <br> 6.1. Approfondire e implementare funzionalità avanzate del linguaggio (monadi, mixin, ecc..)
    <br> 6.2. Integrare una parte in Prolog
    <br> 6.3. Clean code

![Requirement Breakdown Structure](../resources/RBS.png)