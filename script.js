document.getElementById("convertBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  const fileInput = document.getElementById("audioInput");

  if (!fileInput.files.length) {
    output.textContent = "⚠️ Please select an audio file first.";
    return;
  }

  // Mock conversion output (for demo)
  output.textContent = "🎶 Converting audio to lyrics... (demo output)";
  setTimeout(() => {
    output.textContent = "✨ Here's your converted text/lyrics: 'La la la... music feels alive!'";
  }, 2000);
});
