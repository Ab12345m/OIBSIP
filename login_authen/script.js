document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Hardcoded username and password
    const validUsername = "admin";
    const validPassword = "12345";
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    const message = document.getElementById('message');
  
    if (username === validUsername && password === validPassword) {
      message.style.color = "green";
      message.textContent = "Login successful!";
      // Redirect or show content
      // window.location.href = "dashboard.html";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }
  });
  