<?php
// Terminal: chmod 777 <Dateipfad>
// Schreib/Leserechte für PHP freigeben

// prüfen, ob alle Werte gesetzt sind
if (isset ( $_GET ['autor'] ) && isset ( $_GET ['titel'] ) 
		&& isset ( $_GET ['kapitel'] ) && isset ( $_GET ['art'] ) 
		&& isset ( $_GET ['isbn'] ) && isset ( $_GET ['jahr'] ) 
		&& isset ( $_GET ['auflage'] ) && isset ( $_GET['art'] )
		&& isset ( $_GET ['genre'] ) && isset ($_GET['name'])
		&& isset($_GET['vorname'])&&isset($_GET['favorit'])) {
	$servername = 'localhost';
	$user = 'root';
	$password = '';
	$datenbank = 'myBooks';
	
	// Verbindung aufbauen
	$connection = new mysqli ( $servername, $user, $password, $datenbank );
	// Verbindung testen
	if ($connection->connect_error) {
		die ( "Connection failed: " . $connection->connect_error );
	}
	// Abfragen formulieren
// 	$abfrage = "INSERT INTO `myBooks`.`buecher` 
// 			(`titel`, `autor`, `isbn`, `kapitel`, `jahr`, `auflage`, `art`, `genre`) 
// 			VALUES ('$_GET ['titel']', '$_GET ['autor'] ', '$_GET ['isbn']', '$_GET ['kapitel']', 
// 			'$_GET ['jahr'] ', '$_GET ['auflage']', '$_GET['art']', '', '', '');";
	$connection->close();
	echo 'gespeichert';
} else {
	echo 'Daten fehlt';
}

// Datei löschen
// unlink($my_file);
?>