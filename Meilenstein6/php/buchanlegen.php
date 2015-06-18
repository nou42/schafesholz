<?php
// Terminal: chmod 777 <Dateipfad>
// Schreib/Leserechte für PHP freigeben
function validate(){
	// Validierung
	$validate = true;
	if (!isset ( $_GET ['autor'] ) ||! preg_match ( "/^[A-Za-züöäÜÖÄß. ]+$/", $_GET ['autor'] )) {
		$validate = false;
		echo 'Eingabe "Autor" ungültig<br>';
	}
	if (!isset ( $_GET ['titel'] ) || empty($_GET ['titel'] ) || preg_match ( "/^[ ]+$/", $_GET ['titel'] )) {
		$validate = false;
		echo 'Eingabe "Titel" ungültig<br>';
	}
	if (!isset ( $_GET ['kapitel'] ) ||! preg_match ( "/^[0-9]+$/", $_GET ['kapitel'] )) {
		$validate = false;
		echo 'Eingabe "Kapitel" ungültig<br>';
	}
	if (!isset ( $_GET ['isbn'] ) ||! preg_match ( "/^[0-9]{13}$/", $_GET ['isbn'] )) {
		$validate = false;
		echo 'Eingabe "ISBN" ungültig<br>';
	}
	if (!isset ( $_GET ['jahr'] ) ||! preg_match ( "/^[0-9]{4}$/", $_GET ['jahr'] )) {
		$validate = false;
		echo 'Eingabe "Jahr" ungültig<br>';
	}
	if (!isset ( $_GET ['auflage'] ) ||! preg_match ( "/^[0-9]+$/", $_GET ['auflage'] )) {
		$validate = false;
		echo 'Eingabe "Auflage" ungültig<br>';
	}
	if (!isset ( $_GET ['genre'] )) {
		$validate = false;
		echo 'Wählen Sie ein Genre aus<br>';
	}
	if (!isset ( $_GET ['name'] ) ||! preg_match ( "/^[A-Za-z.üöäÜÖÄß]+$/", $_GET ['name'] )) {
		$validate = false;
		echo 'Eingabe "Nachname" ungültig<br>';
	}
	if (!isset ( $_GET ['vorname'] )||! preg_match ( "/^[A-Za-z.üöäÜÖÄß]+$/", $_GET ['vorname'] )) {
		$validate = false;
		echo 'Eingabe "Vorname" ungültig<br>';
	}
		return $validate;
}
// prüfen, ob alle Werte gesetzt sind
if (validate()){
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
	// Eintrag speichern
	$abfrage = "INSERT INTO `myBooks`.`eintraege` (`name`, `vorname`, `isbn`, `favorit`) VALUES
			('".$_GET['name']."', '".$_GET['vorname']."', '".$_GET['isbn']."', '".isset($_GET['favorit'])."');";
	// Buch anlegen
	$abfrage .= "INSERT INTO `myBooks`.`buecher` 
			(`titel`, `autor`, `isbn`, `kapitel`, `jahr`, `auflage`, `art`, `genre`) 
			VALUES ('".$_GET ['titel']."', '".$_GET ['autor']." ', '".$_GET ['isbn']."', '".$_GET ['kapitel']."', 
			'".$_GET ['jahr']." ', '".$_GET ['auflage']."', '".$_GET ['art']."', '".$_GET ['genre']."');";
	// Query ausführen
	if ($connection->multi_query ( $abfrage ) === TRUE) {
		echo "Daten gespeichert";
	} else {
		// ein User dasselbe Buch mehrmals abspeichert
		if($connection->error == "Duplicate entry 'Müller-Tina-9783442482320' for key 'PRIMARY'")
			echo "Es ist nicht möglich, dass ein User mit demselben Vor- und Nachnamen dasselbe Buch
			mehrmals abspeichert (unabhängig ob er es als Favorit markiert oder nicht).<br>";
		echo "Fehler: " . $connection->error;
	}
	// schließt die Datenbank
	$connection->close();
}

?>