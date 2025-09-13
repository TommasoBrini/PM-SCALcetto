# Scoping

## Contesto

SCALcetto è un progetto nato in ambito universitario e sviluppato da tre studenti come prova finale del corso Paradigmi di Programmazione e Sviluppo, con l'obiettivo di essere messi alla prova nell'utilizzo di framework, paradigmi e pattern di programmazione avanzati. In particolare, una delle prerogative principali è stata l'adozione del linguaggio Scala e della programmazione funzionale, scelta che consente di esplorare approcci architetturali e metodologici differenti rispetto a quelli più tradizionali. 
In questa presentazione, si arricchisce di una prospettiva più ampia, che riguarda la gestione completa del ciclo di vita del software e le pratiche di project management.

Trattandosi di un progetto universitario, non esiste un vero stakeholder esterno: tutti i membri del gruppo devono saper agire contemporaneamente come stakeholder, product owner e programmatori. Questo approccio stimola la collaborazione e la condivisione della responsabilità, caratteristiche fondamentali per portare a termine con successo l'intero progetto.

Dal punto di vista tecnico, i tre studenti hanno progressivamente acquisito conoscenze ed esperienza tali da poter condurre un progetto valido non solo a livello didattico, ma anche sotto il profilo architetturale e tecnologico. L'esperienza maturata permette quindi di affrontare il ciclo di vita del software con una prospettiva professionale e con attenzione agli aspetti di qualità, affidabilità e manutenibilità del prodotto.


Oltre all'aspetto accademico, SCALcetto mira alla realizzazione di applicativo concreto, utile sia per l'analisi statistica delle partite, sia come strumento di intrattenimento. L'obiettivo ultimo è infatti dimostrare come un progetto nato in un contesto universitario possa evolvere fino a diventare un software con valore reale, potenzialmente pubblicabile e vendibile sul mercato.


## Partecipanti al progetto

| Nome                 |      Matricola       |                
|----------------------|----------------------|
| **Tommaso Brini**    | 0001125134   |
| **Mounir Samite**    | 0001234567   |
| **Emiliano Rattini** | 0001234234   |

## Scoping Meetings
La fase di scoping ha l'obiettivo di chiarire fin dall'inizio cosa realizzerà il progetto, perchè verrà sviluppato, chi sarà coinvolto, come verrà sviluppato, quali sono i vincoli, i rischi e le opportunità.

Per rispondere in maniera strutturata a tutte queste domande, prima di avviare la progettazione e l'implementazione saranno organizzati alcuni meeting dedicati, cosi da garantire a tutti i partecipanti una visione condivisa e allineata sugli obiettivi del progetto.

Nel caso di SCALcetto, la fase iniziale di scoping è stata suddivisa in tre meeting principali, ognuno con obiettivi specifici, al fine di costruire una base solida e coerente per lo sviluppo del progetto.

| #         | Titolo                                       | Obiettivi   | Deliverables|
| ----------| ---------------------------------------------| ------------ | ----------|
| Meeting I | Fondamenta del progetto                      | • Stabilire la visione del progetto identificando lo scopo, gli obiettivi e le opportunità <br> • Analizzare il mercato e i potenziali utenti <br> • Conduction Condiction of Satisfactions | • Market Analysis <br> • Condiction of Satisfactions |
| Meeting II | Struttura e analisi | • Scrivere il Project Overview Statement <br> • Analizzare i requisiti con la Requirement Breakdown Structure <br> • Analisi dei rischi e opportunità con analisi SWOT | • POS <br> • BRS <br> • SWOT| 
| Meeting III | Scelte metodologiche e organizzative | • Scegliere il PMLC più adatto <br> • Definire e assegnare i ruoli <br> • Analizzare e approvare il POS | • Decisione motivata sul PMLC <br> • SCRUM roles|


## Meeting I
In data 28/05 si è tenuto il primo meeting di progetto con l’obiettivo di definire il contesto di sviluppo e allineare il team sull’avvio delle attività. 
La sessione è stata guidata da Tommaso Brini, che ha assunto il ruolo di Project Manager pro tempore per la fase di scoping, con responsabilità di facilitazione e coordinamento per il raggiungimento degli obiettivi della riunione.
In apertura ogni partecipante ha illustrato il proprio profilo di competenze tecniche e organizzative; la valutazione congiunta ha confermato che la combinazione delle skill dei tre membri copre adeguatamente le esigenze del progetto nelle aree architetturali, tecnologiche e di processo, escludendo al momento la necessità di acquisizione di nuove risorse.
La riunione ha quindi ufficializzato l’avvio della fase di scoping e ha impostato le attività successive per la definizione dello scopo, degli obiettivi misurabili e delle condizioni di soddisfazione preliminari del progetto SCALcetto.

### Scopo
Il primo meeting ha avuto lo scopo di definire in modo chiaro e condiviso desideri, bisogni e le Conditions of Satisfaction (CoS) del progetto, stabilendo i criteri che orienteranno le decisioni nelle successive fasi di scoping e pianificazione. A supporto della definizioni delle CoS è stata svolta una breve analisi di mercato per identificare le funzionalità minime indispensabili per un applicativo utile e potenzialmente pubblicabile, in coerenza con gli obiettivi didattici e con una prospettiva di valore reale. 
Al termine della sessione, tutti i partecipanti hanno dichiarato allineamento sugli obiettivi e consapevolezza delle aspettative di progetto, consolidando una visione comune del risultato atteso e soprattutto dei vincoli iniziali.
La proposta progettuale è stata quindi presentata al docente di riferimento, prof. Mirko Viroli; a seguito di una breve call di aggiornamento, il progetto è stato approvato nella forma proposta, costituendo autorizzazione formale a procedere con le attività di scoping e pianificazione successive.

