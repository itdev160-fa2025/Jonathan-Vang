const messages = [];
const data = ["Welcome to the chat!", "Feel free to send a message."];

function Message(content, type) {
  this.content = content;
  this.type = type;
}

function loadSeedData() {
  data.forEach(msg => {
    const message = new Message(msg, 'in-message');
    addMessageToContainer(message);
  });
}

function addMessageToContainer(message) {
  const messageContainer = document.getElementById("message-container");
  const msgElem = document.createElement("div");
  msgElem.textContent = message.content;
  msgElem.classList.add(message.type);
  messageContainer.appendChild(msgElem);
}

function addMessageHandler(event) {
  const messageInput = document.getElementById("message-input").value;
  let messageType = '';

  switch (event.target.id) {
    case 'send-button':
      messageType = 'out-message';
      break;
    case 'reply-button':
      messageType = 'in-message';
      break;
  }

  const newMessage = new Message(messageInput, messageType);
  messages.push(newMessage);
  addMessageToContainer(newMessage);
  document.getElementById("message-input").value = '';
}

function init() {
  loadSeedData();
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;
}

window.onload = init;
