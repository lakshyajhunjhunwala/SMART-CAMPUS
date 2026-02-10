// Announcements Mock Data
const mockAnnouncements = [
    { id: 1, title: 'WiFi Maintenance', content: 'Campus WiFi will be down for maintenance on Feb 15 from 2-6 PM.', priority: 'urgent', date: '2026-02-09' },
    { id: 2, title: 'Library Extended Hours', content: 'Library will remain open until 10 PM during exam season.', priority: 'high', date: '2026-02-08' },
    { id: 3, title: 'Emergency Drill', content: 'Campus-wide emergency drill scheduled for Feb 16 at 2 PM.', priority: 'high', date: '2026-02-07' },
    { id: 4, title: 'Scholarship Applications Open', content: 'Applications for 2026-27 scholarships are now open. Deadline: March 30.', priority: 'medium', date: '2026-02-06' },
    { id: 5, title: 'Exam Schedule Released', content: 'Final exam schedule for Spring semester has been released on the portal.', priority: 'medium', date: '2026-02-05' }
];

let filteredAnnouncements = [...mockAnnouncements];
let filterPriority = 'all';

function getPriorityEmoji(priority) {
    const emojis = {
        'urgent': '🔴',
        'high': '🟠',
        'medium': '🟡',
        'low': '🟢'
    };
    return emojis[priority] || '•';
}

function renderAnnouncements() {
    const announcementsList = document.getElementById('announcementsList');
    if (!announcementsList) return;
    
    announcementsList.innerHTML = '';
    
    if (filteredAnnouncements.length === 0) {
        announcementsList.innerHTML = '<p style="text-align:center; color:white; padding:2rem;">No announcements found.</p>';
        return;
    }
    
    filteredAnnouncements.forEach(ann => {
        const card = document.createElement('div');
        card.className = 'announcement-card';
        const annDate = new Date(ann.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const priorityClass = `priority-${ann.priority}`;
        
        card.innerHTML = `
            <div class="announcement-header">
                <h3 class="announcement-title">${getPriorityEmoji(ann.priority)} ${ann.title}</h3>
                <span class="priority-badge ${priorityClass}">${ann.priority.toUpperCase()}</span>
            </div>
            <p class="announcement-content">${ann.content}</p>
            <p class="announcement-date">📅 ${annDate}</p>
        `;
        announcementsList.appendChild(card);
    });
}

function filterAnnouncements() {
    const priorityFilter = document.getElementById('priorityFilter');
    if (!priorityFilter) return;
    
    filterPriority = priorityFilter.value;
    
    if (filterPriority === 'all') {
        filteredAnnouncements = [...mockAnnouncements];
    } else {
        filteredAnnouncements = mockAnnouncements.filter(a => a.priority === filterPriority);
    }
    
    renderAnnouncements();
}

// Initialize
document.addEventListener('DOMContentLoaded', renderAnnouncements);
