// Admin Panel
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Highlight button
    event.target.classList.add('active');

    if(tabName === "onduty"){ 
        loadOnDutyForHOD()
    };

}

function addAnnouncement(event) {
    event.preventDefault();
    const title = document.getElementById('annTitle').value;
    const content = document.getElementById('annContent').value;
    const priority = document.getElementById('annPriority').value;
    
    if (title && content) {
        // Save to localStorage
        let announcements = JSON.parse(localStorage.getItem('customAnnouncements') || '[]');
        announcements.push({
            id: Date.now(),
            title: title,
            content: content,
            priority: priority,
            date: new Date().toISOString().split('T')[0]
        });
        localStorage.setItem('customAnnouncements', JSON.stringify(announcements));
        
        alert('Announcement added successfully!');
        event.target.reset();
    }
}

function addSchedule(event) {
    event.preventDefault();
    const course = document.getElementById('schedCourse').value;
    const code = document.getElementById('schedCode').value;
    const day = document.getElementById('schedDay').value;
    const time = document.getElementById('schedTime').value;
    const instructor = document.getElementById('schedInstructor').value;
    
    if (course && code && day && time && instructor) {
        let schedules = JSON.parse(localStorage.getItem('customSchedules') || '[]');
        schedules.push({
            id: Date.now(),
            course: course,
            code: code,
            day: day,
            time: time,
            instructor: instructor,
            room: 'TBA'
        });
        localStorage.setItem('customSchedules', JSON.stringify(schedules));
        
        alert('Schedule added successfully!');
        event.target.reset();
    }
}

function addEvent(event) {
    event.preventDefault();
    const title = document.getElementById('evtTitle').value;
    const description = document.getElementById('evtDesc').value;
    const category = document.getElementById('evtCategory').value;
    const date = document.getElementById('evtDate').value;
    
    if (title && date) {
        let events = JSON.parse(localStorage.getItem('customEvents') || '[]');
        events.push({
            id: Date.now(),
            title: title,
            description: description,
            category: category,
            date: date.split('T')[0],
            time: date.split('T')[1],
            location: 'TBA'
        });
        localStorage.setItem('customEvents', JSON.stringify(events));
        
        alert('Event added successfully!');
        event.target.reset();
    }
}

function addBus(event) {
    event.preventDefault();
    const busNum = document.getElementById('busNum').value;
    const route = document.getElementById('busRoute').value;
    const driver = document.getElementById('busDriver').value;
    const departure = document.getElementById('busDeparture').value;
    
    if (busNum && route && driver && departure) {
        let buses = JSON.parse(localStorage.getItem('customBuses') || '[]');
        buses.push({
            id: Date.now(),
            busNumber: busNum,
            route: route,
            driver: driver,
            departure: departure,
            arrival: 'TBA',
            stops: ['TBA']
        });
        localStorage.setItem('customBuses', JSON.stringify(buses));
        
        alert('Bus added successfully!');
        event.target.reset();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set first tab as active by default
    loadOnDutyForHOD();
    const firstTabButton = document.querySelector('.tab-button');
    if (firstTabButton) {
        firstTabButton.classList.add('active');
    }
    const firstTab = document.querySelector('.tab-content');
    if (firstTab) {
        firstTab.classList.add('active');
    }
})
function addTeacher(e) {
    e.preventDefault();

    let teachers = JSON.parse(localStorage.getItem("teachers") || "[]");

    teachers.push({
        name: teacherName.value,
        location: teacherLocation.value,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("teachers", JSON.stringify(teachers));
    e.target.reset();
}

function loadOnDutyForHOD() {
    const requests = JSON.parse(localStorage.getItem("onduty") || "[]");
    const container = document.getElementById("hodRequests");
    container.innerHTML = "";

    requests.forEach((r, i) => {
        container.innerHTML += `
            <div class="request-card">
                <h3>${r.student}</h3>
                <p>${r.reason}</p>
                <p>${r.date}</p>
                <button onclick="approve(${i})">Approve</button>
                <button onclick="reject(${i})">Reject</button>
            </div>
        `;
    });
}

function approve(i) {
    let requests = JSON.parse(localStorage.getItem("onduty"));
    requests[i].status = "Approved";
    localStorage.setItem("onduty", JSON.stringify(requests));
    loadOnDutyForHOD();
}

function reject(i) {
    let requests = JSON.parse(localStorage.getItem("onduty"));
    requests[i].status = "Rejected";
    localStorage.setItem("onduty", JSON.stringify(requests));
    loadOnDutyForHOD();
}
document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "hod") {
        alert("Access Denied! HOD login required.");
        window.location.href = "index.html";
    }
});




;
