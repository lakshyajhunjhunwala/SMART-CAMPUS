// Chat Module
class ChatBot {
    constructor() {
        this.messages = [];
        this.messagesContainer = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
    }

    addMessage(text, isUser) {
        const message = document.createElement('div');
        message.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        const p = document.createElement('p');
        p.textContent = text;
        message.appendChild(p);
        this.messagesContainer.appendChild(message);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    getBotResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();

        // Schedule related
        if (msg.includes('schedule') || msg.includes('class') || msg.includes('time')) {
            return 'Your classes are scheduled as follows:\n• Monday 9:00 AM: Data Structures\n• Tuesday 10:30 AM: Web Development\n• Wednesday 2:00 PM: Algorithm Design\n• Thursday 11:00 AM: Database Management\n• Friday 3:30 PM: Software Engineering\n\nWould you like more details about any class?';
        }

        // Events
        if (msg.includes('event') || msg.includes('activities')) {
            return 'Upcoming events:\n• Feb 20: Programming Contest\n• Feb 25: Web Dev Workshop\n• Mar 5: Sports Day\n• Mar 10: Midterm Exams\n• Mar 15: AI & ML Seminar\n\nVisit the Events page for more details!';
        }

        // Bus routes
        if (msg.includes('bus') || msg.includes('transport') || msg.includes('route')) {
            return 'Available bus routes:\n• B-101: Main Campus to North Gate (8:00 AM)\n• B-102: South Campus to Hostel (9:00 AM)\n• B-103: Main Campus to City Center (10:00 AM)\n\nCheck the Buses page for full schedules and stops.';
        }

        // Announcements
        if (msg.includes('announce') || msg.includes('news') || msg.includes('update')) {
            return 'Latest announcements:\n• WiFi Maintenance on Feb 15 (2-6 PM) - URGENT\n• Library extended hours during exams\n• Scholarship applications open (Deadline: Mar 30)\n\nCheck Announcements page for complete list.';
        }

        // Exam related
        if (msg.includes('exam') || msg.includes('test')) {
            return 'Exam Information:\n• Midterm Exams: Mar 10\n• Final Exams: Apr 20-May 10\n• Location: Examination Hall\n\nVisit the portal for detailed exam schedule.';
        }

        // Help/Default
        if (msg.includes('help') || msg.includes('?') || msg === '') {
            return 'I can help you with:\n📅 Class schedules\n🎉 Campus events\n🚌 Bus routes & schedules\n📢 Announcements\n📝 Exam information\n\nJust ask me anything about campus!';
        }

        // Default response
        return 'I\'m your Campus Assistant! You can ask me about schedules, events, buses, announcements, and more. What would you like to know?';
    }

    handleMessage(userMessage) {
        if (!userMessage.trim()) return;

        // Add user message
        this.addMessage(userMessage, true);
        this.userInput.value = '';

        // Simulate bot thinking
        setTimeout(() => {
            const response = this.getBotResponse(userMessage);
            this.addMessage(response, false);
        }, 500);
    }
}

let chatBot;

function sendMessage() {
    if (chatBot) {
        const userInput = document.getElementById('userInput');
        chatBot.handleMessage(userInput.value);
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    chatBot = new ChatBot();
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', handleEnter);
    }
});
