const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage("Kamu", text, "user");
  userInput.value = "";

  appendMessage("AI", "Sedang berpikir...", "bot");

  try {
    const response = await fetch("https://api.proxyapi.dev/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text }]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Maaf, aku tidak mengerti.";
    document.querySelector(".bot:last-child").innerHTML = `<b>AI:</b> ${reply}`;
  } catch (err) {
    document.querySelector(".bot:last-child").innerHTML = "<b>AI:</b> Gagal terhubung 😢";
  }
}

function appendMessage(sender, text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
