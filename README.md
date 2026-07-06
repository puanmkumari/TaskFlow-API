# 🚀 TaskFlow API

A RESTful backend API built with **Node.js** and **Express.js** for managing tasks. It provides CRUD operations with proper HTTP status codes, middleware, and request validation.

## ✨ Features

* Create, Read, Update, Delete (CRUD)
* RESTful API Endpoints
* Express Middleware (CORS, Helmet, Morgan)
* JSON Request Validation
* Error Handling
* In-Memory Data Store
* Postman Tested

## 🛠️ Technologies

* Node.js
* Express.js
* JavaScript (ES6)
* CORS
* Helmet
* Morgan
* Postman

## 📂 Project Structure

```text
taskflow-api/
├── server.js
├── package.json
├── .env
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── utils/
└── tests/
```

## 🚀 Run the Project

```bash
npm install
npm start
```

Server runs at:

```text
http://localhost:5000
```

## 📌 API Endpoints

* GET `/api/tasks`
* GET `/api/tasks/:id`
* POST `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`

## 👨‍💻 Author

**Punam Kumari**
