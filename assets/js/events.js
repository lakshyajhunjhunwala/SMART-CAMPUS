// Events Mock Data
const mockEvents = [
    { id: 1, title: 'Programming Contest', category: 'competition', date: '2026-02-20', time: '10:00 AM', location: 'Tech Building', description: 'Annual coding competition' },
    { id: 2, title: 'Midterm Exam', category: 'exam', date: '2026-03-10', time: '09:00 AM', location: 'Examination Hall', description: 'Midterm exams for all courses' },
    { id: 3, title: 'Web Dev Workshop', category: 'workshop', date: '2026-02-25', time: '02:00 PM', location: 'Lab 3', description: 'Learn modern web development techniques' },
    { id: 4, title: 'Sports Day', category: 'sports', date: '2026-03-05', time: '08:00 AM', location: 'Sports Ground', description: 'Annual sports competition' },
    { id: 5, title: 'AI & Machine Learning Seminar', category: 'seminar', date: '2026-03-15', time: '03:00 PM', location: 'Auditorium', description: 'Explore AI and ML advancements' }
];

let filteredEvents = [...mockEvents];
let filterCategory = 'all';

function renderEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = '';
    
    if (filteredEvents.length === 0) {
        eventsGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:white; padding:2rem;">No events found for selected category.</p>';
        return;
    }
    
    filteredEvents.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        const eventDate = new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        card.innerHTML = `
            <h3>${event.title}</h3>
            <div class="date">📅 ${eventDate} at ${event.time}</div>
            <p><strong>📍 Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <span class="category-badge">${event.category.toUpperCase()}</span>
        `;
        eventsGrid.appendChild(card);
    });
}

function filterEvents() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    filterCategory = categoryFilter.value;
    
    if (filterCategory === 'all') {
        filteredEvents = [...mockEvents];
    } else {
        filteredEvents = mockEvents.filter(e => e.category === filterCategory);
    }
    
    renderEvents();
}

// Initialize
document.addEventListener('DOMContentLoaded', renderEvents);