### Partecipanti

| Partecipante  | Ruolo |
| ------------  | ----- |
| Brini Tommaso | Project Manager <br> Team Member |
| Samite Mounir | Team Member |
| Rattini Emiliano | Team Member |
| prof. Viroli Mirko | Sponsor, approvatore |

### Agenda
- Introduzione del project manager
- Presentazione dei partecipanti e mappatura competenze
- Rapida analisi di mercato
- Discussione su desideri e bisogni
- Discussione su stato del progetto
- Definizione Conditions of Satisfaction (CoS)
- Allineamento finale e conclusione del project manager

### Deliverables
- [Market Analysis](allegati/01-MarketAnalysis.md)
- [Desideri e Bisogni](allegati/02-StatoProgetto.md#desideri-e-bisogni)
- [Stato del Progetto](allegati/02-StatoProgetto.md#stato-del-progetto)
- [Conditions of Satisfaction](allegati/03-CoS.md)
 

## Meeting II
In data 02/06 si è tenuto il secondo meeting del progetto, finalizzato a passare alla definizione operativa dello scopemediante la modellazione collaborativa dei requisiti e l’analisi dei rischi a supporto delle decisioni successive.
La sessione è stata facilitata dal project manager Tommaso Brini, che ha richiamato le decisioni del [Meeting 1](01-scoping#meeting-i), quali scopo condiviso, CoS, indicazioni del docente. 
I partecipanti hanno lavorato in modalità collaborativa per decomporre il prodotto in funzionalità, costruendo una vista condivisa dei processi chiave da cui è stata derivata la Requirements Breakdown Structure, raccogliendo le informazioni necessari alla successiva fase del progetto. 
Durante la riunione sono state identificate e discusse le principali incertezze tecniche e organizzative, predisponendo il registro rischi e la matrice SWOT come supporto decisionale.

### Scopo
Il secondo meeting è stato dedicato alla traduzione degli allineamenti iniziali in elementi operativi: è stata redatta una prima bozza del Project Overview Statement, che sintetizza problema e opportunità, goal, obiettivi di alto livello e criteri di successo coerenti con le [Condictions of Satisfaction](/docs/allegati/02-CoS.md). 
Subito dopo il team ha analizzato i requisiti e ne ha derivato la Requirements Breakdown Structure. La sessione ha inoltre inquadrato in modo sistematico le incertezze del progetto: sono stati identificati i principali rischi tecnici, organizzativi e di prodotto, stimandone probabilità e impatto. E' stata infine costruita una matrice SWOT che sintetizza punti di forza e debolezza interni, nonché opportunità e minacce esterne, fungendo da base per le decisioni del meeting successivo.

### Partecipanti

| Partecipante  | Ruolo |
| ------------  | ----- |
| Brini Tommaso | Project Manager <br> Team Member |
| Samite Mounir | Team Member |
| Rattini Emiliano | Team Member |

### Agenda
- Introduzione del project manager
- Analisi requisiti
- Redazione bozza POS
- Redazione RBS
- Analisi dei rischi
- Matrice SWOT
- Allineamento finale

### Deliverables
- [POS](allegati/04-POS.md)
- [RBS](allegati/05-RBS.md)
- [Risk Analysis](allegati/06-RiskAnalysis.md)
- [Matrice SWOT](allegati/06-RiskAnalysis.md#SWOT)

## Meeting III
In data 05/06 si è tenuto il terzo e ultimo meeting di scoping, focalizzato sulla scelta del modello di ciclo di vita e sulla definizione dell’assetto organizzativo per l’esecuzione del progetto sulla base degli esiti del Meeting II.
Considerato che i requisiti, pur definiti a un livello sufficiente per procedere, non sono considerati fissi e immutabili fin dall'inizio e soprattutto che l'obiettivo del prodotto è destinato a precisarsi attraverso aggiunte funzionali progressive, il gruppo ha deliberato l'adozione del modello Agile come PMLC, basandosi su rilascio incrementale di valore e feedback frequenti. 
Coerentemente con tale scelta, sono stati assegnati i ruoli Scrum e definite le regole di ingaggio.

| Partecipante     | Ruolo         | Competenze |
| ------------     | -----         | ---------- |
| Brini Tommaso    | Product Owner <br> Dev Team | • Gestione stakeholder <br> • Prioritizzazione backlog <br> • Accettazione incrementi |
| Samite Mounir    | SCRUM Master <br> DevTeam  | • Facilitazione meeting <br> • Coaching Team <br> • Gestore dei timesheet         |
| Rattini Emiliano | Stakeholder <br> DevTeam   | • Richiede funzionalità <br> • Test e verifica criteri di accettazione <br> • Feedback su UX |

Dato il carattere universitario del progetto, i ruoli assegnati ai membri del gruppo sono da intendersi come riferimento organizzativo: ogni studente potrà ricoprire, quando necessario, le diverse responsabilità previste dal framework, e tutti e tre i componenti fanno parte del Development Team

A valle della selezione del PMLC Agile e dell'assegnazione dei ruoli SCRUM, il gruppo ha riesaminato i deliverable prodotti nei meeting precedenti, introducendo gli accorgimenti opportuni. Tutti i deliverable risultano approvati e lo scoping è formalmente chiuso; il team è autorizzato a procedere con la pianificazione operativa e l'avvio delle prime iterazioni.

### Deliverables
- [POS](allegati/04-POS.md)
- [Conditions of Satisfaction](allegati/03-CoS.md)
