function setMood(mood) {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");

  if (name.trim() === "") {
    greeting.textContent = "⚠️ Please enter your name first!";
    return;
  }

  let message = "";
  let bg = "";

  if (mood === "happy") {
    message = "Keep smiling and stay positive! 😊";
    bg = "#f1c40f";
  } 
  else if (mood === "neutral") {
    message = "Take it easy and go step by step 😐";
    bg = "#7f8c8d";
  } 
  else if (mood === "sad") {
    message = "Stay strong! You can do it 🙌";
    bg = "#3498db";
  } 
  else if (mood === "cool") {
    message = "You're awesome 😎";
    bg = "#2ecc71";
  }

  greeting.textContent = `Hello ${name}, ${message}`;
  document.body.style.background = bg;
}