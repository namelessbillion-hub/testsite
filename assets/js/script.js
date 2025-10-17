function copyCA() {
  const textToCopy = document.getElementById("contract-text").innerText;
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

function copyCABurger() {
  const textToCopy = document.getElementById("contract-text-burger").innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
        document.getElementById('copy-message-burger').style.display = 'block'; 
        setTimeout(function() {
            document.getElementById('copy-message-burger').style.display = 'none'; 
        }, 1500);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}

