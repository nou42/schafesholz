function myFunction() {
 switchBooks(horror);
	 
}

function switchBooks(books){
    var i;
    var out = "<table>";

    for(i = 0; i < books.length; i++) {
        out += "<tr><td>" +
        books[i].autor +
        "</td><td>" +
        books[i].titel +
        "</td><td>" +
        books[i].kapitel+
        "</td><td>" +
        books[i].buchart +
        "</td><td>" +
        books[i].ISBN +
        "</td><td>" +
        books[i].erscheinungsjahr +
        "</td><td>" +
        books[i].auflage +
        "</td></tr>";
    }
    out += "</table>"
    document.getElementById("id01").innerHTML = out;
}