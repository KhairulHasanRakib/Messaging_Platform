function sendMessage() {
  const sender = document.getElementById("sender").value;
  const message = document.getElementById("messageInput").value.trim();

  if (!message) return;

  const cloud = document.getElementById(`${sender}-cloud`);
  cloud.textContent = message;
  cloud.style.display = "block";

  document.getElementById("messageInput").value = "";
}

document
  .getElementById("messageInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
