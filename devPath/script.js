function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Project Building Steps
const projectSteps = {
  "Portfolio Website": [
    { step: 1, title: "Setup Project Structure", desc: "Create folders for HTML, CSS, and JS files. Create index.html as the main file." },
    { step: 2, title: "Create HTML Layout", desc: "Add sections: Header (navigation), Hero (intro), About, Skills, Projects, Contact, Footer." },
    { step: 3, title: "Style with CSS", desc: "Style with flexbox/grid. Add colors, fonts, spacing. Make it visually appealing." },
    { step: 4, title: "Add Smooth Scrolling", desc: "Use JavaScript to implement smooth scroll navigation when clicking menu links." },
    { step: 5, title: "Add Animations", desc: "Add CSS animations for fade-in effects, hover states, and transitions." },
    { step: 6, title: "Make Responsive", desc: "Use media queries to ensure the site works on mobile, tablet, and desktop." },
    { step: 7, title: "Test & Deploy", desc: "Test all links and responsiveness. Deploy to GitHub Pages or Netlify." }
  ],
  "E-Commerce UI": [
    { step: 1, title: "Create Product Layout", desc: "Design a grid layout to display product cards with images, prices, and ratings." },
    { step: 2, title: "Add Product Filters", desc: "Implement filters for categories, price range, and ratings using JavaScript/React." },
    { step: 3, title: "Build Shopping Cart", desc: "Create a cart system that shows selected products and calculates the total." },
    { step: 4, title: "Design Checkout Page", desc: "Create a checkout form with shipping address, payment info, and order review." },
    { step: 5, title: "Add Search Feature", desc: "Implement search functionality to find products by name or keyword." },
    { step: 6, title: "Implement Animations", desc: "Add smooth transitions and animations for better UX." },
    { step: 7, title: "Optimize Performance", desc: "Optimize images, lazy load components, and ensure fast loading." }
  ],
  "Real-time Dashboard": [
    { step: 1, title: "Setup Backend", desc: "Create an API using Node.js/Express or Python to provide real-time data." },
    { step: 2, title: "Create Dashboard Layout", desc: "Design a dashboard with cards, charts, and metrics sections." },
    { step: 3, title: "Integrate Charts Library", desc: "Use Chart.js or Recharts to display data in interactive charts." },
    { step: 4, title: "Connect Real-time Data", desc: "Use WebSocket or polling to fetch and update data in real-time." },
    { step: 5, title: "Add User Authentication", desc: "Implement login/signup with JWT or OAuth for secure access." },
    { step: 6, title: "Create User Filters", desc: "Add filters and date range selectors to customize dashboard view." },
    { step: 7, title: "Deploy & Monitor", desc: "Deploy to cloud (Vercel, AWS, Heroku) and monitor performance." }
  ],
  "E-Commerce Backend": [
    { step: 1, title: "Setup Spring Boot Project", desc: "Initialize a Spring Boot project with Maven/Gradle and necessary dependencies." },
    { step: 2, title: "Create Database Schema", desc: "Design tables for products, orders, users, and payments in PostgreSQL/MySQL." },
    { step: 3, title: "Build Product APIs", desc: "Create endpoints for GET, POST, PUT, DELETE operations on products." },
    { step: 4, title: "Implement Order Management", desc: "Build APIs to create orders, track status, and manage order history." },
    { step: 5, title: "Add Payment Integration", desc: "Integrate payment gateway (Stripe/PayPal) for secure transactions." },
    { step: 6, title: "Implement Authentication", desc: "Add JWT-based user authentication and authorization." },
    { step: 7, title: "Write Tests & Deploy", desc: "Write unit tests with JUnit and deploy using Docker." }
  ],
  "Task Management System": [
    { step: 1, title: "Setup Backend", desc: "Create Spring Boot backend with endpoints for tasks, users, and categories." },
    { step: 2, title: "Create Database", desc: "Design database schema with tables for users, tasks, and task categories." },
    { step: 3, title: "Build React Frontend", desc: "Create React components for task list, task form, and task details." },
    { step: 4, title: "Implement CRUD Operations", desc: "Connect frontend to backend APIs for Create, Read, Update, Delete tasks." },
    { step: 5, title: "Add Drag & Drop", desc: "Implement drag-and-drop functionality to organize tasks by priority." },
    { step: 6, title: "Add Notifications", desc: "Implement due date reminders and task notifications." },
    { step: 7, title: "Test & Deploy", desc: "Test all features and deploy frontend and backend separately." }
  ],
  "Real-time Chat Application": [
    { step: 1, title: "Setup Project", desc: "Initialize Spring Boot backend and set up WebSocket configuration." },
    { step: 2, title: "Create User Authentication", desc: "Build login/signup with JWT tokens and password hashing." },
    { step: 3, title: "Setup Database", desc: "Design schema for users, messages, and chat rooms." },
    { step: 4, title: "Implement WebSocket", desc: "Create WebSocket endpoints for real-time message transmission." },
    { step: 5, title: "Build Frontend UI", desc: "Create React components for chat interface, message list, and user list." },
    { step: 6, title: "Add Message Storage", desc: "Store messages in database and load chat history." },
    { step: 7, title: "Deploy Full Stack", desc: "Deploy backend to server and frontend to CDN." }
  ],
  "Blog Platform": [
    { step: 1, title: "Setup Django Project", desc: "Create a Django project and app with models for users, posts, and comments." },
    { step: 2, title: "Create Database Models", desc: "Define models for Blog Post, User, Comments, and Categories." },
    { step: 3, title: "Build Admin Interface", desc: "Use Django admin to manage posts, users, and comments." },
    { step: 4, title: "Create Blog Pages", desc: "Build templates for home, post list, post detail, and about pages." },
    { step: 5, title: "Add User Authentication", desc: "Implement user registration, login, and profile management." },
    { step: 6, title: "Implement Comments System", desc: "Allow users to comment on posts with nested reply functionality." },
    { step: 7, title: "Deploy & Optimize", desc: "Deploy using Gunicorn/uWSGI and configure static/media files." }
  ],
  "API Development": [
    { step: 1, title: "Setup FastAPI Project", desc: "Create FastAPI app with necessary dependencies for API development." },
    { step: 2, title: "Create Database Models", desc: "Design SQLAlchemy models for users, posts, likes, and follows." },
    { step: 3, title: "Build User Endpoints", desc: "Create endpoints for registration, login, profile, and user management." },
    { step: 4, title: "Build Post Endpoints", desc: "Create endpoints for creating, reading, updating, and deleting posts." },
    { step: 5, title: "Add Interaction Features", desc: "Implement like, unlike, and follow functionality." },
    { step: 6, title: "Add Authentication", desc: "Implement JWT-based token authentication and authorization." },
    { step: 7, title: "Deploy & Test", desc: "Write tests using pytest and deploy using Uvicorn/Docker." }
  ],
  "Data Analysis Dashboard": [
    { step: 1, title: "Setup Project", desc: "Initialize Python project with Pandas, NumPy, and Streamlit/Plotly." },
    { step: 2, title: "Load & Prepare Data", desc: "Load datasets using Pandas and perform data cleaning and preprocessing." },
    { step: 3, title: "Create Visualizations", desc: "Build charts using Plotly for trends, distributions, and comparisons." },
    { step: 4, title: "Add Filters", desc: "Implement interactive filters for date range, categories, and metrics." },
    { step: 5, title: "Add Analytics", desc: "Calculate statistics like mean, median, correlation, and trends." },
    { step: 6, title: "Build Dashboard Layout", desc: "Arrange charts and metrics in a clean, organized dashboard." },
    { step: 7, title: "Deploy Dashboard", desc: "Deploy using Streamlit Cloud or Heroku for public access." }
  ],
  "Social Media App": [
    { step: 1, title: "Setup MERN Stack", desc: "Initialize React frontend and Node.js/Express backend with MongoDB." },
    { step: 2, title: "Create User System", desc: "Build user registration, login, and profile management features." },
    { step: 3, title: "Build Post Feature", desc: "Create functionality to post content, edit, and delete posts." },
    { step: 4, title: "Add Likes & Comments", desc: "Implement like and comment features with real-time updates." },
    { step: 5, title: "Build Follow System", desc: "Create follow/unfollow functionality and user recommendations." },
    { step: 6, title: "Add Real-time Updates", desc: "Use Socket.io for real-time notifications and live updates." },
    { step: 7, title: "Deploy to Production", desc: "Deploy frontend to Vercel and backend to Heroku/AWS." }
  ],
  "Real-time Notification System": [
    { step: 1, title: "Setup Backend", desc: "Create Express server with Socket.io for real-time communication." },
    { step: 2, title: "Create Database", desc: "Design MongoDB collections for users, notifications, and events." },
    { step: 3, title: "Build Notification Logic", desc: "Create functions to trigger notifications on specific events." },
    { step: 4, title: "Implement WebSocket", desc: "Setup Socket.io events for sending and receiving notifications." },
    { step: 5, title: "Create Frontend UI", desc: "Build React components for notification display and management." },
    { step: 6, title: "Add Persistence", desc: "Store notifications in database and load unread notifications." },
    { step: 7, title: "Deploy System", desc: "Deploy and configure scaling for handling multiple connections." }
  ],
  "Project Management Tool": [
    { step: 1, title: "Setup MERN Stack", desc: "Initialize full-stack MERN project with authentication setup." },
    { step: 2, title: "Create Project Schema", desc: "Design MongoDB schema for projects, tasks, users, and teams." },
    { step: 3, title: "Build Project Management APIs", desc: "Create endpoints for creating projects, assigning tasks, and team management." },
    { step: 4, title: "Build React UI", desc: "Create components for project list, board view, and task details." },
    { step: 5, title: "Add Collaboration Features", desc: "Implement task assignment, comments, and real-time collaboration." },
    { step: 6, title: "Add Notifications", desc: "Send notifications for task assignments and project updates." },
    { step: 7, title: "Deploy & Scale", desc: "Deploy full stack and configure for multiple concurrent users." }
  ]
};

