function sendMessage() {
  const sender = document.getElementById("sender").value;
  const message = document.getElementById("message").value.trim();

  if (!message) return;

  const msg1 = document.getElementById("msg1");
  const msg2 = document.getElementById("msg2");

  if (sender === "1") {
    msg1.textContent = message;
    msg1.style.display = "block";
    msg2.style.display = "none";
  } else {
    msg2.textContent = message;
    msg2.style.display = "block";
    msg1.style.display = "none";
  }

  document.getElementById("message").value = "";
}
