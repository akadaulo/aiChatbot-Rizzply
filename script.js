function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (userInput.value.trim() === "") {
        return;
    }

    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = getBotResponse(userInput.value);
    chatBox.appendChild(botMessage);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    // Simple example responses. You can add more complex logic here.
    const responses = {
        "hi": "Hello! How can I help you?",
        "hello": "Hi there! What can I do for you?",
        "how are you": "I'm just a bot, but I'm here to help!",
        "bye": "Goodbye! Have a great day!"
    };

    const input = userInput.toLowerCase();
    return responses[input] || "I'm sorry, I don't understand that.";
}