function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    while (password.length < length) {
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      password += randomChar;
    }
    if (!/[A-Z]/.test(password)) {
      password = password.replace(/[a-z]/, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    }
    if (!/[a-z]/.test(password)) {
      password = password.replace(/[A-Z]/, () => String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    }
    if (!/\d/.test(password)) {
      password = password.replace(/[A-Za-z]/, () => Math.floor(Math.random() * 10).toString());
    }
    if (!/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)) {
      password = password.replace(/[A-Za-z0-9]/, () => "!@#$%^&*()_+[]{}|;:,.<>?".charAt(Math.floor(Math.random() * 30)));
    }
    return password;
  }
  
  function displayMessage() {
    const message = document.getElementById("copyMessage");
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  }
  
  document.getElementById("generate").addEventListener("click", () => {
    const length = document.getElementById("length").value;
    const password = generatePassword(length);
    document.getElementById("password").textContent = password;
  });
  
  document.getElementById("copy").addEventListener("click", () => {
    const password = document.getElementById("password").textContent;
    navigator.clipboard.writeText(password).then(() => {
      displayMessage();
    });
  });
  
  document.getElementById("length").addEventListener("input", (e) => {
    document.getElementById("rangeValue").textContent = e.target.value;
    const password = generatePassword(e.target.value);
    document.getElementById("password").textContent = password;
  });
  
  document.getElementById("reset").addEventListener("click", () => {
    const resetValue = 12;
    document.getElementById("length").value = resetValue;
    document.getElementById("rangeValue").textContent = resetValue;
    const password = generatePassword(resetValue);
    document.getElementById("password").textContent = password;
  });
  
  window.onload = function() {
    const length = document.getElementById("length").value;
    const password = generatePassword(length);
    document.getElementById("password").textContent = password;
  };
  