// Cheatsheet and Basics Data
const cheatsheetData = {
  java: {
    title: "Java Cheatsheet & Basics",
    basics: [
      { title: "What is Java?", content: "Object-oriented programming language, platform-independent, runs on JVM" },
      { title: "Installation", content: "Download JDK from oracle.com, set JAVA_HOME environment variable" },
      { title: "First Program", content: "public class Hello { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }" },
      { title: "Data Types", content: "int, double, boolean, String, char, byte, short, long, float" },
      { title: "Variables", content: "dataType variableName = value; Example: int age = 25;" },
      { title: "String Operations", content: "String s = \"Java\"; s.length(); s.charAt(0); s.substring(0,2);" }
    ],
    cheatsheet: `Variables and Data Types:\nint age = 25;\ndouble salary = 50000.50;\nString name = "John";\n\nArrays:\nint[] numbers = {1, 2, 3};\n\nLoops:\nfor(int i = 0; i < 5; i++) { }\nwhile(condition) { }\n\nMethods:\npublic static void printName(String name) { }\npublic static int add(int a, int b) { return a + b; }\n\nClasses:\npublic class Person {\n  private String name;\n  public Person(String name) { this.name = name; }\n}`
  },
  python: {
    title: "Python Cheatsheet & Basics",
    basics: [
      { title: "What is Python?", content: "High-level, interpreted language, known for simplicity and readability" },
      { title: "Installation", content: "Download from python.org, verify with: python --version" },
      { title: "First Program", content: "print('Hello, World!')" },
      { title: "Variables", content: "No type declaration needed. x = 10; name = 'John'; is_active = True" },
      { title: "Data Types", content: "int, float, str, list, tuple, dict, set, bool" },
      { title: "String Operations", content: "name = 'Python'; len(name); name.upper(); name[0:3]" }
    ],
    cheatsheet: `Variables and Data Types:\nage = 25\nsalary = 50000.50\nname = "John"\n\nLists and Dictionaries:\nnumbers = [1, 2, 3, 4, 5]\nperson = {"name": "John", "age": 25}\n\nLoops:\nfor i in range(5):\n    print(i)\nwhile condition:\n    pass\n\nFunctions:\ndef greet(name):\n    return f"Hello, {name}!"\n\nList Comprehension:\nsquares = [x**2 for x in range(10)]\n\nException Handling:\ntry:\n    pass\nexcept Exception as e:\n    pass`
  },
  javascript: {
    title: "JavaScript Cheatsheet & Basics",
    basics: [
      { title: "What is JavaScript?", content: "Lightweight, interpreted language for web browsers and Node.js" },
      { title: "Where to Write", content: "<script> tag in HTML or separate .js file" },
      { title: "First Program", content: "console.log('Hello, World!'); or alert('Hello!');" },
      { title: "Variables", content: "var x = 10; let y = 20; const z = 30;" },
      { title: "Data Types", content: "number, string, boolean, null, undefined, object, symbol" },
      { title: "String Operations", content: "let str = 'JS'; str.length; str.toUpperCase(); str.slice(0,1);" }
    ],
    cheatsheet: `Variables:\nvar x = 10;        // function scoped\nlet y = 20;        // block scoped\nconst z = 30;      // constant\n\nArrays:\nlet arr = [1, 2, 3, 4, 5];\narr.push(6);\narr.map(x => x * 2);\narr.filter(x => x > 2);\n\nObjects:\nlet person = {\n  name: "John",\n  age: 25,\n  greet() { return "Hi"; }\n};\n\nFunctions:\nfunction add(a, b) { return a + b; }\nconst multiply = (a, b) => a * b;\n\nLoops:\nfor(let i = 0; i < 5; i++) { }\narr.forEach(item => { });\n\nDOM:\ndocument.getElementById("id");\nelement.addEventListener("click", () => { });`
  }
};

