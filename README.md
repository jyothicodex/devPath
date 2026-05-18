# devPath
# DevPath - Developer Roadmap Website

DevPath is a clean and beginner-friendly developer roadmap website built using **HTML, CSS, and JavaScript**.  
It helps learners explore different developer paths, roadmaps, project ideas, and programming cheatsheets in one place.

## 🚀 Features

- Clean and responsive dark theme UI
- Developer path selection
- Frontend and backend learning tracks
- Java Full Stack and MERN Stack roadmaps
- Project ideas based on skill level
- Beginner, intermediate, and advanced project filters
- Project details modal with step-by-step guide
- Java, Python, and JavaScript cheatsheets
- FAQ section
- Smooth scrolling navigation

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript

## 📁 Project Structure

```text
DevPath/
│
├── index.html
├── style.css
├── script.js
└── README.md
index(1).html
File
script(2).js
JavaScript

I received your uploaded DevPath files:

index.html
File
script.js
JavaScript

Your HTML already links to style.css and script.js in the page head/body, but I only see index(1).html and script(2).js uploaded. The CSS file is missing, so the website will work functionally but won’t have the clean UI styling unless you add style.css. Your HTML references the stylesheet here: and references the JavaScript file here:

Also, your uploaded JS file name is script(2).js, but your HTML expects script.js. So either rename script(2).js to script.js, or change this line in HTML:

<script src="script.js"></script>

to:

<script src="script(2).js"></script>

Your JavaScript already includes useful features like project filtering, roadmap display, cheatsheet modal, FAQ toggle, and developer path selection. For example, filterProjects() filters cards by level, and displayRoadmap() dynamically shows roadmap phases.

If you want, I can now create a complete clean modern style.css for this DevPath website.

style(3).css
File

Now you uploaded the CSS file too. Your project has all 3 main files:

index.html
File
script.js
JavaScript
style.css
File

Important fix: your uploaded file names are currently:

index(1).html
script(2).js
style(3).css

But inside your HTML, you are linking:

<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

So for the website to work correctly, rename your files like this:

index(1).html  →  index.html
script(2).js   →  script.js
style(3).css   →  style.css

Your CSS already gives the site a clean dark theme with sticky header, hero grid, cards, modal, roadmap, FAQ, and responsive layout. For example, the global reset and dark body theme are defined at the top of your CSS file. The header is also styled as sticky with a dark background and bottom border.

One issue: your CSS has footer styles like .footer-container, .footer-section, and .social-links, but your HTML does not currently have a footer section.

You can add this before </body> and before the script tag:

<footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h3>DevPath</h3>
      <p>Learn development step by step with roadmaps, projects, and cheatsheets.</p>
    </div>

    <div class="footer-section">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#developers">Developers</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#projects">Projects</a>
    </div>

    <div class="footer-section">
      <h3>Connect</h3>
      <div class="social-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  </div>
</footer>

And add this CSS because your footer classes are partly missing:

.footer {
  background: #020617;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 40px;
}

.footer-container {
  padding: 40px 8%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
}

.footer-section h3 {
  color: #38bdf8;
  margin-bottom: 15px;
}

.footer-section p,
.footer-section a {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.8;
  text-decoration: none;
  display: block;
}

.footer-section a:hover {
  color: #38bdf8;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

Also, your website is already good enough for a college/project submission. To make it look more complete, add:

Footer
how to push to github

To push your DevPath project to GitHub, follow these steps.

1. Rename your files correctly

In your project folder, keep files like this:

DevPath/
│
├── index.html
├── style.css
└── script.js

Because your HTML uses:

<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>

So rename:

index(1).html  → index.html
style(3).css   → style.css
script(2).js   → script.js
2. Create a new repository on GitHub
Go to GitHub
Click New repository
Repository name: DevPath
Keep it Public
Do not add README for now
Click Create repository
3. Open your project folder in VS Code

Open the folder where your 3 files are saved.

Then open terminal in VS Code:

Terminal → New Terminal
4. Run these commands
git init
git add .
git commit -m "Initial commit - DevPath website"
5. Connect your GitHub repository

GitHub will show a repo URL like this:

https://github.com/your-username/DevPath.git

Now run:

git branch -M main
git remote add origin https://github.com/your-username/DevPath.git
git push -u origin main

Replace your-username with your GitHub username.

6. If Git asks login

When pushing, GitHub may ask you to sign in.

If password does not work, use a Personal Access Token instead of password.

Simple way: install GitHub Desktop if terminal login feels difficult.

7. To update project later

After making changes:

git add .
git commit -m "Updated DevPath website"
git push
8. To host it live using GitHub Pages

After pushing:

Open your GitHub repo
Go to Settings
Go to Pages
Under Branch, select main
Select folder /root
Click Save

Your website link will look like:

https://your-username.github.io/DevPath/
Full commands together
git init
git add .
git commit -m "Initial commit - DevPath website"
git branch -M main
git remote add origin https://github.com/your-username/DevPath.git
git push -u origin main

Use this only after creating the empty GitHub repository.

give clean readme

Here is a clean README.md for your DevPath project:

# DevPath - Developer Roadmap Website

DevPath is a clean and beginner-friendly developer roadmap website built using **HTML, CSS, and JavaScript**.  
It helps learners explore different developer paths, roadmaps, project ideas, and programming cheatsheets in one place.

## 🚀 Features

- Clean and responsive dark theme UI
- Developer path selection
- Frontend and backend learning tracks
- Java Full Stack and MERN Stack roadmaps
- Project ideas based on skill level
- Beginner, intermediate, and advanced project filters
- Project details modal with step-by-step guide
- Java, Python, and JavaScript cheatsheets
- FAQ section
- Smooth scrolling navigation

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript

## 📁 Project Structure

```text
DevPath/
│
├── index.html
├── style.css
├── script.js
└── README.md
📸 Screenshots
"C:\Users\Pooja\OneDrive\Pictures\Screenshots\Screenshot 2026-05-18 204125.png"

