function login() {
  alert("Login button clicked"); // DEBUG LINE

  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(JSON.stringify(data));
    if (data.message === "Login successful") {
      window.location.href = "dashboard.html";
    }
  })
  .catch(err => {
    alert("Fetch error");
    console.error(err);
  });
}
