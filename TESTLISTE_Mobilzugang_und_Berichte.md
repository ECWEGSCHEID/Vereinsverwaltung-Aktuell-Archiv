# EC Wegscheid – Testliste Mobilzugang und Berichte

Stand: 03.11.2026. Die folgenden Häkchen sind für deine Tests im echten System. Am besten mit eindeutig benannten Testpunkten arbeiten.

## 1. Update und Anmeldung

- [ ] Alle HTML-/JS-Dateien des Updates im GitHub-Hauptordner ersetzt/ergänzt und Seite vollständig neu geladen.
- [ ] Firebase-Regelergänzung in die bestehenden Regeln eingefügt und veröffentlicht; bisherige Regeln erhalten.
- [ ] Berechtigtes Konto am Smartphone angemeldet; keine zusätzliche Anmeldung beim Wechsel zwischen den mobilen Formularen.
- [ ] Ohne Anmeldung erscheint die Anmeldeseite. Konto ohne `vs` und ohne Adminrecht kann keine Vorstands-/Arbeitspunkte erfassen.

## 2. Neue mobile Menüaufteilung

- [ ] Erste Ebene zeigt Turnierverwaltung, Turnier/Termin anlegen, Vorstandssitzung, Arbeitseinsatz und Weitere Funktionen.
- [ ] Vereinsnachrichten und Ziel-Jahresmeisterschaft stehen nicht mehr auf der ersten Ebene.
- [ ] Weitere Funktionen enthält Vereinsnachrichten, Ziel-Jahresmeisterschaft und Interne Cup.
- [ ] Rückweg aus Nachrichten und Jahresmeisterschaft führt zur zweiten Ebene; von dort zurück zur Übersicht.
- [ ] Nachrichten speichern und Jahresmeisterschaft-Ergebnis eingeben funktionieren mit der bisherigen Berechtigung weiterhin.
- [ ] Interne Cup öffnet die vorhandene Cupauswertung; deren Berechtigungen werden weiterhin eingehalten.
- [ ] Auf dem Smartphone sind Beschriftungen, Eingaben und Buttons vollständig sichtbar und gut bedienbar.

## 3. Tagesordnungspunkt per Smartphone

- [ ] Vorstandssitzung öffnen; Titel „MOBIL-TEST Vorstand“ und eine mehrzeilige Beschreibung eingeben.
- [ ] Leerer Titel wird abgewiesen. Erfolgreiches Speichern meldet ausdrücklich die Firebase-Bestätigung.
- [ ] In der Verwaltung aktuellen Versammlungsstand laden/abgleichen, danach Mobile Punkte laden: der Testpunkt erscheint genau einmal.
- [ ] Übernehmen: der Punkt steht unter Tagesordnung der aktuellen Vorstandssitzung, und die Übernahme wird in Firebase bestätigt.
- [ ] Erneutes Laden zeigt den quittierten Punkt nicht mehr als offen. In der Sitzung steht er weiterhin nur einmal.
- [ ] Auf einem zweiten angemeldeten Gerät den Firebase-Stand laden: Punkt und Beschreibung sind vorhanden.
- [ ] Eine gesperrte Vorstandssitzung verweigert die Übernahme; der Eingangspunkt bleibt offen.

## 4. Arbeitspunkt per Smartphone

- [ ] Arbeitseinsatz öffnen und „MOBIL-TEST Arbeit“ mit Beschreibung speichern.
- [ ] In der Verwaltung Mobile Punkte laden; einen vorhandenen offenen Arbeitseinsatz auswählen.
- [ ] Ohne Zielauswahl wird nichts übernommen. Abgeschlossene Einsätze stehen nicht zur Auswahl.
- [ ] Übernehmen: Punkt steht im gewählten Einsatz mit Status Offen; Helfer lassen sich anschließend wie bisher ergänzen.
- [ ] Auf einem zweiten Gerät nach Firebase-Laden vorhanden; erneute Übernahme erzeugt keine Dublette.

## 5. Verbindungs- und Konfliktfälle

