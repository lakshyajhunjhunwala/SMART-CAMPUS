// Home page specific
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const isAuth = !!localStorage.getItem('token');
    const welcomeText = document.getElementById('welcomeText');
    
    if (isAuth && welcomeText) {
        const email = localStorage.getItem('userEmail') || 'User';
        welcomeText.textContent = `Welcome back, ${email}! 👋`;
        welcomeText.style.display = 'block';
    }
});
