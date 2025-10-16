
document.getElementById("copy-btn").addEventListener("click", function() {
  const text = document.getElementById("contract-text").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById("copy-message");
    msg.classList.add("show");
    msg.textContent = "Copied!";
    setTimeout(() => {
      msg.classList.remove("show");
    }, 1500);
  });
});

