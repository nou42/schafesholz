<?php

// Header
header ( 'Content-Type: application/json;charset=utf-8' );
// json einlesen
function getJson($jsonUrl) {
	$contents = file_get_contents ( $jsonUrl );
	
	// Fehler
	if ($contents == null) {
		echo json_last_error ();
		echo $contents;
	}
	return $contents;
}
if ($_GET ['bookType'] == '0') {
	print_r ( getJson ( 'horror_books.json' ) );
} else {
	print_r ( getJson ( 'roman_books.json' ) );
}

?>