// Mock Data
const mockSchedules = [
    { id: 1, course: 'Data Structures', code: 'CS201', day: 'Monday', time: '09:00 AM', instructor: 'Dr. Smith', room: 'A101' },
    { id: 2, course: 'Web Development', code: 'CS301', day: 'Tuesday', time: '10:30 AM', instructor: 'Prof. Johnson', room: 'B205' },
    { id: 3, course: 'Algorithm Design', code: 'CS202', day: 'Wednesday', time: '02:00 PM', instructor: 'Dr. Williams', room: 'C310' },
    { id: 4, course: 'Database Management', code: 'CS250', day: 'Thursday', time: '11:00 AM', instructor: 'Prof. Brown', room: 'A205' },
    { id: 5, course: 'Software Engineering', code: 'CS401', day: 'Friday', time: '03:30 PM', instructor: 'Dr. Davis', room: 'D102' }
];

let filteredSchedules = [...mockSchedules];
let filterDay = 'all';

function renderSchedules() {
    const scheduleGrid = document.getElementById('scheduleGrid');
    if (!scheduleGrid) return;
    
    scheduleGrid.innerHTML = '';
    
    if (filteredSchedules.length === 0) {
        scheduleGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:white; padding:2rem;">No classes found for selected day.</p>';
        return;
    }
    
    filteredSchedules.forEach(schedule => {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <h3>${schedule.course}</h3>
            <p><strong>Code:</strong> <span class="badge">${schedule.code}</span></p>
            <p><strong>📅 Day:</strong> ${schedule.day}</p>
            <p><strong>🕐 Time:</strong> ${schedule.time}</p>
            <p><strong>👨‍🏫 Instructor:</strong> ${schedule.instructor}</p>
            <p><strong>🚪 Room:</strong> ${schedule.room}</p>
        `;
        scheduleGrid.appendChild(card);
    });
}

function filterSchedules() {
    const dayFilter = document.getElementById('dayFilter');
    if (!dayFilter) return;
    
    filterDay = dayFilter.value;
    
    if (filterDay === 'all') {
        filteredSchedules = [...mockSchedules];
    } else {
        filteredSchedules = mockSchedules.filter(s => s.day === filterDay);
    }
    
    renderSchedules();
}

// Initialize
document.addEventListener('DOMContentLoaded', renderSchedules);
