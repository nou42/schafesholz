function switchTable(books, index) {
	// param books: horror oder roman
	var i;
	// bereite eine Tabelle vor
	var out = "<table><tr><th>Autor</th><th>Titel</th><th>Kapitel</th>" +
			"<th>Art des Buches</th><th>ISBN</th><th>Erscheinungsjahr</th><th>Auflage</th></tr>";

	for (i = 0; i < books.length; i++) {
		// list daten von jedem Buch aus Json-Datei
		out += "<tr><td>" + books[i].autor + "</td><td>" + books[i].titel
				+ "</td><td>" + books[i].kapitel + "</td><td>"
				+ books[i].buchart + "</td><td>" + books[i].ISBN + "</td><td>"
				+ books[i].erscheinungsjahr + "</td><td>" + books[i].auflage
				+ "</td></tr>";
	}
	out += "</table>"
	// fuegt die Tabelle zu dem Platzhalter
	document.getElementById("bookTableDiv").innerHTML = out;
	
	var b = document.getElementsByTagName("input");
	for(var i = 0; i<b.length;i++){
		if(i != index){
			b[i].style.backgroundColor = "rgb(0, 162, 232)";
		}
	}
	b[index].style.backgroundColor = "rgb(63, 72, 204)";
}