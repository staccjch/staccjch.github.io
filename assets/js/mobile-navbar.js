// Mobile Navbar Enhancement
// Ensure hamburger menu works properly on all mobile devices

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    // Add click event listener to toggle button
    navbarToggler.addEventListener('click', function() {
      // Toggle the collapsed class
      navbarToggler.classList.toggle('collapsed');
      
      // Manually toggle the collapse
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      } else {
        navbarCollapse.classList.add('show');
        navbarToggler.setAttribute('aria-expanded', 'true');
      }
    });
    
    // Close menu when clicking on nav links (for mobile)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 991.98) {
          navbarCollapse.classList.remove('show');
          navbarToggler.classList.add('collapsed');
          navbarToggler.setAttribute('aria-expanded', 'false');
        }
      });
    });
    
    // Close menu when clicking outside (for mobile)
    document.addEventListener('click', function(event) {
      if (window.innerWidth <= 991.98) {
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
          navbarCollapse.classList.remove('show');
          navbarToggler.classList.add('collapsed');
          navbarToggler.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 991.98) {
        // Reset to default state on desktop
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
