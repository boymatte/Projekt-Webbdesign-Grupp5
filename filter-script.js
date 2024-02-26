document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('.filter-link');
    const produkter = document.querySelectorAll('.produkt');
  
    filterLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const filter = this.getAttribute('data-filter');
        
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