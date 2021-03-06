var books;
function setTable(){
	// bereite eine Tabelle vor
	var i;
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

}
function setButtonColor(bookType){
	var b = document.getElementsByTagName("input");
	for(var i = 0; i<b.length;i++){
		if(i != bookType){
			b[i].style.backgroundColor = "rgb(0, 162, 232)";
		}
	}
	b[bookType].style.backgroundColor = "rgb(63, 72, 204)";
}

function getBooks(bookType){
    var xmlhttp = null;
    // Mozilla
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", 'php/getBooks.php?bookType='+bookType);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	books = JSON.parse(xmlhttp.responseText);
            setTable(bookType);
        	setButtonColor(bookType);
        }
    }
    xmlhttp.send(null);
}