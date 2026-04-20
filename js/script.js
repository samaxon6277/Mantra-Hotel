document.addEventListener('DOMContentLoaded', () => {
  // Booking Form Submission Logic
  const bookingForm = document.getElementById('whatsappBookingForm');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('guestName').value;
      const phone = document.getElementById('guestPhone').value;
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const guests = document.getElementById('guests').value;
      const roomType = document.getElementById('roomType').value;
      const remarks = document.getElementById('remarks').value;

      // Construct WhatsApp Message
      let msg = `*New Booking Inquiry - Hotel Mantra*\n\n`;
      msg += `*Name:* ${name}\n`;
      msg += `*Phone:* ${phone}\n`;
      msg += `*Check-in:* ${checkin}\n`;
      msg += `*Check-out:* ${checkout}\n`;
      msg += `*Guests:* ${guests}\n`;
      msg += `*Room Type:* ${roomType}\n`;
      if (remarks) {
        msg += `*Special Requests:* ${remarks}\n`;
      }
      msg += `\n_Please confirm availability and share payment details._`;

      const encodedMsg = encodeURIComponent(msg);
      // Hardcoded phone from components for now, stripping any spaces/+
      const wahPhone = "919876543210"; 
      
      const whatsappUrl = `https://wa.me/${wahPhone}?text=${encodedMsg}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // Set min date for checkin/checkout native pickers
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    input.setAttribute('min', today);
  });
});
