document.addEventListener("DOMContentLoaded", loadRequests);

function submitRequest(e) {
    e.preventDefault();

    const student = studentName.value;
    const reason = document.getElementById("reason").value;
    const date = document.getElementById("date").value;

    let requests = JSON.parse(localStorage.getItem("onduty") || "[]");

    requests.push({
        student,
        reason,
        date,
        status: "Pending"
    });

    localStorage.setItem("onduty", JSON.stringify(requests));
    e.target.reset();
    loadRequests();
}

function loadRequests() {
    const requests = JSON.parse(localStorage.getItem("onduty") || "[]");
    const container = document.getElementById("requestList");
    container.innerHTML = "";

    requests.forEach(r => {
        container.innerHTML += `
            <div class="request-card">
                <h3>${r.student}</h3>
                <p>${r.reason}</p>
                <p>${r.date}</p>
                <span class="status ${r.status.toLowerCase()}">${r.status}</span>
            </div>
        `;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Login required");
        window.location.href = "index.html";
        return;
    }

    // If HOD, hide form
    if (user.role === "hod") {
        document.querySelector(".onduty-form").style.display = "none";
    }

    loadRequests();
});