// Roadmap Data
const roadmapData = {
  javaFullStack: {
    title: "Java Full Stack Developer Roadmap",
    steps: [
      {
        phase: "Phase 1: Java Fundamentals",
        duration: "2-3 weeks",
        topics: [
          "Variables, data types, and operators",
          "Control structures (if, loops, switch)",
          "Arrays and collections (ArrayList, HashMap)",
          "Object-oriented concepts (classes, objects, inheritance)",
          "Exception handling and file I/O"
        ]
      },
      {
        phase: "Phase 2: Advanced Java",
        duration: "3-4 weeks",
        topics: [
          "String manipulation and regular expressions",
          "Multithreading and concurrency",
          "Generics and type safety",
          "Stream API and functional programming",
          "Lambda expressions and method references"
        ]
      },
      {
        phase: "Phase 3: SQL & Databases",
        duration: "2-3 weeks",
        topics: [
          "SQL basics (SELECT, INSERT, UPDATE, DELETE)",
          "Database design and normalization",
          "Joins and complex queries",
          "Indexes and optimization",
          "PostgreSQL/MySQL setup and administration"
        ]
      },
      {
        phase: "Phase 4: Spring Framework",
        duration: "3-4 weeks",
        topics: [
          "Spring Boot basics and project setup",
          "Dependency injection and bean management",
          "Spring MVC and request handling",
          "Spring Data JPA and ORM",
          "Configuration and properties management"
        ]
      },
      {
        phase: "Phase 5: REST APIs & Web Services",
        duration: "2-3 weeks",
        topics: [
          "RESTful API design principles",
          "Request/response handling",
          "HTTP status codes and headers",
          "JSON serialization/deserialization",
          "API documentation with Swagger/OpenAPI"
        ]
      },
      {
        phase: "Phase 6: Authentication & Security",
        duration: "2-3 weeks",
        topics: [
          "JWT (JSON Web Token) authentication",
          "Spring Security setup",
          "Password hashing and encryption",
          "Authorization and role-based access",
          "CORS and HTTPS configuration"
        ]
      },
      {
        phase: "Phase 7: HTML & CSS Basics",
        duration: "1-2 weeks",
        topics: [
          "HTML5 semantic elements",
          "CSS3 flexbox and grid",
          "Responsive design and media queries",
          "CSS animations and transitions",
          "Accessibility standards (a11y)"
        ]
      },
      {
        phase: "Phase 8: JavaScript Fundamentals",
        duration: "2-3 weeks",
        topics: [
          "Variables and data types",
          "Functions, closures, and scope",
          "DOM manipulation",
          "Event handling",
          "Async/await and Promises"
        ]
      },
      {
        phase: "Phase 9: React.js",
        duration: "3-4 weeks",
        topics: [
          "React components and JSX",
          "State and props",
          "React hooks (useState, useEffect)",
          "Component lifecycle",
          "Form handling and validation"
        ]
      },
      {
        phase: "Phase 10: Advanced React",
        duration: "2-3 weeks",
        topics: [
          "Context API and state management",
          "React Router for navigation",
          "Performance optimization",
          "Custom hooks",
          "Testing with Jest and React Testing Library"
        ]
      },
      {
        phase: "Phase 11: Git & Version Control",
        duration: "1 week",
        topics: [
          "Git basics and commands",
          "Branching and merging strategies",
          "GitHub workflow and pull requests",
          "Commit best practices",
          "Resolving merge conflicts"
        ]
      },
      {
        phase: "Phase 12: Deployment & DevOps",
        duration: "2-3 weeks",
        topics: [
          "Docker containerization",
          "Building and pushing Docker images",
          "Cloud deployment (AWS, Heroku, Railway)",
          "CI/CD pipelines with GitHub Actions",
          "Monitoring and logging"
        ]
      },
      {
        phase: "Phase 13: Full Stack Project",
        duration: "4-6 weeks",
        topics: [
          "Design database schema",
          "Build complete REST API",
          "Create responsive React frontend",
          "Implement authentication",
          "Deploy to production and monitor"
        ]
      }
    ]
  },
  mernStack: {
    title: "MERN Stack Developer Roadmap",
    steps: [
      {
        phase: "Phase 1: JavaScript Fundamentals",
        duration: "2-3 weeks",
        topics: [
          "Variables (var, let, const)",
          "Data types and type coercion",
          "Functions, arrow functions, and closures",
          "Scope and hoisting",
          "this keyword and binding"
        ]
      },
      {
        phase: "Phase 2: ES6+ Features",
        duration: "2-3 weeks",
        topics: [
          "Destructuring (arrays and objects)",
          "Spread and rest operators",
          "Template literals",
          "Classes and inheritance",
          "Async/await and Promises"
        ]
      },
      {
        phase: "Phase 3: HTML5 & CSS3",
        duration: "2-3 weeks",
        topics: [
          "Semantic HTML5",
          "CSS flexbox and grid layouts",
          "Responsive design",
          "CSS animations and transitions",
          "CSS preprocessors (SASS/LESS)"
        ]
      },
      {
        phase: "Phase 4: React.js Basics",
        duration: "3-4 weeks",
        topics: [
          "React components and JSX",
          "State and props",
          "React hooks (useState, useEffect, useContext)",
          "Component lifecycle",
          "Event handling and forms"
        ]
      },
      {
        phase: "Phase 5: Advanced React",
        duration: "2-3 weeks",
        topics: [
          "React Router for navigation",
          "State management (Context API, Redux)",
          "Performance optimization",
          "Custom hooks development",
          "Code splitting and lazy loading"
        ]
      },
      {
        phase: "Phase 6: Node.js & Express",
        duration: "3-4 weeks",
        topics: [
          "Node.js runtime and npm",
          "Express server setup",
          "Routing and middleware",
          "Request/response handling",
          "Template engines (optional)"
        ]
      },
      {
        phase: "Phase 7: REST API Development",
        duration: "2-3 weeks",
        topics: [
          "RESTful API design",
          "HTTP methods and status codes",
          "JSON request/response handling",
          "Query parameters and URL parameters",
          "Error handling and validation"
        ]
      },
      {
        phase: "Phase 8: MongoDB & Databases",
        duration: "2-3 weeks",
        topics: [
          "MongoDB basics and setup",
          "CRUD operations",
          "MongoDB Atlas cloud setup",
          "Mongoose ODM library",
          "Database schema design"
        ]
      },
      {
        phase: "Phase 9: Authentication & Authorization",
        duration: "2-3 weeks",
        topics: [
          "User registration and login",
          "Password hashing with bcrypt",
          "JWT token generation",
          "Token verification and refresh",
          "Authorization middleware"
        ]
      },
      {
        phase: "Phase 10: Real-time Features",
        duration: "2-3 weeks",
        topics: [
          "Socket.io for real-time communication",
          "WebSocket setup and configuration",
          "Real-time notifications",
          "Chat applications",
          "Live data updates"
        ]
      },
      {
        phase: "Phase 11: Testing & Quality",
        duration: "2-3 weeks",
        topics: [
          "Unit testing with Jest",
          "React Testing Library",
          "API testing with Postman/Insomnia",
          "Integration testing",
          "Test coverage and CI/CD"
        ]
      },
      {
        phase: "Phase 12: Deployment & DevOps",
        duration: "2-3 weeks",
        topics: [
          "Environment variables and configuration",
          "Docker containerization",
          "Deployment to Vercel (frontend)",
          "Deployment to Heroku/Railway (backend)",
          "Monitoring and error tracking"
        ]
      },
      {
        phase: "Phase 13: Full Stack Project",
        duration: "4-6 weeks",
        topics: [
          "Plan and design application",
          "Build complete backend API",
          "Create interactive React frontend",
          "Implement authentication and real-time features",
          "Deploy and monitor in production"
        ]
      }
    ]
  }
};

