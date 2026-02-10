// Buses Mock Data
const mockBuses = [
    { id: 1, busNumber: 'B-101', route: 'Main Campus to North Gate', driver: 'Ahmed Khan', departure: '08:00 AM', arrival: '08:30 AM', stops: ['Central Hall', 'Library', 'Science Block', 'North Gate'] },
    { id: 2, busNumber: 'B-102', route: 'South Campus to Hostel', driver: 'Fatima Ali', departure: '09:00 AM', arrival: '09:45 AM', stops: ['South Gate', 'Sports Complex', 'Basketball Court', 'Hostel Block A'] },
    { id: 3, busNumber: 'B-103', route: 'Main Campus to City Center', driver: 'Hassan Omar', departure: '10:00 AM', arrival: '10:45 AM', stops: ['Main Gate', 'Shopping Complex', 'Park Lane', 'City Center'] }
];

let filteredBuses = [...mockBuses];
let searchRoute = '';

function renderBuses() {
    const busesGrid = document.getElementById('busesGrid');
    if (!busesGrid) return;
    
    busesGrid.innerHTML = '';
    
    if (filteredBuses.length === 0) {
        busesGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:white; padding:2rem;">No buses found matching your search.</p>';
        return;
    }
    
    filteredBuses.forEach(bus => {
        const card = document.createElement('div');
        card.className = 'bus-card';
        card.innerHTML = `
            <h3>🚌 ${bus.busNumber}</h3>
            <div class="bus-info">
                <label>Route:</label>
                <p>${bus.route}</p>
            </div>
            <div class="bus-info">
                <label>Driver:</label>
                <p>${bus.driver}</p>
            </div>
            <div class="bus-info">
                <label>Schedule:</label>
                <p>Departure: ${bus.departure}</p>
                <p>Arrival: ${bus.arrival}</p>
            </div>
            <div class="bus-info">
                <label>Stops:</label>
                <p>${bus.stops.join(' → ')}</p>
            </div>
        `;
        busesGrid.appendChild(card);
    });
}

function searchBuses() {
    const searchInput = document.getElementById('searchRoute');
    if (!searchInput) return;
    
    searchRoute = searchInput.value.toLowerCase();
    
    if (searchRoute === '') {
        filteredBuses = [...mockBuses];
    } else {
        filteredBuses = mockBuses.filter(bus => 
            bus.route.toLowerCase().includes(searchRoute) ||
            bus.busNumber.toLowerCase().includes(searchRoute)
        );
    }
    
    renderBuses();
}

// Initialize
document.addEventListener('DOMContentLoaded', renderBuses);
