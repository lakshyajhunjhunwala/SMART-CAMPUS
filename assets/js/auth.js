// ==========================
// AUTHENTICATION MODULE
// ==========================

// Open Login Modal
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

// Close Login Modal
function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

// ==========================
// HANDLE LOGIN
// ==========================
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let role = null;

    // HOD Login
    if (email === "hod@smartcampus.com" && password === "1234") {
        role = "hod";
    }

    // Student Login (any other email)
    else if (email && password) {
        role = "student";
    }

    if (role) {
        const user = {
            email: email,
            role: role
        };

        localStorage.setItem('token', 'mock-token-' + Math.random());
        localStorage.setItem('user', JSON.stringify(user));

        closeLoginModal();
        updateAuthUI();
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials");
    }
}

// ==========================
// LOGOUT
// ==========================
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    updateAuthUI();
    window.location.href = "index.html";
}

// ==========================
// CHECK AUTH
// ==========================
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

// ==========================
// UPDATE UI BASED ON ROLE
// ==========================
function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminLink = document.getElementById('adminLink');
    const ondutyLink = document.getElementById('ondutyLink');

    if (isAuthenticated()) {
        const user = getUser();

        if (authBtn) authBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';

        // Show Admin only to HOD
        if (adminLink) {
            adminLink.style.display = user.role === "hod" ? "block" : "none";
        }

        // Show On Duty only to Students
        if (ondutyLink) {
            ondutyLink.style.display = user.role === "student" ? "block" : "none";
        }

    } else {
        if (authBtn) authBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
        if (ondutyLink) ondutyLink.style.display = 'none';
    }
}

// ==========================
// MOBILE MENU
// ==========================
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const btn = document.getElementById('hambtn');
    if (navMenu) {
        navMenu.classList.toggle('active');
        const expanded = navMenu.classList.contains('active');
        if (btn) btn.setAttribute('aria-expanded', expanded);
    }
}

// ==========================
// INITIALIZE
// ==========================
document.addEventListener('DOMContentLoaded', function () {

    updateAuthUI();

    // Active Page Highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const navMenu = document.getElementById('navMenu');
    const btn = document.getElementById('hambtn');
    if (btn && navMenu) {
        btn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    }
});

// Close modal outside click
window.addEventListener('click', function (event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
});

// Escape closes mobile menu
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const btn = document.getElementById('hambtn');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }
});
