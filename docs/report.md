# Report del progetto

## Scopo e Obiettivi
- Scopo: realizzare un simulatore di partite di calcio che consenta:
  - analisi statistiche su scenari specifici;
  - simulazioni end‑to‑end con interazioni tra giocatori.
- Obiettivi (SMART):
  - O1: prototipo giocabile con simulazione completa entro [data esame].
  - O2: modulo di analisi con almeno N scenari predefiniti e tempi di esecuzione < X ms/scenario.
  - O3: test coverage ≥ Y% sui moduli core.
  - O4: documentazione utente e tecnica minima (readme + guida rapida).

## Ambito ad alto livello
- In‑scope: motore di simulazione, modello di giocatori/azioni, scenari statistici, CLI/runner base, report dei risultati.
- Out‑of‑scope: grafica avanzata, multiplayer online, integrazioni esterne non didattiche, persistency oltre file locali.

## Stakeholder e Ruoli
- Product Owner: [Nome]
- Scrum Master: [Nome]
- Development Team: Brini Tommaso, Mounir Samite, Emiliano Rattini
- Docenti/Commissione: stakeholder chiave per approvazione finale.

## Criteri di Successo e KPI
- Demo funzionante con scenario completo.
- Stabilità: tasso di fallimento run < 2% su 50 esecuzioni.
- Qualità: test coverage ≥ Y%, lint 0 errori bloccanti.
- Performance: simulazione standard < Z secondi.

## Vincoli e Assunzioni
- Vincoli: uso di Scala; tempistiche accademiche; toolchain disponibile su ambiente universitario.
- Assunzioni: requisiti incrementali definiti sprint‑by‑sprint; disponibilità minima del team per sprint.

## Rischi Iniziali (alto livello)
- Requisiti emergenti e scope creep → backlog grooming e definition of done.
- Curva di apprendimento Scala/FP → spike tecnici all’inizio.
- Performance del motore di simulazione → profili e ottimizzazioni mirate.

## Metodologia e Governance
- Framework: SCRUM (sprint di 1–2 settimane).
- Cerimonie: planning, daily, review, retrospective.
- Artefatti: product backlog, sprint backlog, increment, burndown.
- Definition of Done: codice compilato, test passati, documentazione minima aggiornata.