// Developer Specialization Data
const developerPaths = {
  frontend: {
    title: "Frontend Developer",
    techs: [
      { name: "Markup", tech: "HTML5" },
      { name: "Styling", tech: "CSS3 / Tailwind / SASS" },
      { name: "JavaScript", tech: "ES6+ / TypeScript" },
      { name: "Frameworks", tech: "React / Vue / Angular" },
      { name: "State Management", tech: "Redux / Zustand" },
      { name: "Build Tools", tech: "Webpack / Vite" }
    ],
    projects: [
      { title: "Portfolio Website", level: "beginner", desc: "Create a personal portfolio with smooth scrolling, animations, and responsive design" },
      { title: "E-Commerce UI", level: "intermediate", desc: "Build a modern shopping interface with product filters, cart, and checkout flow" },
      { title: "Real-time Dashboard", level: "advanced", desc: "Create an interactive dashboard with charts, real-time data updates, and user authentication" }
    ]
  },
  java: {
    title: "Java Full Stack Developer",
    techs: [
      { name: "Backend", tech: "Spring Boot" },
      { name: "Database", tech: "PostgreSQL / MySQL" },
      { name: "Frontend", tech: "React / Vue" },
      { name: "Version Control", tech: "Git" },
      { name: "API", tech: "RESTful APIs" },
      { name: "Testing", tech: "JUnit / Mockito" }
    ],
    projects: [
      { title: "E-Commerce Backend", level: "intermediate", desc: "Build REST APIs with Spring Boot for product catalog, orders, and payments" },
      { title: "Task Management System", level: "intermediate", desc: "Full-stack app with Spring Boot backend and React frontend" },
      { title: "Real-time Chat Application", level: "advanced", desc: "WebSocket-based chat system with user authentication and database" }
    ]
  },
  python: {
    title: "Python Developer",
    techs: [
      { name: "Backend", tech: "Django / FastAPI" },
      { name: "Database", tech: "PostgreSQL / MongoDB" },
      { name: "Frontend", tech: "React / Vue" },
      { name: "Data Science", tech: "Pandas / NumPy" },
      { name: "API", tech: "RESTful APIs" },
      { name: "Testing", tech: "pytest" }
    ],
    projects: [
      { title: "Blog Platform", level: "beginner", desc: "Create a blogging platform with Django, user authentication, and comments" },
      { title: "API Development", level: "intermediate", desc: "Build FastAPI backend for social media app with database integration" },
      { title: "Data Analysis Dashboard", level: "advanced", desc: "Process and visualize large datasets with Python and interactive dashboards" }
    ]
  },
  mern: {
    title: "MERN Stack Developer",
    techs: [
      { name: "Frontend", tech: "React" },
      { name: "Backend", tech: "Node.js + Express" },
      { name: "Database", tech: "MongoDB" },
      { name: "State Management", tech: "Redux / Context" },
      { name: "Real-time", tech: "Socket.io" },
      { name: "Deployment", tech: "Vercel / Heroku" }
    ],
    projects: [
      { title: "Social Media App", level: "intermediate", desc: "Build a social platform with user profiles, posts, likes, and comments" },
      { title: "Real-time Notification System", level: "intermediate", desc: "Create notifications using Socket.io and MongoDB" },
      { title: "Project Management Tool", level: "advanced", desc: "Full-featured app with task creation, assignments, and real-time collaboration" }
    ]
  }
};