- [ ] Bei getrenntem Internet wird keine erfolgreiche Firebase-Speicherung behauptet; Smartphone-Eingaben bleiben nach Fehlermeldung stehen.
- [ ] Nach unklarer Netzwerkantwort erneut speichern: kein doppelter Eingangspunkt für dieselbe unveränderte Eingabe.
- [ ] Mobile Übernahme bei ungeklärtem Firebase-Stand wird verweigert; zuerst aktuellen Stand laden/abgleichen.
- [ ] Bei fehlgeschlagener Firebase-Sicherung bleibt ein Punkt im Eingang offen. Nach Beheben des Fehlers erneut übernehmen: keine Dublette.

## 6. Mannschaftssitzung – Teilnahmeauswertung

- [ ] Vorhandener automatisch übernommener Punkt steht jetzt unter **02 · Sportlicher Rückblick**.
- [ ] Jahresauswahl, Abwahl einzelner Termine und Spielerstatistik funktionieren weiterhin.
- [ ] Weder „Hinweis: … ausgewählte Einträge ohne Spielernamen …“ noch der Absatz „Grundlage: …“ stehen im eingefügten Berichtstext.
- [ ] Erneute Übernahme desselben Jahres ersetzt nach Bestätigung nur diesen Punkt. Andere Themen und Mannschaftsaufstellungen bleiben erhalten.
- [ ] Titel/Text lassen sich bearbeiten; Druck/PDF zeigt den Punkt unter Sportlicher Rückblick und ohne die entfernten Erläuterungen.
- [ ] Archivierte/freigegebene Sitzungen bleiben unverändert.

## 7. Bericht Schriftführer – Jahresbericht

- [ ] Unter Jahresbericht ist der neue Übernahmebutton sichtbar; Vorschau öffnet sich und lässt sich wieder schließen.
- [ ] Vereinsjahr wählen, Daten laden und einen Termin abwählen; die Vorschau zählt entsprechend neu.
- [ ] Übernahme erzeugt genau einen bearbeitbaren Punkt unter Jahresbericht.
- [ ] Vorwort, Ergebnisse und Abschlussworte sind unverändert.
- [ ] Erneute Übernahme desselben Jahres ersetzt nur den automatisch übernommenen Jahresberichtspunkt nach Bestätigung.
- [ ] Druck/PDF bzw. Word-Ausgabe zeigt die aktuelle Fassung ohne die entfernten Hinweistexte und in der bisherigen Schrift/Formatierung.
- [ ] In Firebase speichern, auf zweitem Gerät laden: Jahresberichtspunkt ist vorhanden.

## 8. Mitgeliefertes Auslosungsupdate

- [ ] 16 Mannschaften auswählbar; Auslosung ohne verlorene oder doppelte Spieler.
- [ ] Auswahl Mannschaftsnummer/gezogene Namen funktioniert; mehrere Namen sind mit „und“ verbunden.
- [ ] Bereits begonnene Cupturniere fehlen in der Auswahlliste; Übernahme in ein unbespieltes Testturnier erfolgreich.
- [ ] SKMR-Vorlage mit gleicher Gruppen-/Mannschaftszahl befüllen und speichern; Namen stimmen, Spielplan bleibt erhalten.
- [ ] Roter Carbon-Hintergrund erscheint ohne zusätzliche dunkle Maske.
- [ ] Optional nach Microsoft-Einrichtung: OneDrive-Button öffnet den Anmeldetab, Datei wird erst nach Bestätigung gespeichert und lässt sich in OneDrive finden.

## 9. Bereinigung und geschützte Spielerliste

- [ ] Frisch geöffnete Auslosung zeigt keine fest vorgegebenen Spielernamen.
- [ ] „Spielerliste aus Firebase laden“ lädt nur nach freigegebener Anmeldung; ohne Berechtigung keine Namen.
- [ ] Falls keine zentrale Liste gespeichert ist, erscheint ein Hinweis und manuelle Namenseingabe bleibt möglich.
- [ ] Nach Laden Auswahl, Mehrfachübernahme und Auslosung prüfen.
- [ ] „Spielerinnen kennzeichnen“ prüfen und vor der Moar-Auswahl passend setzen.
- [ ] appSettings/playerList lässt sich ohne Anmeldung nicht aus Firebase lesen.

## Ergebnis

- Gerät / Browser: ______________________________
- Getestetes Datum: _____________________________
- Auffälligkeiten mit Punktnummer: _______________
