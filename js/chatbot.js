class ChatHistory{
    constructor(){
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message);
    }

    getHistory(){
        return this.messages;
    }

}
const historyMessages = new ChatHistory();

window.addEventListener("beforeunload", saveMessages);
window.addEventListener("load", loadMessages);

function saveMessages(){
    console.log('Saving chat history...');
    console.log(historyMessages.getHistory());
    sessionStorage.setItem('chatHistory', JSON.stringify(historyMessages.getHistory()));
}


function loadMessages(){
    const chatHistory = JSON.parse(sessionStorage.getItem('chatHistory'));
    if(chatHistory){
        chatHistory.forEach(msg => {
            showMessage(msg.message, msg.sender);
        });
    }
}






function fetchJSON(url){
    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if(Object.keys(data).length === 0 && data.constructor === Object){
            throw new Error('Empty JSON or malformed JSON');
        }
        console.log(data);
        sendMessage(data.intents);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}



function sendMessage(intents) {
    const input = document.getElementById("user-input");
    const messageUser = input.value.trim();
    if (messageUser === "") return;
    const userMsg = { message: messageUser, sender: "User" };
    historyMessages.addMessage(userMsg);
    showMessage(messageUser, "user");
    const botResponse = processMessage(intents, messageUser);
    const botMsg = { message: botResponse, sender: "Bot" };
    historyMessages.addMessage(botMsg);
    showMessage(botResponse, "bot");
    input.value = "";
}


function showMessage(message, type) {
    const chatBox = document.getElementById("chatbot");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", type);
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
}


function processMessage(intents,message){
    let response = "Je suis désolé, je ne suis pas sûr de comprendre.";
    intents.forEach(intent => {
        intent.patterns.forEach(pattern => {
            if (message.toLowerCase().includes(pattern.toLowerCase())){
                response = intent.responses[Math.floor(Math.random()*intent.responses.length)];
            }
        });
    });
    return response;
}

