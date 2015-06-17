<?php

// Header
header ( 'Content-Type: application/json;charset=utf-8' );
// json einlesen
function getBooks($typ) {
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
	if($typ == 'horror'){
		$abfrage = 'SELECT * FROM buecher WHERE genre ="' . $typ . '";';
	}else{
		$abfrage = 'SELECT * FROM buecher WHERE genre !="horror";';
	}
	// Ergebnis holen
	$ergebnis = $connection->query ( $abfrage );
	// in json parsen
	$contents = "[";
	while ( $satz = $ergebnis->fetch_assoc()) {
		$contents = $contents . '{"autor":"' . $satz ['autor']
		. '","titel":"' . $satz ['titel'] . '","kapitel":' 
		. $satz ['kapitel'] . ',"buchart":"' . $satz ['art'] 
		. '","ISBN":' . $satz ['isbn'].',"erscheinungsjahr":'.$satz['jahr']
		.',"auflage":'.$satz['auflage'].'},';
	}
	$contents = substr($contents,0,-1);
	$contents = $contents . "]";
	$connection->close();
	return $contents;
}

	echo $_GET ['bookType'];
if ($_GET ['bookType'] == 0) {
print_r ( getBooks ( 'horror' ) );
} else {
print_r ( getBooks ( 'roman' ) );
}

?>