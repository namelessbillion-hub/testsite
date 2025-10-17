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
  const textToCopy = document.getElementById("contract-text-full-burger").innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
        document.getElementById('copy-message-burger').style.visibility = 'visible'; 
        setTimeout(function() {
            document.getElementById('copy-message-burger').style.visibility = 'hidden'; 
        }, 1500);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}

