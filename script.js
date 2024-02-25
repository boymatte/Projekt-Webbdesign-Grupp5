document.getElementById("Comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindra standardbeteendet (att sidan uppdateras)

    // För att bevara scrollpositionen kan du använda följande kod (endast om du vill)
    var scrollPosition = window.scrollY || window.pageYOffset;
    // Hantera inskickning av formuläret här...
    // Återställ scrollpositionen efter inskickning
    window.scrollTo(0, scrollPosition);
});