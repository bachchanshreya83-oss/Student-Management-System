## Student Management System
A full-stack web app to manage student records with role-based login (Admin / Student), a dashboard, and complete CRUD functionality — add, edit, delete, search, and print/download student data.

## Features
* Role-based login (Admin / Student) 
* Admin dashboard
* Student dashboard 
* Add, edit,delete,update student records(CRUD Operation)
* Auto-calculated Result (Pass/Fail) based on marks (≥ 33 = Pass)
* Live search by student name or roll number
* Print or download the student list
* Student count summary(total students)
* If wrong login then an invalid-login page will appear
  

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* mongosh

### Data Format

* JSON

### Tools

* Git
* GitHub
* VS Code


## 📂 Project Structure

```text
Student Management System
│
├── Backend
│   ├── node_modules
│   ├── dbconnect.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── Frontend
│   ├── dashboard.css
│   ├── dashboard.html
│   ├── dashboard.js
│   ├── index.html
│   ├── invalid.css
│   ├── invalid.html
│   ├── login.css
│   ├── login.html
│   ├── login.js
│   ├── script.js
│   ├── student.css
│   ├── student.html
│   ├── student.js
│   └── style.css
│
└── .env

