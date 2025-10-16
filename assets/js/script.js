function copyCA() {
  const textToCopy = document.getElementById("contract-text").value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}
