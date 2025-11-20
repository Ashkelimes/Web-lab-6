// Dummy Categories (Updated with more categories)
const categories = [
  { name: "Development", img: "https://via.placeholder.com/180x100?text=Dev" },
  { name: "Business", img: "https://via.placeholder.com/180x100?text=Business" },
  { name: "IT & Software", img: "https://via.placeholder.com/180x100?text=IT+&+Software" },
  { name: "Design", img: "https://via.placeholder.com/180x100?text=Design" },
  { name: "Marketing", img: "https://via.placeholder.com/180x100?text=Marketing" },
  { name: "Photography", img: "https://via.placeholder.com/180x100?text=Photo" },
  { name: "Music", img: "https://via.placeholder.com/180x100?text=Music" },
  { name: "Personal Dev", img: "https://via.placeholder.com/180x100?text=Personal+Dev" },
  { name: "Health & Fitness", img: "https://via.placeholder.com/180x100?text=Health" },
  { name: "Lifestyle", img: "https://via.placeholder.com/180x100?text=Lifestyle" }
];

// Dummy Courses (Added more courses)
const courses = [
  {
    title: "The Complete JavaScript Course",
    instructor: "Jonas Schmedtmann",
    rating: 4.8,
    price: "149.99",
    image: "https://via.placeholder.com/320x180?text=JS+Course"
  },
  {
    title: "Python for Beginners",
    instructor: "Jose Portilla",
    rating: 4.7,
    price: "129.99",
    image: "https://via.placeholder.com/320x180?text=Python"
  },
  {
    title: "Mastering React",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    price: "179.99",
    image: "https://via.placeholder.com/320x180?text=React"
  },
  {
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    rating: 4.6,
    price: "199.99",
    image: "https://via.placeholder.com/320x180?text=ML"
  },
  {
    title: "Complete UX Design",
    instructor: "Jane Doe",
    rating: 4.5,
    price: "139.99",
    image: "https://via.placeholder.com/320x180?text=UX+Design"
  },
  {
    title: "Digital Marketing 101",
    instructor: "John Smith",
    rating: 4.4,
    price: "119.99",
    image: "https://via.placeholder.com/320x180?text=Marketing"
  },
  {
    title: "Advanced Excel",
    instructor: "Alice Johnson",
    rating: 4.7,
    price: "99.99",
    image: "https://via.placeholder.com/320x180?text=Excel"
  },
  {
    title: "Photography Masterclass",
    instructor: "Bob Williams",
    rating: 4.6,
    price: "149.99",
    image: "https://via.placeholder.com/320x180?text=Photography"
  }
];

// Trusted Companies (Updated with requested logos)
const companies = [
  { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo_2019.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Cisco_logo_blue_2016.svg" },
  { name: "Vimeo", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Vimeo_Logo.svg" },
  { name: "Procter & Gamble", logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Procter_%26_Gamble_logo.svg" },
  { name: "Hewlett Packard Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Hewlett_Packard_Enterprise_logo.svg" },
  { name: "Citi", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Citi.svg" },
  { name: "Ericsson", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Ericsson_logo.svg" }
];

// ================= Render Categories =================
const catContainer = document.getElementById("categories");
categories.forEach(cat => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <img src="${cat.img}" alt="${cat.name}">
    <h3>${cat.name}</h3>
  `;
  catContainer.appendChild(card);
});

// ================= Render Courses =================
const courseContainer = document.getElementById("courses");
courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}">
    <div class="course-info">
      <h3>${course.title}</h3>
      <p>${course.instructor}</p>
      <div class="price-rating">
        <span class="rating">⭐ ${course.rating}</span>
        <span class="price">$${course.price}</span>
      </div>
    </div>
  `;
  courseContainer.appendChild(card);
});

// ================= Render Companies =================
const compContainer = document.getElementById("companies");
companies.forEach(comp => {
  const img = document.createElement("img");
  img.src = comp.logo;
  img.alt = comp.name;
  img.className = "company-logo";
  compContainer.appendChild(img);
});
