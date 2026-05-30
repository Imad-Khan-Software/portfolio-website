// --- Typing Effect ---
// Isme aapke roles automatically type honge
const texts = ["am Imad Khan", "am a Frontend Developer","am a Problem Solver", "will be a Data Analyst", "will be a Freelancer","will be a Software Engineer"];
let count = 0, index = 0, isDeleting = false;

function type() {
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;

    let currentText = texts[count];

    // Character add ya remove karne ka logic
    typingElement.textContent = isDeleting
        ? currentText.slice(0, --index)
        : currentText.slice(0, ++index);

    let speed = isDeleting ? 50 : 120;

    // Jab poora word type ho jaye
    if (!isDeleting && index === currentText.length) {
        speed = 400; // Word khatam hone par thora wait
        isDeleting = true;
    }
    // Jab word poora delete ho jaye
    else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        speed = 300;
    }
    setTimeout(type, speed);
}

// --- Theme Management (Light/Dark Mode) ---
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    const btn = document.querySelector(".theme-btn");
    const isLight = document.body.classList.contains("light-mode");
    btn.innerHTML = isLight ? "🌑" : "☀️";
}

// --- CV Viewer Logic ---
function showCV() {
    const frame = document.getElementById("cvFrame");
    const btn = document.getElementById("cvBtn");

    if (frame.style.height === "600px") {
        frame.style.height = "0";
        frame.style.marginTop = "0";
        btn.innerHTML = '<i class="fas fa-eye"></i> View Resume';
    } else {
        frame.src = "Assets/cv.pdf"; // Apni PDF file ka sahi naam yahan check kar lein
        frame.style.height = "600px";
        frame.style.marginTop = "25px";
        btn.innerHTML = '<i class="fas fa-times"></i> Close Resume';
    }
}

// --- Table Filter (Education Search) ---
function filterTable() {
    const filter = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#eduTable tbody tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
    });
}

// --- Form Validation ---
function validateForm() {
    // Filhal ye sirf alert dikhayega
    alert("🚀 Message Sent Successfully! Imad will contact you shortly.");
    return false; // Form reload hone se rokne ke liye
}

// --- Initialize on Load ---
window.onload = () => {
    type();
};