function selectPrimaryPath(pathType, element) {
  // Update active state for primary selector
  const primaryCards = document.querySelectorAll("#primarySelector .dev-card");
  primaryCards.forEach(card => card.classList.remove("active"));
  element.classList.add("active");

  if (pathType === "frontend") {
    // Hide backend subselector and show frontend info
    document.getElementById("backendSubselector").style.display = "none";
    displayDevInfo("frontend");
  } else if (pathType === "backend") {
    // Show backend subselector
    document.getElementById("backendSubselector").style.display = "grid";
    document.getElementById("selectedDevInfo").style.display = "none";
  }
}

function selectDeveloper(path, element) {
  // Update active state for backend subselector
  const backendCards = document.querySelectorAll("#backendSubselector .dev-card");
  backendCards.forEach(card => card.classList.remove("active"));
  element.classList.add("active");

  displayDevInfo(path);
}

function displayDevInfo(path) {
  // Get developer data
  const devData = developerPaths[path];
  
  // Display title
  document.querySelector(".dev-path-title").textContent = devData.title;

  // Display tech stack
  const techStack = document.getElementById("techStack");
  techStack.innerHTML = devData.techs.map(tech => `
    <div class="tech-item">
      <strong>${tech.name}</strong>
      <p>${tech.tech}</p>
    </div>
  `).join("");

  // Display related projects
  const projectsContainer = document.getElementById("relatedProjects");
  projectsContainer.innerHTML = devData.projects.map(project => `
    <div class="project-card" data-level="${project.level}">
      <span class="tag">${project.level.charAt(0).toUpperCase() + project.level.slice(1)}</span>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <button onclick="openModal('${project.title}', '${project.desc}')">View Details</button>
    </div>
  `).join("");

  // Show the info container
  document.getElementById("selectedDevInfo").style.display = "block";

  // Scroll to the info
  setTimeout(() => {
    document.getElementById("selectedDevInfo").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}

function goBack() {
  // Reset all selections
  const cards = document.querySelectorAll(".dev-card");
  cards.forEach(card => card.classList.remove("active"));
  
  // Hide backend subselector and info
  document.getElementById("backendSubselector").style.display = "none";
  document.getElementById("selectedDevInfo").style.display = "none";
  
  // Show primary selector
  document.getElementById("primarySelector").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function filterProjects(level, button) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  cards.forEach(card => {
    if (level === "all" || card.dataset.level === level) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function openModal(title, text) {
  document.getElementById("modalTitle").textContent = title;
  
  // Get steps for this project
  const steps = projectSteps[title] || [];
  
  // Create steps HTML
  let stepsHTML = `<div class="project-description">${text}</div>`;
  
  if (steps.length > 0) {
    stepsHTML += '<div class="project-steps"><h4>Step-by-Step Guide:</h4>';
    steps.forEach(step => {
      stepsHTML += `
        <div class="step-item">
          <div class="step-number">${step.step}</div>
          <div class="step-content">
            <h5>${step.title}</h5>
            <p>${step.desc}</p>
          </div>
        </div>
      `;
    });
    stepsHTML += '</div>';
  }
  
  document.getElementById("modalText").innerHTML = stepsHTML;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("projectModal");

  if (event.target === modal) {
    closeModal();
  }
};

function openCheatsheet(language) {
  const data = cheatsheetData[language];
  document.getElementById("modalTitle").textContent = data.title;
  
  let content = `<div class="cheatsheet-basics"><h4 style="grid-column: 1/-1; color: #38bdf8; margin-bottom: 15px;">Quick Basics:</h4>`;
  
  data.basics.forEach(basic => {
    content += `
      <div class="basic-item">
        <strong>${basic.title}</strong>
        <p>${basic.content}</p>
      </div>
    `;
  });
  
  content += `</div>`;
  
  content += `
    <div class="cheatsheet-section">
      <h4>Cheatsheet Reference:</h4>
      <div class="code-block"><code>${data.cheatsheet}</code></div>
    </div>
  `;
  
  document.getElementById("modalText").innerHTML = content;
  document.getElementById("projectModal").style.display = "flex";
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const toggle = element.querySelector(".faq-toggle");
  const isOpen = answer.style.display === "block";
  answer.style.display = isOpen ? "none" : "block";
  toggle.textContent = isOpen ? "+" : "−";
}

function displayRoadmap(roadmapType, element) {
  const data = roadmapData[roadmapType];
  
  // Update active card
  const cards = document.querySelectorAll(".roadmap-card");
  cards.forEach(card => card.classList.remove("active"));
  element.classList.add("active");
  
  // Display roadmap title
  document.getElementById("roadmapTitle").textContent = data.title;
  
  // Build roadmap steps HTML
  let stepsHTML = "";
  data.steps.forEach((step, index) => {
    stepsHTML += `
      <div class="roadmap-phase">
        <div class="phase-header">
          <div class="phase-number">${index + 1}</div>
          <div class="phase-info">
            <h4>${step.phase}</h4>
            <p class="phase-duration">Duration: ${step.duration}</p>
          </div>
        </div>
        <div class="phase-topics">
          <ul>
            ${step.topics.map(topic => `<li>${topic}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  });
  
  document.getElementById("roadmapSteps").innerHTML = stepsHTML;
  document.getElementById("roadmapDisplay").style.display = "block";
  
  // Scroll to roadmap
  setTimeout(() => {
    document.getElementById("roadmapDisplay").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}

function closeRoadmap() {
  document.getElementById("roadmapDisplay").style.display = "none";
  const cards = document.querySelectorAll(".roadmap-card");
  cards.forEach(card => card.classList.remove("active"));
}


}