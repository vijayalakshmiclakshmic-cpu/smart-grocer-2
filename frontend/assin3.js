let hour = new Date().getHours();
let greeting = "";

if (hour < 12) greeting = "Good Morning!!";
else if (hour < 18) greeting = "Good Afternoon!!";
else greeting = "Good Evening!";

document.getElementById("welcomeText").innerHTML = greeting + " Welcome to SmartGrocer Dashboard.";

function openSection(name) {
    alert("Opening " + name + " section...");
}