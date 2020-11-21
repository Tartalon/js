const btn = document.querySelector('button');
btn.onclick = function() {
  displayMessage('Brian: Hi there, how are you today?','chat');
};

function displayMessage(msgText, msgType) {
  const html = document.querySelector('html');
  const panel = document.createElement('div');
  const msg = document.createElement('p');
  const closeBtn = document.createElement('button');
  
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  msg.textContent = msgText;
  panel.appendChild(msg);

  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }

  if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(./icons/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(./icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
}
