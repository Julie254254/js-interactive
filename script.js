// Event 1: Button Counter
let count = 0;
document.getElementById("countBtn").addEventListener("click", () => {
  count++;
  document.getElementById("countDisplay").textContent = `You have clicked ${count} times`;
});

// Event 2: Toggle Show/Hide
document.getElementById("toggleBtn").addEventListener("click", () => {
  const msg = document.getElementById("hiddenMsg");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});

// Custom Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop default submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }
  if (!email.includes("@") || !email.includes(".")) {
    errors.push("Email must be valid.");
  }
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  const formMsg = document.getElementById("formMsg");

  if (errors.length > 0) {
    formMsg.style.color = "red";
    formMsg.textContent = errors.join(" ");
  } else {
    formMsg.style.color = "green";
    formMsg.textContent = "Form submitted successfully 🎉";
  }
});
