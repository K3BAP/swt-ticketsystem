# Anforderungsanalyse

## User Stories

### NutzerIn
- Als unregelmäßige/r NutzerIn möchte ich ein Ticket für eine bestimmte Strecke kaufen können, damit ich mich nicht genauer mit dem Tarifplan auseinandersetzen muss.
- Als regelmäßige/r NutzerIn möchte ich meine Tickets als Favoriten markieren können, damit ich sie später schneller kaufen kann.
- Als NutzerIn möchte ich die Möglichkeit haben, Zeitkarten online zu kaufen, damit ich nicht so viel Geld mit in den Bus nehmen muss.
- Als NutzerIn möchte ich bestehende Abonnements importieren können, damit ich diese später online verwalten kann.

### AdministratorIn
- Als AdministratorIn möchte ich neue Tarife anlegen können, damit diese dann für die NutzerInnen verfügbar sind.
- Als AdministratorIn möchte ich bequem und schnell die Preise bestehender Tarife anpassen können, damit ich meine Arbeitszeit effektiver nutzen kann.


## Use cases
### NutzerIn kauft Einzelticket
- NutzerIn möchte am Abend in die Stadt fahren und sich dafür im Voraus ein Ticket kaufen.
- NutzerIn ruft Webseite der SWT auf.
- System zeigt Eingabemaske (Start, Ziel und Uhrzeit), um eine Verbindung zu suchen.
- NutzerIn gibt die Daten ein und klickt auf "Suchen".
- System zeigt passende Verbindungen mit Mindestpreis an. Außerdem wird für jede Verbindung die Option "Jetzt kaufen" angezeigt.
- NutzerIn wählt eine Verbindung und klickt auf die Schaltfläche "Jetzt kaufen"
- System zeigt Formular: Textfeld für den Vor- und Nachnamen sowie E-Mail-Adresse, Auswahlmöglichkeit für Zahlungsart, Checkbox für die AGB.
- NutzerIn gibt Daten ein, klickt auf "weiter".
- Weiterleitung zum Zahlungsdienstleister
- System zeigt Bestätigung des Kaufs an, Ticket wird per Mail versendet.


### AdministratorIn fügt neuen Tarif hinzu
- AdministratorIn wird vom Management angewiesen, das 49-Euro-Ticket als neuen Tarif hinzuzufügen.
- AdministratorIn ruft das entsprechende Portal auf und meldet sich an.
- System zeigt eine Übersicht der vorhandenen Tarife in einer Tabelle an. Außerdem gibt es eine Menüleiste, die verschiedene Möglichkeiten zum Ändern und Erstellen von Tarifen bietet.
- AdministratorIn klickt in der Menüleiste auf "Neuer Tarif"
- System zeigt ein Menü, in dem man zwischen "Zeitkarten" und "Streckenkarten" auswählen kann.
- AdministratorIn wählt "Zeitkarten"
- System zeigt ein Formular, das die nötigen Daten abfragt: Name des Tarifs, Gültigkeitsdauer, Tarifzonen, Preis, ...
- AdministratorIn gibt die Daten ein und klickt auf "Speichern".