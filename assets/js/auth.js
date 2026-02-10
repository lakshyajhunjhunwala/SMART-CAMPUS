// Authentication Module
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        localStorage.setItem('token', 'mock-token-' + Math.random());
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isAdmin', false);
        
        closeLoginModal();
        updateAuthUI();
        
        // Redirect to home or reload
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isAdmin');
    updateAuthUI();
    window.location.href = 'index.html';
}

function isAuthenticated() {
    return !!localStorage.getItem('token');
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminLink = document.getElementById('adminLink');
    
    if (isAuthenticated()) {
        if (authBtn) authBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (adminLink) adminLink.style.display = 'block';
    } else {
        if (authBtn) authBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const btn = document.getElementById('hambtn');
    if (navMenu) {
        navMenu.classList.toggle('active');
        const expanded = navMenu.classList.contains('active');
        if (btn) btn.setAttribute('aria-expanded', expanded);
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    
    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // ensure hamburger has correct aria-expanded when loaded
    const navMenu = document.getElementById('navMenu');
    const btn = document.getElementById('hambtn');
    if (btn && navMenu) {
        btn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
});

// Close mobile menu with Escape
window.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        const navMenu = document.getElementById('navMenu');
        const btn = document.getElementById('hambtn');
        if (navMenu && navMenu.classList.contains('active')){
            navMenu.classList.remove('active');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }
});
