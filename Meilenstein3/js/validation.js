function validate() {
	// setze alle Rahmen in Anfangszustand
	resetAllBorderColor();

	// gehe bei allen Eingaben durch
	var titel = document.ourForm.titel;
	var vorname = document.ourForm.vorname;
	var name = document.ourForm.name;
	var autor = document.ourForm.autor;
	var isbn = document.ourForm.isbn;
	var jahr = document.ourForm.jahr;
	var auflage = document.ourForm.auflage;

	if (blank(titel.value)) {
		// Titel darf nicht leer sein
		notification();// Pop Up Fenster
		makeRedBorder(titel);// setze den Rahmen rot
		titel.focus();// setze Maus Cursor in das Feld
	} else if (!onlyLetter(autor.value)) {
		// Buchautor besteht nur aus Buchstaben
		notification();
		makeRedBorder(autor);
		autor.focus();
	} else if (!onlyNumber(isbn.value) || (isbn.value.length > 13)) {
		// ISBN besteht nur aus max. 13 Ziffer
		notification();
		makeRedBorder(isbn);
		isbn.focus();
	} else if (!onlyNumber(jahr.value) || (jahr.value <= 0)
			|| jahr.value > 2015) {
		// Erschscheinungsjahr kann nur eine Zahl und soll realistisch sein
		notification();
		makeRedBorder(jahr);
		jahr.focus();
	} else if (!onlyNumber(auflage.value) || (auflage < 0) || (auflage > 100)) {
		// Auflage ist nur eine Zahl
		notification();
		makeRedBorder(auflage);
		auflage.focus();
	} else if (!onlyLetter(vorname.value)) {
		// Vorname besteht nur aus Buchstaben
		notification();
		makeRedBorder(vorname);
		vorname.focus();
	} else if (!onlyLetter(name.value)) {
		// Nachname besteht nur aus Buchstaben
		notification();
		makeRedBorder(name);
		name.focus();
	} else {
		// alles ist ok, schicke die Formular los
		document.ourForm.submit();
	}
}

function notification() {
	alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
}

function makeRedBorder(inputField) {
	inputField.style.outline = "solid 2px red";
}

function resetAllBorderColor() {
	document.ourForm.titel.style.outline = "none";
	document.ourForm.autor.style.outline = "none";
	document.ourForm.isbn.style.outline = "none";
	document.ourForm.jahr.style.outline = "none";
	document.ourForm.auflage.style.outline = "none";
	document.ourForm.vorname.style.outline = "none";
	document.ourForm.name.style.outline = "none";
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