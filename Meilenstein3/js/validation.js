function validate() {
	// setze alle Rahmen in Anfangszustand
	resetAllBorderColor();

	// gehe bei allen Eingaben durch
//	var titel = document.ourForm.titel;
//	var vorname = document.ourForm.vorname;
//	var name = document.ourForm.name;
//	var autor = document.ourForm.autor;
//	var isbn = document.ourForm.isbn;
//	var jahr = document.ourForm.jahr;
//	var auflage = document.ourForm.auflage;
//
//	if (blank(titel.value)) {
//		notification();// Pop Up Fenster
//		makeRedBorder(titel);// setze den Rahmen rot
//		titel.focus();// setze Maus Cursor in das Feld
//	} else if (!onlyLetter(autor.value)) {
//		notification();
//		makeRedBorder(autor);
//		autor.focus();
//	} else if (!onlyNumber(isbn.value) || (isbn.value.length > 13)) {
//		notification();
//		makeRedBorder(isbn);
//		isbn.focus();
//	} else if (!onlyNumber(jahr.value) || (jahr.value <= 0)
//			|| jahr.value > 2015) {
//		notification();
//		makeRedBorder(jahr);
//		jahr.focus();
//	} else if (!onlyNumber(auflage.value) || (auflage < 0) || (auflage > 100)) {
//		notification();
//		makeRedBorder(auflage);
//		auflage.focus();
//	} else if (!onlyLetter(vorname.value)) {
//		notification();
//		makeRedBorder(vorname);
//		vorname.focus();
//	} else if (!onlyLetter(name.value)) {
//		notification();
//		makeRedBorder(name);
//		name.focus();
//	} else {
//		// alles ist ok, schicke die Formular los
//		document.ourForm.submit();
//	}
}

function notification() {
	alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
}

function makeRedBorder(inputField) {

}

function resetAllBorderColor() {
    document.getElementById("dataOfBook").style.borderColor = "red";
	var fields = document.getElementsByTagName("input");
	for (var i = 0; i < fields.length; i++) {
		if (fields[i].type == "text"){
			fields[i].style.border: "thick solid #0000FF";
//			fields[i].style.borderStyle: "solid";
//			fields[i].style.borderWidth: "4px";
		}
	}
}

function onlyLetter(value) {// pruefe, ob alle Zeichen Buchstaben sind
	if (blank(value)) {
		return false;
	}
	for (var i = 0; i < value.length; i++) {
		var char = value.charAt(i);
		if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
				|| (char == 'ä') || (char == 'Ä') || (char == 'ö')
				|| (char == 'Ö') || (char == 'ü') || (char == 'Ü') || (char == 'ß'))) {
			return false;
		}
	}
	return true;
}

function onlyNumber(value) {// pruefe, ob alle Zeichen Ziffer sind
	if (blank(value)) {
		return false;
	}
	for (var i = 0; i < value.length; i++) {
		var char = value.charAt(i);
		if (!(char >= '0' && char <= '9')) {
			return false;
		}
	}
	return true;
}

function blank(value) {
	for (var i = 0; i < value.length; i++) {
		var char = value.charAt(i);
		if ((char != "") && (char != " ") && (char != "	"))
			return false;
	}
	// Wenn die Eingabe leer ist oder alle eingebenen Zeichen nur
	// Platzhalter(Leerzeichen, Tabstopp) sind, ist die Eingabe nicht gültig
	return true;
}