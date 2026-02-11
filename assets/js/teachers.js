document.addEventListener("DOMContentLoaded", loadTeachers);

function loadTeachers() {
    const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
    const container = document.getElementById("teacherList");

    container.innerHTML = "";

    if (teachers.length === 0) {
        container.innerHTML = "<p class='empty-state'>No teacher locations available.</p>";
        return;
    }

    teachers.forEach(t => {
        container.innerHTML += `
            <div class="teacher-card">
                <h3>${t.name}</h3>
                <p><strong>Location:</strong> ${t.location}</p>
                <p><small>Updated: ${t.time}</small></p>
            </div>
        `;
    });
}
