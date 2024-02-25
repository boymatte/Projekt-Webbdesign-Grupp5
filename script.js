document.getElementById("Comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindra standardbeteendet (att sidan uppdateras)

    // För att bevara scrollpositionen kan du använda följande kod (endast om du vill)
    var scrollPosition = window.scrollY || window.pageYOffset;
    // Hantera inskickning av formuläret här...
    // Återställ scrollpositionen efter inskickning
    window.scrollTo(0, scrollPosition);
});

document.addEventListener("DOMContentLoaded", function() {
  const filterLinks = document.querySelectorAll('.filter-link');
  const produkter = document.querySelectorAll('.produkt');

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const filter = this.getAttribute('data-filter');

      // Visa endast produkter som matchar filtret, eller visa alla om filtret är "all"
      produkter.forEach(produkt => {
        if (filter === 'all' || produkt.classList.contains(filter)) {
          produkt.style.display = 'block';
        } else {
          produkt.style.display = 'none';
        }
      });
    });
  });
});
