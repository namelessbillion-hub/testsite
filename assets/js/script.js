function copyCA() {
  const textToCopy = document.getElementById("contract-text-full").innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
        document.getElementById('copy-message').style.visibility = 'visible'; 
        setTimeout(function() {
            document.getElementById('copy-message').style.visibility = 'hidden'; 
        }, 1500);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}
