function copyCA() {
  const textToCopy = document.getElementById("contract-text-full").innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
        document.getElementById('copy-message').style.visibility = 'visible'; 
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}
