// Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Gallery project list
const galleryData = [
  {
    img: "gallery1.jpg",
    desc: "Online Quiz Platform built with HTML, CSS, JS & MySQL"
  },
  {
    img: "gallery2.jpg",
    desc: "Student Management System (C# + SQL Server)"
  },
  {
    img: "gallery3.jpg",
    desc: "Portfolio Website – This Photopholio"
  },
  {
    img: "gallery4.jpg",
    desc: "Weather App using JS & OpenWeatherMap API"
  }
];

const galleryContainer = document.getElementById("galleryContainer");

galleryData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="images/${item.img}" alt="Project">
    <p>${item.desc}</p>
  `;
  galleryContainer.appendChild(card);
});
