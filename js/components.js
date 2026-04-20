const HotelInfo = {
  name: "Hotel Mantra",
  phone: "+919876543210", // Dummy number as fallback, can be updated
  address: "Honda chowk, near Honda company, Bhiwadi, Rajasthan",
  email: "info@hotelmantra.com"
};

const HeaderHtml = `
<header class="header">
  <div class="nav-container">
    <a href="index.html" class="logo-container">
      <svg class="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L10 85H90L50 15Z" fill="#A91D3A"/>
        <path d="M50 35L25 80H75L50 35Z" fill="#8B112D"/>
        <circle cx="50" cy="50" r="8" fill="#FDFBF7"/>
      </svg>
      <div class="logo-text">mantra<span>HOTEL</span></div>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <a href="rooms.html" class="nav-link">Rooms</a>
      <a href="dining.html" class="nav-link">Dining</a>
      <a href="contact.html" class="nav-link">Contact & Book</a>
      <a href="contact.html" class="btn btn-primary"><i class="fas fa-calendar-check"></i> Book Now</a>
    </nav>
    <button class="mobile-menu-btn" id="mobileMenuBtn">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</header>
`;

const FooterHtml = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="logo-container footer-logo">
          <svg class="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L10 85H90L50 15Z" fill="#A91D3A"/>
            <path d="M50 35L25 80H75L50 35Z" fill="#8B112D"/>
            <circle cx="50" cy="50" r="8" fill="white"/>
          </svg>
          <div class="logo-text" style="color:white">mantra<span style="color:#C69749">HOTEL</span></div>
        </div>
        <p class="footer-about">Experience luxury and homely comfort in the heart of Bhiwadi. Perfect for business travelers and families.</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-title">Quick Links</h4>
        <div class="footer-links">
          <a href="index.html" class="footer-link">Home</a>
          <a href="rooms.html" class="footer-link">Our Rooms</a>
          <a href="dining.html" class="footer-link">Dining</a>
          <a href="contact.html" class="footer-link">Contact Us</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 class="footer-title">Contact Info</h4>
        <div class="footer-contact-item">
          <i class="fas fa-map-marker-alt footer-contact-icon"></i>
          <span>${HotelInfo.address}</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-phone-alt footer-contact-icon"></i>
          <span>${HotelInfo.phone}</span>
        </div>
        <div class="footer-contact-item">
          <i class="fas fa-envelope footer-contact-icon"></i>
          <span>${HotelInfo.email}</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Hotel Mantra Bhiwadi. All rights reserved.</p>
    </div>
  </div>
</footer>
<a href="https://wa.me/${HotelInfo.phone.replace('+','')}" class="floating-wa" target="_blank" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
`;

function injectComponents() {
  const isComponentsInjected = document.getElementById('navbar-injected');
  if (isComponentsInjected) return;
  
  document.body.insertAdjacentHTML('afterbegin', HeaderHtml + '<div id="navbar-injected" style="display:none;"></div>');
  document.body.insertAdjacentHTML('beforeend', FooterHtml);
  
  // Set active link
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Mobile Menu Logic
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navLinks');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const icon = mobileBtn.querySelector('i');
      if (navMenu.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
}

// Ensure execution DOM loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectComponents);
} else {
  injectComponents();
}
