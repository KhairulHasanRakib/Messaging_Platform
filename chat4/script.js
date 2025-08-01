const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");

// ডেমোর জন্য রাউন্ড-রবিন সেন্ডার: প্রথমে আপনি, তারপর সে, তারপর আপনি, ...
let isYou = true;

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.className = "message " + (isYou ? "you" : "other");

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.style.backgroundImage = isYou
    ? "url('https://i.imgur.com/jQj1I2t.png')" // Example male avatar
    : "url('https://i.imgur.com/oR6YJzR.png')"; // Example female avatar

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = text;

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
  isYou = !isYou; // পরের মেসেজ অন্যজনের হবে
}

// Enter কী চাপলে সেন্ড
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
