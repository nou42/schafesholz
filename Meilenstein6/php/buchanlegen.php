<?php
// Terminal: chmod 777 <Dateipfad>
// Schreib/Leserechte für PHP freigeben

// öffne Datei zum schreiben(anhangen)
$my_file = 'books.txt';
$handle = fopen ( $my_file, 'a' ) or die ( 'Cannot open file:  ' . $my_file );
// prüfen, ob alle Werte gesetzt sind
// schreiben alle Werte in die externe Datei
if (isset ( $_GET ['autor'] ) && isset ( $_GET ['titel'] ) && isset ( $_GET ['kapitel'] ) 
		&& isset ( $_GET ['art'] ) && isset ( $_GET ['isbn'] ) 
		&& isset ( $_GET ['jahr'] ) && isset ( $_GET ['auflage'] )) {
	fwrite ( $handle, $_GET ['autor'] . ', ' );
	fwrite ( $handle, $_GET ['titel'] . ', ' );
	fwrite ( $handle, $_GET ['kapitel'] . ' Kapitel, ' );
	fwrite ( $handle, $_GET ['art'] . ', ' );
	fwrite ( $handle, $_GET ['isbn'] . ', ' );
	fwrite ( $handle, $_GET ['jahr'] . ', ' );
	fwrite ( $handle, $_GET ['auflage'] . ".Auflage;\n" );
	echo 'gespeichert';
} else {
	echo 'Daten fehlt';
}

// Datei löschen
// unlink($my_file);
?>