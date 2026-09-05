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
* If wrong login then an invalid-login page will appear(with a teasing face)
  

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
```

## How to Run Locally

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd Student-Management-System
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

The project uses MongoDB locally:

```text
mongodb://localhost:27017
```

### 5. Configure Database

Make sure the database and collection names match the configuration in the project.

Example:

```text
Database: smsdb
Collection: students
```

### 6. Start the Server

```bash
server.js(it will show server connected)
```

If you are using nodemon:

```bash
npm run dev
```

### 7. Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

The Student Management System should now be running locally.

