
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const msg ="I'm interested !!"

    const phoneNumber = '1234567890'; 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});
