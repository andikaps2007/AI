function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<div class="message user"><b>Kamu:</b> ${userText}</div>`;

  // Jawaban AI sederhana
  let reply = "";
  if (userText.toLowerCase().includes("halo")) {
    reply = "Hai juga! Aku AI buatan Andika 😄";
  } else if (userText.toLowerCase().includes("nama kamu")) {
    reply = "Namaku AndiBot 🤖";
  } else if (userText.toLowerCase().includes("siapa pembuatmu")) {
    reply = "Aku dibuat oleh Andika Permana Saputra 💻";
  } else {
    reply = "Hmm, aku belum paham itu 😅";
  }

  chatBox.innerHTML += `<div class="message bot"><b>AI:</b> ${reply}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
