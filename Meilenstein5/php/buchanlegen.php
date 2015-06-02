<?php
// Terminal: chmod 777 <Dateipfad>
// Schreib/Leserechte für PHP freigeben

// öffne Datei zum schreiben(anhangen)
$my_file = 'books.txt';
$handle = fopen ( $my_file, 'a' ) or die ( 'Cannot open file:  ' . $my_file );
// prüfen, ob alle Werte gesetzt sind, hier nicht, da es clientseitig ausgeführt wird wegen Internet Transfer
// schreiben alle Werte in die externe Datei
fwrite($handle,$_GET['autor'].', ');
fwrite($handle,$_GET['titel'].', ');
fwrite($handle,$_GET['kapitel'].' Kapitel, ');
fwrite($handle,$_GET['art'].', ');
fwrite($handle,$_GET['isbn'].', ');
fwrite($handle,$_GET['jahr'].', ');
fwrite($handle,$_GET['auflage'].".Auflage;\n");

// Datei löschen
// unlink($my_file);
?>