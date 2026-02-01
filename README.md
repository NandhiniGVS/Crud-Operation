# CRUD Operation – Full Stack Application

This is a **Full Stack CRUD (Create, Read, Update, Delete) application** developed to demonstrate end-to-end web application development using **Java backend** and **modern frontend technologies**.
The project covers UI interaction, backend business logic, database connectivity using JDBC, and data persistence with MySQL.

---

## 🚀 Features

- Create new records  
- View existing records  
- Update records  
- Delete records  
- REST API based communication  
- Dynamic UI updates  
- Database connectivity using JDBC  

---

## 🛠️ Tech Stack

### 🔹 Frontend (UI)
- HTML  
- CSS  
- JavaScript  
- React.js  

### 🔹 Backend
- Java  
- JDBC  
- REST APIs  

### 🔹 Database
- MySQL  

---

## 🗂️ Project Structure

Crud-Operation/
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── backend/
│ ├── controller/
│ ├── service/
│ ├── dao/
│ ├── model/
│ ├── db/
│ └── MainApplication.java
│
├── database/
│ └── schema.sql
│
└── README.md


*(Folder names may vary slightly based on implementation)*

---

## 🔄 Application Flow

1. User performs CRUD operations from UI (React.js)  
2. Frontend sends request to Java backend via REST APIs  
3. Backend processes request using JDBC  
4. Data is stored / retrieved from MySQL database  
5. Response sent back to UI and updated dynamically  

---

## ▶️ How to Run the Project

### 🔹 Backend Setup
1. Import backend project into IDE (Eclipse / IntelliJ)
2. Configure MySQL database credentials in JDBC config
3. Create database and tables using provided SQL script
4. Run the Java application

---

### 🔹 Frontend Setup
1. Navigate to frontend folder
   ```bash
   cd frontend
npm install
npm start

### 🔹 Database Configuration

Database: MySQL
Tables: Created using SQL script
Connectivity: JDBC
Make sure MySQL service is running before starting backend.

🎯 Purpose of This Project

- To understand full stack application architecture
- To implement CRUD operations using Java & JDBC
- To integrate React frontend with Java backend
- To gain hands-on experience with MySQL database

🎯 Purpose of This Project

- To understand full stack application architecture
- To implement CRUD operations using Java & JDBC
- To integrate React frontend with Java backend
- To gain hands-on experience with MySQL database
