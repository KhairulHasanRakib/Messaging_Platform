function sendMessage() {
  const sender = document.getElementById("sender").value;
  const message = document.getElementById("messageInput").value.trim();

  if (!message) return;

  const cloud = document.getElementById(sender + "-cloud");

  cloud.textContent = message;
  cloud.style.display = "block";
  cloud.classList.remove("floatIn"); // Reset animation
  void cloud.offsetWidth; // Trigger reflow
  cloud.classList.add("floatIn");

  document.getElementById("messageInput").value = "";
}
