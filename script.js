// script.js

// 1. Mobile Menu Logic
const menuBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// 2. Auto Active Link (Biar menu nyala sesuai halaman)
const currentPath = location.href;
document.querySelectorAll('.links a').forEach(link => {
    if(link.href === currentPath || currentPath.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

// 3. Form Validation (Syarat: No Regex)
function validateForm(e) {
    e.preventDefault(); // Stop reload
    let errors = [];
    
    // Ambil value langsung dari ID
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const topic = document.getElementById('topic').value;
    const msg = document.getElementById('msg').value;
    const agree = document.getElementById('agree').checked;

    // Logic Validasi Simpel
    if(name.length < 3) errors.push("- Name too short (min 3 chars).");
    if(!email.includes('@') || !email.includes('.')) errors.push("- Invalid email format.");
    if(isNaN(phone) || phone.length < 9) errors.push("- Phone must be number (min 9 digits).");
    if(topic === "") errors.push("- Please select a topic.");
    if(msg.length < 10) errors.push("- Message too short.");
    if(!agree) errors.push("- You must agree to Terms.");

    // Cek Error
    if(errors.length > 0) {
        alert("Please fix:\n" + errors.join("\n"));
        return false;
    }
    
    alert("Message Sent to JCI!");
    return true;
}