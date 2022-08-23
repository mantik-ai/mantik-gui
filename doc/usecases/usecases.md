# Use cases für Runs, Experiments, Data, Code Ansichten

## Runs

1. Ich möchte runs vergleichen -> ich gehe in den Experiments Reiter und komme ins mlflow UI. Dort kann ich runs vergleichen
2. Ich möchte einen run reproduzieren -> Ich gehe in den Runs Reiter, bekomme dort das Tripel (Experiment, Data, Code) angezeigt und kann es daraus reproduzieren
3. Run ausführen
    1. Ich möchte einen run mit anderen Daten wiederholen -> ich bekomme das Tripel angezeigt, kann einen anderen Datensatz wählen und einen neuen run starten
    2. Ich möchte einen neuen Run starten -> Ich gehe auf den Runs Reiter, "Create new", Wähle Experiment, Code, und Daten sowie Infrastruktur aus und kann den Run starten
       (create new run müsste dafür noch in der API spezifiziert werden)

## Data

4. Ich möchte einen Datensatz evaluieren / Ich möchte wissen, mit welchem Code meine Daten verwendet werden können -> Ich gehe auf den Data Reiter. Dort bekomme ich eine Übersicht, in welchen Experimenten bzw Runs der Datensatz verwendet wurde
