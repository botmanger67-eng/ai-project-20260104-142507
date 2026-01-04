// Main application script for VPS Controller & Personal Assistant

// DOM Elements
const chatInput = document.getElementById('chat-input');
const sendBtn = document.querySelector('.send-btn');
const chatMessages = document.querySelector('.chat-messages');
const clearChatBtn = document.querySelector('.clear-chat');

// Event Listeners
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

clearChatBtn.addEventListener('click', () => {
    chatMessages.innerHTML = '';
    addSystemMessage('Chat cleared.');
});

// Functions
function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText) {
        addUserMessage(messageText);
        chatInput.value = '';
        
        // Simulate AI response after a short delay
        setTimeout(() => {
            addAIMessage("I'm processing your command. This is a simulation of what the actual assistant would respond with.");
        }, 1000);
    }
}

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user');
    messageDiv.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function addAIMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'system');
    messageDiv.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function addSystemMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'system');
    messageDiv.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;");
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize with a welcome message
addSystemMessage('Welcome to your VPS Controller & Personal Assistant! I can help you manage your systems, run commands, and monitor your VPS status. Type your command or question in the box below.');