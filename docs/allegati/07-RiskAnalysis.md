# Risk Analysis

A seguito dell'analisi dei rischi, il team ha individuato i potenziali punti che potrebbero compromettere il raggiungimento degli obiettivi di progetto.

I rischi individuati sono stati cosi classificati:

|ID | Rischio                                | Categoria | Probabilità | Impatto |
|---|--------                                | --------- | ----------- | ------- |
| 1 | Mancata qualità per via di bassa esperienza su Scala/FP | Qualità | Alta| Alta |
|2  | Limitata esperienza CI/CD e debito tecnico | Qualità/Strumenti| Media/Alta | Media/Alta|
|3  | Tempo disponibile ridotto rispetto alla complessità del progetto|Tempo| Media | Alta |
|4  | Utilità percepita inferiore rispetto ai competitor | Mercato| Bassa/Media|Medio-Alta|
|5  | Incertezza requisiti e possibile deriva di scope| Requisiti| Bassa | Media |
|6| Rischi d’integrazione della componente Prolog | Tecnico | Media | Bassa |
|7  | Assenze studenti per altri impegni accademici| Risorse | Bassa | Media/Alta|
|8  | Performance non adeguate di simulatore o UI| Qualità   | Bassa | Bassa-Media |

## Matrice dei rischi
<svg viewBox="0 0 640 460" width="100%" height="auto" style="max-width:760px;border:1px solid #e5e7eb;background:#ffffff">
  <!-- sfondo quadranti -->
  <rect x="0" y="0" width="640" height="230" fill="#eef2ff"></rect>
  <rect x="0" y="230" width="640" height="230" fill="#f8fafc"></rect>
  <line x1="0" y1="230" x2="640" y2="230" stroke="#c7d2fe" />
  <line x1="320" y1="0" x2="320" y2="460" stroke="#c7d2fe" />

  <!-- titoli/assi -->
  <text x="320" y="448" text-anchor="middle" font-size="12" fill="#374151">Impatto</text>
  <text x="-10" y="230" transform="rotate(-90,16,230)" font-size="12" fill="#374151">Probabilità</text>

  <!-- etichette guida -->
  <text x="12" y="20" font-size="11" fill="#6b7280">Alta</text>
  <text x="12" y="440" font-size="11" fill="#6b7280">Bassa</text>
  <text x="36" y="432" font-size="11" fill="#6b7280">Basso</text>
  <text x="596" y="432" font-size="11" fill="#6b7280">Alto</text>

  <!-- NOTE POSIZIONI
       Impatto:   Bassa=120, Bassa/Media=220, Media=320, Medio-Alta=460, Alta=560
       Probabilità: Alta=90, Media=250, Bassa/Media=310, Bassa=370
  -->

  <!-- R1: Prob=Alta, Imp=Alta -->
  <circle cx="560" cy="90" r="6" fill="#111827"></circle>
  <text x="560" y="78" font-size="12" text-anchor="middle">R1</text>

  <!-- R2: Prob=Media/Alta ≈ tra Media e Alta -> 170; Imp=Media/Alta -> 460 -->
  <circle cx="460" cy="140" r="6" fill="#111827"></circle>
  <text x="460" y="128" font-size="12" text-anchor="middle">R2</text>

  <!-- R3: Prob=Media, Imp=Alta -->
  <circle cx="560" cy="250" r="6" fill="#111827"></circle>
  <text x="560" y="238" font-size="12" text-anchor="middle">R3</text>

  <!-- R4: Prob=Bassa/Media, Imp=Medio-Alta -->
  <circle cx="460" cy="310" r="6" fill="#111827"></circle>
  <text x="460" y="298" font-size="12" text-anchor="middle">R4</text>

  <!-- R5: Prob=Bassa, Imp=Media -->
  <circle cx="320" cy="370" r="6" fill="#111827"></circle>
  <text x="320" y="358" font-size="12" text-anchor="middle">R5</text>

  <!-- R6: Prob=Media, Imp=Bassa -->
  <circle cx="120" cy="250" r="6" fill="#111827"></circle>
  <text x="120" y="238" font-size="12" text-anchor="middle">R6</text>

  <!-- R7: Prob=Bassa, Imp=Media/Alta -->
  <circle cx="460" cy="370" r="6" fill="#111827"></circle>
  <text x="460" y="358" font-size="12" text-anchor="middle">R7</text>

  <!-- R8: Prob=Bassa, Imp=Bassa-Media -->
  <circle cx="220" cy="370" r="6" fill="#111827"></circle>
  <text x="220" y="358" font-size="12" text-anchor="middle">R8</text>
</svg>

Per ogni rischio individuato, è stata scelta la rispettiva gestione

R1 -> **Mitigate** -> Milestone M1 "Studio e formazione" obbligatoria 
<br> R2 -> **Mitigate** -> Setup del progetto con CI/CD obbligatorie, Milestone M2
<br> R3 -> **Accept**
<br> R4 -> **Accept**
<br> R5 -> **Accept**
<br> R6 -> **Accept**
<br> R7 -> **Mitigate** -> Ogni studente si impegna di occupare il periodo stabilito esclusivamente su questo progetto, rimandando altri esami e impegni, al netto di imprevisti.
<br> R8 -> **Accept**